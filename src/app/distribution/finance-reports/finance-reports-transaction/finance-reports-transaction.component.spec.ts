import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceReportsTransactionComponent } from './finance-reports-transaction.component';

describe('FinanceReportsTransactionComponent', () => {
  let component: FinanceReportsTransactionComponent;
  let fixture: ComponentFixture<FinanceReportsTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceReportsTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceReportsTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
