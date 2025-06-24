import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLocationsComponent } from './product-locations.component';

describe('ProductLocationsComponent', () => {
  let component: ProductLocationsComponent;
  let fixture: ComponentFixture<ProductLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
