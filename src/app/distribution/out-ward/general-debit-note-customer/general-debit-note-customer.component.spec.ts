import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDebitNoteCustomerComponent } from './general-debit-note-customer.component';

describe('GeneralDebitNoteCustomerComponent', () => {
  let component: GeneralDebitNoteCustomerComponent;
  let fixture: ComponentFixture<GeneralDebitNoteCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralDebitNoteCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDebitNoteCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
