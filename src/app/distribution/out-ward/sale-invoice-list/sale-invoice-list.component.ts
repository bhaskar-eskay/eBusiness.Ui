import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SalePrefix } from 'src/app/shared/app-constants';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { OutwardService } from '../outward.service';
import { InwardService } from '../../in-ward/in-ward.service';
import { RouteService } from 'src/app/shared/services/route.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from 'src/app/shared/services/http.service';
@Component({
  selector: 'app-sale-invoice-list',
  templateUrl: './sale-invoice-list.component.html',
  styleUrls: ['./sale-invoice-list.component.scss', '../out-ward.component.scss']
})
export class SaleInvoiceListComponent implements OnInit {

  @ViewChild('deleteSalesHeadTemplate', { static: false }) deleteSalesHeadTemplate;
  editObj: any;
  addOrEditFlag: boolean;
  saleHeadListFormGroup: FormGroup;
  isDataLoading: boolean;
  dataList: any;
  today:any;
  firmPreferences: any;
  minDate: any;
  maxDate: any;
  pdfData: any;

  constructor(private outwardService: OutwardService, private router: Router, private formBuilder: FormBuilder, private datePipe: DatePipe,private inwardService:InwardService,private routeService:RouteService,
    private sanitze:DomSanitizer, private todayDate:HttpService) { }


  tableDefinition: TableDefinition = {
    columns: [
      { id: "outwardDate", name: "Inv.Date", value: (obj) => obj['outwardDate'] ? this.datePipe.transform(obj['outwardDate'], 'dd-MM-yyyy') : '' },
      { id: "outwardHeadNo", name: "Inv.No.", value: (obj) => obj['outwardHeadNo'] ? obj['outwardHeadNo'] : '' },
      { id: "name", name: "Customer Name", value: (obj) => obj['accName'] ? obj['accName'] : '' },
      { id: "shName", name: "Sh.Name", value: (obj) => obj['accShName'] ? obj['accShName']: '' },
      { id: "cityName", name: "City Name", value: (obj) => obj['cityName'] ? obj['cityName']: '' },
      { id: "ltoNo", name: "GSTIN", value: (obj) => obj['ltoNo'] ? obj['ltoNo'] : '' },
      { id: "outwardStatus", name: "", value: (obj) => obj['outwardStatus'] ? obj['outwardStatus'] : '' },
      // { id: "invNo", name: "Inv.No.", value: (obj) => obj['invNo'] ? obj['invNo'] : '' },
      // { id: "invDate", name: "Inv.Date", value: (obj) => obj['invDate'] ? this.datePipe.transform(obj['invDate'], 'dd-MM-yyyy') : '' },
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
      { 
        id: "invValue", 
        name: "Inv.Value", 
        value: (obj) => {
          (obj['invValue'] !== undefined && obj['invValue'] !== null) ? obj['invValue'] : ''
          let invvalue = obj['invValue'] ? obj['invValue'] : '';
          return invvalue ? this.routeService.formatAmount(invvalue.toString()):'';
          // return invvalue ? parseFloat(invvalue).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
          }
        // value: (obj) => (obj['invValue'] !== undefined && obj['invValue'] !== null) ? obj['invValue'] : '' 
      },
      {
        id: "action", name: "Action", disableSort: true, actions: [
          { method: (obj) => this.addOrEditSalesHead(obj , 'edit'), name: 'Edit', icon: 'assets/new_edit2.png', style: ActionStyle.EDIT },
          {
            method: (obj) => this.addOrEditSalesHead(obj, 'delete'), name: 'Delete', icon: 'assets/new_delete2.png', style: ActionStyle.DELETE,
            // method: (obj) => this.deleteSalesHead(obj), name: 'Delete', icon: 'assets/new_delete2.png', style: ActionStyle.DELETE,
            // dialogProperties: { title: 'Delete Sales Head', templateRef: () => this.deleteTemplate() }
          },
          // { name: 'WhatsApp', icon: 'assets/new_whatsApp2.png', style: ActionStyle.WHATSAPP },
          { name: 'Share', icon: 'share', style: ActionStyle.SHARE },
          {
            name: 'IRN',
            icon: 'assets/new_upload-removebg.png',
            style: ActionStyle.IRN,
          },
          // {
          //   name: 'PDF',
          //   method: (obj) => this.getInvoicePDF(obj),
          //   icon: 'assets/new_pdf.png',
          //   style: ActionStyle.PDF,
          // },
          { 
            name: 'Print',
            method: (obj) => this.getInvoicePDF2(obj),
            icon: 'assets/new_print.png',
            style: ActionStyle.PRINT
          },
          // { name: 'checkbox', icon: 'checkbox'},
          // { name: 'Email', icon: 'assets/new_mail.png', style: ActionStyle.EMAIL}
        ]
      },
      // { id: "printall", name: "Print All" }
    ]
  };

  ngOnInit() {
    this.firmPreferences =JSON.parse(sessionStorage.getItem('firmPreferences'));
    if(this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== ''){
      this.minDate = this.firmPreferences.finSdate;
      this.maxDate = this.firmPreferences.finEdate;
    }
    this.today = this.todayDate.localDate();
    this.saleHeadListFormGroup = this.buildSalesListFormGroup();
    this.getsalesDataList();
  }

