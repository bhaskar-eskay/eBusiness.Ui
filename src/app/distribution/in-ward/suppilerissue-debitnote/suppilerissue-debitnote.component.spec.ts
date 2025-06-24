import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppilerissueDebitnoteComponent } from './suppilerissue-debitnote.component';

describe('SuppilerissueDebitnoteComponent', () => {
  let component: SuppilerissueDebitnoteComponent;
  let fixture: ComponentFixture<SuppilerissueDebitnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppilerissueDebitnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppilerissueDebitnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
