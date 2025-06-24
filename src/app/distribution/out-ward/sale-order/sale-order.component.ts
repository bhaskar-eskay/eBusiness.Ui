import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, MatSelect, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DialogButtonTemplate, DialogClass, DialogData } from 'src/app/shared/components/dialog/dialog.component';
import { MasterService } from '../../Master/master.service';
import { InwardService } from '../../in-ward/in-ward.service';
import { DialogService } from 'src/app/shared/components/dialog/dialog.service';
import { DatePipe } from '@angular/common';
import { of, ReplaySubject, Subject, Subscription } from 'rxjs';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { CompanyMaster } from 'src/app/shared/models/master-models';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { OutwardService } from '../outward.service';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import * as lodash from 'lodash';
import { HttpService } from 'src/app/shared/services/http.service';
import { SalePrefix, SaveText, UpdateText } from 'src/app/shared/app-constants';
export interface PeriodicElement {
  // shName: string;
  // ProductName: string;
  // ProductPack: string;
  // ProductType: string;
  // companyName: string;
  // tax: string;
  // hsncode: string;

}

@Component({
  selector: 'app-sale-order',
  templateUrl: './sale-order.component.html',
  styleUrls: ['./sale-order.component.scss', '../out-ward.component.scss']
})
export class SaleOrderComponent implements OnInit {
  SaleOrderHeadFormGroup: FormGroup;
  saleOrderDetailFormGroup: FormGroup;
  detailburron: string;
  detailsave: string;
  today: any;
  @ViewChild('CompanyTab', { static: false }) CompanyTab: MatSelect;
  @ViewChild('saleOrderDetail', { static: true }) saleOrderDetail;
  @ViewChild('saleOrderDetailButton', { static: true }) saleOrderDetailButton;
  @ViewChild('deletePurchaseHeadTemplate', { static: true }) deletePurchaseHeadTemplate;
  @ViewChild('purhistory', { static: true }) purhistory;
  protected _onDestroy = new Subject<void>();
  private subscriptions: Subscription[] = [];
  firmPreferences: any;
  minDate: any;
  maxDate: any;
  Companydata: CompanyMaster[];
  compGroupName = new FormControl('');
  accName = new FormControl('');
  public filteredCompanyMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
  CompanyTabMultiFilterCtrl = new FormControl('');
  saleHeadBtnText = 'Save';
  saleOrderHeadId: any;
  dataSource = new MatTableDataSource();
  outwardHeadNo: any;
  subscription: Subscription = new Subscription();
  actions: any;
  invoiceHeadId: any;
  showAutoCompleteData: any;
  selectedProdid: any;
  prodid: number;
  inwardDetailId: any;
  updateDetailData: any;
  issuedQty: any;
  validdate: Date;
  detailbutton: string;
  actRetQty: any;
  rqry: any;
  outwardHeadid: any;
  outwardDetailid: any;
  tax: any;
  expdate: string;
  taxslabId: any;
  fromlistFlag: boolean;
  preturnInvoiceRowData: any;
  action: any;
  outwardHeadId: any;
  outwardHead: any;
  outwardHeadBtnText: string = SaveText;
  outWardDetail: any;
  outwardFinalSaveBtnText: any;
  outwardHeadObj: { ordHeadId: any; ordDate: any; tranTypeHeadId: number; ordHeadNo: any; compId: any; accId: any; grsValue: number; taxValue: number; ordValue: number; cancStat: boolean; createdBy: number; createdOn: any; modifiedBy: number; modifiedOn: any; isEditable: boolean; isDeletable: boolean; ordCancStat: boolean; };
  formAlertId: string;
  outwardDetailId: any;
  constructor(private router: Router, private inwardservice: InwardService, private masterService: MasterService, private formBuilder: FormBuilder, private datePipe: DatePipe,
    private dialogService: DialogService, private outwardService: OutwardService, private todayDate:HttpService) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  historytableDefinition: TableDefinition = {
    columns: [
      { id: 'prodShName', name: 'Product Name', value: (obj) => obj['prodShName'] ? obj['prodShName'] ? obj['prodShName'] : '' : '' },
      { id: 'prodName', name: 'Product Pack', value: (obj) => obj['prodName'] ? obj['prodName'] ? obj['prodName'] : '' : '' },
      { id: 'purRate', name: 'Rate', value: (obj) => obj['purRate'] ? obj['purRate'] : '' },
      { id: 'company', name: 'Company', value: (obj) => obj['batch'] ? obj['batch'] : '' },
      { id: 'invQty', name: 'Qty', value: (obj) => obj['invQty'] ? obj['invQty'] : '' },
      { id: 'invQtyDisc', name: 'Qty.Disc', value: (obj) => obj['invQtyDisc'] ? obj['invQtyDisc'] : '' },
      { id: 'invQtyDisc', name: 'HSN Code', value: (obj) => obj['invQtyDisc'] ? obj['invQtyDisc'] : '' },
      { id: 'invQtyDisc', name: 'Tax', value: (obj) => obj['invQtyDisc'] ? obj['invQtyDisc'] : '' },
      { id: 'invQtyDisc', name: 'Gross.Value', value: (obj) => obj['invQtyDisc'] ? obj['invQtyDisc'] : '' },
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
            dialogProperties: { title: 'Delete Company Group', templateRef: () => this.deleteTemplate() }
          }
        ]
      },
    ],
    disablePagination: true,
    disableFilter: true
  };


  customProductOptsTable: OptionsTableDefinition = {
    panelWidth: 1900,
    columns: [
      { name: 'Product Name', value: (obj) => obj['prodName'] ? obj['prodName'] : '', fxFlex: 34, fxFlex1: 34, isKeyColumn: true },
      { name: 'Product Pack', value: (obj) => obj['prodPackName'] ? obj['prodPackName'] : '', fxFlex: 12, fxFlex1: 12 },
      { name: 'Qty', value: (obj) => obj['closingQty'] ? obj['closingQty'] : '', fxFlex: 12, fxFlex1: 12 },
      { name: 'Qty.Disc', value: (obj) => obj['closingQtyDisc'] ? obj['closingQtyDisc'] : '', fxFlex: 12, fxFlex1: 12 },
      { name: 'HSN Code', value: (obj) => obj['hsncode'] ? obj['hsncode'] : '', fxFlex: 12, fxFlex1: 12 },
      { name: 'Tax%', value: (obj) => obj['tax'] ? obj['tax'] : '', fxFlex: 10, fxFlex1: 10 },
      { name: 'Sh.Name', value: (obj) => obj['prodShName'] ? obj['prodShName'] : '', fxFlex: 10, fxFlex1: 10 },
      { name: 'CompanyName', value: (obj) => obj['compName'] ? obj['compName'] : '', fxFlex: 22, fxFlex1: 22 }]
  };

  //Custom Accounts Autocomplete 
  customAccountAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Customer Name',
    isRequired: true,
    dataSourceFn: (name) => this.inwardservice.getCustomAccountsByName(name),
    minCount: 2,
    keyString: 'accName'
  }
  customProductAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Product Name',
    isRequired: true,
    dataSourceFn: (name) => this.showAutoComplete(name),
    minCount: 2,
    keyString: 'prodName'
  }


  companyTab(event: KeyboardEvent) {
    if (event.keyCode === 9) {
      const statetab = this.CompanyTab.options;
      const result = statetab.find(x => x.active === true);
      this.SaleOrderHeadFormGroup.controls.compId.setValue(result.value);
      const data = this.Companydata.find(x => x.compId == result.value)
      if (data) {
        this.compGroupName.setValue(data.compGroupName);
      }

    }
    else if (event.keyCode === 13) {
      const data = this.Companydata.find(x => x.compId == this.SaleOrderHeadFormGroup.controls.compId.value)
      if (data) {
        this.compGroupName.setValue(data.compGroupName)
      }

      // setTimeout(() => {
      //   this.boxfocus.nativeElement.focus();
      // }, 1000);
    }


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

  ngOnInit() {

    this.firmPreferences = JSON.parse(sessionStorage.getItem('firmPreferences'));
    if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
      this.minDate = this.firmPreferences.finSdate;
      this.maxDate = this.firmPreferences.finEdate;
    }
    this.today = this.todayDate.localDate();
    this.SaleOrderHeadFormGroup = this.buildHeadFormGroup();
    this.saleOrderDetailFormGroup = this.buildDetailFormGroup();
    this.getAllCompMaster();

    this.SaleOrderHeadFormGroup.controls.accName.valueChanges.subscribe(res => {
      if (typeof res === 'object') {
        // this.supplierData = res;
        this.bindSuplierDetails(res);
      }
    });
    this.outwardService.getheadData$.subscribe(result => {
      if (result.salesHead && result.action) {
        if (Object.keys(result.salesHead).length > 0) {
          this.fromlistFlag = true;
          this.preturnInvoiceRowData = result.salesHead;
          this.action = result.action;
          this.outwardHeadId = this.preturnInvoiceRowData.ordHeadId;
          this.getpreturnDetailTableList(this.outwardHeadId);
          // this.getOrderFullDetails(this.outwardHeadId);
          setTimeout(() => {
            if (this.action == "delete") {
              this.confirmDelete();
            }
          }, 1500);
        }
      }
    });
   

    this.saleOrderDetailFormGroup.get('prodId').valueChanges.subscribe((value) => {
      if (value && this.saleOrderDetailFormGroup.get('prodId').dirty) {
        this.showAutoCompleteData = true;
      }
      if (value && typeof value === 'object') {
        this.selectedProdid = value.prodId;
        // value.prodId 2087
        this.bindProductDetails(value);
      }
      // if (value) {
      //   this.getHistoryDetails(this.salesReturnFormGroup.controls.accName.value.accId,value,this.today); // Call your method when value changes
      // }
    });

  }


  showAutoComplete(name) {
    if (this.showAutoCompleteData) {
      // return this.inwardservice.productCusromerSalesHistory(this.SaleOrderHeadFormGroup.controls.accName.value.accId, name, this.today);
      return this.inwardservice.getCustomProductByName(name,this.SaleOrderHeadFormGroup.controls.compId.value.accId, SalePrefix)
    } else {
      return of([])
    }
  }

  headpatch(data) {
    this.outwardHeadNo = data.inwardHeadNo
    this.SaleOrderHeadFormGroup.controls.compId.setValue(data.compId);
    this.SaleOrderHeadFormGroup.controls.salDate.setValue(data.ordDate);
    this.SaleOrderHeadFormGroup.controls.gstin.setValue(data.ltoNo);
    this.SaleOrderHeadFormGroup.controls.accName.setValue(data.accName);
    this.SaleOrderHeadFormGroup.controls.accShName.setValue(data.accShName);
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
    this.deleteOrderHeadById(this.outwardHeadId)
    // Here, yout can add your delete functionality
    AppMessageUtils.successMessage('Order Head Deleted Successfully!')
    console.log("Item deleted!");

    // Close the popup after deletion
    this.closePopup();
  }

  deleteOrderHeadById(orderHeadRowData?: any) {
    this.outwardService.deleteOrderHeadById(orderHeadRowData).subscribe(data =>
      ResponseUtils.isStatus200(data) ? this.refresh() :
        ResponseUtils.isStatus404(data) ?
          AppMessageUtils.warningMessage("Return Head already deleted") : '');
  }

  refresh(): void {
    this.getpreturnDetailTableList(this.outwardHeadId);
  }

  private buildHeadFormGroup(): FormGroup {
    return this.formBuilder.group({
      salDate: [this.today],
      accName: [''],
      compId: [0],
      accShName: [{ value: '', disabled: true }],
      gstin: [{ value: '', disabled: true }],
      remarks: "",
    })
  }

  private buildDetailFormGroup(): FormGroup {
    return this.formBuilder.group({
      prodId: [''],
      shname: [{value: '', disabled: true }],
      productpack: [{value: '', disabled: true }],
      rate: [{value: '', disabled: true }],
      qty: [''],
      qtyDisc: [''],
      hsncode: [{value: '', disabled: true }],
      tax: [{ value: '', disabled: true }],
      company: [{value: '', disabled: true }],
      taxSlabId: [''],
      mrp: [''],
    })
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

  showSaleDetailTemplate(data): void {
    let dialogInputs: DialogData = {} as DialogData;
    if (data === 'Add') {
      this.detailburron = 'Save & Continue';
      this.detailsave = 'Save & Close';
      dialogInputs.title = 'Add Item';
      this.saleOrderDetailFormGroup.reset();
      this.selectedProdid = 0;
      this.outwardDetailId = 0;
    } else {
      this.detailburron = 'Update & Continue';
      this.detailsave = 'Update & Close';
      dialogInputs.title = 'Edit Item';
    }
    // this.dialogService.closeAllDialogues();
    // this.showAutoCompleteData = false;
    dialogInputs.dialogClass = DialogClass.MEDIUM;
    dialogInputs.closeBtnLabel = 'Close';
    dialogInputs.templateRef = () => this.saleOrderDetail;
    dialogInputs.buttonTemplates = [({ templateRef: this.saleOrderDetailButton } as DialogButtonTemplate)]
    this.dialogService.showDialogue(dialogInputs, { disableClose: true });
  }

  bindProductDetails(data) {
    this.saleOrderDetailFormGroup.patchValue({
      shname: data.prodShName,
      productpack: data.prodPackName,
      hsncode: data.hsncode,
      tax: data.tax,
      rate: data.sRate,
      company: data.compName
    });
    this.expdate = this.datePipe.transform(data.expdate,'MM-yy');
  }

  resetDialog() {
    this.saleOrderDetailFormGroup.reset();
  }

    addOrEdit(data) {
      console.log(data);
      this.showSaleDetailTemplate('UpDate');
      this.outwardDetailId = data.ordDetailId;
      this.updateDetailData = data;
      this.selectedProdid = data.prodId;
      this.fromlistFlag = true;
      // const outwardQtyStatus = this.statusDropdown.find(x => x.code === data.outwardQtyStatus);      
      setTimeout(() => {        
      this.saleOrderDetailFormGroup.patchValue({
        prodId: data.prodName,
        // prodName: data.prodName,
        shname: data.prodShName,
        productpack: data.prodPackName,
        hsncode: data.hsncode,
        tax: data.tax,
        taxSlabId: data.taxSlabId,
        mrp: data.mrp,
        rate: data.ordRate,
        company: data.compName,
        qty: data.ordQty,
        qtyDisc: data.ordQtyDisc,
        // productStatus: outwardQtyStatus ? outwardQtyStatus.code : ''
      });
      }, 800);
      this.saleOrderDetailFormGroup.markAsTouched();
    }

  deleteTemplate() {
    return this.deletePurchaseHeadTemplate;
  }

    isDeleteDisabled() {
    // console.log(data);
    return false;
  }

  deletepreturnDetailItem(item?: any) {
    this.outwardService.deleteOrderDetailItem(item.ordDetailId).subscribe(data => {
      if (ResponseUtils.isStatus200(data)) {
        this.refresh()
      }
      ResponseUtils.isStatus404(data) ?
        AppMessageUtils.warningMessage('Sale Order Entry already deleted') : ''
    });
  }

  tableDefinition: TableDefinition = {
    columns: [
      { id: 'prodName', name: 'Product Name', value: (obj) => obj['prodName'] ? obj['prodName'] ? obj['prodName'] : '' : '' },
      { id: 'prodShName', name: 'Sh.Name', value: (obj) => obj['prodShName'] ? obj['prodShName'] ? obj['prodShName'] : '' : '' },
      { id: 'prodPackName', name: 'Product Pack', value: (obj) => obj['prodPackName'] ? obj['prodPackName'] : '' },
      { id: 'ordQty', name: 'Qty', value: (obj) => obj['ordQty'] ? obj['ordQty'] : '' },
      { id: 'ordQtyDisc', name: 'Qty.Disc', value: (obj) => obj['ordQtyDisc'] ? obj['ordQtyDisc'] : '' },
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
            dialogProperties: { title: 'Delete Sale Order Entry', templateRef: () => this.deleteTemplate() }
          },
        ]
      },
    ]
  };

    getpreturnDetailTableList(preturnHeadId: number) {
      this.outwardService.getOrderHeadFullDetails(preturnHeadId).subscribe(result => {
        if (result && Object.keys(result).length > 0) {
          //head
          this.outwardHead = result.ordHead;
          this.outwardHeadBtnText = UpdateText;
          this.headpatch(this.outwardHead);
          //detail
          this.outWardDetail = result.ordDetails;
          this.outwardFinalSaveBtnText = UpdateText;
          
        } else {
          this.outWardDetail = [];
        }
  
  
      });
    }


  resetForm(): void {
    this.accName.setValue('');
    this.SaleOrderHeadFormGroup.reset();
  }


  bindSuplierDetails(data) {
    this.SaleOrderHeadFormGroup.patchValue({
      accShName: data.accShName,
      gstin: data.accGstIn,
      mode: (data.accTranMode == 1 ? "Credit" : "Cash")
    });
  }

    onSaveSalesorder(): void {
      const postOutwardObj = this.SaleOrderHeadFormGroup.getRawValue();
      const payload = {
        "ordHeadId": this.outwardHeadBtnText == 'Update' ? this.outwardHeadId : 0,
        "ordDate": postOutwardObj.salDate ? postOutwardObj.salDate : null,
        "tranTypeHeadId": 15,
        "ordHeadNo": this.outwardHead ? this.outwardHead.ordHeadNo : '',
        "compId": postOutwardObj.compId ? postOutwardObj.compId : 0,
        "accId": this.SaleOrderHeadFormGroup.controls.accName.value.accId,
        "grsValue": 0,
        "taxValue": 0,
        "ordValue": 0,
        "cancStat": true,
        "createdBy": 0,
        "createdOn": this.today,
        "modifiedBy": 0,
        "modifiedOn": this.today,
        "isEditable": true,
        "isDeletable": true,
        "ordCancStat": true
      }
      console.log(payload);
      this.outwardHeadObj = payload;
  
      this.subscriptions.push(this.outwardService.postorUpdateOrderHead(payload).subscribe(data => {
        ResponseUtils.isStatus200(data) ? this.showSaleDetailTemplate("Add") :
          ResponseUtils.isStatus409(data) ?
            AppMessageUtils.warningMessage('Outward return Head already exists', this.formAlertId) : '';
        console.log(data);
        this.outwardHeadId = this.outwardHeadBtnText == 'UpDate' ? this.outwardHeadId : data.resultObject;
        this.getpreturnDetailTableList(this.outwardHeadId);    
      }
      ));
  
    }

  onSaveOrUpdateSaleOrderDetail(flag) {
      if (this.saleOrderDetailFormGroup.controls.qty.value != "" && this.saleOrderDetailFormGroup.controls.qty.value != undefined && this.saleOrderDetailFormGroup.controls.qty.value != null) {

          const postPurchaseDetailObj = this.preparePayload(this.saleOrderDetailFormGroup.getRawValue(), flag);
          this.outwardService.postorUpdateOrderDeatil(postPurchaseDetailObj).subscribe((data) => {
            if (data && flag) {
              this.saleOrderDetailFormGroup.reset();
              this.selectedProdid = 0
              // this.getSalesDetailTableList(this.invoiceHeadId);
              AppMessageUtils.successNotification(`Details ${data.resultDescription}`);
              setTimeout(() => {
                const productNameElement = document.getElementById('productName');

                if (productNameElement) {
                  const focusableElement = productNameElement.querySelector('input');

                  if (focusableElement) {
                    // (focusableElement as HTMLElement).focus();
                    var x: any = (focusableElement as HTMLElement);
                    // x.value = " "
                    x.focus();
                  }

                }
              }, 900);
            } else if (data && !flag) {
              this.saleOrderDetailFormGroup.reset();
              this.selectedProdid = 0
              // this.getSalesDetailTableList(this.invoiceHeadId);
              AppMessageUtils.successNotification(`Details ${data.resultDescription}`);
              this.dialogService.closeAllDialogues();
            }

            this.getpreturnDetailTableList(this.outwardHeadId);
          });

      }
      else {
        AppMessageUtils.warningMessage('Please enter Valid Qty Value');
      }


  }

      preparePayload(data , flag) {
    // console.log(date);
  const payload = {
    ordDetailId: +this.outwardDetailId ? this.outwardDetailId : 0,
    ordHeadId: this.outwardHeadId ? +this.outwardHeadId : 0,
    ordHeadDate: this.SaleOrderHeadFormGroup.controls.salDate.value,
    prodId: (typeof data.prodId.prodId === 'number' && !isNaN(data.prodId.prodId)) ? data.prodId.prodId : this.updateDetailData.prodId,
    // (typeof data.prodId.prodId === 'number' && !isNaN(data.prodId.prodId)) ? data.prodId.prodId : this.prodid
    hsnId: (this.saleOrderDetailFormGroup.controls.hsncode.value && this.saleOrderDetailFormGroup.controls.hsncode.value !== "") 
    ? this.saleOrderDetailFormGroup.controls.hsncode.value 
    : 0,
    ordQty:  data.qty ? +data.qty :0,
    ordQtyDisc: data.qtyDisc ? +data.qtyDisc : 0,
    recdQty:data.Qty ? +data.Qty :0,
    recdQyDisc:data.QtyDisc ? +data.QtyDisc : 0,
    ordRate: data.rate ,
    taxSlabId: data.prodId.taxSlabId ? data.prodId.taxSlabId : this.taxslabId ? this.taxslabId :0,
    tax: data.prodId ? data.prodId.tax :this.updateDetailData ? this.updateDetailData.tax : 0,
    taxValue: 0,
    createdBy: 0,
    createdOn: this.today,
    modifiedBy: 0,
    modifiedOn: this.today,
    ord_detailcol: '',
    isDeleted: 0,
    isEditable: 0,
    isDeletable: 0,
    recdIssQty: 0,
    recd_iss_QtyDisc: 0,
    cancQty: 0,
    cancQtyDisc: 0
  };
  return payload;
  }

    convertToValidDate(expdate: string): Date | null {
    let date: Date;
  
    // If the date is in MM-DD format (5 characters), add the current year to make it YYYY-MM-DD
    if (expdate.length === 5 && expdate.includes('-')) {
      const currentYear = new Date().getFullYear();
      expdate = `${currentYear}-${expdate}`;
    }
  
    // Parse the date string into a Date object
    date = new Date(expdate);
  
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      console.error('Invalid date:', expdate);
      return null;
    }
  
    return date;
  }

}
