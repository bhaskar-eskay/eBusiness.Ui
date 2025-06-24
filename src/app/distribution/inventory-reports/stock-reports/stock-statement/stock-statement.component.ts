
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { FinanceReportsService } from '../finance-reports.service';
import { Router } from '@angular/router';
import { InventoryReportsService } from '../../inventory-reports.service';
import { DatePipe } from '@angular/common';
import { AppConst } from 'src/app/shared/app-constants';
import { OptionsTableDefinition } from 'src/app/shared/components/auto-select/auto-select.component';
@Component({
  selector: 'app-stock-statement',
  templateUrl: './stock-statement.component.html',
  styleUrls: ['./stock-statement.component.scss']
})
export class StockStatementComponent implements OnInit {
    stockPositionRepost: FormGroup;
    step: number = 0;
    accountSelectionControl: FormControl;
    dropdownOptions:any=[];
    groupdropdown:any=[];
    filteredOptions:any=[];
    groupFilteredOptions:any=[];
    isAllSelected = false;
    isIndeterminate = false;
    financialYearStart: Date;
    financialYearEnd: Date;
    today: string;
    showTable: boolean = false;
    dataSource: any;
    isShowExcelpdf:boolean=false;
    constructor(private fb: FormBuilder, private router:Router,private StockRepService:InventoryReportsService,public datepipe: DatePipe
    ) {
      this.today = new Date().toISOString().split('T')[0];
      this.stockPositionRepost = this.fb.group({
        fromDate: [this.today, Validators.required],
        toDate: [this.today, Validators.required],
        accopyType: [''],
        accId:[[], Validators.required]
      });
    }
  
    ngOnInit(): void {
      this.getCompanies();
      // this.getCompaniesGroups();
      this.calculateFinancialYearDates();
      // this.createForm();
    }

      customAccountsOptsTable: OptionsTableDefinition = {
        panelWidth: 800,
        columns: [
          {
            name: 'Select All', value: (obj) => obj[''],
            fxFlex: 10,
            fxFlex1: 0
          },
          { name: 'Company Name', value: (obj) => obj['compName'] ? obj['compName'] : '', fxFlex: 34,fxFlex1:34, isKeyColumn: true },
          { name: 'Shot Name', value: (obj) => obj['compShName'] ? obj['compShName'] : '', fxFlex: 14,fxFlex1:14 },
          { name: 'Address1', value: (obj) => obj['address1'] ? obj['address1'] : '', fxFlex: 16,fxFlex1:16 },
          { name: 'Address2', value: (obj) => obj['address2'] ? obj['address2'] : '', fxFlex: 24,fxFlex1:24 },
          { name: 'Company Group Name', value: (obj) => obj['compGroupName'] ? obj['compGroupName'] : '', fxFlex: 12,fxFlex1:12 },
          // { name: 'Mobile', value: (obj) => obj['mobile'] ? obj['mobile'] : '', fxFlex: 14,fxFlex1:14},
        ]
      };
      filterKeys = ['compName', 'compShName', 'compGroupName'];
    
  
    setStep(index: number): void {
      this.step = index;
    }
    selectedCompanies:any;
    receiveData(data){
      this.selectedCompanies =[];
     data.forEach(x=>{
      this.selectedCompanies.push(x.compId);
     });
    }
    getCompanies(){
      this.StockRepService.getCompanyList().subscribe(res=>{
        console.log(res);
        this.dropdownOptions=res;
        // this.filteredOptions = [...this.dropdownOptions];
      })
    };
    getCompaniesGroups(){
      this.StockRepService.getGroupCompanyList().subscribe(res=>{
        console.log(res);
        this.groupdropdown=res;
        this.groupFilteredOptions = [...this.groupdropdown];
      })
    };
  
