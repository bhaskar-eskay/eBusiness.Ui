import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MasterService } from 'src/app/distribution/Master/master.service';
import { loadFirmPreferencess, loadFirmPreferencessFailure, loadFirmPreferencessSuccess } from '../actions/firm-preferences.actions';



@Injectable()
export class FirmPreferencesEffects {

  getfirmPreferences$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        loadFirmPreferencess
      ),
      switchMap((): Observable<any> => {
        return from(
          this.masterService.getFirmPreferences().pipe(map((data) => {
            return data
          }), catchError(() => {
            return of<any[]>([])
          }))
        )
      }), map((data) => loadFirmPreferencessSuccess({ data: data }),
        catchError((error) => of(loadFirmPreferencessFailure({ error: error })))
      ))
  })

  constructor(private actions$: Actions, private masterService: MasterService) {}

}
