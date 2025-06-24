import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutWardComponent } from './out-ward.component';
import { SaleReturnComponent } from './sale-return/sale-return.component';
import { SaleReturnListComponent } from './sale-return-list/sale-return-list.component';
import { OutwardRoutingModule } from './outward-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SaleOrderComponent } from './sale-order/sale-order.component';
import { SaleOrderListComponent } from './sale-order-list/sale-order-list.component';
import { SaleDeliveryChallanComponent } from './sale-delivery-challan/sale-delivery-challan.component';
import { SaleDeliveryChallanListComponent } from './sale-delivery-challan-list/sale-delivery-challan-list.component';
import { SaleInvoiceComponent } from './sale-invoice/sale-invoice.component';
import { SaleInvoiceListComponent } from './sale-invoice-list/sale-invoice-list.component';
import { InternalstockAdjMinusComponent } from './internalstock-adj-minus/internalstock-adj-minus.component';

import { OtherSalesComponent } from './other-sales/other-sales.component';
import { OtherSalesListComponent } from './other-sales-list/other-sales-list.component';
import { GeneralCreditNoteCustomerComponent } from './general-credit-note-customer/general-credit-note-customer.component';
import { GeneralCreditNoteCustomerListComponent } from './general-credit-note-customer-list/general-credit-note-customer-list.component';
import { GeneralDebitNoteCustomerListComponent } from './general-debit-note-customer-list/general-debit-note-customer-list.component';
import { GeneralDebitNoteCustomerComponent } from './general-debit-note-customer/general-debit-note-customer.component';
import { RateDiffDebitNoteCustomerComponent } from './rate-diff-debit-note-customer/rate-diff-debit-note-customer.component';
import { RateDiffDebitNoteCustomerListComponent } from './rate-diff-debit-note-customer-list/rate-diff-debit-note-customer-list.component';
import { RateDiffCreditNoteCustomerListComponent } from './rate-diff-credit-note-customer-list/rate-diff-credit-note-customer-list.component';
import { RateDiffCreditNoteCustomerComponent } from './rate-diff-credit-note-customer/rate-diff-credit-note-customer.component';
import { QuotationComponent } from './quotation/quotation.component';
import { QuotationListComponent } from './quotation-list/quotation-list.component';
import { RetailSalesComponent } from './retail-sales/retail-sales.component';
import { FirmEntryComponent } from './firm-entry/firm-entry.component';
import { SaleRegisterComponent } from './sale-register/sale-register.component';
import { OutwardTransactionComponent } from './outward-transaction/outward-transaction.component';
import { OutwardRegistersComponent } from './outward-registers/outward-registers.component';

@NgModule({
  declarations: [OutWardComponent, SaleReturnComponent, SaleReturnListComponent, SaleOrderComponent, SaleOrderListComponent, 
    SaleDeliveryChallanComponent, SaleDeliveryChallanListComponent, SaleInvoiceComponent, SaleInvoiceListComponent, 
    InternalstockAdjMinusComponent,  OtherSalesComponent, OtherSalesListComponent, GeneralCreditNoteCustomerComponent,
     GeneralCreditNoteCustomerListComponent, GeneralDebitNoteCustomerListComponent, GeneralDebitNoteCustomerComponent, 
     RateDiffDebitNoteCustomerComponent, RateDiffDebitNoteCustomerListComponent, RateDiffCreditNoteCustomerListComponent,
      RateDiffCreditNoteCustomerComponent,
      QuotationComponent,
      QuotationListComponent,
      RetailSalesComponent,
      FirmEntryComponent,
      SaleRegisterComponent,
      OutwardTransactionComponent,
      OutwardRegistersComponent],
  imports: [
    CommonModule,
    OutwardRoutingModule,
    SharedModule
  ]
})
export class OutWardModule { }
