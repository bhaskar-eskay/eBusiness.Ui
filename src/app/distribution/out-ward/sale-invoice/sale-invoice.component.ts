import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { OutwardService } from '../outward.service';
import { addItem, PurchasePrefix, SalePrefix, SaveCloseText, SaveContinueText, SaveText, UpdateCloseText, UpdateContinueText, UpdateText } from 'src/app/shared/app-constants';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { Router } from '@angular/router';
import { MasterService } from '../../Master/master.service';
import { Observable, of, ReplaySubject, Subject, Subscription } from 'rxjs';
import * as dropdowns from '../../../_files/dropdowns.json';
import { DialogService } from 'src/app/shared/components/dialog/dialog.service';
import { DialogButtonTemplate, DialogClass, DialogData } from 'src/app/shared/components/dialog/dialog.component';
import { InwardService } from '../../in-ward/in-ward.service';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import { DatePipe } from '@angular/common';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material';
import { CompanyMaster } from 'src/app/shared/models/master-models';
import { OutWardHttpService } from 'src/app/shared/http-services/out-ward/out-ward-http.service';
import { RouteService } from 'src/app/shared/services/route.service';
import { MatDialog } from '@angular/material';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-sale-invoice',
  templateUrl: './sale-invoice.component.html',
  styleUrls: ['./sale-invoice.component.scss', '../out-ward.component.scss']
})
export class SaleInvoiceComponent implements OnInit, OnDestroy {
  // FormGroups
  saleInvoiceHeadFormGroup: FormGroup;
  saleInvoiceDetailFormGroup: FormGroup;
  saleInvoiceFinalSaveFormGroup: FormGroup;

  //DropDowns
  public modeDropDown: { name: string, code: any }[] = dropdowns.mode;
  public discountDropDown: { name: string, code: any }[] = dropdowns.discount;

  //Template References
  @ViewChild('saleEntryDetailTemplate', { static: true }) saleEntryDetailTemplate;
  @ViewChild('productName', { static: true }) productName;
  @ViewChild('saleEntryDetailButtonTemplate', { static: true }) saleEntryDetailButtonTemplate;
  @ViewChild('deleteSaleDetailTemplate', { static: false }) deleteSalesHeadTemplate;
  @ViewChild('CompanyTab', { static: false }) CompanyTab: MatSelect;
  @ViewChild('productHistoryTemplate', { static: true }) productHistoryTemplate;
  public filteredCompanyMulti: ReplaySubject<any> = new ReplaySubject<any>(1);

  discountType1: AutoCompleteDefinition = {
    label: 'Discount Type 1',
    isRequired: true,
    dataSourceFn: () => of([...dropdowns.discountType]),
    isStaticType: true,
    keyString: 'name'
  };

  // Variables
  CompanyTabMultiFilterCtrl = new FormControl('');
  Companydata: CompanyMaster[];
  compGroupName = new FormControl('');
  accName = new FormControl('');
  deliveryTo = new FormControl('');
  dateError: boolean;
  prodData: any;
  batches: any = [];
  tranIndate:any;
  selectedProdid: any = 0;
  firmPreferences: any;
  outwardTaxes: any;
  displayProd: boolean = false;
  purchaseHist: any;
  actions: any;
  invValue: any;
  roundedValue: any;
  minDate: any;
  maxDate: any;
  showAutoCompleteData: boolean = false;
  companyTab(event: KeyboardEvent) {
    if (event.keyCode === 9) {
      const statetab = this.CompanyTab.options;
      const result = statetab.find(x => x.active === true);
      this.saleInvoiceHeadFormGroup.controls.compId.setValue(result.value);
      const data = this.Companydata.find(x => x.compId == result.value)
      if (data) {
        this.compGroupName.setValue(data.compGroupName);
      }

    }
    else if (event.keyCode === 13) {
      const data = this.Companydata.find(x => x.compId == this.saleInvoiceHeadFormGroup.controls.compId.value)
      if (data) {
        this.compGroupName.setValue(data.compGroupName)
      }

      // setTimeout(() => {
      //   this.boxfocus.nativeElement.focus();
      // }, 1000);
    }


  }
  companychange(value) {
    if (value.value) {
      const data = this.Companydata.find(x => x.compId == value.value)
      if (data) {
        this.compGroupName.setValue(data.compGroupName)
      }
    }
  }
  protected filterCompanyMulti() {
    if (!this.Companydata) {
      return;
    }
    // get the search keyword
    let search = this.CompanyTabMultiFilterCtrl.value;
    if (!search) {
      this.filteredCompanyMulti.next(this.Companydata.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredCompanyMulti.next(
      this.Companydata.filter(bank => bank.compName.toLowerCase().indexOf(search) > -1)
    );
  }
  private getAllCompMaster() {
    this.masterService.getAllCompanyMaster().subscribe(data => {
      this.Companydata = data as CompanyMaster[];
      this.filteredCompanyMulti.next(this.Companydata.slice());
    });
  }
  batchByProductId: any;
  outwardHeadId: any;
  outWardDetail: any;
  closingQty: any;
  closingQtyDisc: number;
  editObj = {} as any;
  salesHeadData: any;
  formAlertId: string;

  // buttons
  outwardHeadBtnText: string = SaveText;
  outwardDtlBtnSaveCloseTxt: string = SaveCloseText;
  outwardFinalSaveBtnText: string = SaveText;
  outwardDtlBtnSaveContinueTxt: string = SaveContinueText

  // Subscription for unsubscribing
  private subscriptions: Subscription[] = [];
  outwardPretaxes: any;
  hasIGST: boolean;
  salesInvoiceRowData: any;
  outwardHead: any;
  outwardDetailId: any;
  updateDetailData: any;
  today:any;
  batchProductDetails: Array<any> = [];
  batch$: Observable<any> = of([]);
  isBtnDisable: boolean = false;
  outwardHeadObj: any;
  protected _onDestroy = new Subject<void>();


  constructor(
    private formBuilder: FormBuilder,
    private inwardservice: InwardService,
    private outwardService: OutwardService,
    private router: Router, private masterService: MasterService,
    private dialogService: DialogService,
    private dialog: MatDialog,
    private inwardService: InwardService,
    private datePipe: DatePipe, private service: OutWardHttpService,
    private routeService: RouteService
    , private todayDate:HttpService
  ) {

  }


  ngOnInit() {
    this.firmPreferences = JSON.parse(sessionStorage.getItem('firmPreferences'));
    if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
      this.minDate = this.firmPreferences.finSdate;
      this.maxDate = this.today;//this.firmPreferences.finEdate;
    }
    this.today = this.todayDate.localDate();
    // console.log(this.firmPreferences , 'this.firmPreferences');
    this.getAllCompMaster();
    document.getElementById('deletePopup').style.display = 'none';
    this.saleInvoiceHeadFormGroup = this.buildOutWardEntryHeadFormGroup();
    this.saleInvoiceDetailFormGroup = this.buildOutWardEntryDetailFormGroup();
    this.saleInvoiceFinalSaveFormGroup = this.buildOutWardEntryFinalSaveFormGroup();

    this.subscriptions.push(this.outwardService.updateSaleHead$.subscribe(result => {
      if (result && Object.keys(result.salesHeadRowData).length > 0) {
        this.salesInvoiceRowData = result.salesHeadRowData;
        this.actions = result.action;
        this.outwardHeadBtnText = UpdateText;
        this.outwardFinalSaveBtnText = UpdateText;
        this.outwardHeadId = this.salesInvoiceRowData.outwardHeadId;
        this.getSalesDetailTableList(this.outwardHeadId);
        setTimeout(() => {
          if (this.actions == "delete") {
            this.confirmDelete();
          }
        }, 1500);
      }
    }));

    this.subscriptions.push(this.accName.valueChanges.subscribe(result => {
      if (result && typeof result === 'object') {
        this.bindCustomerDetails(result);
      }
    }));

    this.subscriptions.push(this.deliveryTo.valueChanges.subscribe(result => {
      if (result && typeof result === 'object') {
        this.deliveryTo.setValue(result.accName);
      }
    }));

    this.saleInvoiceDetailFormGroup.get('batch').setValue('');

    this.subscriptions.push(this.saleInvoiceDetailFormGroup.get('batch').valueChanges.subscribe(result => {
      console.log("prodIdData", result, this.saleInvoiceDetailFormGroup.get('batch').dirty);
      if (result && typeof result === 'object') {
        this.bindBatchDetails(result);
      }
    }));

    // this.getbatch$();
    this.CompanyTabMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCompanyMulti();
      });

