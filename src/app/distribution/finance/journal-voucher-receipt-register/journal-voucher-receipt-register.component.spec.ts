import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalVoucherReceiptRegisterComponent } from './journal-voucher-receipt-register.component';

describe('JournalVoucherReceiptRegisterComponent', () => {
  let component: JournalVoucherReceiptRegisterComponent;
  let fixture: ComponentFixture<JournalVoucherReceiptRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalVoucherReceiptRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalVoucherReceiptRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
