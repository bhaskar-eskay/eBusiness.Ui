import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Gstr1ReportComponent } from './gstr1-report/gstr1-report.component';
import { GstReportsComponent } from './gst-reports/gst-reports.component';
import { Gstr3bReportComponent } from './gstr3b-report/gstr3b-report.component';


const routes: Routes = [
  {path: '', component: GstReportsComponent,
    children:[
      {path:'gstr1', component:Gstr1ReportComponent},
      {path:'gstr3b', component:Gstr3bReportComponent}
    ]

}];

// const routes: Routes = [
//   {path: '', component: FinanceReportsComponent,
//     children:[
//       // {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//       {path:'accountCopy', component:AccountCopyComponent},
//       {path:'book', component:DayBookComponent},
//       {path:'trailBalance',component:TrailBalanceComponent},
//       {path:'debitorsOutstanding',component:DebtorsOutstandingComponent},
//       {path:'ageingAnalysis',component:AgeingAnalysisComponent},
//       {path:'creditorsOutstanding',component:CreditorsOutstandingComponent}
//     ]
// }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GstReportsRoutingModule { }
