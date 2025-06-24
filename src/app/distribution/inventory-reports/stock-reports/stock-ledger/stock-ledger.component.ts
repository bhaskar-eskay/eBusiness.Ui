import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { FinanceReportsService } from '../finance-reports.service';
import { Router } from '@angular/router';
import { InventoryReportsService } from '../../inventory-reports.service';
import { DatePipe } from '@angular/common';
import { AppConst, PurchasePrefix } from 'src/app/shared/app-constants';
import { OptionsTableDefinition } from 'src/app/shared/components/auto-select/auto-select.component';
import { AutoCompleteDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { InwardService } from 'src/app/distribution/in-ward/in-ward.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-stock-ledger',
  templateUrl: './stock-ledger.component.html',
  styleUrls: ['./stock-ledger.component.scss']
})
export class StockLedgerComponent implements OnInit {
    stockLedgerRepost: FormGroup;
    step: number = 0;
    accountSelectionControl: FormControl;
    dropdownOptions:any=[];
    proddropdown:any=[];
    filteredOptions:any=[];
    groupFilteredOptions:any=[];
    showAutoCompleteData:boolean = false;
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
    ProductName = new FormControl('');

    customProductAutoCompleteDef:  AutoCompleteDefinition = {
      label:  'Product Name',
      isRequired:  true,
      dataSourceFn:  (name) => this.showAutoComplete(name),
      minCount:  2,
      keyString:  'prodName'
    };
  batches: any;
  batchewisestock: any;
  batchWise: boolean = false;

    constructor(private fb: FormBuilder, private router:Router,private StockRepService:InventoryReportsService,public datepipe: DatePipe,
    private inwardService:  InwardService,) {
      this.today = new Date().toISOString().split('T')[0];
      this.stockLedgerRepost = this.fb.group({
        fromDate: [this.today, Validators.required],
        toDate: [this.today, Validators.required],
        accopyType: [''],
        accId:[[], Validators.required],
        // prodId:  [''],
        compId:  [0],
      });
    }
  
    customProductOptsTable:  OptionsTableDefinition = {
        panelWidth:  900,
        columns:  [
          { name:  'Product Name', value:  (obj) => obj['prodName'] ? obj['prodName'] :  '', fxFlex:  20,fxFlex1:20, isKeyColumn:  true },
          { name:  'Product Pack', value:  (obj) => obj['prodPackName'] ? obj['prodPackName'] :  '', fxFlex:  16 , fxFlex1:16},
          { name:  'HSN Code', value:  (obj) => obj['hsncode'] ? obj['hsncode'] :  '', fxFlex:  16, fxFlex1:16 },
          { name:  'Tax%', value:  (obj) => obj['tax'] ? obj['tax']:  '', fxFlex:  16, fxFlex1:16 },
          { name:  'Sh.Name', value:  (obj) => obj['prodShName'] ? obj['prodShName'] :  '', fxFlex:  16,fxFlex1:16 },
          { name:  'CompanyName', value:  (obj) => obj['compName']? obj['compName'] :  '', fxFlex:  14, fxFlex1:14 }    ]
      };

    ngOnInit(): void {
      // this.getCompanies();
      // this.getCompaniesGroups();
      this.lowerSearch = ""
      this.getProducts();
      this.calculateFinancialYearDates();
      // this.createForm();
      this.ProductName.valueChanges.subscribe(data=>{
      // console.log(this.stockLedgerRepost.get('prodId').value.prodId);
      if(this.ProductName.value.prodId > 0){
        this.GetBatchesByProductId();
      }
      if(this.ProductName.value == ""){
        this.batchWise = false;
      }
      if(data && this.ProductName.dirty){
        this.showAutoCompleteData = true;
      }
      })
    }    

    customProductsOptsTable: OptionsTableDefinition = {
          panelWidth: 800,
          columns: [
            {
              name: 'Select All', value: (obj) => obj[''],
              fxFlex: 10,
              fxFlex1: 10
            },
            { name: 'Product Name', value: (obj) => obj['prodName'] ? obj['prodName'] : '', fxFlex: 34,fxFlex1:34, isKeyColumn: true },
            { name: 'Shot Name', value: (obj) => obj['prodShName'] ? obj['prodShName'] : '', fxFlex: 14,fxFlex1:14 },
            { name: 'Prod PackName', value: (obj) => obj['prodPackName'] ? obj['prodPackName'] : '', fxFlex: 16,fxFlex1:16 },
            { name: 'Prod GroupName', value: (obj) => obj['prodGroupName'] ? obj['prodGroupName'] : '', fxFlex: 24,fxFlex1:24 },
            { name: 'Tax', value: (obj) => obj['tax'] ? obj['tax'] : '', fxFlex: 12,fxFlex1:12 },
            // { name: 'Mobile', value: (obj) => obj['mobile'] ? obj['mobile'] : '', fxFlex: 14,fxFlex1:14},
          ]
        };

        prodFilterKeys = ['prodName', 'prodShName', 'prodGroupName'];
    
      customAccountsOptsTable: OptionsTableDefinition = {
        panelWidth: 800,
        columns: [
          {
            name: 'Select All', value: (obj) => obj[''],
            fxFlex: 10,
            fxFlex1: 10
          },
          { name: 'Company Name', value: (obj) => obj['comp_Name'] ? obj['comp_Name'] : '', fxFlex: 14,fxFlex1:14, isKeyColumn: true },
          { name: 'Product Name', value: (obj) => obj['prod_Name'] ? obj['prod_Name'] : '', fxFlex: 14,fxFlex1:14 },
          { name: 'Short Name', value: (obj) => obj['p_Sh_Name'] ? obj['p_Sh_Name'] : '', fxFlex: 14,fxFlex1:14 },
          { name: 'Product Pack', value: (obj) => obj['prod_Pack'] ? obj['prod_Pack'] : '', fxFlex: 16,fxFlex1:16 },
          { name: 'Batch', value: (obj) => obj['batch'] ? obj['batch'] : '', fxFlex: 24,fxFlex1:24 },
          { name: 'Recd.Qty', value: (obj) => obj['recd_Qty'] ? obj['recd_Qty'] : '', fxFlex: 12,fxFlex1:12 },
          { name: 'Supplier', value: (obj) => obj['supplier'] ? obj['supplier'] : '', fxFlex: 14,fxFlex1:14},
        ]
      };
  
      filterKeys = ['comp_Name', 'p_Sh_Name', 'prod_Name', 'batch'];

    setStep(index: number): void {
      this.step = index;
    }
    getProducts(){
     let payload={
      compId:0,
      prodName:this.lowerSearch
      };
      this.StockRepService.getproductsList(payload).subscribe(res=>{
        this.proddropdown=res;
        this.filteredOptions = [...this.dropdownOptions];
      })
    };
    getCompaniesGroups(){
      this.StockRepService.getGroupCompanyList().subscribe(res=>{
        this.proddropdown=res;
        this.groupFilteredOptions = [...this.proddropdown];
      })
    };
  
    generateReport(): void {
      // let toDate = this.stockLedgerRepost.value.toDate.split("T")
      let accId = [];
       if(this.stockLedgerRepost.value.accId.length > 0){ 
        if(this.stockLedgerRepost.value.accopyType == 1){
          accId = this.stockLedgerRepost.value.accId.map(item => item.prodId).toString();
        }
        else if(this.stockLedgerRepost.value.accopyType == 2){
          accId = this.stockLedgerRepost.value.accId.map(item => item.compGroupId).toString();
        }
       }
       const payload={
        // "stmntOption": Number(this.stockLedgerRepost.controls.accopyType.value),
        "products": this.selectedProducts ? this.selectedProducts.toString() :"",
        "fromDate": this.datepipe.transform(this.stockLedgerRepost.value.fromDate, AppConst.DATE_FORMAT), 
        // this.stockLedgerRepost.value.fromDate,
        "toDate": this.datepipe.transform(this.stockLedgerRepost.value.toDate,AppConst.DATE_FORMAT),
        "finSDate": this.datepipe.transform(this.financialYearStart,AppConst.DATE_FORMAT),
        "finEDate": this.datepipe.transform(this.financialYearEnd,AppConst.DATE_FORMAT)
      }
      this.showTable = false;
  
      this.StockRepService.getstockLedger(payload).subscribe(res =>{
        if(res){
          this.showTable = true;
          // this.stockLedgerRepost.get('accopyType').setValue(["0"]);
          this.dataSource = JSON.parse(res);
        }
      });
    }
    lowerSearch:any="";
    filterOptions(searchValue: string): void {
       this.lowerSearch = searchValue.toLowerCase();
      this.filteredOptions = this.dropdownOptions.filter(option => 
        option.compName.toLowerCase().includes(this.lowerSearch) ||
        option.compShName.toLowerCase().includes(this.lowerSearch) ||
        option.address1.toLowerCase().includes(this.lowerSearch) ||
        option.address2.toLowerCase().includes(this.lowerSearch) ||
        option.compGroupName.toString().includes(this.lowerSearch)
        );
    }
    // GroupfilterOptions(searchValue: string): void {
    //   const lowerSearch = searchValue.toLowerCase();
    //   this.groupFilteredOptions = this.groupdropdown.filter(option => 
    //     option.compGroupName.toLowerCase().includes(lowerSearch)
    //     );
    // }
  
