import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutWardComponent } from './out-ward.component';

describe('OutWardComponent', () => {
  let component: OutWardComponent;
  let fixture: ComponentFixture<OutWardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutWardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutWardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
