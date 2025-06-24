import { Component, OnInit } from '@angular/core';
import { InwardService } from '../in-ward.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { values } from 'lodash';
import { DatePipe, Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material';
import { TableDefinition } from 'src/app/shared/components/table/table-model';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from 'src/app/shared/services/route.service';
@Component({
  selector: 'app-purchase-registers',
  templateUrl: './purchase-registers.component.html',
  styleUrls: ['./purchase-registers.component.scss']
})
export class PurchaseRegistersComponent implements OnInit {
  inwardPurchaseRegisterForm: FormGroup;
  dateOptionData = [{id:1, value:'Pur.Date'}, {id:2, value:'Inv.Date'}];
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

  constructor(private service : InwardService, private fb :  FormBuilder, private datePipe: DatePipe, private router:Router,private routeService:RouteService, private route:ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.today = new Date().toISOString().split('T')[0];
    this.inwardPurchaseRegisterForm = this.buildForm();
    this.firmPreferences =JSON.parse(sessionStorage.getItem('firmPreferences'));
    if(this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== ''){
      this.minDate = this.firmPreferences.finSdate;
      this.maxDate = this.firmPreferences.finEdate;
    }
    this.service.getRegData$.subscribe(x=>{
      if(x !== null && x !== undefined){
        this.showDate  = true;
      }else{
        this.showDate = false;
      }
    }); 
    if(this.router.url.includes('from=purchaseReturns')){
      this.showDate = false;
    }
  }

  buildForm() : FormGroup{
    return this.fb.group({
      fromDate : [this.today],
      toDate : [this.today],
      dateOption : [''],
      reportType : [''],
      wantTaxWiseDetails : ['']
    });
  }

  getSearchData(){
    var data = this.inwardPurchaseRegisterForm.controls;
    const body = {
      fromDate : this.datePipe.transform(data.fromDate.value, 'yyyy-MM-dd'),
      toDate : this.datePipe.transform(data.toDate.value, 'yyyy-MM-dd'),
      dateOption : 0,
      reportOption : data.reportType.value,
      // wantTaxWiseDetails : data.value
    }
    this.service.getPurchaseRegistrData(body).subscribe(res =>{
      if(res){
        this.showTable = true;
        console.log('res', res);
        this.dataSource = JSON.parse(res);
      }
    });
  }

  Excel(){
    var data = this.inwardPurchaseRegisterForm.controls;
    const body = {
      fromDate : this.datePipe.transform(data.fromDate.value, 'yyyy-MM-dd'),
      toDate : this.datePipe.transform(data.toDate.value, 'yyyy-MM-dd'),
      dateOption : data.dateOption.value,
      reportOption : data.reportType.value,
      // wantTaxWiseDetails : data.value
    }
    this.service.getPurchaseRegistrDataExcel(body).subscribe(res =>{
      if(res){
        const payload = {
          base64Excel:res,
          name: `pur_register_${body.fromDate}_to_${body.toDate}`
        }
        this.routeService.downloadExcel(payload);
        // this.showTable = true;
        console.log('res', res);
        // this.dataSource = JSON.parse(res);
      }
    });

  }
  goback(){
    // if(this.router.url.includes('from=purchaseOrders')){
    //   this.router.navigate(['pharma/inward/purchaseOrders']);
    // }
    // else if(this.router.url.includes('from=purchases')){
    //   this.router.navigate(['pharma/inward/purchases']);
    // }
    // else if(this.router.url.includes('from=internalStockAdjustmentsPlus')){
    //   this.router.navigate(['pharma/inward/internalStockAdjustmentsPlus']);
    // }
    // else if(this.router.url.includes('from=otherPurchases')){
    //   this.router.navigate(['pharma/inward/otherPurchases']);
    // }
    // else if(this.router.url.includes('from=supplierIssuedCreditNotes')){
    //   this.router.navigate(['pharma/inward/supplierIssuedCreditNotes']);
    // }
    // else if(this.router.url.includes('from=supplierIssuedDebitNotes')){
    //   this.router.navigate(['pharma/inward/supplierIssuedDebitNotes']);
    // }
    // else if(this.router.url.includes('from=supplierRateDifferenceCreditNotes')){
    //   this.router.navigate(['pharma/inward/supplierRateDifferenceCreditNotes']);
    // }
    // else if(this.router.url.includes('from=supplierRateDifferenceDebitNotes')){
    //   this.router.navigate(['pharma/inward/supplierRateDifferenceDebitNotes']);
    // }
    //  else {
    // this.router.navigate(['pharma/inward/InwardRegisters']);
    // }
    this.location.back()
  }



}
