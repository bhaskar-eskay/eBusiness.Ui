import { createAction, props } from '@ngrx/store';

export const loadFirmPreferencess = createAction(
  '[FirmPreferences] Load FirmPreferencess'
);

export const loadFirmPreferencessSuccess = createAction(
  '[FirmPreferences] Load FirmPreferencess Success',
  props<{ data: any }>()
);

export const loadFirmPreferencessFailure = createAction(
  '[FirmPreferences] Load FirmPreferencess Failure',
  props<{ error: any }>()
);
