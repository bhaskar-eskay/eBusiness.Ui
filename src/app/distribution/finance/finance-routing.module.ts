import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaWiseCollectionsComponent } from './area-wise-collections/area-wise-collections.component';
import { BankPaymentComponent } from './bank-payment/bank-payment.component';
import { BankReceiptComponent } from './bank-receipt/bank-receipt.component';
import { CashPaymentComponent } from './cash-payment/cash-payment.component';
import { CashReceiptRegisterComponent } from './cash-receipt-register/cash-receipt-register.component';
import { CashReceiptVoucherEntryComponent } from './cash-receipt-voucher-entry/cash-receipt-voucher-entry.component';
import {  CashReceiptListComponent } from './cash-receipt-list/cash-receipt-list.component';
import { FinanceComponent } from './finance.component';
import { JournalVoucherComponent } from './journal-voucher/journal-voucher.component';
import { BankReceiptRegisterComponent } from './bank-receipt-register/bank-receipt-register.component';
import { BankReceiptEntryComponent } from './bank-receipt-entry/bank-receipt-entry.component';
import { CashPaymentVoucherEntryComponent } from './cash-payment-voucher-entry/cash-payment-voucher-entry.component';
import { CashPaymentRegisterComponent } from './cash-payment-register/cash-payment-register.component';
import { BankPaymentVoucherEntryComponent } from './bank-payment-voucher-entry/bank-payment-voucher-entry.component';
import { BankPaymentRegisterComponent } from './bank-payment-register/bank-payment-register.component';
import { JournalVoucherEntryComponent } from './journal-voucher-entry/journal-voucher-entry.component';
import { JournalVoucherReceiptRegisterComponent } from './journal-voucher-receipt-register/journal-voucher-receipt-register.component';
import { FinanceTransactionComponent } from './finance-transaction/finance-transaction.component';
import { FinanceRegisterComponent } from './finance-register/finance-register.component';


const routes: Routes = [
  {
    path: '', component: FinanceComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'cashReceipts', component: CashReceiptListComponent },
      { path: 'cashPayments', component: CashPaymentComponent },
      { path: 'bankReceipts', component: BankReceiptComponent },
      { path: 'bankPayments', component: BankPaymentComponent },
      { path: 'journalVouchers', component: JournalVoucherComponent },
      { path: 'cashReceiptRegister', component: CashReceiptRegisterComponent },
      { path: 'areaWiseCollections', component:AreaWiseCollectionsComponent},
      { path: 'cashReceiptVoucherEntry', component:CashReceiptVoucherEntryComponent},
      { path: 'bankreceiptRegister', component: BankReceiptRegisterComponent },
      { path: 'bankentry', component:BankReceiptEntryComponent},
      {path:'cpaymentEntry', component:CashPaymentVoucherEntryComponent},
      {path:'cpRegister', component:CashPaymentRegisterComponent},
      {path:'bPaymentEntry', component:BankPaymentVoucherEntryComponent},
      {path:'bpRegister', component:BankPaymentRegisterComponent},
      {path:'jvRcptEntry', component:JournalVoucherEntryComponent},
      {path:'jvRegister', component:JournalVoucherReceiptRegisterComponent},
      {path:'FinanceTransaction', component:FinanceTransactionComponent},
      {path:'FinanceRegister', component:FinanceRegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
