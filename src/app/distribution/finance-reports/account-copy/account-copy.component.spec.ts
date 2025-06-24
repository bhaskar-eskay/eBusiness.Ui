import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCopyComponent } from './account-copy.component';

describe('AccountCopyComponent', () => {
  let component: AccountCopyComponent;
  let fixture: ComponentFixture<AccountCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
