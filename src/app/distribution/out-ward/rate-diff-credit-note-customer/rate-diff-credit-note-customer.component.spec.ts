import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateDiffCreditNoteCustomerComponent } from './rate-diff-credit-note-customer.component';

describe('RateDiffCreditNoteCustomerComponent', () => {
  let component: RateDiffCreditNoteCustomerComponent;
  let fixture: ComponentFixture<RateDiffCreditNoteCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateDiffCreditNoteCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateDiffCreditNoteCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
