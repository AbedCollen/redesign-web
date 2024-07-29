import type { TAction, TDispatch } from '@models/types';

import { ConfigmapActionType } from './types';

import type { ConfigmapAction, ConfigmapDataModel, ConfigmapModel } from './types';

const DUMMY_CONFIGMAP_DATA: ConfigmapDataModel[] = [
  {
    id: 1,
    createdDate: '2023-06-06',
    name: 'dc-development-apiforesamsatswalayan-0-1',
    namespace: 'Bapenda',
    keys: 'bam-api-config.json'

  },
  {
    id: 2,
    createdDate: '2023-06-06',
    name: 'dc-development-apiforesamsatswalayan-0-1',
    namespace: 'Bapenda',
    keys: 'bam-api-config.json'
  },
  {
    id: 31,
    createdDate: '2023-06-06',
    name: 'dc-development-apiforesamsatswalayan-0-1',
    namespace: 'Bapenda',
    keys: 'bam-api-config.json'
  },
  {
    id: 4,
    createdDate: '2023-06-06',
    name: 'dc-development-apiforesamsatswalayan-0-1',
    namespace: 'Bapenda',
    keys: 'bam-api-config.json'
  }
];

const DUMMY_CONFIGMAP_DETAIL = {
  id: 1,
  createdDate: '2023-06-06',
  name: 'dc-development-apiforesamsatswalayan-0-1',
  namespace: 'Bapenda',
  keys: 'bam-api-config.json'
};

const ConfigMapDetailDefault = {
  id: 0,
  createdDate: '',
  name: '',
  namespace: '',
  keys: ''
};

const ConfigmapDefault: ConfigmapModel = {
  detail: ConfigMapDetailDefault,
  main: {
    data: [],
    total: 0
  }
};

const ConfigmapReducer = (state: ConfigmapModel = ConfigmapDefault, action: ConfigmapAction): ConfigmapModel => {
  switch (action.type) {
    case ConfigmapActionType.GetMainData:
      return { ...state, main: action.data };
    case ConfigmapActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const ConfigmapCommand = {
  GetMainData: (): TAction<ConfigmapAction, void> => {
    return (dispatch: TDispatch<ConfigmapAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_CONFIGMAP_DATA,
            total: DUMMY_CONFIGMAP_DATA.length
          },
          type: ConfigmapActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<ConfigmapAction, void> => {
    return (dispatch: TDispatch<ConfigmapAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_CONFIGMAP_DETAIL,
          type: ConfigmapActionType.GetDetailData
        });
      });
    };
  }
};

export { ConfigmapCommand, ConfigmapDefault, ConfigmapReducer };
