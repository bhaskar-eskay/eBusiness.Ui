import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MasterService } from 'src/app/distribution/Master/master.service';
import { Firm } from '../../models/inward-models';
import { loadFirms, loadFirmsFailure, loadFirmsSuccess } from '../actions/firm.actions';



@Injectable()
export class FirmEffects {

  getfirm$ = createEffect(() => {
  return   this.actions$.pipe(
      ofType(loadFirms),
      switchMap(() =>
        this.masterService.getFirm().pipe(
          map((data: Firm) =>  loadFirmsSuccess({data:data})),
          catchError(error => of( loadFirmsFailure(error)))
        )
      )
    );
  //   return this.actions$.pipe(
  //     ofType(
  //       loadFirms
  //     ),
  //     switchMap((): Observable<any> => {
  //       // return from(
  //       return   this.masterService.getFirm()
  //         .pipe(map((data) => {
  //         return   data
  //         }), catchError(() => {
  //           return of<any[]>([])
  //         }))
  //       // )
  //     }),
  //     tap(r => console.log(r)),
  //      map((result) => loadFirmsSuccess({ data: [...result] }),
  //       catchError((error) => of(loadFirmsFailure({ error: error })))
  //     )
 
  // )
});


  constructor(private actions$: Actions, private masterService: MasterService) {}

}
