import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InventoryReportsRoutingModule } from './inventory-reports-routing.module';
import { InventoryReportsComponent } from './inventory-reports.component';
import { StockReportsComponent } from './stock-reports/stock-reports.component';
import { CompanyReportsComponent } from './company-reports/company-reports.component';
import { ProductReportsComponent } from './product-reports/product-reports.component';
import { AreaReportsComponent } from './area-reports/area-reports.component';
import { StockPositionComponent } from './stock-reports/stock-position/stock-position.component';
import { StockStatementComponent } from './stock-reports/stock-statement/stock-statement.component';
import { StockLedgerComponent } from './stock-reports/stock-ledger/stock-ledger.component';


@NgModule({
  declarations: [InventoryReportsComponent, StockReportsComponent, CompanyReportsComponent, ProductReportsComponent, AreaReportsComponent, StockPositionComponent, StockStatementComponent, StockLedgerComponent],
  imports: [
    CommonModule,
    InventoryReportsRoutingModule,
    SharedModule
  ]
})
export class InventoryReportsModule { }