    resetForm(): void {
      this.stockLedgerRepost.reset();
      this.dataSource=[];
      this.ProductName.setValue('');
      this.batchWise = false;
      this.showTable = false;
    }
    selectedProducts:any;
    receiveGroupData(data){
      this.selectedProducts =[];
     data.forEach(x=>{
      this.selectedProducts.push(x.prodId);
     });
    }
  
    toggleSelectAll(checked: boolean): void {
      if (checked) {
        this.stockLedgerRepost.get('accId').setValue(this.dropdownOptions);
      } else {
        this.stockLedgerRepost.get('accId').setValue([]);
      }
      this.updateSelectAllState();
    }
    toggleSelectAllgroups(checked: boolean): void {
      if (checked) {
        this.stockLedgerRepost.get('accId').setValue(this.proddropdown);
      } else {
        this.stockLedgerRepost.get('accId').setValue([]);
      }
      this.updateSelectAllgroupState();
    }
  
    onOptionChange(): void {
      this.updateSelectAllState();
    }
  
    updateSelectAllState(): void {
      const selectedOptions = this.stockLedgerRepost.get('accId').value || [];
      this.isAllSelected = selectedOptions.length === this.dropdownOptions.length;
      this.isIndeterminate =
        selectedOptions.length > 0 && selectedOptions.length < this.dropdownOptions.length;
    }
    updateSelectAllgroupState(): void {
      const selectedOptions = this.stockLedgerRepost.get('accId').value || [];
      this.isAllSelected = selectedOptions.length === this.proddropdown.length;
      this.isIndeterminate =
        selectedOptions.length > 0 && selectedOptions.length < this.proddropdown.length;
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
        // Based on the condition, set 'name' field required or not
        const nameControl = this.stockLedgerRepost.get('accId');
        if (+value == 1) {
          nameControl.setValue([]);
          nameControl.setValidators([Validators.required]);  // Set as required
          this.batchWise = false
        } else {
          nameControl.setValue([]);
          nameControl.clearValidators();  // Remove the required validator
        }
  
        if(+value == 2 ){
          this.stockLedgerRepost.get('compId').setValue(0)
        }

         // Always call updateValueAndValidity after changing the validators
          nameControl.updateValueAndValidity();
    }
  
    goback(){
      this.router.navigate(['pharma/inventoryReports/stockReports']);
    }

  showAutoComplete(name){
    if(this.showAutoCompleteData){
      return this.inwardService.getCustomProductByName(name,this.stockLedgerRepost.controls.compId.value, PurchasePrefix)
    }else{
      return of([])
    }
  }

    GetBatchesByProductId(){
      this.batches = [];
      const payload = {
        productId: this.ProductName.value.prodId,
        finSDate: this.datepipe.transform(this.financialYearStart,AppConst.DATE_FORMAT),
        finEdate: this.datepipe.transform(this.financialYearEnd,AppConst.DATE_FORMAT)
      }
      this.StockRepService.GetBatchesByProductId(payload).subscribe(r=>{
        if(r){
          this.batches = r;
          this.GetBatchWiseStockLedger();
        }
      })
    }
    
    GetBatchWiseStockLedger(){
      this.batchewisestock = [];
      const payload = {
        productId: this.ProductName.value.prodId,
        batches: this.batches.toString(),
        fromDate: this.datepipe.transform(this.stockLedgerRepost.value.fromDate, AppConst.DATE_FORMAT), 
        toDate: this.datepipe.transform(this.stockLedgerRepost.value.toDate,AppConst.DATE_FORMAT),
        finSDate: this.datepipe.transform(this.financialYearStart,AppConst.DATE_FORMAT),
        finEdate: this.datepipe.transform(this.financialYearEnd,AppConst.DATE_FORMAT)
      }
      this.StockRepService.GetBatchWiseStockLedger(payload).subscribe(r=>{
        if(r){
          this.batchewisestock = r;
          this.batchWise = true;
        }
      })
    }

}
