import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { addItem, PURCHASERETURNPREFIX, SaveCloseText, SaveContinueText, SaveText, UpdateCloseText, UpdateContinueText, UpdateText } from 'src/app/shared/app-constants';
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
import { OutwardService } from '../../out-ward/outward.service';
import { RouteService } from 'src/app/shared/services/route.service';


@Component({
  selector: 'app-purchase-return',
  templateUrl: './purchase-return.component.html',
  styleUrls: ['./purchase-return.component.scss', '../in-ward.component.scss']
})
export class PurchaseReturnComponent implements OnInit, OnDestroy {
  // FormGroups
  preturnInvoiceHeadFormGroup: FormGroup;
  preturnInvoiceDetailFormGroup: FormGroup;
  preturnInvoiceFinalSaveFormGroup: FormGroup;
  @ViewChild('purhistory', { static:  true }) purhistory;
  historydataSource;
  preTaxTable : boolean = false;

  //DropDowns
  public modeDropDown: { name: string, code: any }[] = dropdowns.mode;
  public discountDropDown: { name: string, code: any }[] = dropdowns.discount;
  public statusDropdown: { name: string, code: any }[] = dropdowns.productStatus;
   

  historytableDefinition:  TableDefinition = {
    columns:  [
      {id:  'prodShName',  name:  'Sh.Name', value:  (obj) => obj['prodShName']?obj['prodShName'] ? obj['prodShName'] :  '':''},
      {id:  'prodName',  name:  'Product Name', value:  (obj) => obj['prodName']?obj['prodName'] ? obj['prodName'] :  '':''},
      {id:  'batch',  name:  'Batch No', value:  (obj) => obj['batch'] ? obj['batch'] :  ''},
      {id:  'expdate',  name:  'Exp.Date', value:  (obj) => obj['expdate'] ? obj['expdate'] :  ''},
      {id:  'invQty',  name:  'InvQty', value:  (obj) => obj['invQty'] ? obj['invQty'] :  ''},
      {id:  'invQtyDisc',  name:  'Qty.Disc', value:  (obj) => obj['invQtyDisc'] ? obj['invQtyDisc'] :  ''},
      {id:  'purRate',  name:  'Inv.Rate', value:  (obj) => obj['purRate'] ? obj['purRate'] :  ''},
      {id:  'discValue',  name:  'Disc', value:  (obj) => obj['discValue'] ? obj['discValue'] :  ''},
      {id:  'mrp',  name:  'MRP', value:  (obj) => obj['mrp'] ? obj['mrp'] :  ''},
      // {id:  'purRate',  name:  'Tran.Qty.Status', value:  (obj) => obj['purRate'] ? obj['purRate'] :  ''},
      {id:  'hsncode',  name:  'HSN  code', value:  (obj) => obj['hsncode'] ? obj['hsncode'] :  ''},
      {id:  'action', name:  'Action', disableSort:  true, actions:  [
        {
          method:  (data) => this.selectProduct(data),
          name:  'View',
          icon:  'visibility',
          style:  ActionStyle.EDIT
        }
    ]},
  ],
  disablePagination:  true,
  disableFilter:  true
};

  //Template References
  @ViewChild('preturnEntryDetailTemplate', { static: true }) preturnEntryDetailTemplate;
  @ViewChild('preturnEntryDetailButtonTemplate', { static: true }) preturnEntryDetailButtonTemplate;
  @ViewChild('deletepreturnDetailTemplate', { static: false }) deletepreturnHeadTemplate;
  @ViewChild('CompanyTab', {static:false}) CompanyTab: MatSelect;
  public filteredCompanyMulti: ReplaySubject<any> = new ReplaySubject<any>(1);

  discountType1:  AutoCompleteDefinition = {
    label:  'Discount Type 1',
    isRequired:  true,
    dataSourceFn:  () => of([...dropdowns.discountType]),
    isStaticType:  true,
    keyString:  'name'
  };

