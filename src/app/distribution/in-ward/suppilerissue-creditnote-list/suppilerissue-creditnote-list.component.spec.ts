import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppilerissueCreditnoteListComponent } from './suppilerissue-creditnote-list.component';

describe('SuppilerissueCreditnoteListComponent', () => {
  let component: SuppilerissueCreditnoteListComponent;
  let fixture: ComponentFixture<SuppilerissueCreditnoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppilerissueCreditnoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppilerissueCreditnoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
