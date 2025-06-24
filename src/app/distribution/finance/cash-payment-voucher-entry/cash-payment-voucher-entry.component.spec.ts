import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPaymentVoucherEntryComponent } from './cash-payment-voucher-entry.component';

describe('CashPaymentVoucherEntryComponent', () => {
  let component: CashPaymentVoucherEntryComponent;
  let fixture: ComponentFixture<CashPaymentVoucherEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPaymentVoucherEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPaymentVoucherEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
