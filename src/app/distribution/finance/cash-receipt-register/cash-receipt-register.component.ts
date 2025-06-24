import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { DatePipe } from '@angular/common';
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


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-cash-receipt-register',
  templateUrl: './cash-receipt-register.component.html',
  styleUrls: ['./cash-receipt-register.component.scss','../finance.component.scss']
})
export class CashReceiptRegisterComponent implements OnInit {
  openPanel = false;
  step = 0;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
 
  cashReceiptRegisterFormGroup: FormGroup;

  displayedColumns: string[] = ['voucherNo', 'voucherDate','AccountName', 'Description', 'Amount'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

 


  setStep(index: number) {
    this.step = index;
  }

 

  prevStep() {
    this.step = 0;
    this.openPanel = false;
  }

  constructor(private formBuilder:FormBuilder, private datePipe: DatePipe,private financeService : FinanceService,
    private route:Router) { }
  ngOnInit() {
   this.cashReceiptRegisterFormGroup=this.buildCashReceiptRegisterFormGroup();
   this.dataSource.sort = this.sort;

  }
  ngAfterViewInit() {
    // Assign paginator after view initialization
    this.dataSource.paginator = this.paginator;
  }
  buildCashReceiptRegisterFormGroup(){
    return this.formBuilder.group({
      fromDate:[''],
      toDate:[''],
      wantVoucherTotal: ['no'] // Default value
    });
  }

  generate(data:any) {
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
      tranTypeHeadId : "5",
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
           this.dataSource.sort = this.sort;
          }, 100); 
        }
      })
   }
  resetForm(){
    this.cashReceiptRegisterFormGroup.reset();
  }

  exportToExcel(data: any) {
    let voucherTotal = "2";
    let frmDte = this.datePipe.transform(data.fromDate._d, 'yyyy-MM-ddTh:mm:ss');
    let toDte = this.datePipe.transform(data.toDate._d, 'yyyy-MM-ddTh:mm:ss');
  
    if (data.wantVoucherTotal === "yes") {
      voucherTotal = "1";
    }
  
    let reBody = {
      tranTypeHeadId: "5",
      fromDate: frmDte,
      toDate: toDte,
      sumTotalYN: voucherTotal
    };
  
    this.financeService.generateExcel(reBody).subscribe(
      (res: any) => {
        const base64String = res.resultObject;
        const fileName = 'CashReceiptRegister.xlsx'; // Desired file name
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
  
  downloadFile(filePath:any) {
    const link = document.createElement('a');
    link.href = filePath.resultObject; // The path returned by your API
    link.download = filePath.resultObject.split('/').pop() || 'download.xlsx'; // Extract filename or use default
    link.target = '_blank';
  
    // Append link to the body
    document.body.appendChild(link);
  
    // Trigger the click
    link.click();
  
    // Remove the link from the DOM
    document.body.removeChild(link);
  }
  
  
  exportToPdf() {
    // Logic for exporting to PDF
    console.log('Export to PDF clicked');
  }

  goback(){
    if(this.route.url.includes('from=cashReceiptRegister')){
      this.route.navigate(['pharma/finance/FinanceRegister']);
    } else {
    this.route.navigate(['pharma/finance/cashReceipts']);
    }
  }

}
