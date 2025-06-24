import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtorsOutstandingComponent } from './debtors-outstanding.component';

describe('DebtorsOutstandingComponent', () => {
  let component: DebtorsOutstandingComponent;
  let fixture: ComponentFixture<DebtorsOutstandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtorsOutstandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtorsOutstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
