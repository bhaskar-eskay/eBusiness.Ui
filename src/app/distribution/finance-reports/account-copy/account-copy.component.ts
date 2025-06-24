import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FinanceReportsService } from '../finance-reports.service';
import { Router } from '@angular/router';
import { InWardHttpService } from 'src/app/shared/http-services/in-ward/in-ward-http.service';
import { OptionsTableDefinition } from 'src/app/shared/components/auto-select/auto-select.component';
@Component({
  selector: 'app-account-copy',
  templateUrl: './account-copy.component.html',
  styleUrls: ['./account-copy.component.scss'],
})
export class AccountCopyComponent implements OnInit {
  cashReceiptRegisterFormGroup: FormGroup;
  step: number = 0;
  accountSelectionControl: FormControl;
  dropdownOptions:any=[];
  filteredOptions:any=[];
  isShowExcelpdf:boolean=false;
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
  selectedAccounts:any;
  firmpreference: string; 
  
  customAccountsOptsTable: OptionsTableDefinition = {
    panelWidth: 800,
    columns: [
      {
        name: 'Select All', value: (obj) => obj[''],
        fxFlex: 10,
        fxFlex1: 10
      },
      { name: 'Account Name', value: (obj) => obj['account_Name'] ? obj['account_Name'] : '', fxFlex: 34,fxFlex1:34, isKeyColumn: true },
      { name: 'Shot Name', value: (obj) => obj['account_Sh_Name'] ? obj['account_Sh_Name'] : '', fxFlex: 14,fxFlex1:14 },
      // { name: 'Address1', value: (obj) => obj['address1'] ? obj['address1'] : '', fxFlex: 16,fxFlex1:16 },
      // { name: 'Address2', value: (obj) => obj['address2'] ? obj['address2'] : '', fxFlex: 24,fxFlex1:24 },
      { name: 'City', value: (obj) => obj['city'] ? obj['city'] : '', fxFlex: 12,fxFlex1:12 },
      { name: 'Mobile', value: (obj) => obj['mobile'] ? obj['mobile'] : '', fxFlex: 14,fxFlex1:14},
    ]
  };
  filterKeys = ['account_Name', 'account_Sh_Name', 'city', 'mobile'];

