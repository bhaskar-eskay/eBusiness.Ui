import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCompaniesComponent } from './custom-companies.component';

describe('CustomCompaniesComponent', () => {
  let component: CustomCompaniesComponent;
  let fixture: ComponentFixture<CustomCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
