import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCitiess } from 'src/app/shared/ngrx-store/actions/cities.actions';
import { loadDistrictss } from 'src/app/shared/ngrx-store/actions/districts.actions';
import { loadFirmPreferencess } from 'src/app/shared/ngrx-store/actions/firm-preferences.actions';
import { loadStatess } from 'src/app/shared/ngrx-store/actions/states.actions';
import { loadTaxCategory, loadTaxCategorys } from 'src/app/shared/ngrx-store/actions/tax-category.actions';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
    // this.store.dispatch(loadCitiess());
    // this.store.dispatch(loadStatess());
    // this.store.dispatch(loadDistrictss());
    // this.store.dispatch(loadFirmPreferencess());
    // this.store.dispatch(loadTaxCategorys());
    
  }

}
