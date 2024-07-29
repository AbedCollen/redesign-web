import type { TAction, TDispatch } from '@models/types';

import { RepositoriesActionType } from './types';

import type { RepositoriesAction, RepositoriesDataModel, RepositoriesModel } from './types';

const DUMMY_REPOSITORIES_DATA: RepositoriesDataModel[] = [
  {
    URL: 'https://gitlab.com/Nav_PoC/pal-iot-dashboard.git',
    status: true,
    // label: ['placeholder'],
    repository: 'Git Repository',
    username: 'navcore@oulook..com'
  },
  {
    URL: 'https://gitlab.com/Nav_PoC/pal-iot-dashboard.git',
    status: true,
    // label: ['test1'],
    repository: 'Git Repository',
    username: 'navcore@oulook..com'
  },
  {
    URL: 'https://gitlab.com/Nav_PoC/pal-iot-dashboard.git',
    status: true,
    // label: ['Long text that does make sense for it to be in a long text place', 'testing1', 'testing2', 'testing3', 'testing4', 'testing5'],
    repository: 'Helm Repository',
    username: 'navcore@oulook..com'
  },
  {
    URL: 'https://gitlab.com/Nav_PoC/pal-iot-dashboard.git',
    status: true,
    // label: ['Long text that does make sense for it to be in a long text place', 'testing1', 'testing2', 'testing3', 'testing4', 'testing5'],
    repository: 'Helm Repository',
    username: 'navcore@oulook..com'
  }
];

const RepositoriesDefault: RepositoriesModel = {
  main: {
    data: [],
    total: 0
  }
};

const RepositoriesReducer = (
  state: RepositoriesModel = RepositoriesDefault,
  action: RepositoriesAction
): RepositoriesModel => {
  switch (action.type) {
    case RepositoriesActionType.GetMainData:
      return { ...state, main: action.data };

    default:
      return { ...state };
  }
};

const RepositoriesCommand = {
  GetMainData: (): TAction<RepositoriesAction, void> => {
    return (dispatch: TDispatch<RepositoriesAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_REPOSITORIES_DATA,
            total: DUMMY_REPOSITORIES_DATA.length
          },
          type: RepositoriesActionType.GetMainData
        });
      });
    };
  }
};

export { RepositoriesCommand, RepositoriesDefault, RepositoriesReducer };
