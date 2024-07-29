import type { TAction, TDispatch } from '@models/types';

import { RegistryActionType } from './types';

import type { RegistryAction, RegistryDataModel, RegistryModel } from './types';

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- BEGIN
const DUMMY_REGISTRY_DATA: RegistryDataModel[] = [
  {
    name: 'nextplatform-gitlab',
    namespace: 'demo',
    registries: 'https://registry.gitlab.com/',
    username: 'navcore@outlook.com'
  },
  {
    name: 'nextplatform-gitlab-apiserver',
    namespace: 'demo',
    registries: 'https://registry.gitlab.com/',
    username: 'navcore@outlook.com'
  }
];

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- END

const RegistryDefault: RegistryModel = {
  main: {
    data: [],
    total: 0
  }
};

const RegistryReducer = (state: RegistryModel = RegistryDefault, action: RegistryAction): RegistryModel => {
  switch (action.type) {
    case RegistryActionType.GetMainData:
      return { ...state, main: action.data };

    default:
      return { ...state };
  }
};

const RegistryCommand = {
  GetMainData: (): TAction<RegistryAction, void> => {
    return (dispatch: TDispatch<RegistryAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_REGISTRY_DATA,
            total: DUMMY_REGISTRY_DATA.length
          },
          type: RegistryActionType.GetMainData
        });
      });
    };
  }
};

export { RegistryCommand, RegistryDefault, RegistryReducer };
