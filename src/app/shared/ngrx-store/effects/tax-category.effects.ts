import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MasterService } from 'src/app/distribution/Master/master.service';
import { TaxCategory } from '../../models/master-models';
import { loadTaxCategory, loadTaxCategorys, loadTaxCategorysFailure, loadTaxCategorysSuccess } from '../actions/tax-category.actions';



@Injectable()
export class TaxCategoryEffects {

  getTaxCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        loadTaxCategorys
      ),
      switchMap((): Observable<any> => {
        return from(
          this.masterService.getTaxCategory().pipe(map((data) => {
            return data
          }), catchError(() => {
            return of<TaxCategory[]>([])
          }))
        )
      }), map((data) => loadTaxCategorysSuccess({ data: data }),
        catchError((error) => of(loadTaxCategorysFailure({ error: error })))
      ))
  })

  constructor(private actions$: Actions, private masterService: MasterService) {}

}
