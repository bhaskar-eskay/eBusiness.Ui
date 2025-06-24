import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardTransactionComponent } from './outward-transaction.component';

describe('OutwardTransactionComponent', () => {
  let component: OutwardTransactionComponent;
  let fixture: ComponentFixture<OutwardTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
