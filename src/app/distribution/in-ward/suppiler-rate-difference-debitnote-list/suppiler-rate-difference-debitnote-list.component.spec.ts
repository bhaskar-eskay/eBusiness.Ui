import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppilerRateDifferenceDebitnoteListComponent } from './suppiler-rate-difference-debitnote-list.component';

describe('SuppilerRateDifferenceDebitnoteListComponent', () => {
  let component: SuppilerRateDifferenceDebitnoteListComponent;
  let fixture: ComponentFixture<SuppilerRateDifferenceDebitnoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppilerRateDifferenceDebitnoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppilerRateDifferenceDebitnoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
