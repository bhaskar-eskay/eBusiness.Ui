import { createAction, props } from '@ngrx/store';

export const loadDistrictss = createAction(
  '[Districts] Load Districtss'
);

export const loadDistrictssSuccess = createAction(
  '[Districts] Load Districtss Success',
  props<{ data: any }>()
);

export const loadDistrictssFailure = createAction(
  '[Districts] Load Districtss Failure',
  props<{ error: any }>()
);
