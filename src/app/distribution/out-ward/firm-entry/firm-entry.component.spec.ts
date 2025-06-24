import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmEntryComponent } from './firm-entry.component';

describe('FirmEntryComponent', () => {
  let component: FirmEntryComponent;
  let fixture: ComponentFixture<FirmEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
