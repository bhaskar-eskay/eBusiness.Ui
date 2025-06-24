import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPaymentRegisterComponent } from './cash-payment-register.component';

describe('CashPaymentRegisterComponent', () => {
  let component: CashPaymentRegisterComponent;
  let fixture: ComponentFixture<CashPaymentRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPaymentRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPaymentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
