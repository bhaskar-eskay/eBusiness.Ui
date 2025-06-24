import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxHeadComponent } from './tax-head.component';

describe('TaxHeadComponent', () => {
  let component: TaxHeadComponent;
  let fixture: ComponentFixture<TaxHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
