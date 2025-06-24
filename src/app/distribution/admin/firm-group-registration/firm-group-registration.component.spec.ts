import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmGroupRegistrationComponent } from './firm-group-registration.component';

describe('FirmGroupRegistrationComponent', () => {
  let component: FirmGroupRegistrationComponent;
  let fixture: ComponentFixture<FirmGroupRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmGroupRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmGroupRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
