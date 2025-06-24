import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDeliveryChallanComponent } from './sale-delivery-challan.component';

describe('SaleDeliveryChallanComponent', () => {
  let component: SaleDeliveryChallanComponent;
  let fixture: ComponentFixture<SaleDeliveryChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleDeliveryChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDeliveryChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
