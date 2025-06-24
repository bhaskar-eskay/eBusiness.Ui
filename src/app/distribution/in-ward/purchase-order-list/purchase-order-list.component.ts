import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { OutwardService } from '../../out-ward/outward.service';
import { PURCHASERETURNPREFIX } from 'src/app/shared/app-constants';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import { Router } from '@angular/router';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
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
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.scss', '../in-ward.component.scss']
})
export class PurchaseOrderListComponent implements OnInit {
  firmPreferences: any;
  minDate: any;
  maxDate: any;
  today: any;
  purchaseheadorderListFormGroup: FormGroup;
  isDataLoading: boolean;
  dataList: null;
  editObj: any;
  addOrEditFlag: boolean;
  @ViewChild('deleteSalesHeadTemplate', { static: false }) deleteSalesHeadTemplate;
  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe, private outwardService: OutwardService, private router: Router, private todayDate:HttpService) { }


  tableDefinition: TableDefinition = {
    columns: [
      { id: "ordDate", name: "PORD Date", value: (obj) => obj['ordDate'] ? this.datePipe.transform(obj['ordDate'], 'dd-MM-yyyy') : '' },
      { id: "ordHeadNo", name: "PORD No.", value: (obj) => obj['ordHeadNo'] ? obj['ordHeadNo'] : '' },
      { id: "name", name: "Supplier Name", value: (obj) => obj['accName'] ? obj['accName'] : '' },
      { id: "shName", name: "Sh.Name", value: (obj) => obj['accShName'] ? obj['accShName'] : '' },
      { id: "cityName", name: "City Name", value: (obj) => obj['cityName'] ? obj['cityName'] : '' },
      { id: "ltoNo", name: "GSTIN", value: (obj) => obj['ltoNo'] ? obj['ltoNo'] : '' },
      {
        id: "action", name: "Action", disableSort: true, actions: [
          { method: (obj) => this.addOrEditSalesHead(obj, "edit"), name: 'Edit', icon: 'assets/new_edit2.png', style: ActionStyle.EDIT },
          {
            method: (obj) => this.addOrEditSalesHead(obj, "delete"), name: 'Delete', icon: 'assets/new_delete2.png', style: ActionStyle.DELETE,
            // method: (obj) => this.deleteSalesHead(obj), name: 'Delete', icon: 'assets/new_delete2.png', style: ActionStyle.DELETE,
            // dialogProperties: { title: 'Delete pur return Head', templateRef: () => this.deleteTemplate() }
          },
          // { name: 'WhatsApp', icon: 'assets/new_whatsApp2.png', style: ActionStyle.WHATSAPP },
          // { name: 'Print', icon: 'assets/new_print.png', style: ActionStyle.PRINT },
          // {
          //   name: 'Share',
          //   icon: 'share',
          //   style: ActionStyle.SHARE
          // }
          // { name: 'Email', icon: 'assets/new_mail.png', style: ActionStyle.EMAIL}
        ]
      },
    ]
  };
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.firmPreferences = JSON.parse(sessionStorage.getItem('firmPreferences'));
    if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
      this.minDate = this.firmPreferences.finSdate;
      this.maxDate = this.firmPreferences.finEdate;
    }
    // this.today = new Date().toISOString().split('T')[0];
    this.today = this.todayDate.localDate();
    this.purchaseheadorderListFormGroup = this.buildSalesListFormGroup();
    setTimeout(() => {
      // this.getpurchaseorderDataList();
      this.getOrderHead();
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

  reset() {
    this.purchaseheadorderListFormGroup.reset();
  }

  getpurchaseorderDataList() {
    this.isDataLoading = true;
    this.dataList = null;
    const payload = Object.assign({});


    // payload.fromDate= "2023-11-04T09:07:45.515Z",
    // payload.toDate= "2024-11-04T09:07:45.515Z"

    if (this.purchaseheadorderListFormGroup.value.invDate) {
      payload.outwardDate = this.purchaseheadorderListFormGroup.value.invDate ? this.purchaseheadorderListFormGroup.value.invDate : null;
    }
    payload.fromDate = this.datePipe.transform(this.purchaseheadorderListFormGroup.value.fromDate, 'yyyy-MM-dd'),
      payload.toDate = this.datePipe.transform(this.purchaseheadorderListFormGroup.value.toDate, 'yyyy-MM-dd'),
      payload.invNo = this.purchaseheadorderListFormGroup.value.invNo;
    payload.accName = this.purchaseheadorderListFormGroup.value.accName;
    payload.accShName = this.purchaseheadorderListFormGroup.value.accShName;
    payload.cityId = this.purchaseheadorderListFormGroup.value.cityId ? this.purchaseheadorderListFormGroup.value.cityId : 0;
    payload.mode = this.purchaseheadorderListFormGroup.value.mode ? this.purchaseheadorderListFormGroup.value.mode : 0;
    payload.accGSTIn = this.purchaseheadorderListFormGroup.value.accGSTIn;
    payload.invValue = this.purchaseheadorderListFormGroup.value.invValue ? this.purchaseheadorderListFormGroup.value.invValue : 0;
    payload.tranTypeHeadId = 4,
      payload.tranTypeName = PURCHASERETURNPREFIX,
      this.outwardService.GetOutwardHead(payload).subscribe(data => {
        this.dataList = data;
        this.isDataLoading = false;
      });
  }

  refresh(): void {
    this.getOrderHead();
  }

  addOrEditSalesHead(salesHeadRowData?: any, method?: any) {
    let action = method;
    this.editObj = salesHeadRowData ? salesHeadRowData : {} as any;
    this.outwardService.setSalesHead({ salesHeadRowData }, action);
    this.router.navigate(['pharma/inward/purchaseOrdersEntry']);
    this.addOrEditFlag = true;
  }



  deleteOrderHeadById(orderHeadRowData?: any) {
    this.outwardService.deleteOrderHeadById(orderHeadRowData.ordHeadId).subscribe(data =>
      ResponseUtils.isStatus200(data) ? this.refresh() :
        ResponseUtils.isStatus404(data) ?
          AppMessageUtils.warningMessage("Return Head already deleted") : '');
  }



  deleteTemplate() {
    return this.deleteSalesHeadTemplate;
  }

  addInvoice() {
    this.outwardService.setSalesHead(null, "edit");
    this.router.navigate(['pharma/inward/purchaseOrdersEntry']);
  }

  getOrderHead(){
    this.outwardService.getOrderHead().subscribe(data=>{
      this.dataList = data;
    })
  }


}
