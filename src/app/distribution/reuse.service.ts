import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'lodash';
import { firmFeatureKey } from '../shared/ngrx-store/reducers/firm.reducer';

@Injectable({
  providedIn: 'root'
})
export class ReuseService {

  constructor(private store: Store<any>) { }


}
