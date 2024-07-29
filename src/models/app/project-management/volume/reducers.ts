import type { TAction, TDispatch } from '@models/types';

import { VolumeActionType } from './types';

import type { VolumeAction, VolumeDataModel, VolumeModel } from './types';

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- BEGIN
const DUMMY_VOLUME_DATA: VolumeDataModel[] = [
  {
    status: true,
    claimName: 'dc-development-apiforesamsatswalayan-0-1',
    namespace: 'Bapenda1',
    size: '1Gi',
    persistentVolume: 'pv-nextapi-loadbalancer-demo-development',
    type: 'Placeholder1',
    reason: 'Placeholder',
    message: 'Placeholder',
    lastSeen: 'Placeholder'
  },
  {
    status: false,
    claimName: 'dc-development-apiforesamsatswalayan-0-1',
    namespace: 'Bapenda2',
    size: '2Gi',
    persistentVolume: 'pv-nextapi-loadbalancer-demo-development',
    type: 'Placeholder2',
    reason: 'Placeholder',
    message: 'Placeholder',
    lastSeen: 'Placeholder'
  },
  {
    status: true,
    claimName: 'dc-development-apiforesamsatswalayan-0-1',
    namespace: 'Bapenda3',
    size: '3Gi',
    persistentVolume: 'pv-nextapi-loadbalancer-demo-development',
    type: 'Placeholder3',
    reason: 'Placeholder',
    message: 'Placeholder',
    lastSeen: 'Placeholder'
  }
];

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- END

const VolumeDefault: VolumeModel = {
  main: {
    data: [],
    total: 0
  }
};

const VolumeReducer = (state: VolumeModel = VolumeDefault, action: VolumeAction): VolumeModel => {
  switch (action.type) {
    case VolumeActionType.GetMainData:
      return { ...state, main: action.data };

    default:
      return { ...state };
  }
};

const VolumeCommand = {
  GetMainData: (): TAction<VolumeAction, void> => {
    return (dispatch: TDispatch<VolumeAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_VOLUME_DATA,
            total: DUMMY_VOLUME_DATA.length
          },
          type: VolumeActionType.GetMainData
        });
      });
    };
  }
};

export { VolumeCommand, VolumeDefault, VolumeReducer };
