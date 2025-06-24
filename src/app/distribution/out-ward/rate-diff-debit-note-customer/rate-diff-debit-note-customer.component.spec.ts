import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateDiffDebitNoteCustomerComponent } from './rate-diff-debit-note-customer.component';

describe('RateDiffDebitNoteCustomerComponent', () => {
  let component: RateDiffDebitNoteCustomerComponent;
  let fixture: ComponentFixture<RateDiffDebitNoteCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateDiffDebitNoteCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateDiffDebitNoteCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
