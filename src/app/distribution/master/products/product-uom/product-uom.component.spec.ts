import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUomComponent } from './product-uom.component';

describe('ProductUomComponent', () => {
  let component: ProductUomComponent;
  let fixture: ComponentFixture<ProductUomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
