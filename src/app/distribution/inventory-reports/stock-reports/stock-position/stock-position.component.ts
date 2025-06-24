
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { FinanceReportsService } from '../finance-reports.service';
import { Router } from '@angular/router';
import { InventoryReportsService } from '../../inventory-reports.service';
import { DatePipe } from '@angular/common';
import { AppConst } from 'src/app/shared/app-constants';
import { OptionsTableDefinition } from 'src/app/shared/components/auto-select/auto-select.component';

@Component({
  selector: 'app-stock-position',
  templateUrl: './stock-position.component.html',
  styleUrls: ['./stock-position.component.scss']
})
export class StockPositionComponent implements OnInit {
    stockStatementRepost: FormGroup;
    step: number = 0;
    accountSelectionControl: FormControl;
    dropdownOptions:any=[];
    groupdropdown:any=[];
    filteredOptions:any=[];
    groupFilteredOptions:any=[];
    // Updated with additional columns
    // dropdownOptions = [
    //   { id: 1, name: 'Account A', address: '123 Main St', city: 'New York', state: 'NY' },
    //   { id: 2, name: 'Account B', address: '456 Elm St', city: 'Los Angeles', state: 'CA' },
    //   { id: 3, name: 'Account C', address: '789 Oak St', city: 'Chicago', state: 'IL' },
    //   { id: 4, name: 'Account D', address: '101 Pine St', city: 'Houston', state: 'TX' }
    // ];
    // dropdownOptions = [
    //   { id: 1, name: 'A', address: '1', city: 'N', state: 'N' },
    //   { id: 2, name: 'B', address: '4', city: 'L', state: 'C' },
    //   ...
    // ];
  
    isAllSelected = false;
    isIndeterminate = false;
    financialYearStart: Date;
    financialYearEnd: Date;
    today: string;
    showTable: boolean = false;
    dataSource: any;
    isshowExcel:boolean=false;
  selectedAccounts: any [] = [];
    constructor(private fb: FormBuilder, private router:Router,private StockRepService:InventoryReportsService,public datepipe: DatePipe
    ) {
      this.today = new Date().toISOString().split('T')[0];
      this.stockStatementRepost = this.fb.group({
        fromDate: [this.today, Validators.required],
        toDate: [this.today, Validators.required],
        accopyType: [''],
        accId:[[], Validators.required]
      });
    }
  
