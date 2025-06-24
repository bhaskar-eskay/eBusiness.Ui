import { DatePipe } from '@angular/common';
import { Component, OnInit,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource ,MatPaginator} from '@angular/material';
import { FinanceService } from '../finance.service';
import { Router } from '@angular/router';

export interface PeriodicElement {
  voucherDate: string;
  voucherNo: number;
  Description: number;
  Amount: string;
  Discount:string;
  AccountName:string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {voucherNo: 1, voucherDate: '',AccountName:'', Description: 1, Amount: '',Discount:''},
//   {voucherNo: 2, voucherDate: '', AccountName:'',Description: 0, Amount: '',Discount:''},
//   {voucherNo: 3, voucherDate: '', AccountName:'',Description: 6, Amount: '',Discount:''},
//   {voucherNo: 4, voucherDate: '',AccountName:'', Description: 9, Amount: '',Discount:''},
//   {voucherNo: 5, voucherDate: '', AccountName:'',Description: 10., Amount: '',Discount:''},
//   {voucherNo: 6, voucherDate: '',AccountName:'', Description: 12, Amount: '',Discount:''},
//   {voucherNo: 7, voucherDate: '',AccountName:'', Description: 14, Amount: '',Discount:''},
//   {voucherNo: 8, voucherDate: '', AccountName:'',Description: 15, Amount: '',Discount:''},
//   {voucherNo: 9, voucherDate: '', AccountName:'',Description: 18, Amount: '',Discount:''},
//   {voucherNo: 10, voucherDate: '', AccountName:'',Description: 20, Amount: '',Discount:''},
// ];

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-cash-payment-register',
  templateUrl: './cash-payment-register.component.html',
  styleUrls: ['./cash-payment-register.component.scss']
})
export class CashPaymentRegisterComponent implements OnInit {
    openPanel = false;
    step = 0;
    foods: Food[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];
   
    cashPaymentRegisterFormGroup: FormGroup;
  
    displayedColumns: string[] = ['voucherNo', 'voucherDate','AccountName', 'Description', 'Amount'];
    dataSource = new MatTableDataSource();
    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  
  
  
    setStep(index: number) {
      this.step = index;
    }
  
   
  
    prevStep() {
      this.step = 0;
      this.openPanel = false;
    }
  
    constructor(private formBuilder:FormBuilder, private datePipe: DatePipe,private financeService : FinanceService,
      private route:Router
    ) { }
  
    ngOnInit() {
     this.cashPaymentRegisterFormGroup=this.buildcashPaymentRegisterFormGroup();
    
    }
    ngAfterViewInit() {
      // Assign paginator after view initialization
      this.dataSource.paginator = this.paginator;
    }
    buildcashPaymentRegisterFormGroup(){
      return this.formBuilder.group({
        fromDate:[''],
        toDate:[''],
        wantVoucherTotal: ['no'] // Default value
      });
    }
  
    nextStep(data:any) {
      console.log(data);
      let voucherTotal = "2"
      let frmDte = this.datePipe.transform(data.fromDate._d,  'yyyy-MM-ddTh:mm:ss');
      let toDte = this.datePipe.transform(data.toDate._d,  'yyyy-MM-ddTh:mm:ss');
      if(data.wantVoucherTotal == "yes"){
       voucherTotal= "1"
      }
      else{
       voucherTotal= "2"
      }
       this.step = 1;
       this.openPanel = true;
       let reBody={
        tranTypeHeadId : "7",
         fromDate: frmDte,
         toDate:toDte,
         sumTotalYN:voucherTotal
        }
        this.financeService.generateCashRecptReg(reBody).subscribe(res=>{
          if(res){
            console.log(res)
            this.dataSource = new MatTableDataSource(res.resultObject);
            setTimeout(() => {
              this.dataSource.paginator = this.paginator;
            }, 100);
          }
        })
     }
    resetForm(){
      this.cashPaymentRegisterFormGroup.reset();
    }
    // exportToExcel() {
    //   // Logic for exporting to Excel
    //   console.log('Export to Excel clicked');
    // }

    exportToExcel(data: any) {
      let voucherTotal = "2";
      let frmDte = this.datePipe.transform(data.fromDate._d, 'yyyy-MM-ddTh:mm:ss');
      let toDte = this.datePipe.transform(data.toDate._d, 'yyyy-MM-ddTh:mm:ss');
    
      if (data.wantVoucherTotal === "yes") {
        voucherTotal = "1";
      }
    
      let reBody = {
        tranTypeHeadId: "7",
        fromDate: frmDte,
        toDate: toDte,
        sumTotalYN: voucherTotal
      };
    
      this.financeService.generateExcel(reBody).subscribe(
        (res: any) => {
          const base64String = res.resultObject;
          const fileName = 'CashPaymentRegister.xlsx'; // Desired file name
          // Decode Base64 to binary data
          const binaryData = atob(base64String);
          const byteNumbers = new Array(binaryData.length);
          for (let i = 0; i < binaryData.length; i++) {
            byteNumbers[i] = binaryData.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          // Create a Blob from the binary data
          const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          // Create a URL for the Blob
          const url = window.URL.createObjectURL(blob);
          // Create an anchor element and trigger the download
          const anchor = document.createElement('a');
          anchor.href = url;
          anchor.download = fileName;
          anchor.click();
  
          // Clean up the URL
          window.URL.revokeObjectURL(url);
        },
        (err) => {
          console.error('Error generating Excel file:', err);
        }
      );
    }
    
    exportToPdf() {
      // Logic for exporting to PDF
      console.log('Export to PDF clicked');
    }

    goback(){
      if(this.route.url.includes('from=cpRegister')){
        this.route.navigate(['pharma/finance/FinanceRegister']);
      } else {
      this.route.navigate(['pharma/finance/cashPayments']);
      }
    }
    
}

