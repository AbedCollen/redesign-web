import type { TAction, TDispatch } from '@models/types';

import { AlertEventActionType } from './types';

import type {
  AlertEventAction,
  AlertEventDataModel,
  AlertEventModel
} from './types';

const DUMMY_ALERTEVENT_DATA: AlertEventDataModel[] = [
  {
    title: 'W fission-v1-15-1-fission-v1.15.1-833',
    date: '07/12/2023',
    time: '14:30',
    status: 'ResourceUpdate',
    description:
      'Error creating: pods "fission-v1-15-1-fission-v1.15.1-833-" is forbidden: error looking up service account default/fission-svc: serviceaccount "fission-svc" not found',
    namespace: 'Tokrum',
    condition: 'i'
  },
  {
    title: 'poolmgr-nodejs-tokrum-109408457-6f6d5dbd49-wd8cj',
    date: '05/12/2023',
    time: '16:30',
    status: 'UpdateRequired',
    namespace: 'Tokrum',
    description:
      'Error creating: pods "fission-v1-15-1-fission-v1.15.1-833-" is forbidden: error looking up service account default/fission-svc: serviceaccount "fission-svc" not found',
    condition: 'W'
  },
  {
    title: 'W fission-v1-15-1-fission-v1.15.1-833',
    date: '05/21/2023',
    time: '16:30',
    status: 'Failed',
    namespace: 'Bapenda',
    description:
      'Failed to pull image "fission/node-env": rpc error: code = Unknown desc = loading manifest for target platform: reading manifest sha256:b97b60051ca8369d911596e77bc0b28aa084a183a8aad08894f6fcf33467852e in docker.io/fission/node-env: toomanyrequests: You have reached your pull rate limit. You may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit',
    condition: 'E'
  },
  {
    title: 'W fission-v1-15-1-fission-v1.15.1-833',
    date: '06/12/2023',
    time: '21:41',
    status: 'ResourceUpdate',
    namespace: 'Tokrum',
    description:
      'Error creating: pods "fission-v1-15-1-fission-v1.15.1-833-" is forbidden: error looking up service account default/fission-svc: serviceaccount "fission-svc" not found',
    condition: 'W'
  },
  {
    title: 'W fission-v1-16-1-fission-v1.15.1-833',
    date: '04/19/2023',
    time: '10:41',
    status: 'Failed',
    namespace: 'Bapenda',
    description:
    'Failed to pull image "fission/node-env": rpc error: code = Unknown desc = loading manifest for target platform: reading manifest sha256:b97b60051ca8369d911596e77bc0b28aa084a183a8aad08894f6fcf33467852e in docker.io/fission/node-env: toomanyrequests: You have reached your pull rate limit. You may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit',
    condition: 'E'
  }
];

const AlertEventDefault: AlertEventModel = {
  main: {
    data: [],
    total: 0
  }
};

const AlertEventReducer = (
  state: AlertEventModel = AlertEventDefault,
  action: AlertEventAction
): AlertEventModel => {
  switch (action.type) {
    case AlertEventActionType.GetMainData:
      return { ...state, main: action.data };

    default:
      return { ...state };
  }
};

const AlertEventCommand = {
  GetMainData: (): TAction<AlertEventAction, void> => {
    return (dispatch: TDispatch<AlertEventAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_ALERTEVENT_DATA,
            total: 1
          },
          type: AlertEventActionType.GetMainData
        });
      });
    };
  }
};

export { AlertEventCommand, AlertEventDefault, AlertEventReducer };
