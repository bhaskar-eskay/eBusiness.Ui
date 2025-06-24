import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductsListComponent } from './custom-products-list.component';

describe('CustomProductsListComponent', () => {
  let component: CustomProductsListComponent;
  let fixture: ComponentFixture<CustomProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
