import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceRegisterComponent } from './finance-register.component';

describe('FinanceRegisterComponent', () => {
  let component: FinanceRegisterComponent;
  let fixture: ComponentFixture<FinanceRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
