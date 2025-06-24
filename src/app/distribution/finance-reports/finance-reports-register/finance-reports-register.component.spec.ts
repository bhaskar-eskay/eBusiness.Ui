import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceReportsRegisterComponent } from './finance-reports-register.component';

describe('FinanceReportsRegisterComponent', () => {
  let component: FinanceReportsRegisterComponent;
  let fixture: ComponentFixture<FinanceReportsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceReportsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceReportsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
