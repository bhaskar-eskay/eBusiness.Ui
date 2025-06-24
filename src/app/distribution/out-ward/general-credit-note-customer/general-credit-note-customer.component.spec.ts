import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCreditNoteCustomerComponent } from './general-credit-note-customer.component';

describe('GeneralCreditNoteCustomerComponent', () => {
  let component: GeneralCreditNoteCustomerComponent;
  let fixture: ComponentFixture<GeneralCreditNoteCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralCreditNoteCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCreditNoteCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
