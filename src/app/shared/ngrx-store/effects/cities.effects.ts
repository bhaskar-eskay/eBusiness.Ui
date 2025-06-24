import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { MasterService } from 'src/app/distribution/Master/master.service';
import { loadCitiess, loadCitiessFailure, loadCitiessSuccess } from '../actions/cities.actions';



@Injectable()
export class CitiesEffects {

  // getcities$ = createEffect(() => {
  //   return   this.actions$.pipe(
  //       ofType(loadCitiess),
  //       switchMap(() =>
  //         this.masterservice.loadCities(false, null).pipe(
  //           map((data: City) =>  loadCitiessSuccess(data:data)),           
  //           catchError(error => of( loadCitiessFailure(error)))
  //         )
  //       )
  //     );

  getcities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        loadCitiess
      ),
      switchMap((): Observable<any> => {
        return from(
          this.masterservice.loadCities(false).pipe(map((data: City) => {
            return data
          }), catchError(() => {
            return of<City[]>([])
          }))
        )
      }),  map((data) => loadCitiessSuccess({ data: data }),
        catchError((err) => of(loadCitiessFailure({ error: err })))
      ))
  })

  constructor(private actions$: Actions, private masterservice: MasterService) { }

}