    generateReport(): void {
      console.log('Selected Companies:', this.stockPositionRepost.value);
      // let toDate = this.stockPositionRepost.value.toDate.split("T")
      let accId = [];
      //  if(this.stockPositionRepost.value.accId.length > 0){ 
      //     accId = this.stockPositionRepost.value.accId.map(item => item.compId).toString();
      //  }
       if(this.selectedCompanies.length == 0 ){
        return 
      }
       const payload={
        "reportOption": Number(this.stockPositionRepost.controls.accopyType.value),
        "companies": this.selectedCompanies ? this.selectedCompanies.toString() :"",
        // "fromDate": this.datepipe.transform(this.stockPositionRepost.value.fromDate, AppConst.DATE_FORMAT), 
        // this.stockPositionRepost.value.fromDate,
        // "toDate": this.datepipe.transform(this.stockPositionRepost.value.toDate,AppConst.DATE_FORMAT),
        "finSDate": this.datepipe.transform(this.financialYearStart,AppConst.DATE_FORMAT),
        "finEDate": this.datepipe.transform(this.financialYearEnd,AppConst.DATE_FORMAT)
      }
      console.log('payload', payload);
      this.showTable = false;
  
      this.StockRepService.getstockPosition(payload).subscribe(res =>{
        if(res){
          this.showTable = true;
          this.isShowExcelpdf=true;
          console.log('res', res);
          this.dataSource = JSON.parse(res);
          this.dropdownOptions =[];
        }
      });
    }
  exportToExcel(data: any) {
    let reBody = {
      companies: this.selectedCompanies ? this.selectedCompanies.toString() : "",
      reportOption: Number(this.stockPositionRepost.controls.accopyType.value),
      finSDate: this.datepipe.transform(this.financialYearStart, AppConst.DATE_FORMAT),
      finEDate: this.datepipe.transform(this.financialYearEnd, AppConst.DATE_FORMAT)
    };

    this.StockRepService.gettockPositionExcel(reBody).subscribe(
      (res: any) => {
        const base64String = res;
        const fileName = 'StockPositionReport.xlsx'; // Desired file name
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

  exportToPdf(){

  }
  
    filterOptions(searchValue: string): void {
      const lowerSearch = searchValue.toLowerCase();

      this.filteredOptions = this.dropdownOptions.filter(option => {
        const compName = option.compName ? option.compName.toLowerCase() : '';
        const compShName = option.compShName ? option.compShName.toLowerCase() : '';
        const address1 = option.address1 ? option.address1.toLowerCase() : '';
        const address2 = option.address2 ? option.address2.toLowerCase() : '';
        const compGroupName = option.compGroupName ? option.compGroupName.toString() : '';
    
        return compName.includes(lowerSearch) ||
               compShName.includes(lowerSearch) ||
               address1.includes(lowerSearch) ||
               address2.includes(lowerSearch)||
               compGroupName.includes(lowerSearch);

      });
      // this.filteredOptions = this.dropdownOptions.filter(option => 
      //   option.compName.toLowerCase().includes(lowerSearch) ||
      //   option.compShName.toLowerCase().includes(lowerSearch) ||
      //   option.address1.toLowerCase().includes(lowerSearch) ||
      //   option.address2.toLowerCase().includes(lowerSearch) ||
      //   option.compGroupName.toString().includes(lowerSearch)
      //   );
    }
    GroupfilterOptions(searchValue: string): void {
      const lowerSearch = searchValue.toLowerCase();
      this.groupFilteredOptions = this.groupdropdown.filter(option => 
        option.compGroupName.toLowerCase().includes(lowerSearch)
        );
    }
  
    resetForm(): void {
      this.stockPositionRepost.reset();
      this.dataSource=[];
      this.dropdownOptions = [];
    }
  
   
  
    toggleSelectAll(checked: boolean): void {
      if (checked) {
        this.stockPositionRepost.get('accId').setValue(this.dropdownOptions);
      } else {
        this.stockPositionRepost.get('accId').setValue([]);
      }
      this.updateSelectAllState();
    }
    toggleSelectAllgroups(checked: boolean): void {
      if (checked) {
        this.stockPositionRepost.get('accId').setValue(this.groupdropdown);
      } else {
        this.stockPositionRepost.get('accId').setValue([]);
      }
      this.updateSelectAllgroupState();
    }
  
    onOptionChange(): void {
      this.updateSelectAllState();
    }
  
    updateSelectAllState(): void {
      const selectedOptions = this.stockPositionRepost.get('accId').value || [];
      this.isAllSelected = selectedOptions.length === this.dropdownOptions.length;
      this.isIndeterminate =
        selectedOptions.length > 0 && selectedOptions.length < this.dropdownOptions.length;
    }
    updateSelectAllgroupState(): void {
      const selectedOptions = this.stockPositionRepost.get('accId').value || [];
      this.isAllSelected = selectedOptions.length === this.groupdropdown.length;
      this.isIndeterminate =
        selectedOptions.length > 0 && selectedOptions.length < this.groupdropdown.length;
    }
  
    // Calculate the start and end date of the current financial year
    calculateFinancialYearDates() {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
  
      // Assuming financial year starts from 1st April and ends on 31st March
      if (currentDate.getMonth() < 3) {
        // If current month is before April, use last year's financial year
        this.financialYearStart = new Date(currentYear - 1, 3, 1); // 1st April of previous year
        this.financialYearEnd = new Date(currentYear, 2, 31); // 31st March of current year
      } else {
        // If current month is from April onwards, use current year's financial year
        this.financialYearStart = new Date(currentYear, 3, 1); // 1st April of current year
        this.financialYearEnd = new Date(currentYear + 1, 2, 31); // 31st March of next year
      }
    }
  
    // Datepicker filter to disable dates outside the financial year
    dateFilter = (date: Date | null): boolean => {
      if (!date) return false;
      return date >= this.financialYearStart && date <= this.financialYearEnd;
    };
  
    typeChange(value){
     console.log(value);
        // Based on the condition, set 'name' field required or not
        const nameControl = this.stockPositionRepost.get('accId');
        if (+value == 1) {
          nameControl.setValue([]);
          nameControl.setValidators([Validators.required]);  // Set as required
        } else {
          nameControl.setValue([]);
          nameControl.clearValidators();  // Remove the required validator
        }
  
         // Always call updateValueAndValidity after changing the validators
          nameControl.updateValueAndValidity();
    }
  
    goback(){
      this.router.navigate(['pharma/inventoryReports/stockReports']);
    }
  



}
