import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppilerRateDifferenceCreditnoteListComponent } from './suppiler-rate-difference-creditnote-list.component';

describe('SuppilerRateDifferenceCreditnoteListComponent', () => {
  let component: SuppilerRateDifferenceCreditnoteListComponent;
  let fixture: ComponentFixture<SuppilerRateDifferenceCreditnoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppilerRateDifferenceCreditnoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppilerRateDifferenceCreditnoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
