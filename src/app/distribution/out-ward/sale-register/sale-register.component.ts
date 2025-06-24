import { Component, OnInit } from '@angular/core';
import { OutwardService } from '../outward.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { values } from 'lodash';
import { DatePipe, Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material';
import { TableDefinition } from 'src/app/shared/components/table/table-model';
import { Router } from '@angular/router';
import { RouteService } from 'src/app/shared/services/route.service';

@Component({
  selector: 'app-sale-register',
  templateUrl: './sale-register.component.html',
  styleUrls: ['./sale-register.component.scss']
})
export class SaleRegisterComponent implements OnInit {
  SaleRegisterForm: FormGroup;
    // dateOptionData = [{id:1, value:'Pur.Date'}, {id:2, value:'Inv.Date'}];
    reportTypeData = [{id:'Billwise', value:'Billwise'}, {id:'Gstinwise', value:'Gstinwise'},
       {id:'Datewise', value:'Datewise'}, {id:'Summary', value:'Summary'}];
    firmPreferences: any;
    minDate: any;
    maxDate: any;
    today: string;
    purchaseRegisterData: any;
    dataSource = new MatTableDataSource();
    showTable : boolean = false
    showDate: boolean =false;
    tableDefinition:  TableDefinition = {
      columns:  [
        {id:  'inwardDate',  name:  'InwardDate', value:  (obj) => obj['inwardDate']?obj['inwardDate'] ? obj['inwardDate'] :  '':''},
        {id:  'inwardHeadNo',  name:  'InwardHeadNo', value:  (obj) => obj['inwardHeadNo']?obj['inwardHeadNo'] ? obj['inwardHeadNo'] :  '':''},
        {id:  'taxCategoryName',  name:  'TaxCategoryName', value:  (obj) => obj['taxCategoryName'] ? obj['taxCategoryName'] :  ''},
        {id:  'invNo',  name:  'Inv.No', value:  (obj) => obj['invNo'] ? obj['invNo'] :  ''},
        {id:  'invDate',  name:  'InvDate', value:  (obj) => obj['invDate'] ? obj['invDate'] :  ''},
        {id:  'accShName',  name:  'Sh.Name', value:  (obj) => obj['accShName'] ? obj['accShName'] :  ''},
        {id:  'accName',  name:  'Acc Name', value:  (obj) => obj['accName'] ? obj['accName'] :  ''},
        {id:  'cityName',  name:  'CityName', value:  (obj) => obj['cityName'] ? obj['cityName'] :  ''},
        {id:  'accGstIn',  name:  'accGstIn', value:  (obj) => obj['accGstIn'] ? obj['accGstIn'] :  ''},
        {id:  'purMode',  name:  'PurMode', value:  (obj) => obj['purMode'] ? obj['purMode'] :  ''},
        {id:  'preTaxValue',  name:  'PreTaxValue', value:  (obj) => obj['preTaxValue'] ? obj['preTaxValue'] :  ''},
        {id:  'CGSTValue',  name:  'CGSTValue', value:  (obj) => obj['CGSTValue'] ? obj['CGSTValue'] :  ''},
        {id:  'SGSTValue',  name:  'SGSTValue', value:  (obj) => obj['SGSTValue'] ? obj['SGSTValue'] :  ''},
        {id:  'IGSTValue',  name:  'IGSTValue', value:  (obj) => obj['IGSTValue'] ? obj['IGSTValue'] :  ''},
        {id:  'InvValue',  name:  'InvValue', value:  (obj) => obj['InvValue'] ? obj['InvValue'] :  ''},
        
    ]};
    dataList: MatTableDataSource<unknown>;
  
    constructor(private service : OutwardService, private fb :  FormBuilder, private datePipe: DatePipe, private router:Router,private routeService:RouteService, private location: Location) { }
  
    ngOnInit() {
      this.today = new Date().toISOString().split('T')[0];
      this.SaleRegisterForm = this.buildForm();
      this.firmPreferences =JSON.parse(sessionStorage.getItem('firmPreferences'));
      if(this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== ''){
        this.minDate = this.firmPreferences.finSdate;
        this.maxDate = this.firmPreferences.finEdate;
      }
      // this.service.getRegData$.subscribe(x=>{
      //   if(x !== null && x !== undefined){
      //     this.showDate  = true;
      //   }else{
      //     this.showDate = false;
      //   }
      // });
    }
  
    buildForm() : FormGroup{
      return this.fb.group({
        fromDate : [this.today],
        toDate : [this.today],
        // dateOption : [''],
        reportType : [''],
        // wantTaxWiseDetails : ['']
      });
    }
  
    getSearchData(){
      var data = this.SaleRegisterForm.controls;
      const body = {
        fromDate : this.datePipe.transform(data.fromDate.value, 'yyyy-MM-dd'),
        toDate : this.datePipe.transform(data.toDate.value, 'yyyy-MM-dd'),
        // dateOption : data.dateOption.value,
        reportOption : data.reportType.value,
        // wantTaxWiseDetails : data.value
      }
      this.service.getSaleRegisterData(body).subscribe(res =>{
        if(res){
          this.showTable = true;
          console.log('res', res);
          this.dataSource = JSON.parse(res);
        }
      });
    }
  
    Excel(){
      var data = this.SaleRegisterForm.controls;
      const body = {
        fromDate : this.datePipe.transform(data.fromDate.value, 'yyyy-MM-dd'),
        toDate : this.datePipe.transform(data.toDate.value, 'yyyy-MM-dd'),
        // dateOption : data.dateOption.value,
        reportOption : data.reportType.value,
        // wantTaxWiseDetails : data.value
      }
      this.service.getSaleRegistrDataExcel(body).subscribe(res =>{
        if(res){
          const payload = {
            base64Excel:res,
            name: `sale_register_${body.fromDate}_to_${body.toDate}`
          }
          this.routeService.downloadExcel(payload);
          // this.showTable = true;
          console.log('res', res);
          // this.dataSource = JSON.parse(res);
        }
      });
  
    }
    // goback(){
    //   this.router.navigate(['pharma/outward/OutwardRegisters']);
    // }
    goback(){
      // if(this.router.url.includes('from=salesInvoices')){
      //   this.router.navigate(['pharma/outward/salesInvoices']);
      // }
      // else if(this.router.url.includes('from=internalStockAdjustmentsMinus')){
      //   this.router.navigate(['pharma/outward/internalStockAdjustmentsMinus']);
      // }
      // else if(this.router.url.includes('from=otherSales')){
      //   this.router.navigate(['pharma/outward/otherSales']);
      // }
      // else if(this.router.url.includes('from=generalCreditNotesIssueToCustomers')){
      //   this.router.navigate(['pharma/outward/generalCreditNotesIssueToCustomers']);
      // }
      // else if(this.router.url.includes('from=generalDebitNotesIssueToCustomers')){
      //   this.router.navigate(['pharma/outward/generalDebitNotesIssueToCustomers']);
      // }
      // else if(this.router.url.includes('from=quotations')){
      //   this.router.navigate(['pharma/outward/quotations']);
      // }
      // else if(this.router.url.includes('from=retailSales')){
      //   this.router.navigate(['pharma/outward/retailSales']);
      // }
      //  else {
      // this.router.navigate(['pharma/outward/OutwardRegisters']);
      // }

      this.location.back();
    }
  
  }
