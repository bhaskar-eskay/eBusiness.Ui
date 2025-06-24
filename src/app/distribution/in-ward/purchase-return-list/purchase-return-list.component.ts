import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PURCHASERETURNPREFIX } from 'src/app/shared/app-constants';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import { OutwardService } from '../../out-ward/outward.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { RouteService } from 'src/app/shared/services/route.service';

@Component({
  selector: 'app-purchase-return-list',
  templateUrl: './purchase-return-list.component.html',
  styleUrls: ['./purchase-return-list.component.scss', '../in-ward.component.scss']
})
export class PurchaseReturnListComponent implements OnInit {

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

  constructor(private outwardService: OutwardService, private router: Router, private formBuilder: FormBuilder, private datePipe: DatePipe,private routeService:RouteService) { }


  tableDefinition: TableDefinition = {
    columns: [
      { id: "outwardDate", name: "Inv.Date", value: (obj) => obj['outwardDate'] ? this.datePipe.transform(obj['outwardDate'], 'dd-MM-yyyy') : '' },
      { id: "outwardHeadNo", name: "Inv.No.", value: (obj) => obj['outwardHeadNo'] ? obj['outwardHeadNo'] : '' },
      { id: "name", name: "Customer Name", value: (obj) => obj['accName'] ? obj['accName'] : '' },
      { id: "shName", name: "Sh.Name", value: (obj) => obj['accShName'] ? obj['accShName']: '' },
      { id: "cityName", name: "City Name", value: (obj) => obj['cityName'] ? obj['cityName']: '' },
      { id: "ltoNo", name: "GSTIN", value: (obj) => obj['ltoNo'] ? obj['ltoNo'] : '' },
      { id: "outwardStatus", name: "", value: (obj) => obj['outwardStatus'] ? obj['outwardStatus'] : '' },
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
          let invValue = obj['invValue'] ? obj['invValue'] : '';
          return invValue ? this.routeService.formatAmount(invValue.toString()):'';
          // return invValue ? parseFloat(invValue).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
          }
        // value: (obj) => (obj['invValue'] !== undefined && obj['invValue'] !== null) ? obj['invValue'] : '' 
      },
      {
        id: "action", name: "Action", disableSort: true, actions: [
          { method: (obj) => this.addOrEditSalesHead(obj , "edit"), name: 'Edit', icon: 'assets/new_edit2.png', style: ActionStyle.EDIT },
          {
            method: (obj) => this.addOrEditSalesHead(obj ,"delete"), name: 'Delete', icon: 'assets/new_delete2.png', style: ActionStyle.DELETE,
            // method: (obj) => this.deleteSalesHead(obj), name: 'Delete', icon: 'assets/new_delete2.png', style: ActionStyle.DELETE,
            // dialogProperties: { title: 'Delete pur return Head', templateRef: () => this.deleteTemplate() }
          },
          // { name: 'WhatsApp', icon: 'assets/new_whatsApp2.png', style: ActionStyle.WHATSAPP },
          { name: 'Print', icon: 'assets/new_print.png', style: ActionStyle.PRINT},
          {
            name: 'Share',
            icon: 'share',
            style: ActionStyle.SHARE
          }
          // { name: 'Email', icon: 'assets/new_mail.png', style: ActionStyle.EMAIL}
        ]
      },
    ]
  };

  ngOnInit() {
    // this.getSaleList();
    this.firmPreferences =JSON.parse(sessionStorage.getItem('firmPreferences'));
    if(this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== ''){
      this.minDate = this.firmPreferences.finSdate;
      this.maxDate = this.firmPreferences.finEdate;
    }
    this.today = new Date().toISOString().split('T')[0];
    this.saleHeadListFormGroup = this.buildSalesListFormGroup();
    setTimeout(() => {
      this.getsalesDataList();
    }, 900);
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

  // getSaleList() {
  //   this.isDataLoading = true;
  //   this.dataList = null;
  //   this.outwardService.getSalesHeadList(SalePrefix).subscribe(data => {
  //     this.dataList = data;
  //     this.isDataLoading = false;
  //   });
  // }

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
    payload.tranTypeHeadId = 4,
    payload.tranTypeName = PURCHASERETURNPREFIX ,
    this.outwardService.GetOutwardHead(payload).subscribe(data => {
      this.dataList = data;
      this.isDataLoading = false;
    });
  }


  addOrEditSalesHead(salesHeadRowData?: any , method?:any) {
    let action = method;
    this.editObj = salesHeadRowData ? salesHeadRowData : {} as any;
    this.outwardService.setSalesHead({salesHeadRowData} , action);
    this.router.navigate(['pharma/inward/addpurchaseReturns']);
    this.addOrEditFlag = true;
  }


  deleteSalesHead(salesHeadRowData?: any) {
    this.outwardService.deleteSalesHeadById(salesHeadRowData.outwardHeadId).subscribe(data =>
      ResponseUtils.isStatus200(data) ? this.refresh() :
        ResponseUtils.isStatus404(data) ?
          AppMessageUtils.warningMessage("Return Head already deleted") : '');
  }


  refresh(): void {
    this.getsalesDataList();
  }


  deleteTemplate() {
    return this.deleteSalesHeadTemplate;
  }

  reset() {
    this.saleHeadListFormGroup.reset();
  }

  addInvoice() {
    this.outwardService.setSalesHead(null , "edit");
    this.router.navigate(['pharma/inward/addpurchaseReturns']);
  }

}
