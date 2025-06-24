import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersTableComponent } from './registers-table.component';

describe('RegistersTableComponent', () => {
  let component: RegistersTableComponent;
  let fixture: ComponentFixture<RegistersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
