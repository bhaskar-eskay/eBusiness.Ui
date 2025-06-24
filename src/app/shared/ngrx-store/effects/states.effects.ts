import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, from, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { MasterService } from 'src/app/distribution/Master/master.service';
import { loadStatess, loadStatessFailure, loadStatessSuccess } from '../actions/states.actions';



@Injectable()
export class StatesEffects {


  getStates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        loadStatess
      ),
      switchMap((): Observable<any> => {
        return from(
          this.masterservice.loadStates(false, null).pipe(map((data) => {
            return data
          }), catchError(() => {
            return of<States[]>([])
          }))
        )
      }), map((data) => loadStatessSuccess({ data: data }),
        catchError((error) => of(loadStatessFailure({ error: error })))
      ))
  })


  constructor(private actions$: Actions, private masterservice: MasterService) {}

}
