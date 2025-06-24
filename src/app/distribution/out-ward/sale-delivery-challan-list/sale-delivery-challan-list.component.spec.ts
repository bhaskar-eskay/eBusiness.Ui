import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDeliveryChallanListComponent } from './sale-delivery-challan-list.component';

describe('SaleDeliveryChallanListComponent', () => {
  let component: SaleDeliveryChallanListComponent;
  let fixture: ComponentFixture<SaleDeliveryChallanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleDeliveryChallanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDeliveryChallanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
