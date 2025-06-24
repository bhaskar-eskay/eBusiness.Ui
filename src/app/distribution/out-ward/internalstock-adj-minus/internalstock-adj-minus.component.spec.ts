import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalstockAdjMinusComponent } from './internalstock-adj-minus.component';

describe('InternalstockAdjMinusComponent', () => {
  let component: InternalstockAdjMinusComponent;
  let fixture: ComponentFixture<InternalstockAdjMinusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalstockAdjMinusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalstockAdjMinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
