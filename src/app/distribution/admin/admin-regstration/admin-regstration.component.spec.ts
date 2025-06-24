import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegstrationComponent } from './admin-regstration.component';

describe('AdminRegstrationComponent', () => {
  let component: AdminRegstrationComponent;
  let fixture: ComponentFixture<AdminRegstrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegstrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
