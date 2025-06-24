import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MasterService } from 'src/app/distribution/Master/master.service';
import { loadDistrictss, loadDistrictssFailure, loadDistrictssSuccess } from '../actions/districts.actions';



@Injectable()
export class DistrictsEffects {



  getDistricts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        loadDistrictss
      ),
      switchMap((): Observable<any> => {
        return from(
          this.masterservice.loadDistricts(false, null).pipe(map((data) => {
            return data
          }), catchError(() => {
            return of<District[]>([])
          }))
        )
      }), map((data) => loadDistrictssSuccess({ data: data }),
        catchError((error) => of(loadDistrictssFailure({ error: error })))
      ))
  })

  constructor(private actions$: Actions, private masterservice: MasterService) { }

}
