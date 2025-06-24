import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { InwardService } from '../in-ward.service';
import { PurchasePrefix } from 'src/app/shared/app-constants';
import { RouteService } from 'src/app/shared/services/route.service';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss', '../in-ward.component.scss']
})
export class PurchaseListComponent implements OnInit {
  dataList: any;
  isDataLoading: boolean;
  editObj: any;
  addOrEditFlag: boolean;
  @ViewChild('deletePurchaseHeadTemplate', { static: false }) deletePurchaseHeadTemplate;
  purchaseListForm: FormGroup;
  today: any;
  firmPreferences: any;
  minDate: any;
  maxDate: any;
  
  constructor(private inwardService: InwardService, private router: Router, private formBuilder: FormBuilder, private datePipe: DatePipe,private routeService:RouteService, private todayDate:HttpService) { }

  tableDefinition: TableDefinition = {
    columns: [
      { id: "inwardDate", name: "Pur.Date", value: (obj) => obj['inwardDate'] ? this.datePipe.transform(obj['inwardDate'], 'dd-MM-yyyy') : '' },
      { id: "inwardHeadNo", name: "Pur.No.", value: (obj) => obj['inwardHeadNo'] ? obj['inwardHeadNo'] : '' },
      { id: "accId", name: "Supplier Name", value: (obj) => obj['accName'] ? obj['accName'] : '' },
      { id: "accShName", name: "Sh.Name", value: (obj) => obj['accShName'] ? obj['accShName'] : '' },
      { id: "compId", name: "City Name", value: (obj) => obj['cityName']? obj['cityName'] : '' },
      { id: "accGstIn", name: "GSTIN", value: (obj) => obj['ltoNo'] ? obj['ltoNo'] : '' },
      { id: "invNo", name: "P.Inv.No.", value: (obj) => obj['invNo'] ? obj['invNo'] : '' },
      { id: "inwardStatus", name: "", value: (obj) => obj['inwardStatus'] ? obj['inwardStatus'] : '' },
      { id: "invDate", name: "P.Inv.Date", value: (obj) => obj['invDate']  ? this.datePipe.transform(obj['invDate'], 'dd-MM-yyyy') : '' },
      {
        id: "mode",
        name: "Mode",
        value: (obj) => {
          if (obj['mode'] === 1) {
            return "Cash";
          } else if (obj['mode'] === 2) {
            return "Credit";
          } else {
            return ''; // Return empty string if mode is neither 1 nor 2
          }
        }
      },
      { id: "invValue", name: "Inv.Value", 
        value: (obj) => {
          let invvalue = obj['invValue'] ? obj['invValue'] : '';
          return invvalue ? this.routeService.formatAmount(invvalue.toString()):'';
          // return invvalue ? parseFloat(invvalue).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
          }},
      {
        id: "action", name: "Action", disableSort: true, actions: [
          { method: (obj) => this.addOrEdit(obj , "edit"), name: 'Edit', icon: 'assets/new_edit2.png', style: ActionStyle.EDIT, },
          {
            method: (obj) => this.addOrEdit(obj ,"delete"), name: 'Delete', icon: 'assets/new_delete2.png', style: ActionStyle.DELETE,isDisabled: (obj) => obj['paidAmount'] == 1,
            // method: (obj) => this.delete(obj), name: 'Delete', icon: 'assets/new_delete2.png', style: ActionStyle.DELETE,isDisabled: (Obj) =>this.detailDelete(Obj),
            // dialogProperties: { title: 'Delete Custom Product', templateRef: () => this.deleteTemplate() }
          },
          // { name: 'WhatsApp', icon: 'assets/new_whatsApp2.png', style: ActionStyle.WHATSAPP },
          // { name: 'Print', icon: 'assets/new_print.png', style: ActionStyle.PRINT},
          // { name: 'Email', icon: 'assets/new_mail.png', style: ActionStyle.EMAIL}
        ]
      },
    ]
  };

