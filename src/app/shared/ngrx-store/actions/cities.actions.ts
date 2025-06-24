import { createAction, props } from '@ngrx/store';

export const loadCitiess = createAction(
  '[Cities] Load Citiess',
);

export const loadCitiessSuccess = createAction(
  '[Cities] Load Citiess Success',
  props<{ data: City[] }>()
);

export const loadCitiessFailure = createAction(
  '[Cities] Load Citiess Failure',
  props<{ error: any[] }>()
);
