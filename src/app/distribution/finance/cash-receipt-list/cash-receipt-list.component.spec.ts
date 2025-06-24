import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashReceiptListComponent } from './cash-receipt-list.component';

describe('CashReceiptComponent', () => {
  let component: CashReceiptListComponent;
  let fixture: ComponentFixture<CashReceiptListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashReceiptListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashReceiptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
