import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InWardComponent } from './in-ward.component';

describe('InWardComponent', () => {
  let component: InWardComponent;
  let fixture: ComponentFixture<InWardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InWardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InWardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
