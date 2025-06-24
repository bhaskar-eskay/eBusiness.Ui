import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as firmPreferencesActions from '../actions/firm-preferences.actions';

export const firmPreferencesFeatureKey = 'firmPreferences';

export interface State extends EntityState<any> {

}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({

})

export const initialState: State =  adapter.getInitialState({

})



export const reducer = createReducer(
  initialState,
  on(firmPreferencesActions.loadFirmPreferencessSuccess,(state,action) => 
  adapter.setAll(action.data,state)
)
);


