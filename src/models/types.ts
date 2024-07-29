import type { Action } from 'redux';
import type { ThunkAction, ThunkDispatch } from 'redux-thunk';

import type { AppAction, AppModel } from './app/types';
import type { AuthAction, AuthModel } from './auth/types';

export type SortDirection = 'asc' | 'desc';

export interface PagingInfo {
  number?: number
  size?: number
  sort?: {
    column?: string
    direction?: SortDirection
  }
}

export interface PagedModel<T> {
  data?: T[]
  meta?: {
    total?: number
    limit?: number
    offset?: number
  }
}

export interface RootModel {
  app?: AppModel
  auth?: AuthModel
}

export type RootAction = AppAction | AuthAction;

export type TAction<A extends Action, R> = ThunkAction<Promise<R>, RootModel, undefined, A>;
export type TDispatch<A extends Action> = ThunkDispatch<RootModel, undefined, A>;
