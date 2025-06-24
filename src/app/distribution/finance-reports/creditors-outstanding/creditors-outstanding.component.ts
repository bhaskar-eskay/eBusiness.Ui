import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FinanceReportsService } from '../finance-reports.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-creditors-outstanding',
  templateUrl: './creditors-outstanding.component.html',
  styleUrls: ['./creditors-outstanding.component.scss']
})
export class CreditorsOutstandingComponent implements OnInit {
    debtorsOutstandingReportFormGroup: FormGroup;
    step: number = 0;
    accountSelectionControl: FormControl;
    // dropdownOptions:any=[];
    // filteredOptions:any=[];
    // isAllSelected = false;
    isIndeterminate = false;
    financialYearStart: Date;
    financialYearEnd: Date;
    constructor(private fb: FormBuilder,private FinanceRepService:FinanceReportsService, private router:Router) {
      this.debtorsOutstandingReportFormGroup = this.fb.group({
        areas: [null, Validators.required],
        customers: [null, Validators.required],
        reportDate: [null, Validators.required],
        reportOption:['']
      });
  
      this.accountSelectionControl = new FormControl([]);
    }
  
    ngOnInit(): void {
      // this.getAccounts();
      this.calculateFinancialYearDates();
      // this.createForm();
    }
    
    setStep(index: number): void {
      this.step = index;
    }
   
  
    generateReport(): void {
      console.log('Selected Accounts:', this.accountSelectionControl.value);
    }
  
   
  
    resetForm(): void {
      this.debtorsOutstandingReportFormGroup.reset();
      // this.accountSelectionControl.setValue([]);
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

    goback(){
      this.router.navigate(['pharma/financeReports/FinanceReportsTransaction']);
    }
}
