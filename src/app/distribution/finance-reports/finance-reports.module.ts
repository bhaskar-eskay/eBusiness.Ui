import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FinanceReportsRoutingModule } from './finance-reports-routing.module';
import { FinanceReportsComponent } from './finance-reports/finance-reports.component';
import { RouterModule, Routes } from '@angular/router';
import {FinanceReportsService} from './finance-reports.service';
import { AccountCopyComponent } from './account-copy/account-copy.component';
import { DayBookComponent } from './day-book/day-book.component';
import { TrailBalanceComponent } from './trail-balance/trail-balance.component';
import { DebtorsOutstandingComponent } from './debtors-outstanding/debtors-outstanding.component';
import { AgeingAnalysisComponent } from './ageing-analysis/ageing-analysis.component';
import { CreditorsOutstandingComponent } from './creditors-outstanding/creditors-outstanding.component';
import { FinanceReportsTransactionComponent } from './finance-reports-transaction/finance-reports-transaction.component';
import { FinanceReportsRegisterComponent } from './finance-reports-register/finance-reports-register.component'; 

@NgModule({
  // declarations: [FinanceReportsComponent],
  // imports: [
  //   CommonModule,
  //   FinanceReportsRoutingModule
  // ]
  declarations: [FinanceReportsComponent, AccountCopyComponent, DayBookComponent, TrailBalanceComponent, DebtorsOutstandingComponent, AgeingAnalysisComponent, CreditorsOutstandingComponent, FinanceReportsTransactionComponent, FinanceReportsRegisterComponent],
  imports: [
    CommonModule,
    FinanceReportsRoutingModule,
    SharedModule
  ]
})
export class FinanceReportsModule { }
