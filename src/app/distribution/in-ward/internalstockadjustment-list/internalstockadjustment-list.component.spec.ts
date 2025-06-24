import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalstockadjustmentListComponent } from './internalstockadjustment-list.component';

describe('InternalstockadjustmentListComponent', () => {
  let component: InternalstockadjustmentListComponent;
  let fixture: ComponentFixture<InternalstockadjustmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalstockadjustmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalstockadjustmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