  ngOnInit() {
    this.firmPreferences =JSON.parse(sessionStorage.getItem('firmPreferences'));
    if(this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== ''){
      this.minDate = this.firmPreferences.finSdate;
      this.maxDate = this.firmPreferences.finEdate;
    }
    // this.today = new Date().toISOString().split('T')[0];
    this.today = this.todayDate.localDate();
    this.purchaseListForm = this.buildPurchaseListFormGroup();
    this.getPurchaseList();
    
  }

  public buildPurchaseListFormGroup(){
    return this.formBuilder.group({
     fromDate: [this.today],
     toDate: [this.today],
     invNo: [''],
     accName: [''],
     accShName: [''],
     cityId: [],
     accGSTIn: [''],
     invDate: [null],
     mode: [''],
     invValue: ['']
    });
  }

  getPurchaseList() {
    this.isDataLoading = true;
    this.dataList = null;
    const payload = Object.assign({});
    console.log(this.purchaseListForm.value);
    payload.inwardDate = this.purchaseListForm.value.invDate ?this.purchaseListForm.value.invDate : null;
    payload.fromDate = this.datePipe.transform(this.purchaseListForm.value.fromDate, 'yyyy-MM-dd'),
    payload.toDate =  this.datePipe.transform(this.purchaseListForm.value.toDate,'yyyy-MM-dd'),
    payload.invNo  =  this.purchaseListForm.value.invNo;
    payload.accName  =  this.purchaseListForm.value.accName;
    payload.accShName  =  this.purchaseListForm.value.accShName;
      payload.cityId  =   this.purchaseListForm.value.cityId ? this.purchaseListForm.value.cityId : 0;
      payload.mode  =  this.purchaseListForm.value.mode ? this.purchaseListForm.value.mode : 0;
    payload.accGSTIn  =  this.purchaseListForm.value.accGSTIn;
      payload.invValue =  this.purchaseListForm.value.invValue ? this.purchaseListForm.value.invValue : 0;
      payload.tranTypeHeadId = 1,
      payload.tranTypeName =  PurchasePrefix,
    this.inwardService.GetInwardHead(payload).subscribe(data => {
      this.dataList = data;
      this.isDataLoading = false;
    });
  }

  addOrEdit(purchaseHead?: any , method?:any) {
 //   console.log('head data----', purchaseHead);
    this.editObj = purchaseHead ? purchaseHead : {} as any;
    let action = method;
    this.inwardService.sendheadData({purchaseHead} , action);
    // this.inwardService.setPurchaseHead(purchaseHead);
    this.inwardService.purchaseHeaddata.next(purchaseHead);
    setTimeout(() => {
      this.router.navigate(['pharma/inward/purchasesEntry'], { queryParams: {id: purchaseHead.id}});
    }, 500);
    this.addOrEditFlag = true;
  }

  delete(purchaseHead?: any) {
    this.inwardService.deletePurchaseHead(purchaseHead.id).subscribe(data =>
      ResponseUtils.isStatus200(data) ? this.refresh() :
        ResponseUtils.isStatus404(data) ?
          AppMessageUtils.warningMessage("Purchase Head already deleted") : '');
  }


  refresh(): void {
  }


  deleteTemplate() {
    return this.deletePurchaseHeadTemplate;
  }

  search(){

  }

  reset(){
    this.purchaseListForm.reset();
    this.purchaseListForm.controls.fromDate.setValue(this.today);
    this.purchaseListForm.controls.toDate.setValue(this.today);
    this.getPurchaseList();
  }

  

  addInvoice() {
    this.inwardService.sendheadData(null, null);
    setTimeout(() => {
      this.router.navigate(['pharma/inward/purchasesEntry']);
    }, 500);
    
  }

  clickReports(){
    this.router.navigate(['pharma/inward/purchasesReports']);
  }

  clikRegisters(){
    this.inwardService.sendRegData('show');
    this.router.navigate(['pharma/inward/purchaseRegister']);
  }

  detailDelete(Obj){
    return Obj.deleteFlag;
  }
}
