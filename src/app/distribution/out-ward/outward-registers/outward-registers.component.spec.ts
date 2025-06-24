import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardRegistersComponent } from './outward-registers.component';

describe('OutwardRegistersComponent', () => {
  let component: OutwardRegistersComponent;
  let fixture: ComponentFixture<OutwardRegistersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardRegistersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
