import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalstockadjustmentListComponent } from '../in-ward/internalstockadjustment-list/internalstockadjustment-list.component';
import { FirmEntryComponent } from './firm-entry/firm-entry.component';
import { GeneralCreditNoteCustomerListComponent } from './general-credit-note-customer-list/general-credit-note-customer-list.component';
import { GeneralCreditNoteCustomerComponent } from './general-credit-note-customer/general-credit-note-customer.component';
import { GeneralDebitNoteCustomerListComponent } from './general-debit-note-customer-list/general-debit-note-customer-list.component';
import { GeneralDebitNoteCustomerComponent } from './general-debit-note-customer/general-debit-note-customer.component';
import { InternalstockAdjMinusComponent } from './internalstock-adj-minus/internalstock-adj-minus.component';
import { OtherSalesListComponent } from './other-sales-list/other-sales-list.component';
import { OtherSalesComponent } from './other-sales/other-sales.component';
import { OutWardComponent } from './out-ward.component';
import { QuotationListComponent } from './quotation-list/quotation-list.component';
import { QuotationComponent } from './quotation/quotation.component';
import { RateDiffCreditNoteCustomerListComponent } from './rate-diff-credit-note-customer-list/rate-diff-credit-note-customer-list.component';
import { RateDiffCreditNoteCustomerComponent } from './rate-diff-credit-note-customer/rate-diff-credit-note-customer.component';
import { RateDiffDebitNoteCustomerListComponent } from './rate-diff-debit-note-customer-list/rate-diff-debit-note-customer-list.component';
import { RateDiffDebitNoteCustomerComponent } from './rate-diff-debit-note-customer/rate-diff-debit-note-customer.component';
import { RetailSalesComponent } from './retail-sales/retail-sales.component';
import { SaleDeliveryChallanListComponent } from './sale-delivery-challan-list/sale-delivery-challan-list.component';
import { SaleDeliveryChallanComponent } from './sale-delivery-challan/sale-delivery-challan.component';
import { SaleInvoiceListComponent } from './sale-invoice-list/sale-invoice-list.component';
import { SaleInvoiceComponent } from './sale-invoice/sale-invoice.component';
import { SaleOrderListComponent } from './sale-order-list/sale-order-list.component';
import { SaleOrderComponent } from './sale-order/sale-order.component';
import { SaleReturnListComponent } from './sale-return-list/sale-return-list.component';
import { SaleReturnComponent } from './sale-return/sale-return.component';
import { SaleRegisterComponent } from './sale-register/sale-register.component';
import { OutwardTransactionComponent } from './outward-transaction/outward-transaction.component';
import { OutwardRegistersComponent } from './outward-registers/outward-registers.component';
import { InProgressComponent } from '../in-progress/in-progress.component';

const routes: Routes = [
    {path:'', component: OutWardComponent,
    children:[
        {path:'', component: OutWardComponent},
        {path:'saleOrderEntry', component: SaleOrderComponent},
        {path:'salesOrders', component: SaleOrderListComponent},
        {path:'salesDeliveryChallan', component: SaleDeliveryChallanComponent},
        {path:'salesDeliveryChallanList', component: SaleDeliveryChallanListComponent},
        {path:'salesInvoices', component: SaleInvoiceListComponent},
        {path:'saleInvoiceEntry', component: SaleInvoiceComponent},
        {path:'salesReturns', component: SaleReturnListComponent},
        {path:'salesReturnEntry', component: SaleReturnComponent},
        {path:'internalStockAdjustmentsMinus', component: InternalstockAdjMinusComponent},
      //  {path:'SADJMList', component: InternalstockadjustmentListComponent},
        {path:'otherSales', component: OtherSalesComponent},
        {path:'OSALList', component: OtherSalesListComponent},
        {path:'generalCreditNotesIssueToCustomers', component: GeneralCreditNoteCustomerComponent},
        {path:'GCRList', component: GeneralCreditNoteCustomerListComponent},
        {path:'generalDebitNotesIssueToCustomers', component: GeneralDebitNoteCustomerComponent},
        {path:'GDBList', component: GeneralDebitNoteCustomerListComponent},
        {path:'rateDifferenceCreditNoteToCustomers', component: RateDiffCreditNoteCustomerComponent},
        {path:'RDCRCList', component: RateDiffCreditNoteCustomerListComponent},
        {path:'rateDifferenceDebitNoteToCustomers', component: RateDiffDebitNoteCustomerComponent},
        {path:'RDDBCList', component: RateDiffDebitNoteCustomerListComponent},
        // {path:'saleOrder', component: SaleOrderComponent},
       
        {path:'quotations', component: QuotationComponent},  
        {path:'quotationsList', component: QuotationListComponent},  

        {path:'retailSales', component: RetailSalesComponent}, 
        {path:'firmEntry', component: FirmEntryComponent}, 
        {path:'saleRegister',component:SaleRegisterComponent},
        {path:'OutwardTransaction', component: OutwardTransactionComponent}, 
        {path:'OutwardRegisters', component: OutwardRegistersComponent}, 
    ]
}
 ];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class OutwardRoutingModule { }