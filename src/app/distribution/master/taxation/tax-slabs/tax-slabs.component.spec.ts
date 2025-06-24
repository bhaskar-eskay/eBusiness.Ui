import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxSlabsComponent } from './tax-slabs.component';

describe('TaxSlabsComponent', () => {
  let component: TaxSlabsComponent;
  let fixture: ComponentFixture<TaxSlabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxSlabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxSlabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
