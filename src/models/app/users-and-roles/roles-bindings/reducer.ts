import type { TAction, TDispatch } from '@models/types';

import { RolesBindingsActionType } from './types';

import type {
  RolesBindingsAction,
  RolesBindingsDataModel,
  RolesBindingsModel
} from './types';

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- BEGIN
const DUMMY_RolesBindings_DATA: RolesBindingsDataModel[] = [
  {
    id: 1,
    name: 'Secret-configmap-getter',
    created: '1 year ago',
    detailTable: [
      {
        resources: 'Secret, configmap',
        nonResourceURL: '-',
        resourceNames: '-',
        verbs: 'get, watch, list',
        apiGroups: '-',
        metadataNamespace: 'default',
        createdDetail: 'Jan 4, 2022',
        uid: '8f3a8ccc-3fcc-475b-ac11-99821bf2c3e4',
        rulesNamespace: 'fission-builder-tokrum',
        kind: 'Service-account'
      },
      {
        resources: 'Secret, configmap',
        nonResourceURL: '-',
        resourceNames: '-',
        verbs: 'get, watch, list',
        apiGroups: '-',
        metadataNamespace: 'default',
        createdDetail: 'Jan 4, 2022',
        uid: '8f3a8ccc-3fcc-475b-ac11-99821bf2c3e4',
        rulesNamespace: 'fission-builder-tokrum',
        kind: 'Service-account'
      }
    ]
  },
  {
    id: 2,
    name: 'Secret-configmap-getter',
    created: '1 year ago',
    detailTable: [
      {
        resources: 'Secret, configmap',
        nonResourceURL: '-',
        resourceNames: '-',
        verbs: 'get, watch, list',
        apiGroups: '-',
        metadataNamespace: 'default',
        createdDetail: 'Jan 4, 2022',
        uid: '8f3a8ccc-3fcc-475b-ac11-99821bf2c3e4',
        rulesNamespace: 'fission-builder-tokrum',
        kind: 'Service-account'
      },
      {
        resources: 'Secret, configmap',
        nonResourceURL: '-',
        resourceNames: '-',
        verbs: 'get, watch, list',
        apiGroups: '-',
        metadataNamespace: 'default',
        createdDetail: 'Jan 4, 2022',
        uid: '8f3a8ccc-3fcc-475b-ac11-99821bf2c3e4',
        rulesNamespace: 'fission-builder-tokrum',
        kind: 'Service-account'
      }
    ]
  }
];

const DUMMY_RolesBindings_DETAIL_DATA = {
  id: 1,
  name: 'Secret-configmap-getter',
  created: '1 year ago',
  detailTable: [
    {
      resources: 'Secret, configmap',
      nonResourceURL: '-',
      resourceNames: '-',
      verbs: 'get, watch, list',
      apiGroups: '-',
      metadataNamespace: 'default',
      createdDetail: 'Jan 4, 2022',
      uid: '8f3a8ccc-3fcc-475b-ac11-99821bf2c3e4',
      rulesNamespace: 'fission-builder-tokrum',
      kind: 'Service-account'
    },
    {
      resources: 'Secret, configmap',
      nonResourceURL: '-',
      resourceNames: '-',
      verbs: 'get, watch, list',
      apiGroups: '-',
      metadataNamespace: 'default',
      createdDetail: 'Jan 4, 2022',
      uid: '8f3a8ccc-3fcc-475b-ac11-99821bf2c3e4',
      rulesNamespace: 'fission-builder-tokrum',
      kind: 'Service-account'
    }
  ]
};

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- END

const RolesBindingsDetailDefault = {
  id: 1,
  name: '',
  created: '',
  detailTable: [
    {
      resources: '',
      nonResourceURL: '',
      resourceNames: '',
      verbs: '',
      apiGroups: '',
      metadataNamespace: '',
      createdDetail: '',
      uid: '',
      rulesNamespace: '',
      kind: ''
    }
  ]
};

const RolesBindingsDefault: RolesBindingsModel = {
  detail: RolesBindingsDetailDefault,
  main: {
    data: [],
    total: 0
  }
};

const RolesBindingsReducer = (
  state: RolesBindingsModel = RolesBindingsDefault,
  action: RolesBindingsAction
): RolesBindingsModel => {
  switch (action.type) {
    case RolesBindingsActionType.GetMainData:
      return { ...state, main: action.data };
    case RolesBindingsActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const RolesBindingsCommand = {
  GetMainData: (): TAction<RolesBindingsAction, void> => {
    return (dispatch: TDispatch<RolesBindingsAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_RolesBindings_DATA,
            total: DUMMY_RolesBindings_DATA.length
          },
          type: RolesBindingsActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<RolesBindingsAction, void> => {
    return (dispatch: TDispatch<RolesBindingsAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_RolesBindings_DETAIL_DATA,
          type: RolesBindingsActionType.GetDetailData
        });
      });
    };
  }
};

export { RolesBindingsCommand, RolesBindingsDefault, RolesBindingsReducer };
