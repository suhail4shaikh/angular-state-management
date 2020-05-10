import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { IRecord } from '../model';
import { SearchActions, DifferentTypes } from '../action';

const InitialMusicState: IRecord = null;

export function SearchMusicReducers(state = InitialMusicState, action: SearchActions) {
  switch (action.type) {
    case DifferentTypes.SEARCH_SUCCESS:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}
// export const reducers: ActionReducerMap<State> = {

// };




// export const metaReducers: MetaReducer<MusicState>[] = !environment.production ? [] : [];
