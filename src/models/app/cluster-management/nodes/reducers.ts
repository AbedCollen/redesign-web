import type { TAction, TDispatch } from '@models/types';

import { NodesActionType } from './types';

import type { NodesAction, NodesDataModel, NodesModel } from './types';

// Harus pikirin cara untuk map clusterVersion dengan RAM total

const DUMMY_NODES_DATA: NodesDataModel[] = [
  {
    clusterVersion: 'v1.23.3+k3s1',
    CPU: 0.33,
    isActive: true,
    name: 'Placeholder',
    pods: 55,
    RAM: 4.8,
    roles: 'Control Plane'
  },
  {
    clusterVersion: 'v1.24.0',
    CPU: 0.2,
    isActive: true,
    name: 'Placeholder',
    pods: 16,
    RAM: 0.0,
    roles: 'Worker'
  },
  {
    clusterVersion: 'v1.23.3+k3s1',
    CPU: 0.33,
    isActive: true,
    name: 'Placeholder',
    pods: 55,
    RAM: 4.8,
    roles: 'Worker'
  },
  {
    clusterVersion: 'v1.24.0',
    CPU: 0.2,
    isActive: false,
    name: 'Placeholder',
    pods: 16,
    RAM: 0.0,
    roles: 'Worker'
  }
];

const NodesDefault: NodesModel = {
  main: {
    data: [],
    total: 0
  }
};

const NodesReducer = (
  state: NodesModel = NodesDefault,
  action: NodesAction
): NodesModel => {
  switch (action.type) {
    case NodesActionType.GetMainData:
      return { ...state, main: action.data };

    default:
      return { ...state };
  }
};

const NodesCommand = {
  GetMainData: (): TAction<NodesAction, void> => {
    return (dispatch: TDispatch<NodesAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_NODES_DATA,
            total: DUMMY_NODES_DATA.length
          },
          type: NodesActionType.GetMainData
        });
      });
    };
  }
};

export { NodesCommand, NodesDefault, NodesReducer };
