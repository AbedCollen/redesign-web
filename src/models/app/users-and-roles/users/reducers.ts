import type { TAction, TDispatch } from '@models/types';

import { UsersActionType } from './types';

import type { UsersAction, UsersDataModel, UsersModel } from './types';

// Harus pikirin cara untuk map clusterVersion dengan RAM total

const DUMMY_USERS_DATA: UsersDataModel[] = [
  {
    userName: 'testUser123',
    fullName: 'User Percobaan',
    loginSince: '5 Januari 2023, 23:59'
  },
  {
    userName: 'testing456',
    fullName: 'Testing User',
    loginSince: '5 Januari 2023, 23:59'
  }
];

const UsersDefault: UsersModel = {
  main: {
    data: [],
    total: 0
  }
};

const UsersReducer = (
  state: UsersModel = UsersDefault,
  action: UsersAction
): UsersModel => {
  switch (action.type) {
    case UsersActionType.GetMainData:
      return { ...state, main: action.data };

    default:
      return { ...state };
  }
};

const UsersCommand = {
  GetMainData: (): TAction<UsersAction, void> => {
    return (dispatch: TDispatch<UsersAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_USERS_DATA,
            total: DUMMY_USERS_DATA.length
          },
          type: UsersActionType.GetMainData
        });
      });
    };
  }
};

export { UsersCommand, UsersDefault, UsersReducer };
