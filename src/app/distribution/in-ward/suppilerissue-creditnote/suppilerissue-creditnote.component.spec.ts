import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppilerissueCreditnoteComponent } from './suppilerissue-creditnote.component';

describe('SuppilerissueCreditnoteComponent', () => {
  let component: SuppilerissueCreditnoteComponent;
  let fixture: ComponentFixture<SuppilerissueCreditnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppilerissueCreditnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppilerissueCreditnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
