
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as cities from '../actions/cities.actions';

export const citiesFeatureKey = 'cities';

export interface State extends EntityState<City> {

}

export const adoptor: EntityAdapter<City> = createEntityAdapter<City>({

})



export const initialState: State =  adoptor.getInitialState({

})


export const reducer = createReducer(
  initialState,
  on(cities.loadCitiessSuccess,(state,action) => 
  adoptor.setAll(action.data,state)
  
)

);

