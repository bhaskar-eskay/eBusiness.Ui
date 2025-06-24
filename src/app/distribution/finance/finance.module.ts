import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import {  CashReceiptListComponent } from './cash-receipt-list/cash-receipt-list.component';
import { BankReceiptComponent } from './bank-receipt/bank-receipt.component';
import { CashPaymentComponent } from './cash-payment/cash-payment.component';
import { BankPaymentComponent } from './bank-payment/bank-payment.component';
import { JournalVoucherComponent } from './journal-voucher/journal-voucher.component';
import { FinanceComponent } from './finance.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AreaWiseCollectionsComponent } from './area-wise-collections/area-wise-collections.component';
import { CashReceiptVoucherEntryComponent } from './cash-receipt-voucher-entry/cash-receipt-voucher-entry.component';
import { CashReceiptRegisterComponent } from './cash-receipt-register/cash-receipt-register.component';
import { BankReceiptEntryComponent } from './bank-receipt-entry/bank-receipt-entry.component';
import { BankReceiptRegisterComponent } from './bank-receipt-register/bank-receipt-register.component';
import { BankPaymentRegisterComponent } from './bank-payment-register/bank-payment-register.component';
import { BankPaymentVoucherEntryComponent } from './bank-payment-voucher-entry/bank-payment-voucher-entry.component';
import { CashPaymentRegisterComponent } from './cash-payment-register/cash-payment-register.component';
import { CashPaymentVoucherEntryComponent } from './cash-payment-voucher-entry/cash-payment-voucher-entry.component';
import { JournalVoucherEntryComponent } from './journal-voucher-entry/journal-voucher-entry.component';
import { JournalVoucherReceiptRegisterComponent } from './journal-voucher-receipt-register/journal-voucher-receipt-register.component';
import { FinanceTransactionComponent } from './finance-transaction/finance-transaction.component';
import { FinanceRegisterComponent } from './finance-register/finance-register.component';


@NgModule({
  declarations: [FinanceComponent, CashReceiptListComponent, BankReceiptComponent, CashPaymentComponent, BankPaymentComponent, JournalVoucherComponent, AreaWiseCollectionsComponent, CashReceiptVoucherEntryComponent, CashReceiptRegisterComponent, BankReceiptEntryComponent, BankReceiptRegisterComponent, BankPaymentRegisterComponent, BankPaymentVoucherEntryComponent, CashPaymentRegisterComponent, CashPaymentVoucherEntryComponent,  JournalVoucherEntryComponent, JournalVoucherReceiptRegisterComponent, FinanceTransactionComponent, FinanceRegisterComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    SharedModule
  ]
})
export class FinanceModule { }
