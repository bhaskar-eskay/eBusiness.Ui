import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceReportsComponent } from './finance-reports/finance-reports.component';
import { AccountCopyComponent } from './account-copy/account-copy.component';
import { DayBookComponent } from './day-book/day-book.component';
import { TrailBalanceComponent } from './trail-balance/trail-balance.component';
import { DebtorsOutstandingComponent } from './debtors-outstanding/debtors-outstanding.component';
import { AgeingAnalysisComponent } from './ageing-analysis/ageing-analysis.component';
import { CreditorsOutstandingComponent } from './creditors-outstanding/creditors-outstanding.component';
import { FinanceReportsTransactionComponent } from './finance-reports-transaction/finance-reports-transaction.component';
import { FinanceReportsRegisterComponent } from './finance-reports-register/finance-reports-register.component';


const routes: Routes = [
  {path: '', component: FinanceReportsComponent,
    children:[
      // {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path:'accountCopy', component:AccountCopyComponent},
      {path:'book', component:DayBookComponent},
      {path:'trailBalance',component:TrailBalanceComponent},
      {path:'debitorsOutstanding',component:DebtorsOutstandingComponent},
      {path:'ageingAnalysis',component:AgeingAnalysisComponent},
      {path:'creditorsOutstanding',component:CreditorsOutstandingComponent},
      {path:'FinanceReportsTransaction',component:FinanceReportsTransactionComponent},
      {path:'FinanceReportsRegister',component:FinanceReportsRegisterComponent}
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceReportsRoutingModule { }
