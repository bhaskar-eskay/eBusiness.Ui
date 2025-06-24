import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DistributionComponent } from './distribution.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteConst } from '../shared/app-constants';
import { InProgressComponent } from './in-progress/in-progress.component';

const routes: Routes = [
  {path: '', component: DistributionComponent,
    children:[
      {path:'', redirectTo:RouteConst.DASHBOARD, pathMatch:'full'},
      {path: RouteConst.DASHBOARD, component:DashboardComponent},
      {path:'masters', loadChildren:() => import('./Master/Master.Module').then(m => m.MasterModule)},
      {path:'inward', loadChildren:() => import('./in-ward/in-ward.module').then(m => m.InWardModule)},
      {path:'outward', loadChildren:() => import('./out-ward/out-ward.module').then(m => m.OutWardModule)},
      {path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
      {path:'finance', loadChildren:() => import('./finance/finance.module').then(m => m.FinanceModule)},
      {path:'financeReports', loadChildren:() => import('./finance-reports/finance-reports.module').then(m => m.FinanceReportsModule)},
      {path:'gstReports', loadChildren:() => import('./gst-reports/gst-reports.module').then(m => m.GstReportsModule)},
      {path:'inventoryReports', loadChildren:() => import('./inventory-reports/inventory-reports.module').then(m => m.InventoryReportsModule)}
    ]
},
{path:'**', component:InProgressComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DistributionRoutingModule { }
