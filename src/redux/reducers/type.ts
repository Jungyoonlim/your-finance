// src/redux/reducers/type.ts
import { Action } from 'redux';

export interface UserState {
  data: any;
  loading: boolean;
  error: string | null;
}

export type UserActionTypes =
  | Action<'FETCH_USER_DATA_REQUEST'>
  | Action<'FETCH_USER_DATA_SUCCESS'> & { payload: any }
  | Action<'FETCH_USER_DATA_FAILURE'> & { payload: string };