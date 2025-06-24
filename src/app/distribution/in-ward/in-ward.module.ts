import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InWardComponent } from '../in-ward/in-ward.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseEntryComponent } from './purchase-entry/purchase-entry.component';
import { InternalstockadjustmentComponent } from './internalstockadjustment/internalstockadjustment.component';
import { InternalstockadjustmentListComponent } from './internalstockadjustment-list/internalstockadjustment-list.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { PurchaseReturnListComponent } from './purchase-return-list/purchase-return-list.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list.component';
import { OtherPurchaseComponent } from './other-purchase/other-purchase.component';
import { OtherPurchaseListComponent } from './other-purchase-list/other-purchase-list.component';
import { SuppilerissueCreditnoteComponent } from './suppilerissue-creditnote/suppilerissue-creditnote.component';
import { SuppilerissueDebitnoteComponent } from './suppilerissue-debitnote/suppilerissue-debitnote.component';
import { SuppilerRateDifferenceCreditnoteComponent } from './suppiler-rate-difference-creditnote/suppiler-rate-difference-creditnote.component';
import { SuppilerRateDifferenceDebitnoteComponent } from './suppiler-rate-difference-debitnote/suppiler-rate-difference-debitnote.component';
import { SuppilerRateDifferenceDebitnoteListComponent } from './suppiler-rate-difference-debitnote-list/suppiler-rate-difference-debitnote-list.component';
import { SuppilerRateDifferenceCreditnoteListComponent } from './suppiler-rate-difference-creditnote-list/suppiler-rate-difference-creditnote-list.component';
import { SuppilerissueDebitnoteListComponent } from './suppilerissue-debitnote-list/suppilerissue-debitnote-list.component';
import { SuppilerissueCreditnoteListComponent } from './suppilerissue-creditnote-list/suppilerissue-creditnote-list.component';
import { InwardRoutingModule } from './inward-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import { MomentDateAdapter, MOMENT_DATE_FORMATS } from 'src/app/shared/moment-date-adapter';
import { PurchaseReportsComponent } from './purchase-reports/purchase-reports.component';
import { PurchaseRegistersComponent } from './purchase-registers/purchase-registers.component';
import { InwardRegistersComponent } from './inward-registers/inward-registers.component';
import { RouterModule } from '@angular/router';
import { InwardTransactionComponent } from './inward-transaction/inward-transaction.component';


@NgModule({
  declarations: [InWardComponent, PurchaseListComponent, PurchaseEntryComponent, InternalstockadjustmentComponent, InternalstockadjustmentListComponent, PurchaseReturnComponent, PurchaseReturnListComponent, PurchaseOrderComponent, PurchaseOrderListComponent, OtherPurchaseComponent, OtherPurchaseListComponent, SuppilerissueCreditnoteComponent, SuppilerissueDebitnoteComponent, SuppilerRateDifferenceCreditnoteComponent, SuppilerRateDifferenceDebitnoteComponent, SuppilerRateDifferenceDebitnoteListComponent, SuppilerRateDifferenceCreditnoteListComponent, SuppilerissueDebitnoteListComponent, SuppilerissueCreditnoteListComponent, PurchaseReportsComponent, PurchaseRegistersComponent, InwardRegistersComponent, InwardTransactionComponent],
  imports: [
    CommonModule,
    InwardRoutingModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter }
  ],
})
export class InWardModule { }
