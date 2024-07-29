import type { TAction, TDispatch } from '@models/types';

import { UserManagementActionType } from './types';

import type { UserManagementAction, UserManagementDataModel, UserManagementModel } from './types';

const DUMMY_USERMANAGEMENT_DATA: UserManagementDataModel[] = [
  {
    id: 1,
    name: 'admin',
    enabled: 'true',
    capabilities: 'login',
    detail: [
      {
        id: 'b7358db8-e766-4708-888d-c90b0a210941',
        issuedAt: 'a year ago (Wed Oct 27 2021 12:55:45 GMT+0700)',
        expiresAt: 'Never'
      }
    ]
  },
  {
    id: 2,
    name: 'appbuilder',
    enabled: 'true',
    capabilities: 'apiKey, login',
    detail: [
      {
        id: 'b7358db8-e766-4708-888d-c90b0a210941',
        issuedAt: 'a year ago (Wed Oct 27 2021 12:55:45 GMT+0700)',
        expiresAt: 'Never'
      }
    ]
  }
];

const DefaultDetailData = {
  id: 0,
  name: '',
  enabled: '',
  capabilities: '',
  detail: [{
    id: '',
    issuedAt: '',
    expiresAt: ''
  }]
};

const DUMMY_DETAIL_DATA = {
  id: 1,
  name: 'admin',
  enabled: 'true',
  capabilities: 'login',
  detail: [
    {
      id: 'b7358db8-e766-4708-888d-c90b0a210941',
      issuedAt: 'a year ago (Wed Oct 27 2021 12:55:45 GMT+0700)',
      expiresAt: 'Never'
    }
  ]
};

const UserManagementDefault: UserManagementModel = {
  detail: DefaultDetailData,
  main: {
    data: [],
    total: 0
  }
};

const UserManagementReducer = (
  state: UserManagementModel = UserManagementDefault,
  action: UserManagementAction
): UserManagementModel => {
  switch (action.type) {
    case UserManagementActionType.GetMainData:
      return { ...state, main: action.data };
    case UserManagementActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const UserManagementCommand = {
  GetMainData: (): TAction<UserManagementAction, void> => {
    return (dispatch: TDispatch<UserManagementAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_USERMANAGEMENT_DATA,
            total: DUMMY_USERMANAGEMENT_DATA.length
          },
          type: UserManagementActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<UserManagementAction, void> => {
    return (dispatch: TDispatch<UserManagementAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_DATA,
          type: UserManagementActionType.GetDetailData
        });
      });
    };
  }
};

export { UserManagementCommand, UserManagementDefault, UserManagementReducer };
