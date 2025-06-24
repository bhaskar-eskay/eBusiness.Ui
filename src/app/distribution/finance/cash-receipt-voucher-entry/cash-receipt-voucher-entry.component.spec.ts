import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashReceiptVoucherEntryComponent } from './cash-receipt-voucher-entry.component';

describe('CashReceiptVoucherEntryComponent', () => {
  let component: CashReceiptVoucherEntryComponent;
  let fixture: ComponentFixture<CashReceiptVoucherEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashReceiptVoucherEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashReceiptVoucherEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
