import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCreditNoteCustomerListComponent } from './general-credit-note-customer-list.component';

describe('GeneralCreditNoteCustomerListComponent', () => {
  let component: GeneralCreditNoteCustomerListComponent;
  let fixture: ComponentFixture<GeneralCreditNoteCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralCreditNoteCustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCreditNoteCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
