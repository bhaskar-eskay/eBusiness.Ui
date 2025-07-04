import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleInvoiceListComponent } from './sale-invoice-list.component';

describe('SaleInvoiceListComponent', () => {
  let component: SaleInvoiceListComponent;
  let fixture: ComponentFixture<SaleInvoiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleInvoiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleInvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
