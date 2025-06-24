import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCityAccountsComponent } from './map-city-accounts.component';

describe('MapCityAccountsComponent', () => {
  let component: MapCityAccountsComponent;
  let fixture: ComponentFixture<MapCityAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCityAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCityAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
