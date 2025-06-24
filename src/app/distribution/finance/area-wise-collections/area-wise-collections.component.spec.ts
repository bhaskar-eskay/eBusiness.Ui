import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaWiseCollectionsComponent } from './area-wise-collections.component';

describe('AreaWiseCollectionsComponent', () => {
  let component: AreaWiseCollectionsComponent;
  let fixture: ComponentFixture<AreaWiseCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaWiseCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaWiseCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
