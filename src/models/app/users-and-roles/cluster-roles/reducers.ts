import type { TAction, TDispatch } from '@models/types';

import { ClusterRolesActionType } from './types';

import type {
  ClusterRolesAction,
  ClusterRolesDataModel,
  ClusterRolesModel
} from './types';

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- BEGIN

const DUMMY_CLUSTER_ROLES_DATA: ClusterRolesDataModel[] = [
  {
    id: 1,
    name: 'allowRequests.action',
    created: 'Placeholder',
    detail: {
      metadataName: 'Secret-configmap-getter',
      metadataCreated: 'Jan 4, 2022',
      metadataAge: '1 year ago',
      metadataUID: '28f3a8ccc-3fcc-475b-ac11-99821bf2c3e4',
      rulesTable: [
        {
          resources: 'Secret, configmap',
          nonResourcesUrl: '-',
          resourcesName: '-',
          verbs: 'get, watch, list',
          apiGroups: '-'
        },
        {
          resources: 'Secret, configmap',
          nonResourcesUrl: '-',
          resourcesName: '-',
          verbs: 'get, watch, list',
          apiGroups: '-'
        }
      ]
    }
  },
  {
    id: 2,
    name: 'allowRequests.action',
    created: 'Placeholder',
    detail: {
      metadataName: 'Secret-configmap-getter',
      metadataCreated: 'Jan 4, 2022',
      metadataAge: '1 year ago',
      metadataUID: '28f3a8ccc-3fcc-475b-ac11-99821bf2c3e4',
      rulesTable: [
        {
          resources: 'Secret, configmap',
          nonResourcesUrl: '-',
          resourcesName: '-',
          verbs: 'get, watch, list',
          apiGroups: '-'
        },
        {
          resources: 'Secret, configmap',
          nonResourcesUrl: '-',
          resourcesName: '-',
          verbs: 'get, watch, list',
          apiGroups: '-'
        }
      ]
    }
  }
];

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- END
const DefaultDetailData = {
  id: 0,
  name: '',
  created: '',
  detail: {
    metadataName: '',
    metadataCreated: '',
    metadataAge: '',
    metadataUID: '',
    rulesTable: [
      {
        resources: '',
        nonResourcesUrl: '',
        resourcesName: '',
        verbs: '',
        apiGroups: ''
      }
    ]
  }
};

const DUMMY_DETAIL_DATA = {
  id: 1,
  name: 'allowRequests.action',
  created: 'Placeholder',
  detail: {
    metadataName: 'Secret-configmap-getter',
    metadataCreated: 'Jan 4, 2022',
    metadataAge: '1 year ago',
    metadataUID: '28f3a8ccc-3fcc-475b-ac11-99821bf2c3e4',
    rulesTable: [
      {
        resources: 'Secret, configmap',
        nonResourcesUrl: '-',
        resourcesName: '-',
        verbs: 'get, watch, list',
        apiGroups: '-'
      },
      {
        resources: 'Secret, configmap',
        nonResourcesUrl: '-',
        resourcesName: '-',
        verbs: 'get, watch, list',
        apiGroups: '-'
      }
    ]
  }
};

const ClusterRolesDefault: ClusterRolesModel = {
  detail: DefaultDetailData,
  main: {
    data: [],
    total: 0
  }
};

const ClusterRolesReducer = (
  state: ClusterRolesModel = ClusterRolesDefault,
  action: ClusterRolesAction
): ClusterRolesModel => {
  switch (action.type) {
    case ClusterRolesActionType.GetMainData:
      return { ...state, main: action.data };
    case ClusterRolesActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const ClusterRolesCommand = {
  GetMainData: (): TAction<ClusterRolesAction, void> => {
    return (dispatch: TDispatch<ClusterRolesAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_CLUSTER_ROLES_DATA,
            total: DUMMY_CLUSTER_ROLES_DATA.length
          },
          type: ClusterRolesActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<ClusterRolesAction, void> => {
    return (dispatch: TDispatch<ClusterRolesAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_DATA,
          type: ClusterRolesActionType.GetDetailData
        });
      });
    };
  }
};

export { ClusterRolesCommand, ClusterRolesDefault, ClusterRolesReducer };
