import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankReceiptEntryComponent } from './bank-receipt-entry.component';

describe('BankReceiptEntryComponent', () => {
  let component: BankReceiptEntryComponent;
  let fixture: ComponentFixture<BankReceiptEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankReceiptEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankReceiptEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
