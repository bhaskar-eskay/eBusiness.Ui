import { createAction, props } from '@ngrx/store';

export const loadStatess = createAction(
  '[States] Load Statess',
);

export const loadStatessSuccess = createAction(
  '[States] Load Statess Success',
  props<{ data: States[] }>()
);

export const loadStatessFailure = createAction(
  '[States] Load Statess Failure',
  props<{ error: any[] }>()
);
