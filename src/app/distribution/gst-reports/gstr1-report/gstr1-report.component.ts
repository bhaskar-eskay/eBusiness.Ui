import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; 
@Component({
  selector: 'app-gstr1-report',
  templateUrl: './gstr1-report.component.html',
  styleUrls: ['./gstr1-report.component.scss']
})
export class Gstr1ReportComponent implements OnInit {

  dayBookReportFormGroup: FormGroup;
  step: number = 0;
  accountSelectionControl: FormControl;
  // dropdownOptions:any=[];
  // filteredOptions:any=[];
  // isAllSelected = false;
  isIndeterminate = false;
  financialYearStart: Date;
  financialYearEnd: Date;
  constructor(private fb: FormBuilder) {
    // this.dayBookReportFormGroup = this.fb.group({
    //   fromDate: [null, Validators.required],
    //   toDate: [null, Validators.required],
    //   bookType: ['']
    // });
    // this.accountSelectionControl = new FormControl([]);
  }

  ngOnInit() {
    this.dayBookReportFormGroup = this.fb.group({
      reportOption: [''],
      month: [''],
      fromDate: [''],
      toDate: ['']
    });
  }

  setStep(index: number): void {
    this.step = index;
  }


  generateReport(): void {
    console.log('Selected Accounts:', this.accountSelectionControl.value);
  }



  // Method to handle Report Option change
  onReportOptionChange(event: any) {
    const reportOption = event.value;
    if (reportOption === 'monthwise') {
      this.dayBookReportFormGroup.get('fromDate').reset();
      this.dayBookReportFormGroup.get('toDate').reset();
    }
  }

  resetForm() {
    this.dayBookReportFormGroup.reset();
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



}
