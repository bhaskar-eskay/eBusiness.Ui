import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRegistersComponent } from './purchase-registers.component';

describe('PurchaseRegistersComponent', () => {
  let component: PurchaseRegistersComponent;
  let fixture: ComponentFixture<PurchaseRegistersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRegistersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
