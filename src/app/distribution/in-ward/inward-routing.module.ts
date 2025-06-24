import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InWardComponent } from './in-ward.component';
import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseReturnListComponent } from './purchase-return-list/purchase-return-list.component';
import { InternalstockadjustmentListComponent } from './internalstockadjustment-list/internalstockadjustment-list.component';
import { OtherPurchaseListComponent } from './other-purchase-list/other-purchase-list.component';
import { SuppilerissueCreditnoteListComponent } from './suppilerissue-creditnote-list/suppilerissue-creditnote-list.component';
import { SuppilerissueDebitnoteListComponent } from './suppilerissue-debitnote-list/suppilerissue-debitnote-list.component';
import { SuppilerRateDifferenceCreditnoteListComponent } from './suppiler-rate-difference-creditnote-list/suppiler-rate-difference-creditnote-list.component';
import { SuppilerRateDifferenceDebitnoteListComponent } from './suppiler-rate-difference-debitnote-list/suppiler-rate-difference-debitnote-list.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { PurchaseEntryComponent } from './purchase-entry/purchase-entry.component';
import { InternalstockadjustmentComponent } from './internalstockadjustment/internalstockadjustment.component';
import { OtherPurchaseComponent } from './other-purchase/other-purchase.component';
import { SuppilerissueCreditnoteComponent } from './suppilerissue-creditnote/suppilerissue-creditnote.component';
import { SuppilerissueDebitnoteComponent } from './suppilerissue-debitnote/suppilerissue-debitnote.component';
import { SuppilerRateDifferenceCreditnoteComponent } from './suppiler-rate-difference-creditnote/suppiler-rate-difference-creditnote.component';
import { SuppilerRateDifferenceDebitnoteComponent } from './suppiler-rate-difference-debitnote/suppiler-rate-difference-debitnote.component';
import { InwardService } from './in-ward.service';
import { PurchaseReportsComponent } from './purchase-reports/purchase-reports.component';
import { PurchaseRegistersComponent } from './purchase-registers/purchase-registers.component';
import { InwardRegistersComponent } from './inward-registers/inward-registers.component';
import { InwardTransactionComponent } from './inward-transaction/inward-transaction.component';
const routes: Routes = [
  {path: '', component: InWardComponent,
    children:[
      {path:'', redirectTo:'dashboard', pathMatch:'full'},
      {path:'purchaseOrders', component:PurchaseOrderListComponent},
      {path:'purchaseOrdersEntry', component: PurchaseOrderComponent},
      {path:'purchasesEntry', component:PurchaseEntryComponent},
      {path:'purchases', component: PurchaseListComponent},
      {path:'purchaseReturns', component:PurchaseReturnListComponent},
      {path:'addpurchaseReturns', component: PurchaseReturnComponent},
      {path:'internalStockAdjustmentsPlusList', component:InternalstockadjustmentListComponent},
      {path:'internalStockAdjustmentsPlus', component: InternalstockadjustmentComponent},
      {path:'otherPurchaseList', component:OtherPurchaseListComponent},
      {path:'otherPurchases', component: OtherPurchaseComponent},
      {path:'supplierIssuedCreditNoteList', component:SuppilerissueCreditnoteListComponent},
      {path:'supplierIssuedCreditNotes', component: SuppilerissueCreditnoteComponent},
      {path:'supplierIssuedDebitNoteList', component:SuppilerissueDebitnoteListComponent},
      {path:'supplierIssuedDebitNotes', component: SuppilerissueDebitnoteComponent},
      {path:'purchaseInternalStockList', component:InternalstockadjustmentListComponent},
      {path:'purchaseInternalStock', component: InternalstockadjustmentComponent},
      {path:'supplierRateDifferenceCreditNoteList', component:SuppilerRateDifferenceCreditnoteListComponent},
      {path:'supplierRateDifferenceCreditNotes', component: SuppilerRateDifferenceCreditnoteComponent},
      {path:'supplierRateDifferenceDebitNoteList', component:SuppilerRateDifferenceDebitnoteListComponent},
      {path:'supplierRateDifferenceDebitNotes', component: SuppilerRateDifferenceDebitnoteComponent},
      {path:'purchasesReports', component:PurchaseReportsComponent},
      {path:'purchaseRegister', component:PurchaseRegistersComponent},
      {path:'InwardRegisters',component:InwardRegistersComponent},
      {path:'InwardTransaction',component:InwardTransactionComponent}
    ]
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [InwardService]
})
export class InwardRoutingModule { }
