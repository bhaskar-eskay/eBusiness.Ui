import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatSelect } from '@angular/material';
import { Router } from '@angular/router';
import { InwardService } from '../in-ward.service';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { of, ReplaySubject, Subject, Subscription } from 'rxjs';
import { MasterService } from '../../Master/master.service';
import { CompanyMaster } from 'src/app/shared/models/master-models';
import { DatePipe } from '@angular/common';
import { DialogButtonTemplate, DialogClass, DialogData } from 'src/app/shared/components/dialog/dialog.component';
import { PurchasePrefix, addItem, PURCHASERETURNPREFIX, SaveCloseText, SaveContinueText, SaveText, UpdateCloseText, UpdateContinueText, UpdateText } from 'src/app/shared/app-constants';
import { DialogService } from 'src/app/shared/components/dialog/dialog.service';
import { ActionStyle, TableDefinition, } from 'src/app/shared/components/table/table-model';
import { RouteService } from 'src/app/shared/services/route.service';
import { OutwardService } from '../../out-ward/outward.service';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { values } from 'lodash';
import { HttpService } from 'src/app/shared/services/http.service';

export interface PeriodicElement {
  shName: string;
  ProductName: string;
  ProductPack: string;
  ProductType: string;
  companyName: string;
  tax: string;
  hsncode: string;
}

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss', '../in-ward.component.scss']
})
export class PurchaseOrderComponent implements OnInit {
  Companydata: CompanyMaster[];
  CompanyTabMultiFilterCtrl = new FormControl('');
  purchaseOrderHeadFormGroup: FormGroup;
  purchaseOrderDetailFormGroup: FormGroup;
  @ViewChild('CompanyTab', { static: false }) CompanyTab: MatSelect;
  @ViewChild('purchaseOrderDetail', { static: true }) purchaseOrderDetail;
  @ViewChild('purchaseOrderDetailButton', { static: true }) purchaseOrderDetailButton;
  @ViewChild('deletepreturnDetailTemplate', { static: false }) deletepreturnHeadTemplate;
  @ViewChild('purhistory', { static: true }) purhistory;
  protected _onDestroy = new Subject<void>();
  private subscriptions: Subscription[] = [];

  // buttons
  outwardHeadBtnText: string = SaveText;
  outwardDtlBtnSaveCloseTxt: string = SaveCloseText;
  outwardFinalSaveBtnText: string = SaveText;
  outwardDtlBtnSaveContinueTxt: string = SaveContinueText
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  customAccountAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Supplier Name',
    isRequired: true,
    dataSourceFn: (name) => this.inwardservice.getCustomAccountsByName(name),
    minCount: 2,
    keyString: 'accName'
  };

  //Custom Products Autocomplete
  customProductAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Product Name',
    isRequired: true,
    dataSourceFn: (name) => this.showAutoComplete(name),
    minCount: 2,
    keyString: 'prodName'
  }


  customAccountsOptsTable: OptionsTableDefinition = {
    panelWidth: 700,
    columns: [
      { name: 'Supplier Name', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 34, fxFlex1: 34, isKeyColumn: true },
      { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 24, fxFlex1: 24 },
      { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 14, fxFlex1: 14 },
      { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 18, fxFlex1: 18 },
      { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 10, fxFlex1: 10 }
    ]
  };

  public filteredCompanyMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
  today: any;
  showAutoCompleteData: boolean;
  detailburron: string;
  detailsave: string;
  firmPreferences: any;
  minDate: any;
  maxDate: any;
  prodData: any;
  fromlistFlag: boolean;
  preturnInvoiceRowData: any;
  action: any;
  outwardHeadId: any;
  outwardHead: any;
  invValuefinal: any;
  roundedValue: any;
  outWardDetail: any;
  hasIGST: boolean;
  outwardTaxes: any;
  outwardPretaxes: any;
  outwardDetailId: number;
  selectedProdid: number;
  updateDetailData: any;
  historydataSource;
  purhistoryData: any;
  outwardHeadObj: any;
  formAlertId: string;

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

  // showAutoComplete(name) {
  //   if (this.showAutoCompleteData) {
  //     return this.inwardservice.GetSupplierPurchaseHistory(this.purchaseOrderHeadFormGroup.controls.accName.value.accId, name, this.today)
  //   } else {
  //     return of([])
  //   }
  // }

    showAutoComplete(name){
    if(this.showAutoCompleteData){
      return this.inwardservice.getCustomProductByName(name,this.purchaseOrderHeadFormGroup.controls.compId.value.accId, PurchasePrefix)
    }else{
      return of([])
    }
  }


  constructor(private router: Router, private inwardservice: InwardService, private masterService: MasterService, private formBuilder: FormBuilder, private datePipe: DatePipe,
    private dialogService: DialogService, private routeService: RouteService, private outwardService: OutwardService, private todayDate:HttpService) {}

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.getAllCompMaster()
    this.CompanyTabMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCompanyMulti();
      });
    this.purchaseOrderHeadFormGroup = this.buildHeadFormGroup();
    this.purchaseOrderDetailFormGroup = this.buildDetailFormGroup();
    document.getElementById('deletePopup').style.display = 'none';
    this.firmPreferences = JSON.parse(sessionStorage.getItem('firmPreferences'));
    if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
      this.minDate = this.firmPreferences.finSdate;
      this.maxDate = this.firmPreferences.finEdate;
    }
    this.today = this.datePipe.transform(this.todayDate.localDate(),'yyyy-MM-dd');
    this.outwardService.updateSaleHead$.subscribe(result => {
      if (result.salesHeadRowData && result.action) {
        if (Object.keys(result.salesHeadRowData).length > 0) {
          this.fromlistFlag = true;
          this.preturnInvoiceRowData = result.salesHeadRowData;
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

    this.purchaseOrderDetailFormGroup.get('product').valueChanges.subscribe(result => {
      console.log("prodIdData", result);
      if (result && this.purchaseOrderDetailFormGroup.get('product').dirty) {
        this.showAutoCompleteData = true;
      }
      if (result && typeof result === 'object') {
        this.selectedProdid = result.prodId;
        this.bindProductDetails(result);
        this.purhistoryData = result;
      }
    });

    this.subscriptions.push(this.purchaseOrderHeadFormGroup.controls.accName.valueChanges.subscribe(result => {
      if (result && typeof result === 'object') {
        this.bindCustomerDetails(result);
      }
    }));


  }

  bindCustomerDetails(data) {
    console.log(data);

    this.purchaseOrderHeadFormGroup.patchValue({
      compId: data.compId,
      accShName: data.accShName,
      cityId: data.cityName,
      accMobile: data.accMobile,
      accGstIn: data.accGstIn,
    });
  }

  getpreturnDetailTableList(preturnHeadId: number) {
    this.subscriptions.push(this.outwardService.getOrderHeadFullDetails(preturnHeadId).subscribe(result => {
      if (result && Object.keys(result).length > 0) {
        //head
        this.outwardHead = result.ordHead;
        this.outwardHeadBtnText = UpdateText;
        this.bindOutWardHeadControls(this.outwardHead);
        //detail
        this.outWardDetail = result.ordDetails;
        this.outwardFinalSaveBtnText = UpdateText;
        
      } else {
        this.outWardDetail = [];
      }


    }));
  }

  
  // getOrderFullDetails(preturnHeadId: number) {
  //   this.outwardService.getOrderFullDetails(preturnHeadId).subscribe(result => {
  //     if (result && Object.keys(result).length > 0) {
  //       //head
  //       this.outWardDetail = result;        
        
  //     } else {
  //       this.outWardDetail = [];
  //     }


  //   });
  // }

  bindOutWardHeadControls(outwardHead) {
    // this.accName.setValue(outwardHead.accName);
    this.purchaseOrderHeadFormGroup.patchValue({
      accName: outwardHead.accName,
      purDate: outwardHead.ordDate,
      accGstIn: outwardHead.ltoNo,
      accShName: outwardHead.accShName,
      cityId: outwardHead.cityName,
      compId: outwardHead.compId,
      accMobile: outwardHead.accMobile,
      // mode: outwardHead.mode === 1 ? 'Cash' : 'Credit',
      // deliveryTo: outwardHead.delvTo
    });

    setTimeout(() => {
      // this.deliveryTo.setValue(outwardHead.delvTo);
      this.purchaseOrderHeadFormGroup.controls['compId'].setValue(outwardHead.compId);
    }, 1000);
  }

  customProductOptsTable: OptionsTableDefinition = {
    panelWidth: 600,
    columns: [
      { name: 'Product Name', value: (obj) => obj['prodName'] ? obj['prodName'] : '', fxFlex: 17, fxFlex1: 17, isKeyColumn: true },
      { name: 'Product Pack', value: (obj) => obj['prodPackName'] ? obj['prodPackName'] : '', fxFlex: 15, fxFlex1: 15 },
      { name: 'Qnt', value: (obj) => obj['closingQty'] ? obj['closingQty'] : '', fxFlex: 9, fxFlex1: 9 },
      { name: 'HSN Code', value: (obj) => obj['hsncode'] ? obj['hsncode'] : '', fxFlex: 13, fxFlex1: 13 },
      { name: 'Tax%', value: (obj) => obj['tax'] ? obj['tax'] : '', fxFlex: 9, fxFlex1: 9 },
      { name: 'Sh.Name', value: (obj) => obj['prodShName'] ? obj['prodShName'] : '', fxFlex: 13, fxFlex1: 13 },
      { name: 'CompanyName', value: (obj) => obj['compName'] ? obj['compName'] : '', fxFlex: 24, fxFlex1: 24 }
    ]
  };

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
            dialogProperties: { title: 'Delete Purchase Order Entry', templateRef: () => this.deleteTemplate() }
          },
        ]
      },
    ]
  };

  // historytableDefinition: TableDefinition = {
  //   columns: [
  //     { id: 'prodName', name: 'Product Name', value: (obj) => obj['prodName'] ? obj['prodName'] ? obj['prodName'] : '' : '' },
  //     { id: 'prodShName', name: 'Sh.Name', value: (obj) => obj['prodShName'] ? obj['prodShName'] ? obj['prodShName'] : '' : '' },
  //     { id: 'prodPackName', name: 'Product Pack', value: (obj) => obj['prodPackName'] ? obj['prodPackName'] : '' },
  //     { id: 'issQty', name: 'Qty', value: (obj) => obj['issQty'] ? obj['issQty'] : '' },
  //     { id: 'issQtyDisc', name: 'Qty.Disc', value: (obj) => obj['issQtyDisc'] ? obj['issQtyDisc'] : '' },
  //     {
  //       id: 'action', name: 'Action', disableSort: true, actions: [
  //         {
  //           method: (data) => this.selectProduct(data),
  //           name: 'View',
  //           icon: 'visibility',
  //           style: ActionStyle.EDIT
  //         }
  //       ]
  //     },
  //   ],
  //   disablePagination: true,
  //   disableFilter: true
  // };



  private buildHeadFormGroup(): FormGroup {
    return this.formBuilder.group({
      purDate: [this.today],
      accName: [''],
      accShName: [{ value: '', disabled: true }],
      cityId: [{ value: '', disabled: true }],
      accMobile: [{ value: '', disabled: true }],
      accGstIn: [{ value: '', disabled: true }],
      compId: [0],
      remarks: [''],
    })
  }

  private buildDetailFormGroup(): FormGroup {
    return this.formBuilder.group({
      product: [''],
      shname: [{ value: '', disabled: true }],
      productpack: [{ value: '', disabled: true }],
      rate: [{ value: '', disabled: true }],
      qty: [''],
      qtyDisc: [''],
      hsncode: [{ value: '', disabled: true }],
      tax: [{ value: '', disabled: true }],
      taxSlabId: [''],
      mrp: [''],
      company: [{ value: '', disabled: true }]
    })
  }

  showPurchaseDetailTemplate(): void {
    this.dialogService.closeAllDialogues();
    this.outwardDetailId = 0;
    this.selectedProdid = 0;
    this.purchaseOrderDetailFormGroup.reset();
    let dialogInputs: DialogData = {} as DialogData;
    dialogInputs.title = addItem;
    dialogInputs.closeBtnLabel = 'Close';
    this.showAutoCompleteData = false;
    dialogInputs.dialogClass = DialogClass.MEDIUM;
    dialogInputs.templateRef = () => this.purchaseOrderDetail;
    dialogInputs.buttonTemplates = [({ templateRef: this.purchaseOrderDetailButton } as DialogButtonTemplate)]
    this.dialogService.showDialogue(dialogInputs, { disableClose: true });
    this.outwardDtlBtnSaveCloseTxt = SaveCloseText;
    this.outwardDtlBtnSaveContinueTxt = SaveContinueText;
  }

  clikRegisters() {
    this.inwardservice.sendRegData(null);
    this.router.navigate(['pharma/inward/purchaseRegister']);
  }


  onSaveOrUpdatePurchaseOrderDetail(flag): void {
    const postOutwardObj = this.purchaseOrderDetailFormGroup.getRawValue();
    const payload = {
      ordDetailId: +this.outwardDetailId ? this.outwardDetailId : 0,
      ordHeadId: this.outwardHeadId ? +this.outwardHeadId : 0,
      ordHeadDate: this.purchaseOrderHeadFormGroup.controls.purDate.value,
      prodId: typeof (postOutwardObj.product.prodId) === "number" ? +postOutwardObj.product.prodId : this.updateDetailData.prodId,
      hsncode: postOutwardObj.hsncode ? postOutwardObj.hsncode : this.updateDetailData.hsncode ? this.updateDetailData.hsncode : 0,
      ordQty: +postOutwardObj.qty,
      ordQtyDisc: +postOutwardObj.qtyDisc,
      ordRate: +postOutwardObj.rate,
      taxSlabId: postOutwardObj.taxSlabId ? +postOutwardObj.taxSlabId : this.updateDetailData.taxSlabId,
      tax: postOutwardObj.tax ? postOutwardObj.tax : this.updateDetailData.tax ? this.updateDetailData.tax : 0,
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
    }

    this.subscriptions.push(this.outwardService.postorUpdateOrderDeatil(payload).subscribe(data => {
      if (ResponseUtils.isStatus200(data)) {
        this.getpreturnDetailTableList(this.outwardHeadId);
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
      this.resetDialog();
      this.dialogService.closeAllDialogues();
    }
    if (flag) {
      // this.dialogService.closeAllDialogues();
      this.outwardDtlBtnSaveCloseTxt = SaveCloseText;
      this.outwardDtlBtnSaveContinueTxt = SaveContinueText;
      // this.outwardHeadId = 0;
      this.outwardDetailId = 0;
      this.purhistoryData = '';
      this.resetDialog();
    }
  }

  selectProduct(data) {
    console.log(data);
    this.purhistoryData = data;
    this.bindProductBatchDetails(data);
  }

  bindProductBatchDetails(data) {
    var dt = data.expdate;
    data.expdate = this.datePipe.transform(data.expdate, 'MM-yy');
    this.purchaseOrderDetailFormGroup.patchValue({
      product: data.prodId,
      shname: data.prodShName,
      productpack: data.prodPackName,
      qty: data.issQty,
      qtyDisc: data.issQtyDisc,
      hsncode: data.hsncode,
      tax: data.tax,
      rate: data.purRate,
      company: data.compName
    });
  }

  resetDialog() {
    this.purchaseOrderDetailFormGroup.reset();
  }


  addOrEdit(data) {
    console.log(data);
    this.showPurchaseDetailTemplate();
    this.outwardDetailId = data.ordDetailId;
    this.updateDetailData = data;
    this.outwardDtlBtnSaveCloseTxt = UpdateCloseText;
    this.outwardDtlBtnSaveContinueTxt = UpdateContinueText;
    this.selectedProdid = data.prodId;
    this.fromlistFlag = true;
    // const outwardQtyStatus = this.statusDropdown.find(x => x.code === data.outwardQtyStatus);

    setTimeout(() => {
    this.purchaseOrderDetailFormGroup.patchValue({
      product: data.prodName,
      shname: data.prodShName,
      productpack: data.prodPackName,
      hsncode: data.hsncode,
      tax: data.tax,
      taxSlabId: data.taxSlabId,
      mrp: data.mrp,
      rate: data.ordRate,
      company: data.compName,
      qty: this.routeService.formatAmount(data.ordQty.toString()),
      qtyDisc: this.routeService.formatAmount(data.ordQtyDisc.toString()),
      // productStatus: outwardQtyStatus ? outwardQtyStatus.code : ''
    });
    }, 1000);
    this.purchaseOrderDetailFormGroup.markAsTouched();
  }

  isDeleteDisabled() {
    // console.log(data);
    return false;
  }

  delete(item?: any) {
    // this.inwardService.deletePurchaseItem(item.inwardDetailId).subscribe(data =>
    //   ResponseUtils.isStatus200(data) ? this.refresh() : 
    //     ResponseUtils.isStatus404(data) ?
    //       AppMessageUtils.warningMessage('Purchase Head already deleted') :  '');
  }


  deleteTemplate() {
    return this.deletepreturnHeadTemplate;
  }

  deletepreturnDetailItem(item?: any) {
    this.outwardService.deleteOrderDetailItem(item.ordDetailId).subscribe(data => {
      if (ResponseUtils.isStatus200(data)) {
        this.refresh()
      }
      ResponseUtils.isStatus404(data) ?
        AppMessageUtils.warningMessage('Purchase Order Entry already deleted') : ''
    });
  }

  refresh(): void {
    //   this.invoiceHeadDetails(this.invoiceHeadId);
    this.getpreturnDetailTableList(this.outwardHeadId);
  }

  bindProductDetails(data) {
    this.prodData = data;
    this.purchaseOrderDetailFormGroup.patchValue({
      // product: data.prodName,
      shname: data.prodShName,
      productpack: data.prodPackName,
      hsncode: data.hsncode,
      tax: data.tax,
      taxSlabId: data.taxSlabId,
      mrp: data.mrp,
      rate: data.pRate,
      company: data.compName
    });


  }

  onSaveOrUpdateOrderHead(): void {
    const postOutwardObj = this.purchaseOrderHeadFormGroup.getRawValue();
    const payload = {
      "ordHeadId": this.outwardHeadBtnText == 'Update' ? this.outwardHeadId : 0,
      "ordDate": postOutwardObj.purDate ? postOutwardObj.purDate : null,
      "tranTypeHeadId": 14,
      "ordHeadNo": this.outwardHead ? this.outwardHead.ordHeadNo : '',
      "compId": postOutwardObj.compId ? postOutwardObj.compId : 0,
      "accId": this.purchaseOrderHeadFormGroup.controls.accName.value.accId,
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
      ResponseUtils.isStatus200(data) ? this.showPurchaseDetailTemplate() :
        ResponseUtils.isStatus409(data) ?
          AppMessageUtils.warningMessage('Inward return Head already exists', this.formAlertId) : '';
      console.log(data);
      this.outwardHeadId = this.outwardHeadBtnText == 'Update' ? this.outwardHeadId : data.resultObject;
      this.getpreturnDetailTableList(this.outwardHeadId);


    }
    ));

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
    this.router.navigate(['pharma/inward/purchaseOrders']);
  }

  deleteOrderHeadById(orderHeadRowData?: any) {
    this.outwardService.deleteOrderHeadById(orderHeadRowData).subscribe(data =>
      ResponseUtils.isStatus200(data) ? this.refresh() :
        ResponseUtils.isStatus404(data) ?
          AppMessageUtils.warningMessage("Return Head already deleted") : '');
  }

}
