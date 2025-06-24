import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPurchaseComponent } from './other-purchase.component';

describe('OtherPurchaseComponent', () => {
  let component: OtherPurchaseComponent;
  let fixture: ComponentFixture<OtherPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
