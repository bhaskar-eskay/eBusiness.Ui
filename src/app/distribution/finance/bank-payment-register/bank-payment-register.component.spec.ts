import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPaymentRegisterComponent } from './bank-payment-register.component';

describe('BankPaymentRegisterComponent', () => {
  let component: BankPaymentRegisterComponent;
  let fixture: ComponentFixture<BankPaymentRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPaymentRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPaymentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
