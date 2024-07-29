import type { TAction, TDispatch } from '@models/types';

import { SecretActionType } from './types';

import type { SecretAction, SecretDataModel, SecretModel } from './types';

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- BEGIN
const DUMMY_SECRET_DATA: SecretDataModel[] = [
  {
    id: 1,
    name: 'placeholder',
    namespace: 'placeholder',
    key: 'placeholder',
    created: 'placeholder',
    description: 'placeholder',
    scope: 'placeholder'
  },
  {
    id: 2,
    name: 'placeholder',
    namespace: 'placeholder',
    key: 'placeholder',
    created: 'placeholder',
    description: 'placeholder',
    scope: 'placeholder'
  },
  {
    id: 3,
    name: 'placeholder',
    namespace: 'placeholder',
    key: 'placeholder',
    created: 'placeholder',
    description: 'placeholder',
    scope: 'placeholder'
  },
  {
    id: 4,
    name: 'placeholder',
    namespace: 'placeholder',
    key: 'placeholder',
    created: 'placeholder',
    description: 'placeholder',
    scope: 'placeholder'
  }
];

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- END
const defaultDetailData = {
  id: 0,
  name: '',
  namespace: '',
  key: '',
  created: '',
  description: '',
  scope: ''
};

const DUMMY_DETAIL_DATA = {
  id: 1,
  name: 'placeholder',
  namespace: 'placeholder',
  key: 'placeholder',
  created: 'placeholder',
  description: 'placeholder',
  scope: 'placeholder'
};


const SecretDefault: SecretModel = {
  detail: defaultDetailData,
  main: {
    data: [],
    total: 0
  }
};

const SecretReducer = (state: SecretModel = SecretDefault, action: SecretAction): SecretModel => {
  switch (action.type) {
    case SecretActionType.GetMainData:
      return { ...state, main: action.data };
    case SecretActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const SecretCommand = {
  GetMainData: (): TAction<SecretAction, void> => {
    return (dispatch: TDispatch<SecretAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_SECRET_DATA,
            total: DUMMY_SECRET_DATA.length
          },
          type: SecretActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<SecretAction, void> => {
    return (dispatch: TDispatch<SecretAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_DATA,
          type: SecretActionType.GetDetailData
        });
      });
    };
  }

};

export { SecretCommand, SecretDefault, SecretReducer };
