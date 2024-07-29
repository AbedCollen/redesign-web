import type { TAction, TDispatch } from '@models/types';

import { PersistentVolumeActionType } from './types';

import type { PersistentVolumeAction, PersistentVolumeDataModel, PersistentVolumeModel } from './types';

const DUMMY_PERSISTENTVOLUME_DATA: PersistentVolumeDataModel[] = [
  {
    isState: true,
    name: 'placeholder',
    persistentClaim: 'placeholder',
    source: 'placeholder'
  },
  {
    isState: false,
    name: 'placeholder',
    persistentClaim: 'placeholder',
    source: 'placeholder'
  },
  {
    isState: true,
    name: 'placeholder',
    persistentClaim: 'placeholder',
    source: 'placeholder'
  },
  {
    isState: true,
    name: 'placeholder',
    persistentClaim: 'placeholder',
    source: 'placeholder'
  }
];

const PersistentVolumeDefault: PersistentVolumeModel = {
  main: {
    data: [],
    total: 0
  }
};

const PersistentVolumeReducer = (
  state: PersistentVolumeModel = PersistentVolumeDefault,
  action: PersistentVolumeAction
): PersistentVolumeModel => {
  switch (action.type) {
    case PersistentVolumeActionType.GetMainData:
      return { ...state, main: action.data };

    default:
      return { ...state };
  }
};

const PersistentVolumeCommand = {
  GetMainData: (): TAction<PersistentVolumeAction, void> => {
    return (dispatch: TDispatch<PersistentVolumeAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_PERSISTENTVOLUME_DATA,
            total: DUMMY_PERSISTENTVOLUME_DATA.length
          },
          type: PersistentVolumeActionType.GetMainData
        });
      });
    };
  }
};

export { PersistentVolumeCommand, PersistentVolumeDefault, PersistentVolumeReducer };
