import type { TAction, TDispatch } from '@models/types';

import { ClusterRolesBindingsActionType } from './types';

import type {
  ClusterRolesBindingsAction,
  ClusterRolesBindingsDataModel,
  ClusterRolesBindingsModel
} from './types';

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- BEGIN

const DUMMY_CLUSTER_ROLES_BINDINGS_DATA: ClusterRolesBindingsDataModel[] = [
  {
    id: 1,
    name: 'allowRequests.action',
    created: 'Placeholder',
    detail: {
      metadataName: 'Secret-configmap-getter',
      metadataCreated: 'Jan 4, 2022',
      metadataAge: '1 year ago',
      metadataUID: '28f3a8ccc-3fcc-475b-ac11-99821bf2c3e4',
      resourceInformation: 'Secret-configmap-getter',
      rulesTable: [
        {
          resources: 'Secret, configmap',
          namespaces: '-',
          kind: '-',
          apiGroups: '-'
        }
      ],
      resourceInformationTable: [
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
      resourceInformation: 'Secret-configmap-getter',
      rulesTable: [
        {
          resources: 'Secret, configmap',
          namespaces: '-',
          kind: '-',
          apiGroups: '-'
        }
      ],
      resourceInformationTable: [
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
    resourceInformation: '',
    rulesTable: [
      {
        resources: '',
        namespaces: '',
        kind: '',
        apiGroups: ''
      }
    ],
    resourceInformationTable: [
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
    resourceInformation: 'Secret-configmap-getter',
    rulesTable: [
      {
        resources: 'Secret, configmap',
        namespaces: '-',
        kind: '-',
        apiGroups: '-'
      },
      {
        resources: 'Secret, configmap',
        namespaces: '-',
        kind: '-',
        apiGroups: '-'
      }
    ],
    resourceInformationTable: [
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

const ClusterRolesBindingsDefault: ClusterRolesBindingsModel = {
  detail: DefaultDetailData,
  main: {
    data: [],
    total: 0
  }
};

const ClusterRolesBindingsReducer = (
  state: ClusterRolesBindingsModel = ClusterRolesBindingsDefault,
  action: ClusterRolesBindingsAction
): ClusterRolesBindingsModel => {
  switch (action.type) {
    case ClusterRolesBindingsActionType.GetMainData:
      return { ...state, main: action.data };
    case ClusterRolesBindingsActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const ClusterRolesBindingsCommand = {
  GetMainData: (): TAction<ClusterRolesBindingsAction, void> => {
    return (dispatch: TDispatch<ClusterRolesBindingsAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_CLUSTER_ROLES_BINDINGS_DATA,
            total: DUMMY_CLUSTER_ROLES_BINDINGS_DATA.length
          },
          type: ClusterRolesBindingsActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<ClusterRolesBindingsAction, void> => {
    return (dispatch: TDispatch<ClusterRolesBindingsAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_DATA,
          type: ClusterRolesBindingsActionType.GetDetailData
        });
      });
    };
  }
};

export { ClusterRolesBindingsCommand, ClusterRolesBindingsDefault, ClusterRolesBindingsReducer };
