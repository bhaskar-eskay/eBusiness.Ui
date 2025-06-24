import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankReceiptRegisterComponent } from './bank-receipt-register.component';

describe('BankReceiptRegisterComponent', () => {
  let component: BankReceiptRegisterComponent;
  let fixture: ComponentFixture<BankReceiptRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankReceiptRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankReceiptRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
