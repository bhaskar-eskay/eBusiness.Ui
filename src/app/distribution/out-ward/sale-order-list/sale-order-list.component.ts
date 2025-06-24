import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import { InwardService } from '../../in-ward/in-ward.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OutwardService } from '../outward.service';
import { Router } from '@angular/router';
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
  selector: 'app-sale-order-list',
  templateUrl: './sale-order-list.component.html',
  styleUrls: ['./sale-order-list.component.scss', '../out-ward.component.scss']
})
export class SaleOrderListComponent implements OnInit {

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
          { method: (obj) => this.addOrEdit(obj, "edit"), name: 'Edit', icon: 'assets/new_edit2.png', style: ActionStyle.EDIT },
          {
            method: (obj) => this.addOrEdit(obj, "delete"), name: 'Delete', icon: 'assets/new_delete2.png', style: ActionStyle.DELETE,
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
  dataList: null;
  SaleOrderListHeadFormGroup: FormGroup;
  today: any;
  firmPreferences: any;
  minDate: any;
  maxDate: any;
  editObj: any;
  addOrEditFlag: boolean;
  constructor(private datePipe: DatePipe, private inwardService: InwardService, private fb: FormBuilder,
    private outwardService:OutwardService, private router:Router, private todayDate:HttpService) { }
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.today = new Date().toISOString().split('T')[0];
    
    this.today = this.todayDate.localDate();
    this.today = this.datePipe.transform(this.today,'yyyy-MM-dd');    
    this.SaleOrderListHeadFormGroup = this.fb.group({
      fromDate: [this.today, Validators.required],
      toDate: [this.today, Validators.required],
      sretNo: "",
      custmorName: "",
      shName: "",
      cityName: "",
      gstin: "",
      mode: "",
      invValue: ""
    });
    this.firmPreferences = JSON.parse(sessionStorage.getItem('firmPreferences'));
    if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
      this.minDate = this.firmPreferences.finSdate;
      this.maxDate = this.firmPreferences.finEdate;
    };
    // this.getSaleOrderList();
    this.getOrderHead();
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

  getList() {
    this.getSaleOrderList();
  }

  resetForm() {
    this.SaleOrderListHeadFormGroup.reset();
  }

  getSaleOrderList() {
    // this.isDataLoading = true;
    this.dataList = null;
    const payload = Object.assign({});
    // console.log(this.salesReturnFormGroup.value);
    payload.inwardDate = this.SaleOrderListHeadFormGroup.value.invDate ? this.SaleOrderListHeadFormGroup.value.invDate : null;
    payload.fromDate = this.datePipe.transform(this.SaleOrderListHeadFormGroup.value.fromDate, 'yyyy-MM-dd'),
    payload.toDate = this.datePipe.transform(this.SaleOrderListHeadFormGroup.value.toDate, 'yyyy-MM-dd'),
    payload.invNo = this.SaleOrderListHeadFormGroup.value.invNo ? this.SaleOrderListHeadFormGroup.value.invNo : "";
    payload.accName = this.SaleOrderListHeadFormGroup.value.accName ? this.SaleOrderListHeadFormGroup.value.accName : "";
    payload.accShName = this.SaleOrderListHeadFormGroup.value.accShName ? this.SaleOrderListHeadFormGroup.value.accShName : "";
    payload.cityId = this.SaleOrderListHeadFormGroup.value.cityId ? this.SaleOrderListHeadFormGroup.value.cityId : 0;
    payload.mode = this.SaleOrderListHeadFormGroup.value.mode ? this.SaleOrderListHeadFormGroup.value.mode : 0;
    payload.accGSTIn = this.SaleOrderListHeadFormGroup.value.accGSTIn ? this.SaleOrderListHeadFormGroup.value.accGSTIn : "";
    payload.invValue = this.SaleOrderListHeadFormGroup.value.invValue ? this.SaleOrderListHeadFormGroup.value.invValue : 0;
    payload.tranTypeHeadId = 3,
    payload.tranTypeName = "SORD"
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
    this.router.navigate(['pharma/outward/saleOrderEntry'], { queryParams: { id: salesHead.inwardHeadId } });
    this.addOrEditFlag = true;
  }

  
  getOrderHead(){
    this.outwardService.getOrderHead().subscribe(data=>{
      this.dataList = data;
    })
  }

}
