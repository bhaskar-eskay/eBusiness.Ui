import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateDiffDebitNoteCustomerListComponent } from './rate-diff-debit-note-customer-list.component';

describe('RateDiffDebitNoteCustomerListComponent', () => {
  let component: RateDiffDebitNoteCustomerListComponent;
  let fixture: ComponentFixture<RateDiffDebitNoteCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateDiffDebitNoteCustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateDiffDebitNoteCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