    this.saleInvoiceDetailFormGroup.get('prodId').valueChanges.subscribe(result => {
      console.log("prodIdData", result);
      if (result && this.saleInvoiceDetailFormGroup.get('prodId').dirty) {
        this.showAutoCompleteData = true;
      }
      if (result && typeof result === 'object') {
        this.selectedProdid = result.prodId;
        this.saleInvoiceDetailFormGroup.get('batch').setValue('');
        this.bindProductDetails(result);
        console.log(this.batches);
      }
    });

    this.saleInvoiceDetailFormGroup.get('expdate').valueChanges.subscribe(date => {
      console.log(/^(0?[1-9]|1[012])[\/\-]\d{4}$/.test(date));
      this.dateError = /^(0?[1-9]|1[012])[\/\-]\d{4}$/.test(date);
      this.saleInvoiceDetailFormGroup.get('expdate').setErrors(null);
      if (!this.dateError) {
        this.saleInvoiceDetailFormGroup.get('expdate').setErrors({ incorrect: true });
      }
    });
    this.getTranlastdate();
  }


  // Head Form Group of controls
  buildOutWardEntryHeadFormGroup() {
    return this.formBuilder.group({
      outwardDate: [this.today],
      accId: [''],
      accGstIn: [{ value: '', disabled: true }],
      accShName: [{ value: '', disabled: true }],
      cityId: [{ value: '', disabled: true }],
      accMobile: [{ value: '', disabled: true }],
      companyMaster: [''],
      deliveryTo: [''],
      mode: [''],
      prodId: [''],
      expdate: [''],
      compId: ['']

    });
  }


  //Custom Accounts Autocomplete 
  customAccountAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Customer Name',
    isRequired: true,
    dataSourceFn: (name) => this.inwardservice.getCustomAccountsByName(name),
    minCount: 2,
    keyString: 'accName'
  }
  customAccountAutoCompleteDefD: AutoCompleteDefinition = {
    label: 'Delivery To',
    isRequired: true,
    dataSourceFn: (name) => this.inwardservice.getCustomAccountsByName(name),
    minCount: 2,
    keyString: 'deliveryTo'
  }
  //Custom Account  Autocomplete Options Table View
  customAccountsOptsTable: OptionsTableDefinition = {
    panelWidth: 800,
    columns: [
      { name: 'Customer Name', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 34, fxFlex1: 34, isKeyColumn: true },
      { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 14, fxFlex1: 14 },
      { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 16, fxFlex1: 16 },
      { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 24, fxFlex1: 24 },
      { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 12, fxFlex1: 12 },
      // { name: 'Delivery To', value: (obj) => obj['delvTo'] ? obj['delvTo'] : '', fxFlex: 50,fxFlex1:50, isKeyColumn: true },
    ]
  };
  customAccountsOptsTableD: OptionsTableDefinition = {
    panelWidth: 300,
    columns: [
      { name: 'Customer Name', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 32, fxFlex1: 32, isKeyColumn: true },
      { name: 'Delivery To', value: (obj) => obj['delvTo'] ? obj['delvTo'] : '', fxFlex: 32, fxFlex1: 32, isKeyColumn: true },
      // { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 50 },
      // { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 50 },
      // { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 50 },
      { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 32, fxFlex1: 32 }
    ]
  };

  // patch the customer details onto the other controls
  bindCustomerDetails(data) {
    console.log(data);

    this.saleInvoiceHeadFormGroup.patchValue({
      accName: data.accName,
      compId: data.compId,
      accShName: data.accShName,
      cityId: data.cityName,
      accMobile: data.accMobile,
      accGstIn: data.accGstIn,
      deliveryTo: data.delvTo,
    });
  }

  // Company  Autocomplete
  companyGroupAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Company',
    isRequired: true,
    isStaticType: true,
    dataSourceFn: () => this.masterService.getAllCompanyMaster(),
    keyString: 'name',
    validators: [Validators.required],
    minCount: 2
  };

  //Company Autocomplete Options Table View 
  companyGroupOptsTable: OptionsTableDefinition = {
    panelWidth: 300,
    columns: [
      { name: 'Company', value: (obj) => obj['name'] ? obj['name'] : '', fxFlex: 50, fxFlex1: 50, isKeyColumn: true },
      { name: 'Company Group', value: (obj) => obj['companyGroups']['name'] ? obj['companyGroups']['name'] : '', fxFlex: 50, fxFlex1: 50 },
    ]
  };

  //mode AutocompleteDef
  modeAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Mode',
    isRequired: true,
    dataSourceFn: () => of([...dropdowns.mode]),
    isStaticType: true,
    keyString: 'name'
  }


  // Save or Update the Sales Head
  onSaveOrUpdateSalesHead(): void {
    const postOutwardObj = this.saleInvoiceHeadFormGroup.value;
    console.log(this.deliveryTo);
    let date = ""
    if (this.outwardHeadBtnText == 'Update') {
      date = postOutwardObj.outwardDate.split("T")
    } else {
      date = postOutwardObj.outwardDate ? postOutwardObj.outwardDate : null
    }
    const payload = {
      "outwardHeadId": this.outwardHeadBtnText == 'Update' ? this.outwardHeadId : 0,
      "outwardDate": this.outwardHeadBtnText == 'Update' ? date[0] : this.datePipe.transform(date, 'yyyy-MM-dd'),
      "tranTypeHeadId": 2,
      "tranTypeName": SalePrefix,
      "outwardHeadNo": this.outwardHead ? this.outwardHead.outwardHeadNo : '',
      "compId": postOutwardObj.compId ? postOutwardObj.compId : 0,
      "invNo": " ",
      "invDate": postOutwardObj.outwardDate ? this.datePipe.transform(postOutwardObj.outwardDate, 'yyyy-MM-dd') : null,
      "accId": this.accName.value.accId,
      "mode": postOutwardObj.mode.code ? postOutwardObj.mode.code == 'Cash' ? 1 : 2 : 1,
      "taxCategoryId": this.accName.value.taxcategoryId,
      "outwardStatus": 0,
      "isEligible": 0,
      "isDeleted": 0,
      "doctorId": 0,
      "inwardHeadId": 0,
      "transferFlag": 0,
      "wbillDate": this.today,
      "lrNo": " ",
      "lrDate": this.today,
      "wbillNo": " ",
      "transportId": 0,
      "noofCases": 0,
      "delvTo": postOutwardObj.deliveryTo,
      "grsValue": 0,
      "discValue": 0,
      "disc1Value": 0,
      "taxValue": 0,
      "frtValue": this.saleInvoiceFinalSaveFormGroup.value.frtValue ? this.saleInvoiceFinalSaveFormGroup.value.frtValue : 0,
      "hamaliValue": this.saleInvoiceFinalSaveFormGroup.value.hamaliValue ? this.saleInvoiceFinalSaveFormGroup.value.hamaliValue : 0,
      "otherAddDescription": " ",
      "inwardHeadNo": 0,
      "otherCharges": this.saleInvoiceFinalSaveFormGroup.value.otherCharges ? this.saleInvoiceFinalSaveFormGroup.value.otherCharges : 0,
      "otherAdd": this.saleInvoiceFinalSaveFormGroup.value.otherAdd ? this.saleInvoiceFinalSaveFormGroup.value.otherAdd : 0,
      "otherAddAccId": this.saleInvoiceFinalSaveFormGroup.value.otherAddAccId ? this.saleInvoiceFinalSaveFormGroup.value.otherAddAccId : 0,
      "otherDedDescription": " ",
      "otherDed": this.saleInvoiceFinalSaveFormGroup.value.otherDed ? this.saleInvoiceFinalSaveFormGroup.value.otherDed : 0,
      "otherDedAccId": this.saleInvoiceFinalSaveFormGroup.value.otherDedAccId ? this.saleInvoiceFinalSaveFormGroup.value.otherDedAccId : 0,
      "taxUploadStatus": 0,
      "netValue": 0,
      "purValue": 0,
      "rndValue": 0,
      "invValue": 0,
      "rcptAmount": 0,
      "remarks": this.saleInvoiceFinalSaveFormGroup.value.remarks ? this.saleInvoiceFinalSaveFormGroup.value.remarks : '',
      "postFlag": 0,
      "firmId": 0,
      "trFirmId": 0,
      "isActive": 0,
      "firmYearId": 0,
      "adjAmount": 0,
      "isEditable": 0,
      "isDeletable": 0

    }
    console.log(payload);
    this.outwardHeadObj = payload;

    this.subscriptions.push(this.outwardService.postOrUpdateOutwardHead(payload).subscribe(data => {
      ResponseUtils.isStatus200(data) ? this.showSalesDetailTemplate(data) :
        ResponseUtils.isStatus409(data) ?
          AppMessageUtils.warningMessage('Outward Entry Head already exists', this.formAlertId) : '';
      console.log(data);
      this.outwardHeadId = data.resultObject;
      this.getSalesDetailTableList(this.outwardHeadId);


    }
    ));

  }

  onResetForm() {
    this.saleInvoiceHeadFormGroup.reset();
  }

  bindOutWardHeadControls(outwardHead) {
    this.accName.setValue(outwardHead.accName);
    this.saleInvoiceHeadFormGroup.patchValue({
      outwardDate: this.datePipe.transform(outwardHead.outwardDate, 'yyyy-MM-dd'),
      accGstIn: outwardHead.ltoNo,
      accShName: outwardHead.accShName,
      cityId: outwardHead.cityName,
      accMobile: outwardHead.accMobile,
      mode: outwardHead.mode === 1 ? 'Cash' : 'Credit',
      deliveryTo: outwardHead.delvTo
    });
   
   
    setTimeout(() => {
      // this.deliveryTo.setValue(outwardHead.delvTo);
      this.saleInvoiceHeadFormGroup.controls['compId'].setValue(outwardHead.compId);
    }, 1000);
    this.saleInvoiceHeadFormGroup.controls['outwardDate'].disable()
  }
  /* HEAD END */

  /* DETAIL START */

  private buildOutWardEntryDetailFormGroup(): FormGroup {
    return this.formBuilder.group({
      prodId: [''],
      prodShName: [{ value: '', disabled: true }],
      prodPackName: [{ value: '', disabled: true }],
      batch: [''],
      expdate: [{ value: '', disabled: true }],
      issQty: [''],
      issQtyDisc: [''],
      tranRate: [''],
      actRate: [{ value: 0, disabled: true }],
      tax: [{ value: '', disabled: true }],
      mrp: [{ value: '', disabled: true }],
      hsncode: [{ value: '', disabled: true }],
      hsnId: [''],
      salDiscType: [''],
      salDiscType1: [(this.firmPreferences !== null && this.firmPreferences !== undefined) && this.firmPreferences.allowDisc2 !== 0 ? '' : 1],
      salDisc1: [''],
      salDisc: [''],
      compId: ['']
    });

  }

  // get the List of items onto the Detail Table
  getSalesDetailTableList(salesHeadId: number) {
    this.subscriptions.push(this.outwardService.getOutwardEntryDetails(salesHeadId).subscribe(result => {
      if (result && Object.keys(result).length > 0) {
        //head
        this.outwardHead = result.outwardHead;
        this.invValue = result.outwardHead.invValue;
        this.roundedValue = this.routeService.formatAmount(result.outwardHead.invValue ? Math.round(result.outwardHead.invValue) : '0.00');
        // this.outwardHeadBtnText = UpdateText;
        this.bindOutWardHeadControls(this.outwardHead);
        //detail 
        this.outWardDetail = result.outwardDetails;
        // this.outwardDtlBtnSaveCloseTxt = UpdateCloseText;
        // this.outwardDtlBtnSaveCloseTxt.includes
        // this.outwardDtlBtnSaveContinueTxt = UpdateContinueText;
        // taxes
        // this.outwardFinalSaveBtnText = UpdateText;
        this.outwardPretaxes = result.outwardPreTaxes;
        // this.outwardPretaxes.outwardTaxes = [];
        // this.outwardPretaxes.outwardTaxes.push(result.outwardTaxes);

        // console.log(this.outwardPretaxes);

        // let taxes = result.outwardPretaxs[0].outwardTaxs;
        this.outwardTaxes = result.outwardTaxes;
        let taxes = result.outwardTaxes;
        if (taxes && taxes.length > 0)
          taxes.forEach(tax => {
            if (tax.taxStakeName && tax.taxStakeName === 'IGST') {
              this.hasIGST = true;
            }
          });
        this.bindFinalSaveControls(this.outwardHead);
      } else {
        this.outWardDetail = [];
      }


    }));
  }

  // tranOutIssQty(value: string): void {
  //   // Allow only valid input up to two decimal places
  //   const numericValue = parseFloat(value);

  //   if (!isNaN(numericValue)) {
  //     // Limit the decimal places to two
  //     const formattedValue = numericValue.toFixed(2);

  //     // Update the form control with the formatted value
  //     this.saleInvoiceDetailFormGroup.get('issQty').setValue(formattedValue, { emitEvent: false });
  //   }
  // }


  //Details Table List View 
  tableDefinition: TableDefinition = {
    columns: [
      { id: 'productMaster.prodName', name: 'Product Name', value: (obj) => obj['prodName'] ? obj['prodName'] : '' },
      { id: 'productMaster.prodShName', name: 'Sh.Name', value: (obj) => obj['prodShName'] ? obj['prodShName'] ? obj['prodShName'] : '' : '' },
      { id: 'batch', name: 'Batch No', value: (obj) => obj['batch'] ? obj['batch'] : '' },
      { id: 'expdate', name: 'Exp.Date', value: (obj) => obj['expdate'] ? this.datePipe.transform(obj['expdate'], 'MM-yy') : '' },
      {
        id: 'issQty', name: 'Qty',
        value: (obj) => {
          let qty = obj['issQty'] ? obj['issQty'] : '';
          return qty ? this.routeService.formatAmount(qty) : '';
          // return qty ? parseFloat(qty).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
        }
      },
      {
        id: 'issQtyDisc', name: 'Qty.Disc.',
        value: (obj) => {
          let qtydisc = obj['issQtyDisc'] ? obj['issQtyDisc'] : '';
          return qtydisc ? this.routeService.formatAmount(qtydisc) : '';
          // return qtydisc ? parseFloat(qtydisc).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
        }
      },
      {
        id: 'tranRate', name: 'Inv.Rate.',
        value: (obj) => {
          let tranrate = obj['tranRate'] ? obj['tranRate'] : '';
          return tranrate ? this.routeService.formatAmount(tranrate) : '';
          // return tranrate ? parseFloat(tranrate).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
        }
      },
      {
        id: 'mrp', name: 'MRP',
        value: (obj) => {
          let mrp = obj['mrp'] ? obj['mrp'] : '';
          return mrp ? this.routeService.formatAmount(mrp) : '';
          // return mrp ? parseFloat(mrp).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
        }
      },
      {
        id: 'salDisc', name: 'Disc',
        value: (obj) => {
          let saledisc = obj['salDisc'] ? obj['salDisc'] : '';
          return saledisc ? this.routeService.formatAmount(saledisc) : '';
          // return saledisc ? parseFloat(saledisc).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
        }
      },
      {
        id: 'tax', name: 'Tax(%)',
        value: (obj) => {
          let tax = obj['tax'] ? obj['tax'] : '';
          return tax ? this.routeService.formatAmount(tax) : '';
          // return tax ? parseFloat(tax).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
        }
      },
      {
        id: 'grsValue', name: 'Gross Value',
        value: (obj) => {
          let grsValue = obj['grsValue'] ? obj['grsValue'] : '';
          return grsValue ? this.routeService.formatAmount(grsValue) : '';
          // return grsValue ? parseFloat(grsValue).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
        }
      },

      {
        id: 'action', name: 'Action', disableSort: true, actions: [
          {
            method: (data) => this.addOrEdit(data),
            name: 'Edit',
            icon: 'assets/new_edit2.png',
            style: ActionStyle.EDIT
          },
          {
            isDisabled: (data) => this.isDeleteDisabled(),
            method: (obj) => this.deleteSalesDetailItem(obj),
            name: 'Delete',
            icon: 'assets/new_delete2.png',
            style: ActionStyle.DELETE,
            dialogProperties: { title: 'Delete Sales Invoice Detail', templateRef: () => this.deleteTemplate() }
          },
          {
            name: 'Share',
            icon: 'share',
            style: ActionStyle.SHARE
          }
        ]
      },
    ]
  };

  //  "Add" or "Edit" the Detail Item
  addOrEdit(data) {
    console.log(data);
    this.showSalesDetailTemplate("Update");
    this.outwardDetailId = data.outwardDetailId;
    this.updateDetailData = data;
    this.selectedProdid = data.prodId;
    this.outwardDtlBtnSaveCloseTxt = UpdateCloseText;
    this.outwardDtlBtnSaveContinueTxt = UpdateContinueText;
    this.saleInvoiceDetailFormGroup.patchValue({
      prodId: data.prodName,
      prodShName: data.prodShName,
      prodPackName: data.prodPackName,
      batch: data.batch,
      expdate: data.expiryDate,
      issQty: this.routeService.formatAmount(data.issQty),
      issQtyDisc: this.routeService.formatAmount(data.issQtyDisc),
      tranRate: this.routeService.formatAmount(data.tranRate),
      actRate: this.routeService.formatAmount(data.actRate),
      salDisc: this.routeService.formatAmount(data.salDisc),
      salDiscType: data.salDiscType, //=== 1 ? 1 : 2,
      hsncode: data.hsncode,
      tax: this.routeService.formatAmount(data.tax),
      mrp: this.routeService.formatAmount(data.mrp),
      salDiscType1: this.firmPreferences.allowDisc2 != 0 ? data.salDiscType1 : 1,
      salDisc1: this.routeService.formatAmount(data.salDisc1),
    });

    setTimeout(() => {
      this.saleInvoiceDetailFormGroup.controls['batch'].setValue(data.batch);
    }, 1000);
  }
  expdate(event) {
    const str = event.substring(0, event.length - 3);
    var dateObj = new Date();
    var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    var year = ('0' + dateObj.getFullYear()).slice(-2);
    var fid = (event).slice(-2);
    const mon = event.slice(0, 2)
    if (event.length < 5) {
      this.saleInvoiceDetailFormGroup.get('expdate').setErrors({ 'greaterValue1': true })
    } else {
      if (year > fid) {
        this.saleInvoiceDetailFormGroup.get('expdate').setErrors({ 'greaterValue': true })
      } else if (str > 12) {
        this.saleInvoiceDetailFormGroup.get('expdate').setErrors({
          'greaterValue1': true
        })
      } else if (year === fid && mon < month) {
        this.saleInvoiceDetailFormGroup.get('expdate').setErrors({ 'greaterValue1': true })
      } else {
        this.saleInvoiceDetailFormGroup.get('expdate').setErrors(null)
        var output = [event.slice(0, 3), 20, event.slice(3)].join('');
        const data = '01' + '-' + output;
        //    this.expdatefiled = this.convert1(data);
        // this.expdatefiled =  this.datePipe.transform(this.expdatefiled, 'yyyy-MM-dd');
      }
    }
  }


  isDeleteDisabled() {
    return false;
  }


  deleteTemplate() {
    return this.deleteSalesHeadTemplate;
  }

  deleteSalesDetailItem(item?: any) {
    this.outwardService.deleteOutwardDetailItem(item.outwardDetailId).subscribe(data => {
      if (ResponseUtils.isStatus200(data)) {
        this.refresh()
      }
      ResponseUtils.isStatus404(data) ?
        AppMessageUtils.warningMessage('Sales Detail already deleted') : ''
    });
  }

  refresh(): void {
    this.accName.setValue('');
    this.outWardDetail = [];
    this.saleInvoiceHeadFormGroup.reset();
    //   this.invoiceHeadDetails(this.invoiceHeadId);
    this.getSalesDetailTableList(this.outwardHeadId);
  }


  // To open the Detail PopUp
  showSalesDetailTemplate(flag: any): void {
    this.dialogService.closeAllDialogues();
    this.outwardDetailId = 0;
    this.updateDetailData = '';
    this.selectedProdid = 0;
    this.showAutoCompleteData = false;
    this.saleInvoiceDetailFormGroup.reset();
    let dialogInputs: DialogData = {} as DialogData;
    dialogInputs.title = addItem;
    dialogInputs.closeBtnLabel = 'Close';
    dialogInputs.dialogClass = DialogClass.MEDIUM;
    dialogInputs.templateRef = () => this.saleEntryDetailTemplate;
    dialogInputs.buttonTemplates = [({ templateRef: this.saleEntryDetailButtonTemplate } as DialogButtonTemplate)]
    this.dialogService.showDialogue(dialogInputs, { disableClose: true });
    this.outwardDtlBtnSaveCloseTxt = SaveCloseText;
    this.outwardDtlBtnSaveContinueTxt = SaveContinueText;
  }


  //Custom Products Autocomplete
  customProductAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Product Name',
    isRequired: true,
    dataSourceFn: (name) => this.showAutoComplete(name),
    minCount: 2,
    keyString: 'prodName'
  }

  //Custom Products Autocomplete Options Table View
  customProductOptsTable: OptionsTableDefinition = {
    panelWidth: 600,
    columns: [
      { name: 'Product Name', value: (obj) => obj['prodName'] ? obj['prodName'] : '', fxFlex: 24, fxFlex1: 24, isKeyColumn: true },
      { name: 'Product Pack', value: (obj) => obj['prodPackName'] ? obj['prodPackName'] : '', fxFlex: 15, fxFlex1: 15 },
      { name: 'Qnt', value: (obj) => obj['closingQty'] ? obj['closingQty'] : '', fxFlex: 9, fxFlex1: 9 },
      { name: 'HSN Code', value: (obj) => obj['hsncode'] ? obj['hsncode'] : '', fxFlex: 13, fxFlex1: 13 },
      { name: 'Tax%', value: (obj) => obj['tax'] ? obj['tax'] : '', fxFlex: 9, fxFlex1: 9 },
      { name: 'Sh.Name', value: (obj) => obj['prodShName'] ? obj['prodShName'] : '', fxFlex: 13, fxFlex1: 13 },
      { name: 'CompanyName', value: (obj) => obj['compName'] ? obj['compName'] : '', fxFlex: 17, fxFlex1: 17 }
    ]
  };

  // To patch the product details onto the other controls
  bindProductDetails(data) {
    this.prodData = data;
    this.saleInvoiceDetailFormGroup.patchValue({
      prodShName: data.prodShName,
      prodPackName: data.prodPackName,
      hsncode: data.hsncode,
      mrp: 0,
      expdate: '',
      tranRate: 0,
      issQty: '',
      issQtyDisc: '',
      actRate: 0,
      salDiscType: '',
      salDiscType1: this.firmPreferences.allowDisc2 != 0 ? '' : 1,
      salDisc1: '',
      salDisc: '',
      batch: ''
    });
  }

  //mthod
  showAutoComplete(name) {
    if (this.showAutoCompleteData) {
      let Date :any = this.saleInvoiceHeadFormGroup.controls.outwardDate.value;
      if(this.saleInvoiceHeadFormGroup.controls.outwardDate.value){
       Date = this.datePipe.transform(this.saleInvoiceHeadFormGroup.controls.outwardDate.value, 'yyyy-MM-dd')
      }
      return this.outwardService.GetStockByProducts(name, this.saleInvoiceHeadFormGroup.controls.compId.value, Date)
    } else {
      return of([])
    }
  }

  //Batch Autocopmlete
  batchAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Batch',
    isRequired: true,
    dataSourceFn: (name) => this.outwardService.GetStockByProductsId(name, this.selectedProdid, this.datePipe.transform(this.saleInvoiceHeadFormGroup.controls.outwardDate.value, 'yyyy-MM-dd')),
    keyString: 'batch',
    validators: [Validators.required]
  }

  //Batch Autocomplete Options Table View
  batchOptsTable: OptionsTableDefinition = {
    panelWidth: 700,
    columns: [
      { name: 'Batch', value: (obj) => obj['batch'] ? obj['batch'] : '', fxFlex: 20, fxFlex1: 20, isKeyColumn: true },
      { name: 'Exp.Date', value: (obj) => obj['expdate'] ? this.datePipe.transform(obj['expdate'], 'MM-yy') : '', fxFlex: 15, fxFlex1: 15 },
      // { name: 'PUR.No.', value: (obj) => obj['invNo'] ? obj['invNo'] : '', fxFlex: 15,fxFlex1:15 },
      // { name: 'PUR.Date', value: (obj) => obj['inwardDate'] ? this.datePipe.transform(obj['inwardDate'], 'dd-MM-yyyy') : '', fxFlex: 15,fxFlex1:15 },
      { name: 'Cl.Qty.', value: (obj) => obj['closingQty'] ? obj['closingQty'] : '', fxFlex: 15, fxFlex1: 15 },
      { name: 'Cl.Qty.Disc.', value: (obj) => obj['closingQtyDisc'] ? obj['closingQtyDisc'] : '', fxFlex: 15, fxFlex1: 15 },
      { name: "Sale Rate", value: (obj) => obj['saleRate'] ? obj['saleRate'] : '', fxFlex: 35, fxFlex1: 35 },
      { name: "MRP", value: (obj) => obj['mrp'] ? obj['mrp'] : '', fxFlex: 7, fxFlex1: 7 },
      { name: "HSN Code", value: (obj) => obj['hsncode'] ? obj['hsncode'] : '', fxFlex: 25, fxFlex1: 25 },
      { name: "Tax%", value: (obj) => obj['tax'] ? obj['tax'] : '', fxFlex: 7, fxFlex1: 7 },
      { name: "Tran Rate", value: (obj) => obj['purRate'] ? obj['purRate'] : '', fxFlex: 25, fxFlex1: 25 },
      { name: "Disc(%)", value: (obj) => obj['closingQtyDisc'] ? obj['closingQtyDisc'] : '', fxFlex: 25, fxFlex1: 25 },
    ]
  };

  // To patch the batch details onto the other controls`
  bindBatchDetails(data) {
    this.saleInvoiceDetailFormGroup.patchValue({
      mrp: this.routeService.formatAmount(data.mrp),
      tax: this.routeService.formatAmount(data.tax),
      expdate: this.datePipe.transform(data.expdate, 'MM-yy'),
      hsncode: data.hsncode,
      hsnId: data.hsnId,
      tranRate: data.saleRate
    });
  }

  // discount Autocomplete View for Dropdown
  discountAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Discount',
    isRequired: true,
    dataSourceFn: () => of([...dropdowns.discount]),
    isStaticType: true,
    keyString: 'name'
  }




  // To "Save" or "Update" the Sales Detai
  onSaveOrUpdateOutwardDetail(flag: boolean) {
    const postOutwardObj = this.saleInvoiceDetailFormGroup.getRawValue();
    const expdate = postOutwardObj.batch.expdate ? postOutwardObj.batch.expdate : this.updateDetailData.expdate;
    const date = new Date(expdate);

    // Get month (with leading zero if necessary) and year (last two digits)
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-indexed, so add 1
    const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year

    const formattedDate = `${month}-${year}`;
    console.log(formattedDate);  // Output: 06-26
    let ouHdate = this.saleInvoiceHeadFormGroup.controls.outwardDate.value ? this.saleInvoiceHeadFormGroup.controls.outwardDate.value.split("T") : null;
    const payload = {
      outwardDetailId: this.outwardDetailId ? +this.outwardDetailId : 0,
      outwardHeadId: this.outwardHeadId ? +this.outwardHeadId : 0,
      // outwardDate:  this.purchaseHead ? this.purchaseHead.inwardDate : this.purchaseHeadFormGroup.controls.inwardDate.value,,
      outwardHeadDate: ouHdate ? ouHdate[0] : null,
      inwardDetailId: postOutwardObj.batch.inwardDetailId ? +postOutwardObj.batch.inwardDetailId : this.updateDetailData.inwardDetailId ? this.updateDetailData.inwardDetailId : 0,
      // inwardDetailId:0,
      inwardHeadNo: postOutwardObj.batch.inwardHeadNo ? +postOutwardObj.batch.inwardHeadNo : this.updateDetailData.inwardHeadNo ? this.updateDetailData.inwardHeadNo : null,
      prodId: postOutwardObj.prodId.prodId ? +postOutwardObj.prodId.prodId : this.updateDetailData.prodId ? this.updateDetailData.prodId : 0,
      hsncode: postOutwardObj.hsncode ? postOutwardObj.hsncode : this.updateDetailData.hsncode ? this.updateDetailData.hsncode : 0,
      batch: postOutwardObj.batch.batch ? postOutwardObj.batch.batch : this.updateDetailData.batch ? this.updateDetailData.batch : '',
      expdate: date,
      issQty: +this.routeService.formatAmount(postOutwardObj.issQty),
      issQtyDisc: +this.routeService.formatAmount(postOutwardObj.issQtyDisc),
      tranRate: +this.routeService.formatAmount(postOutwardObj.tranRate),
      actRate: 0,
      inwardRate: 0,
      // psQty: +postOutwardObj.batch.psQty,
      psQty: 0,
      // psQtyDisc:  +postOutwardObj.batch.psQtyDisc,
      psQtyDisc: 0,
      retStatus: 0,
      // retQty: +postOutwardObj.batch.retQty,
      retQty: 0,
      // retQtyDisc: +postOutwardObj.batch.retQtyDisc,
      retQtyDisc: 0,
      salDiscType: this.firmPreferences.discTypeOption != 3 ? this.firmPreferences.discTypeOption : postOutwardObj.salDiscType ? postOutwardObj.salDiscType : 0,//postOutwardObj.salDiscType ? +postOutwardObj.salDiscType : 1,
      salDisc: postOutwardObj.salDisc ? +postOutwardObj.salDisc : 0,
      salDiscType1: this.firmPreferences.discTypeOption != 3 ? this.firmPreferences.discTypeOption : postOutwardObj.salDiscType1 ? postOutwardObj.salDiscType1 : 0,//postOutwardObj.salDiscType1 ? postOutwardObj.salDiscType1 : 1,
      salDisc1: Number(postOutwardObj.salDisc1) ? Number(postOutwardObj.salDisc1) : 0,
      // mrp: +postOutwardObj.batch.mrp,
      mrp: postOutwardObj.mrp ? postOutwardObj.mrp : this.updateDetailData.mrp ? this.updateDetailData.mrp : 0,
      mrpValue: 0,
      inclTaxVal: 0,
      otherCharges: 0,
      outwardQtyStatus: 0,
      prodStatus: 0,
      taxSlabId: postOutwardObj.prodId.taxSlabId ? +postOutwardObj.prodId.taxSlabId : this.updateDetailData.taxSlabId ? this.updateDetailData.taxSlabId : 0,
      tax: 0,
      grsValue: 0,
      discValue: 0,
      discValue1: 0,
      taxValue: 0,
      preTaxValue: 0,
      netValue: 0,
      purValue: 0,
      isDeleted: 0,
      crFlag: 0,
      drFlag: 0,
      prodName: postOutwardObj.prodId.prodName ? postOutwardObj.prodId.prodName : this.updateDetailData.prodName ? this.updateDetailData.prodName : '',
      stkRate: 0,
      // hsnId: +postOutwardObj.batch.hsnId,
      hsnId: postOutwardObj.hsnId ? postOutwardObj.hsnId : this.updateDetailData.hsnId ? this.updateDetailData.hsnId : 0,
      hsnDescription: "",
      tranTypeHeadId: 2,
      // expiryDate: new Date(postOutwardObj.expdate),
      firmYearId: 0
    }


    this.subscriptions.push(this.outwardService.postSaleInvoiceDetail(payload).subscribe(data => {
      if (ResponseUtils.isStatus200(data)) {
        this.getSalesDetailTableList(this.outwardHeadId);
        AppMessageUtils.successMessage('Outward Entry Detail Saved Successfully', this.formAlertId);
        // this.dialogService.closeAllDialogues();
        setTimeout(() => {
          const productNameElement = document.getElementById('productName');

          if (productNameElement) {
            const focusableElement = productNameElement.querySelector('input');

            if (focusableElement) {
              // (focusableElement as HTMLElement).focus();
              var x:any = (focusableElement as HTMLElement);
              // x.value = " "
              x.focus();
            }
              
          }
        }, 900);

        // setTimeout(() => {
        //   let dialogInputs: DialogData = {} as DialogData;
        //   dialogInputs.title = addItem;
        //   dialogInputs.closeBtnLabel = 'Close';
        //   dialogInputs.dialogClass = DialogClass.MEDIUM;
        //   dialogInputs.templateRef = () => this.saleEntryDetailTemplate;
        //   dialogInputs.buttonTemplates = [({ templateRef: this.saleEntryDetailButtonTemplate } as DialogButtonTemplate)]
        //   this.dialogService.showDialogue(dialogInputs, { disableClose: true });
        // }, 800);
      }
      ResponseUtils.isStatus409(data) ?
        AppMessageUtils.warningMessage('Outward Entry Detail already exists', this.formAlertId) : '';
    }));
    if (this.outwardDtlBtnSaveCloseTxt === SaveContinueText) {
      this.resetDetailForm();
    }
    if (flag) {
      this.dialogService.closeAllDialogues();
      this.resetDetailForm();
    }
    else {
      this.resetDetailForm();
    }
  }

  resetDetailForm() {
    this.saleInvoiceDetailFormGroup.reset();
    this.selectedProdid = 0;
  }

  // Validation for issQty input
  tranOutIssQty(value) {
    this.closingQty = this.saleInvoiceDetailFormGroup.controls['batch'].value.closingQty;
    if (+value > this.closingQty) {
      this.saleInvoiceDetailFormGroup.get('issQty').setErrors({ 'greaterValue': true }, { emitEvent: true });
    }
    // const numericValue = parseFloat(value);

    // if (!isNaN(numericValue)) {
    //   // Limit the decimal places to two
    //   const formattedValue = numericValue.toFixed(2);

    //   // Update the form control with the formatted value
    //   this.saleInvoiceDetailFormGroup.get('issQty').setValue(formattedValue, { emitEvent: false });
    // }
  }

  // Validation for issQtyDisc input
  tranOutIssQtyDisc(value) {
    this.closingQtyDisc = this.saleInvoiceDetailFormGroup.controls['batch'].value.closingQtyDisc;
    if (+value > this.closingQtyDisc) {
      this.saleInvoiceDetailFormGroup.get('issQtyDisc').setErrors({ 'greaterValue': true }, { emitEvent: true });
    }
  }

  /*DETAIL END */

  /* FINAL SAVE START */

  buildOutWardEntryFinalSaveFormGroup() {
    return this.formBuilder.group({
      otherDed: [],
      otherDedAccId: [''],//{ value: '', disabled: true }
      otherAdd: [''],
      otherAddAccId: [''], //{ value: '', disabled: true }
      hamaliValue: [0],
      frtValue: [''],
      remarks: [''],
      otherCharges: 0
    });
  }

  // customAccountDedAdj AutoComplete
  customAccountDedAdjAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Ded. Adj. Led.',
    // dataSourceFn: (name) => this.inwardService.getCustomAccountsByName(name, PurchasePrefix),
    dataSourceFn: (name) => this.inwardService.getCustomAccountsByName(name),
    minCount: 2,
    keyString: 'accName'
  };

  // customAccountAddAdj AutoComplete
  customAccountAddAdjAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Cr. Adj. Led.',
    // dataSourceFn: (name) => this.inwardService.getCustomAccountsByName(name, PurchasePrefix),
    dataSourceFn: (name) => this.inwardService.getCustomAccountsByName(name),
    minCount: 2,
    keyString: 'accName'
  };

  onSaveOrUpdateFinalSave() {
    // if (this.outwardFinalSaveBtnText === SaveText) {
    const outwardFinalSaveObj = { ...this.outwardHead };
    // outwardFinalSaveObj.tranTypeName = SalePrefix;
    // outwardFinalSaveObj.isDeleted = this.outwardHead.isDeleted;
    // outwardFinalSaveObj.isEligible = this.outwardHead.isEligible;
    // outwardFinalSaveObj.taxUploadStatus = 0;
    // outwardFinalSaveObj.taxCategoryId = this.outwardHead.taxCategoryId;
    // outwardFinalSaveObj.frtValue = this.saleInvoiceFinalSaveFormGroup.controls.frtValue.value;
    outwardFinalSaveObj.frtValue = 0;
    outwardFinalSaveObj.rndValue = +this.routeService.formatAmount( outwardFinalSaveObj.invValue ? (+Math.round(outwardFinalSaveObj.invValue)- outwardFinalSaveObj.invValue) : '0.00');
    outwardFinalSaveObj.invValue = +this.routeService.formatAmount( outwardFinalSaveObj.invValue ? Math.round(outwardFinalSaveObj.invValue) : '0.00'); 
    // outwardFinalSaveObj.otherDed = +this.saleInvoiceFinalSaveFormGroup.controls.otherDed.value;
    // outwardFinalSaveObj.otherDedAccId = this.saleInvoiceFinalSaveFormGroup.controls.otherDedAccId.value.accId;
    // outwardFinalSaveObj.otherAdd = +this.saleInvoiceFinalSaveFormGroup.controls.otherAdd.value;
    // outwardFinalSaveObj.otherAddAccId = this.saleInvoiceFinalSaveFormGroup.controls.otherAddAccId.value.accId;
    outwardFinalSaveObj.remarks = this.saleInvoiceFinalSaveFormGroup.controls.remarks.value;
    outwardFinalSaveObj.otherCharges = this.saleInvoiceFinalSaveFormGroup.controls.otherCharges.value;
    // outwardFinalSaveObj.mode = this.saleInvoiceHeadFormGroup.controls.mode.value.name;
    // delete outwardFinalSaveObj.accGstIn;
    // delete outwardFinalSaveObj.accShName;
    // delete outwardFinalSaveObj.accMobile;
    // delete outwardFinalSaveObj.cityId;




    const payload = {
      outwardHead: outwardFinalSaveObj,
      outwardPreTaxes: this.outwardPretaxes,
      outwardTaxes: this.outwardTaxes,
      outwardDetails: this.outWardDetail,
      isUpdate: true
    }

    this.subscriptions.push(this.outwardService.postOrUpdateOutwardFinalSave(payload).subscribe(data => {
      console.log("qw", data);
      if (ResponseUtils.isStatus200(data)) {
        AppMessageUtils.successMessage('Saved Successfully', this.formAlertId)
        this.saleInvoiceDetailFormGroup.reset();
        this.router.navigate(['pharma/outward/salesInvoices']);
      }
      ResponseUtils.isStatus409(data) ?
        AppMessageUtils.warningMessage('Outward Entry already exists', this.formAlertId) : ''
    }));
    // } else {

    // }
  }

  onAdjValue(adjValue, adjCtrlName) {
    if (adjValue && adjValue > 0) {
      this.saleInvoiceFinalSaveFormGroup.controls[adjCtrlName].enable();
    } else {
      this.saleInvoiceFinalSaveFormGroup.controls[adjCtrlName].disable();
    }
  }

  bindFinalSaveControls(outwardHead) {
    this.saleInvoiceFinalSaveFormGroup.patchValue({
      otherDed: outwardHead.otherDed ? outwardHead.otherDed : 0,
      otherDedAccId: outwardHead.otherDedAccId ? outwardHead.otherDedAccId : 0,
      otherAdd: outwardHead.otherAdd ? outwardHead.otherAdd : 0,
      otherAddAccId: outwardHead.otherAddAccId ? outwardHead.otherAddAccId : 0,
      hamaliValue: outwardHead.hamaliValue ? outwardHead.hamaliValue : 0,
      frtValue: outwardHead.frtValue ? outwardHead.frtValue : "",
      remarks: outwardHead.remarks ? outwardHead.remarks : ""
    });
  }

  resetFinalSave() {
    this.saleInvoiceFinalSaveFormGroup.reset();
  }



  /* FINAL SAVE END */



  /* COMMON FUNCTIONS START */

  formatDate(date: string) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }



  goBack() {
    this.router.navigate(['pharma/outward/saleInvoiceList']);
  }

  /* COMMON FUNCTIONS END*/


  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }



  @HostListener('window:keydown.alt.h', ['$event'])
  bigFont(event: KeyboardEvent) {
    event.preventDefault();
    this.getProductPreviousData();
  }

  getProductPreviousData() {
    var prodId = this.saleInvoiceDetailFormGroup.controls.prodId.value.prodId;
    var accid = this.accName.value.accId ? this.accName.value.accId : 192;
    // var ourtwardate = null;
    this.inwardService.productSalesHistory(accid, prodId).subscribe(res => {
      if (res) {
        this.displayProd = true;
        this.purchaseHist = res;
      }
    })
  }

  confirmDelete() {
    // return this.deletePurchase
    document.getElementById('deletePopup').style.display = 'flex';
  }

  closePopup() {
    // Close the confirmation popup
    document.getElementById('deletePopup').style.display = 'none';
  };

  deleteItem() {
    this.deleteSalesHead(this.outwardHeadId)
    // Here, yout can add your delete functionality
    console.log("Item deleted!");

    // Close the popup after deletion
    this.closePopup();
  }

  deleteSalesHead(outwardHeadId?: any) {
    this.outwardService.deleteSalesHeadById(outwardHeadId).subscribe(data =>
      ResponseUtils.isStatus200(data) ? this.refresh() :
        ResponseUtils.isStatus404(data) ?
          AppMessageUtils.warningMessage("Sales Head already deleted") : '');
  }
  saldate:any;
  purdatefocusout(){

    if (this.firmPreferences != null && this.firmPreferences != undefined && this.firmPreferences != "") {

      if (this.firmPreferences.allowBackDatePurchase == 0) {
        this.saldate = this.datePipe.transform(this.saleInvoiceHeadFormGroup.controls.outwardDate.value, 'yyyy-MM-dd');
        if (this.saldate && this.tranIndate) {
          if (this.saldate >= this.tranIndate) {
            console.log(this.saldate)
          } else {
            this.saleInvoiceHeadFormGroup.controls.outwardDate.setErrors({});
            AppMessageUtils.errorMessage("SAL Date should not be earlier than today's date.", this.formAlertId);
            // this.purchaseHeadFormGroup.controls.inwardDate.setValue('');
          }
        }
      }
      else if (this.firmPreferences.allowBackDatePurchase == 1) {
        console.log(this.saleInvoiceHeadFormGroup.controls.outwardDate.value, 'yyyy-MM-dd')
      }
    }
  }
getTranlastdate(){
  this.outwardService.getsaleTrandate(2).subscribe(data =>{
    let objsplit:any
    if(data){
      console.log(data);
      if(data){  
        objsplit="";
        objsplit = data[0].outwardDate != null ? data[0].outwardDate.split('T') : "";
        this.tranIndate = objsplit[0];
  
      }
    
      console.log(this.tranIndate);
    }
  });
}
  

  onDateSelected(data){
    if (this.firmPreferences.allowBackDatePurchase == 0) {
      this.saldate = this.datePipe.transform(this.saleInvoiceHeadFormGroup.controls.outwardDate.value, 'yyyy-MM-dd');
      if (this.saldate && this.tranIndate) {
        if (this.saldate >= this.tranIndate) {
          console.log(this.saldate)
        } else {
          this.saleInvoiceHeadFormGroup.controls.outwardDate.setErrors({});
          AppMessageUtils.errorMessage("SAL Date should not be earlier than today's date.", this.formAlertId);
      }
    }
    else if (this.firmPreferences.allowBackDatePurchase == 1) {
      console.log(this.saleInvoiceHeadFormGroup.controls.outwardDate.value, 'yyyy-MM-dd')
    }
    console.log(data.target.value);
  }
}

}


