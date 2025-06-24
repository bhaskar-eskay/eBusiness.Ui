import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryReportsComponent } from './inventory-reports.component';
import { StockReportsComponent } from './stock-reports/stock-reports.component';
import { CompanyReportsComponent } from './company-reports/company-reports.component';
import { ProductReportsComponent } from './product-reports/product-reports.component';
import { AreaReportsComponent } from './area-reports/area-reports.component';
import { StockPositionComponent } from './stock-reports/stock-position/stock-position.component';
import { StockStatementComponent } from './stock-reports/stock-statement/stock-statement.component';
import { StockLedgerComponent } from './stock-reports/stock-ledger/stock-ledger.component';


const routes: Routes = [
  {path:'', component:InventoryReportsComponent,
    children:[
      {path:'stockReports', component:StockReportsComponent},
      {path:'stockReports/stockStatement', component:StockPositionComponent},
      {path:'stockReports/stockPosition', component:StockStatementComponent},
      {path:'stockReports/stockLedger', component:StockLedgerComponent},
      {path:'companyReports', component:CompanyReportsComponent},
      {path:'productReports', component:ProductReportsComponent},
      {path:'areaReports', component:AreaReportsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryReportsRoutingModule { }
