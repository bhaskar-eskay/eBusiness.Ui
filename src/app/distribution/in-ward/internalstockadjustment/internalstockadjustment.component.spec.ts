import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalstockadjustmentComponent } from './internalstockadjustment.component';

describe('InternalstockadjustmentComponent', () => {
  let component: InternalstockadjustmentComponent;
  let fixture: ComponentFixture<InternalstockadjustmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalstockadjustmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalstockadjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
