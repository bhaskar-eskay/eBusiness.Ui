import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppilerRateDifferenceDebitnoteComponent } from './suppiler-rate-difference-debitnote.component';

describe('SuppilerRateDifferenceDebitnoteComponent', () => {
  let component: SuppilerRateDifferenceDebitnoteComponent;
  let fixture: ComponentFixture<SuppilerRateDifferenceDebitnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppilerRateDifferenceDebitnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppilerRateDifferenceDebitnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
