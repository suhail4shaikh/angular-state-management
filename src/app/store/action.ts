import { Action } from '@ngrx/store';
import { IRecord } from './model';

export enum DifferentTypes {
  SEARCH = '[SEARCH] MUSIC',
  SEARCH_SUCCESS = '[SEARCH] SUCCESS',
  SEARCH_ERROR = '[SEARCH] ERROR'
}

export class SearchAction implements Action {
  readonly type = DifferentTypes.SEARCH;
}

export class AddRecords implements Action {
  readonly type = DifferentTypes.SEARCH_SUCCESS;
  constructor(public payload: IRecord) {

  }
}

export type SearchActions = SearchAction | AddRecords;
