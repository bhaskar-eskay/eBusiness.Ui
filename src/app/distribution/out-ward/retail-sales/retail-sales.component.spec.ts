import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailSalesComponent } from './retail-sales.component';

describe('RetailSalesComponent', () => {
  let component: RetailSalesComponent;
  let fixture: ComponentFixture<RetailSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
