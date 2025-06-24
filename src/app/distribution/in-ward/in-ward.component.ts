import { Component, OnInit } from '@angular/core';
import { EntityState } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Firm } from 'src/app/shared/models/inward-models';
import { TaxCategory } from 'src/app/shared/models/master-models';

import { loadFirms } from 'src/app/shared/ngrx-store/actions/firm.actions';
import { firmFeatureKey } from 'src/app/shared/ngrx-store/reducers/firm.reducer';
import { taxCategoryFeatureKey } from 'src/app/shared/ngrx-store/reducers/tax-category.reducer';

@Component({
  selector: 'app-in-ward',
  templateUrl: './in-ward.component.html',
  styleUrls: ['./in-ward.component.scss']
})
export class InWardComponent implements OnInit {
  firmList: any;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    // this.store.dispatch(loadFirms());
    // const Firm$ =  this.store.select(state=> state[firmFeatureKey]).pipe(map((state: EntityState<Firm>)=>  state.entities))
    // console.log(Firm$,'firm')
    // this.store.select((state) => Object.values(state.firmFeatureKey.entities).pipe(
    //  tap((r) => console.log)
    // ))

    // this.store.select(state => state[firmFeatureKey]).subscribe(data =>  console.log(data,'firm'))

    // this.getTaxCategoryByFirm()
  }
//   getTaxCategoryByFirm(state?:number): Observable<TaxCategory>{
//    const Firm$ =  this.store.select(state=> state[firmFeatureKey]).pipe(map((state: EntityState<Firm>)=>  state.entities))
//   const taxCatrgory$ =  this.store.select(state=> state[taxCategoryFeatureKey]).pipe(map((state: EntityState<TaxCategory>) => state.entities))
// return Firm$.pipe(switchMap(firms => {
//    return   of(firms).pipe(switchMap(x=> x[1]?.city?.district?.state?.id === state ? 
//     taxCatrgory$.pipe(map(taxcategory=> taxcategory['instate'])) :
//     taxCatrgory$.pipe(map(taxcategory=> taxcategory['outstate']))
//   ))}))

//     }
}
