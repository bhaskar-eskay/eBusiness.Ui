import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPaymentVoucherEntryComponent } from './bank-payment-voucher-entry.component';

describe('BankPaymentVoucherEntryComponent', () => {
  let component: BankPaymentVoucherEntryComponent;
  let fixture: ComponentFixture<BankPaymentVoucherEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPaymentVoucherEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPaymentVoucherEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
