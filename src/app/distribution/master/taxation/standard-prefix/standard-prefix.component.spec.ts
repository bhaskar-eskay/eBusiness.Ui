import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardPrefixComponent } from './standard-prefix.component';

describe('StandardPrefixComponent', () => {
  let component: StandardPrefixComponent;
  let fixture: ComponentFixture<StandardPrefixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardPrefixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardPrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
