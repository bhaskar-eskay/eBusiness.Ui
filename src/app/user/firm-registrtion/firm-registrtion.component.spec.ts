import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmRegistrtionComponent } from './firm-registrtion.component';

describe('FirmRegistrtionComponent', () => {
  let component: FirmRegistrtionComponent;
  let fixture: ComponentFixture<FirmRegistrtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmRegistrtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmRegistrtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
