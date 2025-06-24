import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDebitNoteCustomerListComponent } from './general-debit-note-customer-list.component';

describe('GeneralDebitNoteCustomerListComponent', () => {
  let component: GeneralDebitNoteCustomerListComponent;
  let fixture: ComponentFixture<GeneralDebitNoteCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralDebitNoteCustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDebitNoteCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
