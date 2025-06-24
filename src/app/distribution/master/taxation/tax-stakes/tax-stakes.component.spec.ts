import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxStakesComponent } from './tax-stakes.component';

describe('TaxStakesComponent', () => {
  let component: TaxStakesComponent;
  let fixture: ComponentFixture<TaxStakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxStakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxStakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
