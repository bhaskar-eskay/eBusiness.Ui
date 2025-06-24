import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPurchaseListComponent } from './other-purchase-list.component';

describe('OtherPurchaseListComponent', () => {
  let component: OtherPurchaseListComponent;
  let fixture: ComponentFixture<OtherPurchaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPurchaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPurchaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
