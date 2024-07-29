import type { TAction, TDispatch } from '@models/types';

import { AuthActionType } from './types';

import type { AuthAction, AuthModel } from './types';

export const AuthDefault: AuthModel = {
  userData: {},
  userToken: ''
};

export const AuthReducer = (state: AuthModel = AuthDefault, action: AuthAction): AuthModel => {
  switch (action.type) {
    case AuthActionType.UserLogin:
      return { ...state, userData: action.data };
    case AuthActionType.UserLogout:
      return { ...state, userData: action.data };
    case AuthActionType.UserToken:
      return { ...state, userToken: action.data };

    default:
      return { ...state };
  }
};

export const AuthCommand = {
  setUserToken: (token: string): TAction<AuthAction, void> => {
    return (dispatch: TDispatch<AuthAction>) => {
      return Promise.resolve().then(() => {
        window.sessionStorage.setItem('token', token);
        dispatch({
          type: AuthActionType.UserToken,
          data: token
        });
      });
    };
  }
};
