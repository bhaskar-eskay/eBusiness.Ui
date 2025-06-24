import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppilerissueDebitnoteListComponent } from './suppilerissue-debitnote-list.component';

describe('SuppilerissueDebitnoteListComponent', () => {
  let component: SuppilerissueDebitnoteListComponent;
  let fixture: ComponentFixture<SuppilerissueDebitnoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppilerissueDebitnoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppilerissueDebitnoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
