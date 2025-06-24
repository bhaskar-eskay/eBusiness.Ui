import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSalesListComponent } from './other-sales-list.component';

describe('OtherSalesListComponent', () => {
  let component: OtherSalesListComponent;
  let fixture: ComponentFixture<OtherSalesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherSalesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