  // Variables
    CompanyTabMultiFilterCtrl = new FormControl('');
  Companydata: CompanyMaster[];
  compGroupName = new FormControl('');
  accName = new FormControl('') ;
  deliveryTo = new FormControl('') ;
  dateError: boolean;
  prodData: any;
  batches: any = [];
  selectedProdid: any = 0;
  firmPreferences: any;
  outwardTaxes: any;
  displayProd: boolean;
  purchaseHist: any;
  dailogData: any;
  purhistoryData: any;
  fromlistFlag: boolean = false;
  action: any;
  invValuefinal: any;
  roundedValue: any;
  minDate: any;
  maxDate: any;
    companyTab(event: KeyboardEvent) {
      if (event.keyCode === 9) {
        const statetab = this.CompanyTab.options;
        const result = statetab.find(x => x.active === true);
        this.preturnInvoiceHeadFormGroup.controls.compId.setValue(result.value);
        const data = this.Companydata.find(x=> x.compId == result.value)
        if(data){
        this.compGroupName.setValue(data.compGroupName);
        }
        
      }
      else if (event.keyCode === 13) {
        const data = this.Companydata.find(x=> x.compId == this.preturnInvoiceHeadFormGroup.controls.compId.value)
        if(data){
        this.compGroupName.setValue(data.compGroupName)
        }

        // setTimeout(() => {
        //   this.boxfocus.nativeElement.focus();
        // }, 1000);
      }

     
    }
    companychange(value){
      if(value.value){
       const data = this.Companydata.find(x=> x.compId == value.value)
         if(data){
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
      this.masterService.getAllCompanyMaster().subscribe(data=>{
        this.Companydata=data as CompanyMaster[];
        this.filteredCompanyMulti.next(this.Companydata.slice());
      });
    }
  batchByProductId: any;
  outwardHeadId: any;
  outWardDetail: any;
  closingQty: any;
  closingQtyDisc: number;
  editObj = {} as any;
  preturnHeadData: any;
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
  preturnInvoiceRowData: any;
  outwardHead: any;
  outwardDetailId: any;
  updateDetailData: any;
  today = new Date().toISOString().split('T')[0];
  batchProductDetails: Array<any> = [];
  batch$: Observable<any> = of([]);
  isBtnDisable: boolean = false;
  outwardHeadObj: any;
  showAutoCompleteData:boolean = false;
  protected _onDestroy = new Subject<void>();


  constructor(
    private formBuilder: FormBuilder,
    private inwardservice: InwardService,
    private outwardService: OutwardService,
    private router: Router, private masterService: MasterService,
    private dialogService: DialogService,
    private inwardService: InwardService,
    private datePipe: DatePipe, private service:OutWardHttpService,
    private routeService:RouteService,
  ) {

  }

   showAutoComplete(name){
      if(this.showAutoCompleteData){
        return this.inwardService.GetSupplierPurchaseHistory(this.accName.value.accId,name, this.today)
      }else{
        return of([])
      }
    }


  ngOnInit() {
    this.firmPreferences =JSON.parse(sessionStorage.getItem('firmPreferences'));
    if(this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== ''){
      this.minDate = this.firmPreferences.finSdate;
      this.maxDate = this.today;//this.firmPreferences.finEdate;
    }
    // console.log(this.firmPreferences , 'this.firmPreferences');
    this.getAllCompMaster();
    document.getElementById('deletePopup').style.display = 'none';

    this.preturnInvoiceHeadFormGroup = this.buildOutWardEntryHeadFormGroup();
    this.preturnInvoiceDetailFormGroup = this.buildOutWardEntryDetailFormGroup();
    this.preturnInvoiceFinalSaveFormGroup = this.buildOutWardEntryFinalSaveFormGroup();

    this.subscriptions.push(this.outwardService.updateSaleHead$.subscribe(result => {
      if (result.salesHeadRowData && result.action) {
        if(  Object.keys(result.salesHeadRowData).length > 0){
          this.fromlistFlag = true;
        this.preturnInvoiceRowData = result.salesHeadRowData;
        this.action = result.action;
        this.outwardHeadId = this.preturnInvoiceRowData.outwardHeadId;
        this.getpreturnDetailTableList(this.outwardHeadId);
        setTimeout(() => {
          if(this.action == "delete"){
            this.confirmDelete(); 
          }
       }, 1500);
        }
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

    this.CompanyTabMultiFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterCompanyMulti();
    });

    this.preturnInvoiceDetailFormGroup.get('prodId').valueChanges.subscribe(result => {
      console.log("prodIdData", result);
      if(result && this.preturnInvoiceDetailFormGroup.get('prodId').dirty){
        this.showAutoCompleteData = true;
      }
      if (result && typeof result === 'object') {
        this.selectedProdid = result.prodId;
        this.preturnInvoiceDetailFormGroup.get('batch').setValue('');
        this.bindProductDetails(result);
      }
    });

    this.preturnInvoiceDetailFormGroup.get('batch').valueChanges.subscribe(result => {
      console.log("prod batch Data", result);
      if(result && this.preturnInvoiceDetailFormGroup.get('batch').dirty){
        // this.showAutoCompleteData = true;
      }
      if (result && typeof result === 'object') {
        this.selectProduct(result)
      }
    });

    this.preturnInvoiceDetailFormGroup.get('expdate').valueChanges.subscribe(date => {
      console.log(/^(0?[1-9]|1[012])[\/\-]\d{4}$/.test(date));
      this.dateError = /^(0?[1-9]|1[012])[\/\-]\d{4}$/.test(date);
      this.preturnInvoiceDetailFormGroup.get('expdate').setErrors(null);
      if (!this.dateError) {
        this.preturnInvoiceDetailFormGroup.get('expdate').setErrors({incorrect:  true});
      }
    });
  }

  /* HEAD START */

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
      prodId:  [''],
      expdate:  [''],
      compId: [0]

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
  };
  productStatus:  AutoCompleteDefinition = {
    label:  'Status',
    isRequired:  true,
    dataSourceFn:  () => of([...dropdowns.productStatus]),
    isStaticType:  true,
    keyString:  'name'
  };
  //Custom Account  Autocomplete Options Table View
  customAccountsOptsTable: OptionsTableDefinition = {
    panelWidth: 800,
    columns: [
      { name: 'Customer Name', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 34,fxFlex1:34, isKeyColumn: true },
      { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 14,fxFlex1:14 },
      { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 16,fxFlex1:16 },
      { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 24,fxFlex1:24 },
      { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 12,fxFlex1:12 },
      // { name: 'Delivery To', value: (obj) => obj['delvTo'] ? obj['delvTo'] : '', fxFlex: 14,fxFlex1:14, isKeyColumn: true },
    ]
  };
  customAccountsOptsTableD: OptionsTableDefinition = {
    panelWidth: 300,
    columns: [
      { name: 'Customer Name', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 32,fxFlex1:32, isKeyColumn: true },
      { name: 'Delivery To', value: (obj) => obj['delvTo'] ? obj['delvTo'] : '', fxFlex: 32, fxFlex1:32,isKeyColumn: true },
      // { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 50 },
      // { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 50 },
      // { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 50 },
      { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 32,fxFlex1:32 }
    ]
  };

  // patch the customer details onto the other controls
  bindCustomerDetails(data) {
  console.log(data);

    this.preturnInvoiceHeadFormGroup.patchValue({
      accName:data.accName,
      compId:data.compId,
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
    minCount:2
  };

  //Company Autocomplete Options Table View 
  companyGroupOptsTable: OptionsTableDefinition = {
    panelWidth: 300,
    columns: [
      { name: 'Company', value: (obj) => obj['name'] ? obj['name'] : '', fxFlex: 50,fxFlex1:50, isKeyColumn: true },
      { name: 'Company Group', value: (obj) => obj['companyGroups']['name'] ? obj['companyGroups']['name'] : '', fxFlex: 50,fxFlex1:50 },
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


  // Save or Update the preturn Head
  onSaveOrUpdatepreturnHead(): void {
    const postOutwardObj = this.preturnInvoiceHeadFormGroup.value;
    console.log(this.deliveryTo);
  const payload = {
  "outwardHeadId": this.outwardHeadBtnText == 'Update' ? this.outwardHeadId : 0,
  "outwardDate": postOutwardObj.outwardDate ? postOutwardObj.outwardDate: null,
  "tranTypeHeadId": 4,
  "tranTypeName": PURCHASERETURNPREFIX,
  "outwardHeadNo": this.outwardHead ? this.outwardHead.outwardHeadNo : '',
  "compId": postOutwardObj.compId ? postOutwardObj.compId: 0,
  "invNo": " ",
  "invDate": postOutwardObj.outwardDate ? postOutwardObj.outwardDate: null ,
  "accId": this.accName.value.accId,
  "mode": postOutwardObj.mode.code ? postOutwardObj.mode.code == 'Cash' ? 1 : 2 :1 ,
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
  "frtValue": this.preturnInvoiceFinalSaveFormGroup.value.frtValue ? this.preturnInvoiceFinalSaveFormGroup.value.frtValue : 0,
  "hamaliValue": this.preturnInvoiceFinalSaveFormGroup.value.hamaliValue ? this.preturnInvoiceFinalSaveFormGroup.value.hamaliValue : 0,
  "otherAddDescription": " ",
  "inwardHeadNo":0,
  "otherCharges": this.preturnInvoiceFinalSaveFormGroup.value.otherCharges ? this.preturnInvoiceFinalSaveFormGroup.value.otherCharges : 0,
  "otherAdd": this.preturnInvoiceFinalSaveFormGroup.value.otherAdd ? this.preturnInvoiceFinalSaveFormGroup.value.otherAdd : 0,
  "otherAddAccId": this.preturnInvoiceFinalSaveFormGroup.value.otherAddAccId ? this.preturnInvoiceFinalSaveFormGroup.value.otherAddAccId : 0,
  "otherDedDescription": " ",
  "otherDed": this.preturnInvoiceFinalSaveFormGroup.value.otherDed ? this.preturnInvoiceFinalSaveFormGroup.value.otherDed : 0,
  "otherDedAccId": this.preturnInvoiceFinalSaveFormGroup.value.otherDedAccId ? this.preturnInvoiceFinalSaveFormGroup.value.otherDedAccId : 0,
  "taxUploadStatus": 0,
  "netValue": 0,
  "purValue": 0,
  "rndValue": 0,
  "invValue": 0,
  "rcptAmount": 0,
  "remarks": this.preturnInvoiceFinalSaveFormGroup.value.remarks ? this.preturnInvoiceFinalSaveFormGroup.value.remarks : '',
  "postFlag": 0,
  "firmId": 0,
  "trFirmId": 0,
  "isActive": 0,
  "firmYearId": 0,
  "adjAmount": 0,
  "isEditable": 0,
  "isDeletable": 0,
  "accGstIn": postOutwardObj.accGstIn ? postOutwardObj.accGstIn: ""

  }
    console.log(payload);
    this.outwardHeadObj = payload;

    this.subscriptions.push(this.outwardService.postOrUpdateOutwardHead(payload).subscribe(data => {
      ResponseUtils.isStatus200(data) ?    this.showpreturnDetailTemplate() :
        ResponseUtils.isStatus409(data) ?
          AppMessageUtils.warningMessage('Inward return Head already exists', this.formAlertId) : '';
          console.log(data);
         this.outwardHeadId = this.outwardHeadBtnText == 'Update' ? this.outwardHeadId : data.resultObject;
         this.getpreturnDetailTableList(this.outwardHeadId);


    }
    ));

  }

  onResetForm() {
    this.preturnInvoiceHeadFormGroup.reset();
  }

  bindOutWardHeadControls(outwardHead) {
    this.accName.setValue(outwardHead.accName);
    this.preturnInvoiceHeadFormGroup.patchValue({
      outwardDate: outwardHead.outwardDate,
      accGstIn: outwardHead.ltoNo,
      accShName:outwardHead.accShName,
      cityId: outwardHead.cityName,
      accMobile: outwardHead.accMobile,
      mode: outwardHead.mode === 1 ? 'Cash' : 'Credit',
      deliveryTo: outwardHead.delvTo
    });

    setTimeout(() => {
      // this.deliveryTo.setValue(outwardHead.delvTo);
      this.preturnInvoiceHeadFormGroup.controls['compId'].setValue(outwardHead.compId);
    }, 1000);
    this.preturnInvoiceHeadFormGroup.controls['outwardDate'].disable();
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
      tax:[{value: 0, disabled: true}],
      mrp: [{ value: '', disabled: true }],
      hsncode:[{ value: '', disabled: true }],
      salDiscType: [''],
      salDiscType1:[(this.firmPreferences !== null && this.firmPreferences !== undefined) && this.firmPreferences.allowDisc2 !== 0 ? '' : 1],
      salDisc1: [''],
      salDisc: [''],
      compId: [0],
      productStatus: ['']
    });

  }

  // get the List of items onto the Detail Table
  getpreturnDetailTableList(preturnHeadId: number) {
    this.subscriptions.push(this.outwardService.getOutwardEntryDetails(preturnHeadId).subscribe(result => {
      if (result && Object.keys(result).length > 0) {
        //head
        this.outwardHead = result.outwardHead;
        this.invValuefinal = result.outwardHead.invValue;
        this.roundedValue = this.routeService.formatAmount(Math.ceil(this.invValuefinal).toString());
        this.outwardHeadBtnText = UpdateText;
        this.bindOutWardHeadControls(this.outwardHead);
        //detail
        this.outWardDetail = result.outwardDetails;
        // this.outwardDtlBtnSaveCloseTxt = UpdateCloseText;
        // this.outwardDtlBtnSaveCloseTxt.includes
        // this.outwardDtlBtnSaveContinueTxt = UpdateContinueText;
        // taxes
        this.outwardFinalSaveBtnText = UpdateText;
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

  
  //Details Table List View 
  tableDefinition: TableDefinition = {
    columns: [
      { id: 'productMaster.prodName', name: 'Product Name', value: (obj) => obj['prodName'] ? obj['prodName']  : '' },
      { id: 'productMaster.prodShName', name: 'Sh.Name', value: (obj) => obj['prodShName'] ? obj['prodShName'] ? obj['prodShName'] : '' : '' },
      { id: 'batch', name: 'Batch No', value: (obj) => obj['batch'] ? obj['batch'] : '' },
      { id: 'expdate', name: 'Exp.Date', value: (obj) => obj['expdate'] ? this.datePipe.transform(obj['expdate'], 'MM-yy') : '' },
      { id: 'issQty', name: 'Qty', 
        value: (obj) => {
          let issQty = obj['issQty'] ? obj['issQty'] : '';
          return issQty ? this.routeService.formatAmount(issQty.toString()):'';
          // return issQty ? parseFloat(issQty).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
      }},
      { id: 'issQtyDisc', name: 'Qty.Disc.',
        value: (obj) => {
          let issQtyDisc = obj['issQtyDisc'] ? obj['issQtyDisc'] : '';
          return issQtyDisc ? this.routeService.formatAmount(issQtyDisc.toString()):'';
          // return issQtyDisc ? parseFloat(issQtyDisc).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
      }},
      {id:  'purRate',  name:  'Pur.Rate', 
        value: (obj) => {
          let purRate = obj['purRate'] ? obj['purRate'] : '';
          return purRate ? this.routeService.formatAmount(purRate.toString()):'';
          // return purRate ? parseFloat(purRate).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
      }},
      {id:  'mrp',  name:  'MRP',
        value: (obj) => {
          let mrp = obj['mrp'] ? obj['mrp'] : '';
          return mrp ? this.routeService.formatAmount(mrp.toString()):'';
          // return mrp ? parseFloat(mrp).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
      }},
      {id:  'purDisc',  name:  'Disc', 
        value: (obj) => {
          let purDisc = obj['purDisc'] ? obj['purDisc'] : '';
          return purDisc ? this.routeService.formatAmount(purDisc.toString()):'';
          // return purDisc ? parseFloat(purDisc).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
      }},
      {id:  'tax',  name:  'Tax(%)', 
        value: (obj) => {
          let tax = obj['tax'] ? obj['tax'] : '';
          return tax ? this.routeService.formatAmount(tax.toString()):'';
          // return tax ? parseFloat(tax).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
      }},
      {id:  'grsValue',  name:  'Gross Value', 
        value: (obj) => {
          let grsValue = obj['grsValue'] ? obj['grsValue'] : '';
          return grsValue ? this.routeService.formatAmount(grsValue.toString()):'';
          // return grsValue ? parseFloat(grsValue).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
      }},
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
            method: (obj) => this.deletepreturnDetailItem(obj),
            name: 'Delete',
            icon: 'assets/new_delete2.png',
            style: ActionStyle.DELETE,
            dialogProperties: { title: 'Delete preturn Invoice Detail', templateRef: () => this.deleteTemplate() }
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
    this.showpreturnDetailTemplate();
    this.outwardDetailId = data.outwardDetailId;
    this.updateDetailData = data;
    this.outwardDtlBtnSaveCloseTxt = UpdateCloseText;
    this.outwardDtlBtnSaveContinueTxt = UpdateContinueText;
    this.selectedProdid = data.prodId;
    this.fromlistFlag = true;
    const outwardQtyStatus = this.statusDropdown.find(x => x.code === data.outwardQtyStatus);
    this.preturnInvoiceDetailFormGroup.patchValue({
      prodId: data.prodName,
      prodShName: data.prodShName,
      prodPackName: data.prodPackName,
      batch: data.batch,
      expdate: data.expiryDate,
      issQty:  this.routeService.formatAmount(data.issQty.toString()),
      issQtyDisc: this.routeService.formatAmount(data.issQtyDisc.toString()),
      tranRate: this.routeService.formatAmount(data.tranRate.toString()),
      actRate: this.routeService.formatAmount(data.actRate.toString()),
      salDisc:this.routeService.formatAmount(data.salDisc.toString()),
      salDiscType: data.salDiscType,
      hsncode: data.hsncode,
      mrp: this.routeService.formatAmount(data.mrp.toString()),
      tax:this.routeService.formatAmount(data.tax),
      salDiscType1: this.firmPreferences.allowDisc2 != 0 ? data.salDiscType1 : 1,
      salDisc1:this.routeService.formatAmount(data.salDisc1.toString()),
      productStatus: outwardQtyStatus ? outwardQtyStatus.code : ''
    });

    setTimeout(() => {
      this.preturnInvoiceDetailFormGroup.controls['batch'].setValue(data.batch);
      this.getProductPreviousData();
    }, 1000);
    this.preturnInvoiceDetailFormGroup.markAsTouched();
  }

 
  expdate(event) {
    const str = event.substring(0, event.length - 3);
    var dateObj = new Date();
    var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    var year = ('0' + dateObj.getFullYear()).slice(-2);
    var fid = (event).slice(-2);
    const mon = event.slice(0, 2)
    if (event.length < 5) {
       this.preturnInvoiceDetailFormGroup.get('expdate').setErrors({'greaterValue1': true})
    } else {
      if (year > fid) { this.preturnInvoiceDetailFormGroup.get('expdate').setErrors({   'greaterValue': true })
      } else if (str > 12) {
        this.preturnInvoiceDetailFormGroup.get('expdate').setErrors({
          'greaterValue1': true
        })
      } else if (year === fid && mon < month) {
        this.preturnInvoiceDetailFormGroup.get('expdate').setErrors({  'greaterValue1': true })
      } else {
        this.preturnInvoiceDetailFormGroup.get('expdate').setErrors(null)
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
    return this.deletepreturnHeadTemplate;
  }

  deletepreturnDetailItem(item?: any) {
    this.outwardService.deleteOutwardDetailItem(item.outwardDetailId).subscribe(data =>
    {
      if(ResponseUtils.isStatus200(data)){
        this.refresh()
      }
       ResponseUtils.isStatus404(data) ?
          AppMessageUtils.warningMessage('preturn Detail already deleted') : ''
    });
  }

  refresh(): void {
    //   this.invoiceHeadDetails(this.invoiceHeadId);
    this.getpreturnDetailTableList(this.outwardHeadId);
  }


  // To open the Detail PopUp
  showpreturnDetailTemplate(): void {
    this.dialogService.closeAllDialogues();
    this.outwardDetailId = 0;
    this.selectedProdid = 0;
    this.preturnInvoiceDetailFormGroup.reset();
    let dialogInputs: DialogData = {} as DialogData;
    dialogInputs.title = addItem;
    dialogInputs.closeBtnLabel = 'Close';
    this.showAutoCompleteData = false;
    dialogInputs.dialogClass = DialogClass.MEDIUM;
    dialogInputs.templateRef = () => this.preturnEntryDetailTemplate;
    dialogInputs.buttonTemplates = [({ templateRef: this.preturnEntryDetailButtonTemplate } as DialogButtonTemplate)]
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
      { name: 'Product Name', value: (obj) => obj['prodName'] ? obj['prodName'] : '', fxFlex: 17,fxFlex1:17, isKeyColumn: true },
      { name: 'Product Pack', value: (obj) => obj['prodPackName'] ? obj['prodPackName']  : '', fxFlex: 15,fxFlex1:15 },
      { name: 'Qnt', value: (obj) => obj['closingQty'] ? obj['closingQty'] : '', fxFlex: 9,fxFlex1:9 },
      { name: 'HSN Code', value: (obj) => obj['hsncode'] ? obj['hsncode'] : '', fxFlex: 13,fxFlex1:13 },
      { name: 'Tax%', value: (obj) => obj['tax'] ? obj['tax'] : '', fxFlex: 9,fxFlex1:9 },
      { name: 'Sh.Name', value: (obj) => obj['prodShName'] ? obj['prodShName'] : '', fxFlex: 13,fxFlex1:13 },
      { name: 'CompanyName', value: (obj) => obj['compName'] ? obj['compName'] : '', fxFlex: 24 ,fxFlex1:24}
    ]
  };

  // To patch the product details onto the other controls
  bindProductDetails(data) {
    this.prodData = data;
    this.preturnInvoiceDetailFormGroup.patchValue({
      prodShName: data.prodShName,
      prodPackName: data.prodPackName,
      hsncode :data.hsncode,
    });

    // this.getProductPreviousData(data);
  }

  //Batch Autocopmlete
  batchAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Batch',
    isRequired: true,
    dataSourceFn: (name) => this.inwardService.GetSupplierPurchaseHistoryBatch(this.accName.value.accId,this.selectedProdid ? this.selectedProdid : 0,this.preturnInvoiceHeadFormGroup.controls.outwardDate.value, name),
    keyString: 'batch',
    validators: [Validators.required]
  }
  

  //Batch Autocomplete Options Table View
  batchOptsTable: OptionsTableDefinition = {
    panelWidth: 700,
    columns: [
      { name: 'Batch', value: (obj) => obj['batch'] ? obj['batch'] : '', fxFlex: 9,fxFlex1:9, isKeyColumn: true },
      { name: 'Exp.Date', value: (obj) => obj['expdate'] ? this.datePipe.transform(obj['expdate'],'MM-yy') : '', fxFlex: 9,fxFlex1:9 },
      { name: 'InvQty', value: (obj) => obj['invQty'] ? obj['invQty'] : '', fxFlex: 9,fxFlex1:9 },
      { name: 'Qty.Disc.', value: (obj) => obj['invQtyDisc'] ? obj['invQtyDisc'] : '', fxFlex: 9 , fxFlex1:9},
      { name: "Inv.Rate", value: (obj) => obj['purRate'] ? obj['purRate'] : '', fxFlex: 9,fxFlex1:9 },
      { name: "Disc(%)", value: (obj) => obj['discValue'] ? obj['discValue'] : '', fxFlex: 9,fxFlex1:9 },
      { name: "MRP", value: (obj) => obj['mrp'] ? obj['mrp'] : '', fxFlex: 9,fxFlex1:9 },
      { name: "Tax%", value: (obj) => obj['tax'] ? obj['tax'] : '', fxFlex: 9 ,fxFlex1:9},
      { name: "HSN  code", value: (obj) => obj['hsncode'] ? obj['hsncode'] : '', fxFlex: 9,fxFlex1:9 },
      { name: 'ClsQty', value: (obj) => obj['closingQty'] ? obj['closingQty'] : '', fxFlex: 6,fxFlex1:6 },
      { name: 'Cls.Qty.Disc.', value: (obj) => obj['closingQtyDisc'] ? obj['closingQtyDisc'] : '', fxFlex: 11 , fxFlex1:11},
      
    ]
  };

  // To patch the batch details onto the other controls`
  bindBatchDetails(data) {
    this.preturnInvoiceDetailFormGroup.patchValue({
      prodShName: data.prodShName,
      prodPackName: data.prodPackName,
    });

    // this.getProductPreviousData(data);
  }

  // discount Autocomplete View for Dropdown
  discountAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Discount',
    isRequired: true,
    dataSourceFn: () => of([...dropdowns.discount]),
    isStaticType: true,
    keyString: 'name'
  }




  // To "Save" or "Update" the preturn Detai
  onSaveOrUpdateOutwardDetail(flag: boolean) {
    const postOutwardObj = this.preturnInvoiceDetailFormGroup.value;
    let  expdate:any = '';
    console.log();
    if(this.purhistoryData.expdate){
      expdate = this.datePipe.transform(this.purhistoryData.expdate, 'MM-yy');//this.purhistoryData.expdate
    }
    const payload = {
      outwardDetailId: +this.outwardDetailId ? this.outwardDetailId :0, 
      outwardHeadId: this.outwardHeadId ? +this.outwardHeadId : 0,
      // outwardDate:  this.purchaseHead ? this.purchaseHead.inwardDate : this.purchaseHeadFormGroup.controls.inwardDate.value,,
      outwardHeadDate:  this.preturnInvoiceHeadFormGroup.controls.outwardDate.value,
      inwardDetailId: +this.purhistoryData.inwardDetailId,
      // inwardDetailId:0,
      inwardHeadNo: this.purhistoryData.inwardHeadNo,
      prodId: typeof(postOutwardObj.prodId.prodId) === "number" ?  +postOutwardObj.prodId.prodId : this.updateDetailData.prodId,
      hsncode:0,
      batch: this.purhistoryData.batch,
      expiryDate: expdate,
      issQty: +postOutwardObj.issQty,
      issQtyDisc:  +postOutwardObj.issQtyDisc,
      tranRate: +postOutwardObj.tranRate,
      actRate: 0,
      inwardRate: 0,
      // psQty: +this.purhistoryData.psQty,
      psQty:0,
      // psQtyDisc:  +this.purhistoryData.psQtyDisc,
      psQtyDisc:0,
      retStatus: 0,
      // retQty: +this.purhistoryData.retQty,
      retQty:0,
      // retQtyDisc: +this.purhistoryData.retQtyDisc,
      retQtyDisc:0,
      salDiscType: this.firmPreferences.discTypeOption != 3 ? this.firmPreferences.discTypeOption : postOutwardObj.salDiscType ? postOutwardObj.salDiscType : 0,
      salDisc: postOutwardObj.salDisc? +postOutwardObj.salDisc:0,
      salDiscType1: postOutwardObj.salDiscType1 ? postOutwardObj.salDiscType1 : 1,
      salDisc1: postOutwardObj.salDisc1 ? postOutwardObj.salDisc1 : 0,
      // mrp: +this.purhistoryData.mrp,
      mrp: postOutwardObj.mrp ? postOutwardObj.mrp : 0,
      mrpValue: 0,
      inclTaxVal: 0,
      otherCharges: 0,
      outwardQtyStatus:this.preturnInvoiceDetailFormGroup.controls.productStatus.value,
      prodStatus: 0,
      taxSlabId: postOutwardObj.prodId.taxSlabId ? +postOutwardObj.prodId.taxSlabId : this.updateDetailData.taxSlabId,
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
      prodName: postOutwardObj.prodId.prodName ? postOutwardObj.prodId.prodName : this.updateDetailData.prodName ,
      stkRate: 0,
      // hsnId: +this.purhistoryData.hsnId,
      hsnId:0,
      hsnDescription: "",
      // expiryDate: new Date(postOutwardObj.expdate),
      firmYearId: 0,
      tranTypeHeadId: 4
    }
  
    this.subscriptions.push(this.outwardService.postSaleInvoiceDetail(payload).subscribe(data => {
      if (ResponseUtils.isStatus200(data)) {
        this.getpreturnDetailTableList(this.outwardHeadId);
        const productNameElement = document.getElementById('pProductName');

          if (productNameElement) {
            const focusableElement = productNameElement.querySelector('input');

            if (focusableElement) {
              // (focusableElement as HTMLElement).focus();
              var x:any = (focusableElement as HTMLElement);
              // x.value = " "
              x.focus();
            }
              
          }
        // AppMessageUtils.successMessage('Inward return Detail Saved Successfully', this.formAlertId);
      }
      ResponseUtils.isStatus409(data) ?
        AppMessageUtils.warningMessage('Inward return Detail already exists', this.formAlertId) : ''
    }));
    if (!flag) {
      this.outwardDtlBtnSaveCloseTxt = SaveCloseText;
      this.outwardDtlBtnSaveContinueTxt = SaveContinueText;
      // this.outwardHeadId = 0;
      this.outwardDetailId = 0;
      this.purhistoryData = ''
      this.resetDetailForm();
    }
    if (flag) {
      this.dialogService.closeAllDialogues();
      this.outwardDtlBtnSaveCloseTxt = SaveCloseText;
      this.outwardDtlBtnSaveContinueTxt = SaveContinueText;
      // this.outwardHeadId = 0;
      this.outwardDetailId = 0;
      this.purhistoryData = '';
      this.resetDetailForm();
    }
  }

  resetDetailForm() {
    this.preturnInvoiceDetailFormGroup.reset();
    this.selectedProdid = 0;
  }

  // Validation for issQty input
  tranOutIssQty(value) {
    this.closingQty = this.preturnInvoiceDetailFormGroup.controls['batch'].value.closingQty;
    if (+value > this.closingQty) {
      this.preturnInvoiceDetailFormGroup.get('issQty').setErrors({ 'greaterValue': true }, { emitEvent: true });
    }
    // const numericValue = parseFloat(value);
  }

  // Validation for issQtyDisc input
  tranOutIssQtyDisc(value) {
    this.closingQtyDisc = this.preturnInvoiceDetailFormGroup.controls['batch'].value.closingQtyDisc;
    if (+value > this.closingQtyDisc) {
      this.preturnInvoiceDetailFormGroup.get('issQtyDisc').setErrors({ 'greaterValue': true }, { emitEvent: true });
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
      outwardFinalSaveObj.frtValue = 0;
      outwardFinalSaveObj.remarks = this.preturnInvoiceFinalSaveFormGroup.controls.remarks.value;
      outwardFinalSaveObj.otherCharges = this.preturnInvoiceFinalSaveFormGroup.controls.otherCharges.value;
      
      
      
      
      const payload = {
        outwardHead: outwardFinalSaveObj,
        outwardPreTaxes:this.outwardPretaxes,
        outwardTaxes:this.outwardTaxes,
        outwardDetails:this.outWardDetail,
        // isUpdate:true
      }

      this.subscriptions.push(this.outwardService.postOrUpdateOutwardFinalSave(payload).subscribe(data => {
        console.log("qw",data);
        if (ResponseUtils.isStatus200(data)) {
          AppMessageUtils.successMessage('Saved Successfully', this.formAlertId);
          this.router.navigate(['pharma/inward/purchaseReturns']);
        }
        ResponseUtils.isStatus409(data) ?
          AppMessageUtils.warningMessage('Inward return already exists', this.formAlertId) : ''
      }));
  }

  onAdjValue(adjValue, adjCtrlName) {
    if (adjValue && adjValue > 0) {
      this.preturnInvoiceFinalSaveFormGroup.controls[adjCtrlName].enable();
    } else {
      this.preturnInvoiceFinalSaveFormGroup.controls[adjCtrlName].disable();
    }
  }

  bindFinalSaveControls(outwardHead) {
    this.preturnInvoiceFinalSaveFormGroup.patchValue({
      otherDed: outwardHead.otherDed ? outwardHead.otherDed : 0,
      otherDedAccId: outwardHead.otherDedAccId ? outwardHead.otherDedAccId : 0,
      otherAdd: outwardHead.otherAdd ? outwardHead.otherAdd : 0,
      otherAddAccId: outwardHead.otherAddAccId ? outwardHead.otherAddAccId : 0,
      hamaliValue: outwardHead.hamaliValue ? outwardHead.hamaliValue :0,
      frtValue: outwardHead.frtValue ? outwardHead.frtValue :"",
      remarks: outwardHead.remarks ? outwardHead.remarks : ""
    });
  }

  resetFinalSave() {
    this.preturnInvoiceFinalSaveFormGroup.reset();
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

  clikRegisters(){
    this.inwardService.sendRegData(null);
    this.router.navigate(['pharma/inward/purchaseRegister']);
  }


 

  getProductPreviousData(){
        this.inwardService.GetSupplierPurchaseHistoryBatch(this.accName.value.accId,this.selectedProdid ? this.selectedProdid : 0,this.preturnInvoiceHeadFormGroup.controls.outwardDate.value, '').subscribe(res =>{
      if(res){
        this.historydataSource = res.map(list => {
          list['expdate'] = this.datePipe.transform(list.expdate, 'MM-yy');//this.formatDate(list.expdate);
          return list;
        });
          this.purhistoryData = this.historydataSource.find(x=> x.inwardDetailId === this.updateDetailData.inwardDetailId);
       
      }
    })
  }

  validQty(value){
    const qty = this.purhistoryData.invQty - this.purhistoryData.retQty;

    if(value > qty){
      this.preturnInvoiceDetailFormGroup.get('issQty').setErrors({'invalidInput':true});
    }else{
      this.preturnInvoiceDetailFormGroup.get('issQty').setErrors(null);
    }

  }

  validQtyDisc(value){
    const qty = this.purhistoryData.invQtyDisc - this.purhistoryData.retQtyDisc;

    if(value > qty){
      this.preturnInvoiceDetailFormGroup.get('issQtyDisc').setErrors({'invalidInput':true});
    }else{
      this.preturnInvoiceDetailFormGroup.get('issQtyDisc').setErrors(null);
    }

  }

  showPURHistoryTemplate():  void {
    let dialogInputs:  DialogData = {} as DialogData;
    dialogInputs.title = 'PUR History';
    // this.dialogService.closeAllDialogues();
    dialogInputs.dialogClass = DialogClass.MEDIUM;
    dialogInputs.closeBtnLabel = 'Close';
    dialogInputs.templateRef = () => this.purhistory;
    // dialogInputs.buttonTemplates = [({ templateRef:  this.purchaseDetailButtonTemplate } as DialogButtonTemplate)]
    this.dailogData =  this.dialogService.showDialogue(dialogInputs, { disableClose:  true });
  }

  selectProduct(data){
   console.log(data);
   this.purhistoryData = data;
   this.bindProductBatchDetails(data);
  }

  bindProductBatchDetails(data) {
    var dt = data.expdate;
    data.expdate = data.expdate,
    this.preturnInvoiceDetailFormGroup.patchValue({
      batch: data.batch,
      mrp: this.routeService.formatAmount(data.mrp),
      tax:this.routeService.formatAmount(data.tax),
      expdate: this.datePipe.transform(data.expdate, 'MM-yy'),
      disc: data.salDisc1,
      tranRate: data.purRate
    });
  }

  confirmDelete() {
    // return this.deletePurchase
    document.getElementById('deletePopup').style.display = 'flex';
  }
  
   closePopup() {
    // Close the confirmation popup
    document.getElementById('deletePopup').style.display = 'none';
  };
  
   deleteItem(){
   this.deleteSalesHead(this.outwardHeadId)
    // Here, yout can add your delete functionality
    AppMessageUtils.successMessage('Return Head Deleted Successfully!')
    console.log("Item deleted!");
  
    // Close the popup after deletion
    this.closePopup();
  }

  deleteSalesHead(salesHeadRowData?: any) {
    this.outwardService.deleteSalesHeadById(salesHeadRowData).subscribe(data =>
      ResponseUtils.isStatus200(data) ? this.refresh() :
        ResponseUtils.isStatus404(data) ?
          AppMessageUtils.warningMessage("Return Head already deleted") : '');
  }
    
}