  public buildSalesListFormGroup() {
    return this.formBuilder.group({
      fromDate: [this.today],
      toDate: [this.today],
      invNo: [''],
      accName: [''],
      accShName: [''],
      cityId: [''],
      accGSTIn: [''],
      invDate: [null],
      mode: [''],
      invValue: ['']
    });
  }

  getSaleList() {
    this.isDataLoading = true;
    this.dataList = null;
    this.outwardService.getSalesHeadList(SalePrefix).subscribe(data => {
      this.dataList = data;
      if(this.dataList){
        if(this.dataList.length > 0){
          this.dataList.forEach(element => {
            element.invValue = this.routeService.formatAmount( element.invValue ? Math.round(element.invValue) : '0.00');
          });
        }
      }
      this.isDataLoading = false;
    });
  }

  getsalesDataList() {
    this.isDataLoading = true;
    this.dataList = null;
    const payload = Object.assign({});
    console.log(this.saleHeadListFormGroup.value);


    // payload.fromDate= "2023-11-04T09:07:45.515Z",
    // payload.toDate= "2024-11-04T09:07:45.515Z"

    if (this.saleHeadListFormGroup.value.invDate) {
      payload.outwardDate = this.saleHeadListFormGroup.value.invDate ? this.saleHeadListFormGroup.value.invDate : null;
    }
    payload.fromDate = this.datePipe.transform(this.saleHeadListFormGroup.value.fromDate, 'yyyy-MM-dd'),
    payload.toDate = this.datePipe.transform(this.saleHeadListFormGroup.value.toDate, 'yyyy-MM-dd'),
    payload.invNo = this.saleHeadListFormGroup.value.invNo;
    payload.accName = this.saleHeadListFormGroup.value.accName;
    payload.accShName = this.saleHeadListFormGroup.value.accShName;
    payload.cityId = this.saleHeadListFormGroup.value.cityId ? this.saleHeadListFormGroup.value.cityId : 0;
    payload.mode = this.saleHeadListFormGroup.value.mode ? this.saleHeadListFormGroup.value.mode : 0;
    payload.accGSTIn = this.saleHeadListFormGroup.value.accGSTIn;
    payload.invValue = this.saleHeadListFormGroup.value.invValue ? this.saleHeadListFormGroup.value.invValue : 0;
    payload.tranTypeHeadId = 2,
    payload.tranTypeName =  SalePrefix,
    this.outwardService.GetOutwardHead(payload).subscribe(data => {
      this.dataList = data;
      if(this.dataList){
        if(this.dataList.length > 0){
          this.dataList.forEach(element => {
            element.invValue = this.routeService.formatAmount( element.invValue ? Math.round(element.invValue) : '0.00');
          });
        }
      }
      this.isDataLoading = false;
    });
  }


  addOrEditSalesHead(salesHeadRowData?: any , method?:any) {
    let action = method;
    this.editObj = salesHeadRowData ? salesHeadRowData : {} as any;
    this.outwardService.setSalesHead({salesHeadRowData},action);
    this.router.navigate(['pharma/outward/saleInvoiceEntry']);
    this.addOrEditFlag = true;
  }


  deleteSalesHead(salesHeadRowData?: any) {
    this.outwardService.deleteSalesHeadById(salesHeadRowData.outwardHeadId).subscribe(data =>
      ResponseUtils.isStatus200(data) ? this.refresh() :
        ResponseUtils.isStatus404(data) ?
          AppMessageUtils.warningMessage("Sales Head already deleted") : '');
  }


  refresh(): void {
    this.getSaleList();
  }


  deleteTemplate() {
    return this.deleteSalesHeadTemplate;
  }

  reset() {
    this.saleHeadListFormGroup.reset();
  }

  addInvoice() {
    this.outwardService.setSalesHead(null,null);
    this.router.navigate(['pharma/outward/saleInvoiceEntry']);
  }

   clikRegisters(){
      this.inwardService.sendRegData(null);
      this.router.navigate(['pharma/outward/saleRegister']);
    }

  getInvoicePDF2(salesHeadRowData:any){
    this.outwardService.invpdf(salesHeadRowData.outwardHeadId).subscribe(data=>{
      if(data != null && data != undefined){
        var pdf = data;
        pdf = this.sanitze.bypassSecurityTrustResourceUrl(pdf);
        this.pdfData = pdf.changingThisBreaksApplicationSecurity;
        this.pdfData = this.pdfData.replace(/\\/g, '/');
        this.pdfData = 'https://' + this.pdfData;
        window.open(this.pdfData, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=300,width=1000,height=1000");
      }
    });
  }
  
  // printIcon(salesHeadRowData:any) {
  //   this.outwardService.invpdf(salesHeadRowData.outwardHeadId).subscribe(data=>{
  //     if(data != null && data != undefined){
  //       var pdf = data;
  //       pdf = this.sanitze.bypassSecurityTrustResourceUrl(pdf);
  //       this.pdfData = pdf.changingThisBreaksApplicationSecurity;
  //       if (this.pdfData) {
  //         const pdfUrl = this.pdfData.changingThisBreaksApplicationSecurity || this.pdfData;
  //         const newTab = window.open(pdfUrl, '_blank');
  //         if (newTab) {
  //           newTab.onload = () => {
  //             newTab.print();
  //           };
  //         }
  //       } else {
  //         console.error("No PDF data available");
  //       }
  //     }
  //   });

  // }

}