  constructor(private fb: FormBuilder,private FinanceRepService:FinanceReportsService, private router:Router, private inward:InWardHttpService) {
    this.today = new Date().toISOString().split('T')[0];
    this.cashReceiptRegisterFormGroup = this.fb.group({
      fromDate: [this.today, Validators.required],
      toDate: [this.today, Validators.required],
      accopyType: ['',Validators.required],
      // accId:[[], Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCopyAccounts();
    this.calculateFinancialYearDates();
    this.firmpreference = JSON.parse(sessionStorage.getItem('firmPreferences'));
    console.log(this.firmpreference['finEdate']);
    console.log(this.cashReceiptRegisterFormGroup)
    // this.cashReceiptRegisterFormGroup.get('accId').valueChanges.subscribe((selectedValues) => {
    //   if (selectedValues) {
    //     // Preserve previously selected accounts even after filtering
    //     this.selectedAccounts = this.dropdownOptions.filter(account =>
    //       selectedValues.some((selected) => selected.account_Name === account.account_Name)
    //     );
    //   } else {
    //     this.selectedAccounts = [];
    //   }
    // });
    
    
    // this.createForm();
    // this.firmpreference = sessionStorage.getItem('firmPreferences');
    // this.firmpreference = JSON.parse(this.firmpreference);
    // console.log(this.firmpreference['transporterSchId']);
  }
  

  setStep(index: number): void {
    this.step = index;
  }
  // getAccounts(){
  //   this.FinanceRepService.getCustomAccounts().subscribe(res=>{
  //     console.log(res);
  //     this.dropdownOptions=res;
  //     this.filteredOptions = [...this.dropdownOptions];
  //   })
  // };
  getCopyAccounts(){
    this.FinanceRepService.getCopyAccounts().subscribe(res=>{
      console.log(res);
      this.dropdownOptions=res;
      // this.filteredOptions = [...this.dropdownOptions];
    })
  };
accountType:any;
  generateReport(): void {
    console.log('Selected Accounts:', this.cashReceiptRegisterFormGroup.value);
    // let accId = 0;
    //  if(this.cashReceiptRegisterFormGroup.value.accId.length > 0){
    //   accId = this.cashReceiptRegisterFormGroup.value.accId.map(item => item.accId).toString();
    //  }
    const acctype =  +this.cashReceiptRegisterFormGroup.get('accopyType').value;
    this.accountType = this.cashReceiptRegisterFormGroup.get('accopyType').value;
    if(acctype == 1){
      if(this.selectedAccounts.length == 0 ){
        return 
      }
    }

      const payload = {
        "finEDate": this.firmpreference['finEdate'],
        "finSDate": this.firmpreference['finSdate'],
        "fromDate":  this.cashReceiptRegisterFormGroup.value.fromDate,
        "toDate": this.cashReceiptRegisterFormGroup.value.toDate,
        "accIds": acctype == 1 ? this.selectedAccounts.toString() : '',//527,
        "accopyType": +this.cashReceiptRegisterFormGroup.value.accopyType
      }

      
      console.log('payload', payload);
      this.showTable = false;
  
      this.FinanceRepService.getAccountCopyData(payload).subscribe(res =>{
        if(res){
          this.showTable = true;
          this.isShowExcelpdf = true;
          console.log('res', res);
          this.dataSource = res//JSON.parse(res);
          this.cashReceiptRegisterFormGroup.controls.accopyType.setValue(0);
        }
      });





  }

  filterOptions(searchValue: string): void {
    const lowerSearch = searchValue ? searchValue.toLowerCase() : '';
  
    this.filteredOptions = this.dropdownOptions.filter(option => {
      const accountName = option.account_Name ? option.account_Name.toLowerCase() : '';
      const accountShName = option.account_Sh_Name ? option.account_Sh_Name.toLowerCase() : '';
      const city = option.city ? option.city.toLowerCase() : '';
      const mobile = option.mobile ? option.mobile.toString() : '';
  
      return accountName.includes(lowerSearch) ||
             accountShName.includes(lowerSearch) ||
             city.includes(lowerSearch) ||
             mobile.includes(lowerSearch);
    });
  }  

  resetForm(): void {
    this.cashReceiptRegisterFormGroup.reset();
  }

 

  // toggleSelectAll(checked: boolean): void {
  //   if (checked) {
  //     this.cashReceiptRegisterFormGroup.get('accId').setValue(this.dropdownOptions);
  //   } else {
  //     this.cashReceiptRegisterFormGroup.get('accId').setValue([]);
  //   }
  //   this.updateSelectAllState();
  // }

  onOptionChange(): void {
    this.updateSelectAllState();
  }

  updateSelectAllState(): void {
    const selectedOptions = this.cashReceiptRegisterFormGroup.get('accId').value || [];
    this.isAllSelected = selectedOptions.length === this.dropdownOptions.length;
    this.isIndeterminate =
      selectedOptions.length > 0 && selectedOptions.length < this.dropdownOptions.length;
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

  // typeChange(value){
  //  console.log(value);
  //     // Based on the condition, set 'name' field required or not
  //     const nameControl = this.cashReceiptRegisterFormGroup.get('accId');
  //     if (+value == 1) {
  //       nameControl.setValue([]);
  //       nameControl.setValidators([Validators.required]);  // Set as required
  //     } else {
  //       nameControl.setValue([]);
  //       nameControl.clearValidators();  // Remove the required validator
  //     }

  //      // Always call updateValueAndValidity after changing the validators
  //       nameControl.updateValueAndValidity();
  // }

  goback(){
    this.router.navigate(['pharma/financeReports/FinanceReportsTransaction']);
  }


  clearSelectedItems(isChecked: boolean): void {
    if (isChecked) {
      // Clear selected items
      this.isAllSelected = false;
      this.cashReceiptRegisterFormGroup.get('accId').setValue([]);
      this.selectedAccounts = [];
    }
  }

  receiveData(data){
    this.selectedAccounts =[];
   data.forEach(x=>{
    this.selectedAccounts.push(x.accId);
   });
  //  var ids:any = JSON.stringify(this.selectedAccounts);
  //  ids = ids.split('[');
  //  ids = ids[1].split(']');
  //  this.selectedAccounts = ids[0];
  //  console.log(ids);
  //  console.log(this.cashReceiptRegisterFormGroup)
  //  var ids = new Set([this.selectedAccounts])
  }

  exportToExcel(data: any) {
    const payload1 ={
      fromDate: this.cashReceiptRegisterFormGroup.value.fromDate,
      toDate: this.cashReceiptRegisterFormGroup.value.toDate,
      finEDate: this.firmpreference['finEdate'],
      finSDate: this.firmpreference['finSdate'],
      accIds: this.selectedAccounts.toString(),
      accopyType: this.accountType ?this.accountType:0
    }
  
    this.FinanceRepService.getAccountCopyExcel(payload1).subscribe(
      (res: any) => {
        const base64String = res;
        const fileName = 'AccountCopy.xlsx'; // Desired file name
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
    console.log('pdf')
  }

}
