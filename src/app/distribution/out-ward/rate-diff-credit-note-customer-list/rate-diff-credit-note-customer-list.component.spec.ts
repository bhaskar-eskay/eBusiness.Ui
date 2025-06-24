import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateDiffCreditNoteCustomerListComponent } from './rate-diff-credit-note-customer-list.component';

describe('RateDiffCreditNoteCustomerListComponent', () => {
  let component: RateDiffCreditNoteCustomerListComponent;
  let fixture: ComponentFixture<RateDiffCreditNoteCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateDiffCreditNoteCustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateDiffCreditNoteCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
