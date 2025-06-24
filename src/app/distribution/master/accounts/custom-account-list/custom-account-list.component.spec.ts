import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAccountListComponent } from './custom-account-list.component';

describe('CustomAccountListComponent', () => {
  let component: CustomAccountListComponent;
  let fixture: ComponentFixture<CustomAccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAccountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
