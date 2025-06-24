import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LTORegistrationComponent } from './lto-registration.component';

describe('LTORegistrationComponent', () => {
  let component: LTORegistrationComponent;
  let fixture: ComponentFixture<LTORegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LTORegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LTORegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
