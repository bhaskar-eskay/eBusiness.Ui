import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppilerRateDifferenceCreditnoteComponent } from './suppiler-rate-difference-creditnote.component';

describe('SuppilerRateDifferenceCreditnoteComponent', () => {
  let component: SuppilerRateDifferenceCreditnoteComponent;
  let fixture: ComponentFixture<SuppilerRateDifferenceCreditnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppilerRateDifferenceCreditnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppilerRateDifferenceCreditnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
