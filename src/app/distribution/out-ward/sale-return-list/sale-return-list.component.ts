import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { InwardService } from '../../in-ward/in-ward.service';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { OutwardService } from '../outward.service';
import { of, Observable, Subscription, ReplaySubject, Subject } from 'rxjs';
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

// const ELEMENT_DATA: PeriodicElement[] = [
//   {shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
//   {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
//  {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
// ];

@Component({
  selector: 'app-sale-return-list',
  templateUrl: './sale-return-list.component.html',
  styleUrls: ['./sale-return-list.component.scss', '../out-ward.component.scss']
})
export class SaleReturnListComponent implements OnInit {
  maxDate: any;
  minDate: any;
  firmPreferences:any;

  constructor(private fb: FormBuilder, private inwardService: InwardService,private datePipe: DatePipe,private router:Router,private outwardService: OutwardService, private todayDate:HttpService) { }
  displayedColumns: string[] = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'expDate', 'gstin', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('deletePurchaseHeadTemplate', { static: false }) deletePurchaseHeadTemplate;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  salesReturnList: FormGroup;
  today: any;
  dataList: any;
   tableDefinition: TableDefinition = {
      columns: [
        { id: "inwardDate", name: "SRET Date", value: (obj) => obj['inwardDate'] ? this.datePipe.transform(obj['inwardDate'], 'dd-MM-yyyy') : '' },
        { id: "inwardHeadNo", name: "SRET No.", value: (obj) => obj['inwardHeadNo'] ? obj['inwardHeadNo'] : '' },
        { id: "accId", name: "Supplier Name", value: (obj) => obj['accName'] ? obj['accName'] : '' },
        { id: "accShName", name: "Sh.Name", value: (obj) => obj['accShName'] ? obj['accShName'] : '' },
        { id: "compId", name: "City Name", value: (obj) => obj['cityName']? obj['cityName'] : '' },
        { id: "accGstIn", name: "GSTIN", value: (obj) => obj['ltoNo'] ? obj['ltoNo'] : '' },
        { id: "outwardStatus", name: "", value: (obj) => obj['outwardStatus'] ? obj['outwardStatus'] : '' },
        // { id: "invNo", name: "P.Inv.No.", value: (obj) => obj['invNo'] ? obj['invNo'] : '' },
        // { id: "invDate", name: "P.Inv.Date", value: (obj) => obj['invDate']  ? this.datePipe.transform(obj['invDate'], 'dd-MM-yyyy') : '' },
        // { id: "mode", name: "Mode", value: (obj) => obj['mode'] ? obj['mode'] : '' },
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
            return invvalue ? parseFloat(invvalue).toFixed(2) : ''; }
        },
        {
          id: "action", name: "Action", disableSort: true, actions: [
            { method: (obj) => this.addOrEdit(obj , 'edit'), name: 'Edit', icon: 'assets/new_edit2.png', style: ActionStyle.EDIT, },
            {
               method: (obj) => this.addOrEdit(obj , 'delete'), name: 'Delete', icon: 'assets/new_delete2.png', style: ActionStyle.DELETE, isDisabled: (obj) => obj['paidAmount'] == 1,
              // method: (obj) => this.delete(obj), name: 'Delete', icon: 'assets/new_delete2.png', style: ActionStyle.DELETE,isDisabled: (Obj) =>this.detailDelete(Obj),
              // dialogProperties: { title: 'Delete Custom Product', templateRef: () => this.deleteTemplate() }
            },
          // { name: 'WhatsApp', icon: 'assets/new_whatsApp2.png', style: ActionStyle.WHATSAPP },
          { name: 'Print', icon: 'assets/new_print.png', style: ActionStyle.PRINT},
          { name: 'Share', icon: 'share', style: ActionStyle.SHARE},
          {
            name: 'IRN',
            icon: 'assets/new_upload-removebg.png',
            style: ActionStyle.IRN,
          },
          // { name: 'Email', icon: 'assets/new_mail.png', style: ActionStyle.EMAIL}
          ]
        },
      ]
    };
    isDataLoading: boolean;
    editObj: any;
    addOrEditFlag: boolean;
    subscription:Subscription=new Subscription();
  ngOnInit() {
    this.firmPreferences =JSON.parse(sessionStorage.getItem('firmPreferences'));
    if(this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== ''){
      this.minDate = this.firmPreferences.finSdate;
      this.maxDate = this.firmPreferences.finEdate;
    }
    this.today = this.todayDate.localDate();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.salesReturnList = this.fb.group({
      fromDate: [this.today, Validators.required],
      toDate: [this.today, Validators.required],
      sretNo: "",
      custmorName: "",
      shName: "",
      cityName: "",
      gstin: "",
      mode: "",
      invValue: ""
    })

    this.getPurchaseList();
    this.subscription.add(this.outwardService.getheadData$.subscribe(x=>{
      if(x !== null && x !== undefined){
        console.log(x);
        // this.editObj1 = x;
        // this.additemflag = true ;
        // this.purchaseHeadBtnText = 'UpDate';
        // this.finalSavebutton = 'UpDate';
        // this.headpatch(x);
        // this.invoiceHeadId = x.inwardHeadId;
        // this.getTaxtesData(x.inwardHeadId);
        // this.invoiceHeadDetails(this.invoiceHeadId);
      }else{
        // this.additemflag = false;
        // this.purchaseHeadBtnText = 'Save';
        // this.finalSavebutton = 'Save';
      }
    }));
  }

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

  getPurchaseList() {
    // this.isDataLoading = true;
    this.dataList = null;
    const payload = Object.assign({});
    // console.log(this.salesReturnFormGroup.value);
    payload.inwardDate = this.salesReturnList.value.invDate ? this.salesReturnList.value.invDate : null;
    payload.fromDate = this.datePipe.transform(this.salesReturnList.value.fromDate, 'yyyy-MM-dd'),
      payload.toDate = this.datePipe.transform(this.salesReturnList.value.toDate, 'yyyy-MM-dd'),
      payload.invNo = this.salesReturnList.value.invNo ? this.salesReturnList.value.invNo : "";
    payload.accName = this.salesReturnList.value.accName ? this.salesReturnList.value.accName : "";
    payload.accShName = this.salesReturnList.value.accShName ? this.salesReturnList.value.accShName : "";
    payload.cityId = this.salesReturnList.value.cityId ? this.salesReturnList.value.cityId : 0;
    payload.mode = this.salesReturnList.value.mode ? this.salesReturnList.value.mode : 0;
    payload.accGSTIn = this.salesReturnList.value.accGSTIn ? this.salesReturnList.value.accGSTIn : "";
    payload.invValue = this.salesReturnList.value.invValue ? this.salesReturnList.value.invValue : 0;
    payload.tranTypeHeadId = 3,
    payload.tranTypeName = "SRET"
    this.inwardService.GetInwardHead(payload).subscribe(data => {
      this.dataSource.data = data.map(list => {
        list['inwardDate'] = this.formatDate(list.inwardDate);
        return list;
      });
      this.dataList = data;
      // this.isDataLoading = false;
    });
  }

  addOrEdit(salesHead?: any , method?:any) {
    let action = method;
    //   console.log('head data----', purchaseHead);
    this.editObj = salesHead ? salesHead : {} as any;
    this.outwardService.sendheadData({salesHead},action);
    // this.inwardService.setPurchaseHead(purchaseHead);
    this.outwardService.saleHeaddata.next(salesHead);
    this.router.navigate(['pharma/outward/salesReturnEntry'], { queryParams: { id: salesHead.inwardHeadId } });
    this.addOrEditFlag = true;
  }

  getList(){
    this.getPurchaseList();
  }

  delete(purchaseHead?: any) {
    this.addOrEdit();
    // this.inwardService.deletePurchaseHead(purchaseHead.inwardHeadId).subscribe(data =>
    //   ResponseUtils.isStatus200(data) ? this.refresh() :
    //     ResponseUtils.isStatus404(data) ?
    //       AppMessageUtils.warningMessage("Sale Return Head already deleted") : '');
  }

 
  addInvoice() {
    this.outwardService.sendheadData(null ,  null);
    this.router.navigate(['pharma/outward/salesReturnEntry']);
  }


  deleteTemplate() {
    return this.deletePurchaseHeadTemplate;
  }
  detailDelete(Obj) {
    return Obj.deleteFlag;
  }
  refresh(): void {
  }

  
  // headpatch(data){
  //   console.log(data);
  //   this.purchaseHeadFormGroup.controls.inwardHeadId.setValue(data.inwardHeadId);
  //   this.purchaseHeadFormGroup.controls.compId.setValue(data.compId);
  //   this.purchaseHeadFormGroup.controls.inwardHeadNo.setValue(data.inwardHeadNo);
  //   this.purchaseHeadFormGroup.controls.inwardDate.setValue(data.inwardDate);
  //   this.purchaseHeadFormGroup.controls.invNo.setValue(data.invNo);
  //   this.purchaseHeadFormGroup.controls.invDate.setValue(data.invDate);
  //   this.accName.setValue(data.accName);
  //   // if(data.account.city){
  //   //   this.purchaseHeadFormGroup.controls.cityId.setValue(data.account.city.name);
  //   // }
  //   // this.purchaseHeadFormGroup.controls.accMobile.setValue(data.account.mobile);
  //   // this.purchaseHeadFormGroup.controls.accGstIn.setValue(data.accGstIn);
  //   setTimeout(() => {
  //     this.purchaseHeadFormGroup.controls.mode.setValue(data.mode == 1 ? 'Cash' : 'Credit');
  //   }, 1000);
   
  //   this.purchaseHeadFormGroup.controls.inwardLrNo.setValue(data.inwardLrNo);
  //   this.purchaseHeadFormGroup.controls.inwardWaybillNo.setValue(data.inwardWaybillNo);
  //   this.purchaseHeadFormGroup.controls.noOfCases.setValue(data.noOfCases);
  //   this.purchaseHeadFormGroup.controls.invValue.setValue(data.invValue);
  //   // this.transportName.setValue(data.transportId);
    
  //   this.accShName.setValue(data.accShName);
  //   // this.purchaseHeadFormGroup.controls.id.setValue(data.id);
  // }



}
