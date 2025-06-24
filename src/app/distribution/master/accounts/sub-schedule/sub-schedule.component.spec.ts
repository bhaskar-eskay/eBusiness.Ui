import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubScheduleComponent } from './sub-schedule.component';

describe('SubScheduleComponent', () => {
  let component: SubScheduleComponent;
  let fixture: ComponentFixture<SubScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