    ngOnInit(): void {
      this.getCompanies();
      this.getCompaniesGroups();
      this.calculateFinancialYearDates();
      // this.createForm();
      this.stockStatementRepost.get('accId').valueChanges.subscribe((selectedValues) => {
        if (selectedValues.length > 0) {
          // Preserve previously selected accounts even after filtering
          this.selectedAccounts = this.dropdownOptions.filter(account =>
            selectedValues.some((selected) => selected.compName === account.compName)
          );
        //   const commonObjects = this.filteredOptions.filter(person1 =>
        //     this.selectedAccounts.some(person2 => person2.compId === person1.compId)
        //   );
        //   if(svalues.length > 0){
        //     svalues.forEach(x=>{
        //       const duplival = this.selectedAccounts.find(y=>y.compId == x.compId);
        //       if(!duplival){
        //       this.selectedAccounts.push(x);
        //       }
        //     })
          }
        //  else {
        //   this.selectedAccounts = [];
        // }
      });
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

    customCmpGroupsOptsTable: OptionsTableDefinition = {
      panelWidth: 500,
      columns: [
        {
          name: 'Select All', value: (obj) => obj[''],
          fxFlex: 10,
          fxFlex1: 0
        },
        { name: 'Company Group Name', value: (obj) => obj['compGroupName'] ? obj['compGroupName'] : '', fxFlex: 34,fxFlex1:34, isKeyColumn: true },
        // { name: 'Shot Name', value: (obj) => obj['compShName'] ? obj['compShName'] : '', fxFlex: 14,fxFlex1:14 },
        // { name: 'Address1', value: (obj) => obj['address1'] ? obj['address1'] : '', fxFlex: 16,fxFlex1:16 },
        // { name: 'Address2', value: (obj) => obj['address2'] ? obj['address2'] : '', fxFlex: 24,fxFlex1:24 },
        // { name: 'Company Group Name', value: (obj) => obj['compGroupName'] ? obj['compGroupName'] : '', fxFlex: 12,fxFlex1:12 },
        // { name: 'Mobile', value: (obj) => obj['mobile'] ? obj['mobile'] : '', fxFlex: 14,fxFlex1:14},
      ]
    };
    groupfilterKeys = ['compGroupName'];
    
    selectedCompanies:any;
    receiveData(data){
      this.selectedCompanies =[];
     data.forEach(x=>{
      this.selectedCompanies.push(x.compId);
     });
    }

    receiveGroupData(data){
      this.selectedCompanies =[];
     data.forEach(x=>{
      this.selectedCompanies.push(x.compGroupId);
     });
    }
    setStep(index: number): void {
      this.step = index;
    }
    getCompanies(){
      this.StockRepService.getCompanyList().subscribe(res=>{
        console.log(res);
        this.dropdownOptions=res;
        this.filteredOptions = res;
      })
    };
    getCompaniesGroups(){
      this.StockRepService.getGroupCompanyList().subscribe(res=>{
        console.log(res);
        this.groupdropdown=res;
        this.groupFilteredOptions = [...this.groupdropdown];
      })
    };
    accountType:any;
    generateReport(): void {
      console.log('Selected Accounts:', this.stockStatementRepost.value);
      // let toDate = this.stockStatementRepost.value.toDate.split("T")
      let accId = [];
      this.accountType = Number(this.stockStatementRepost.controls.accopyType.value)
      //  if(this.stockStatementRepost.value.accId.length > 0){ 
      //   if(this.stockStatementRepost.value.accopyType == 1){
      //     accId = this.stockStatementRepost.value.accId.map(item => item.compId).toString();
      //   }
      //   else if(this.stockStatementRepost.value.accopyType == 2){
      //     accId = this.stockStatementRepost.value.accId.map(item => item.compGroupId).toString();
      //   }
      //  }

      const acctype =  +this.stockStatementRepost.get('accopyType').value;
      if(acctype == 1){
        if(this.selectedCompanies.length == 0 ){
          return 
        }
      }
       const payload={
        "stmntOption": Number(this.stockStatementRepost.controls.accopyType.value),
        "compGrps":this.selectedCompanies ? this.selectedCompanies.toString() :"",
        "fromDate": this.datepipe.transform(this.stockStatementRepost.value.fromDate, AppConst.DATE_FORMAT), 
        // this.stockStatementRepost.value.fromDate,
        "toDate": this.datepipe.transform(this.stockStatementRepost.value.toDate,AppConst.DATE_FORMAT),
        "finSDate": this.datepipe.transform(this.financialYearStart,AppConst.DATE_FORMAT),
        "finEDate": this.datepipe.transform(this.financialYearEnd,AppConst.DATE_FORMAT)
      }
      console.log('payload', payload);
      this.showTable = false;
  
      this.StockRepService.getstockStstement(payload).subscribe(res =>{
        if(res){
          this.showTable = true;
          this.isshowExcel = true;
          this.stockStatementRepost.get('accopyType').setValue(["0"]);
          console.log('res', res);
          this.dataSource = JSON.parse(res);
        }
      });
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

    exportToExcel(data: any) {
      const payload={
        "stmntOption": this.accountType ? this.accountType:0,
        "compGrps":this.selectedCompanies ? this.selectedCompanies.toString() :"",
        "fromDate": this.datepipe.transform(this.stockStatementRepost.value.fromDate, AppConst.DATE_FORMAT), 
        "toDate": this.datepipe.transform(this.stockStatementRepost.value.toDate,AppConst.DATE_FORMAT),
        "finSDate": this.datepipe.transform(this.financialYearStart,AppConst.DATE_FORMAT),
        "finEDate": this.datepipe.transform(this.financialYearEnd,AppConst.DATE_FORMAT)
      }
  
      this.StockRepService.gettockStatementExcel(payload).subscribe(
        (res: any) => {
          const base64String = res;
          const fileName = 'StockStatementReport.xlsx'; // Desired file name
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
  
    // filterOptions(searchValue: string): void {
    //   const lowerSearch = searchValue.toLowerCase();
    //   this.filteredOptions = this.dropdownOptions.filter(option => 
    //     option.compName.toLowerCase().includes(lowerSearch) ||
    //     option.compShName.toLowerCase().includes(lowerSearch) ||
    //     option.address1.toLowerCase().includes(lowerSearch) ||
    //     option.address2.toLowerCase().includes(lowerSearch) ||
    //     option.compGroupName.toString().includes(lowerSearch)
    //     );
    //     const commonObjects = this.filteredOptions.filter(person1 =>
    //       this.selectedAccounts.some(person2 => person2.compId === person1.compId)
    //     );
    //     this.stockStatementRepost.get('accId').setValue(commonObjects);
    // }


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

    }
  GroupfilterOptions(searchValue: string): void {
    const lowerSearch = searchValue.toLowerCase();
    this.groupFilteredOptions = this.groupdropdown.filter(option => {
      const cmpGroupname = option.compGroupName ? option.compGroupName.toLowerCase() : '';
      return cmpGroupname.includes(lowerSearch)
    }
    );
  }
  
    resetForm(): void {
      this.stockStatementRepost.reset();
      this.dataSource=[];
    }
  
   
  
    toggleSelectAll(checked: boolean): void {
      if (checked) {
        this.stockStatementRepost.get('accId').setValue(this.dropdownOptions);
      } else {
        this.stockStatementRepost.get('accId').setValue([]);
      }
      this.updateSelectAllState();
    }
    toggleSelectAllgroups(checked: boolean): void {
      if (checked) {
        this.stockStatementRepost.get('accId').setValue(this.groupdropdown);
      } else {
        this.stockStatementRepost.get('accId').setValue([]);
      }
      this.updateSelectAllgroupState();
    }
  
    onOptionChange(): void {
      this.updateSelectAllState();
    }
  
    updateSelectAllState(): void {
      const selectedOptions = this.stockStatementRepost.get('accId').value || [];
      this.isAllSelected = selectedOptions.length === this.dropdownOptions.length;
      this.isIndeterminate =
        selectedOptions.length > 0 && selectedOptions.length < this.dropdownOptions.length;
    }
    updateSelectAllgroupState(): void {
      const selectedOptions = this.stockStatementRepost.get('accId').value || [];
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
        const nameControl = this.stockStatementRepost.get('accId');
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

    clearSelectedItems(isChecked: boolean): void {
      if (isChecked) {
        // Clear selected items
        this.stockStatementRepost.get('accId').setValue([]);
        this.selectedAccounts = [];
      }
    }
  

}
