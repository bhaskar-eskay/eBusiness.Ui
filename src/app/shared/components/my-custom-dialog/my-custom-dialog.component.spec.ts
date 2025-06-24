import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomDialogComponent } from './my-custom-dialog.component';

describe('MyCustomDialogComponent', () => {
  let component: MyCustomDialogComponent;
  let fixture: ComponentFixture<MyCustomDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyCustomDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
