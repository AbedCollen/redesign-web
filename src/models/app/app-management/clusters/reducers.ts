import type { TAction, TDispatch } from '@models/types';

import { ClustersActionType } from './types';

import type { ClustersAction, ClustersDataModel, ClustersModel } from './types';

const DUMMY_CLUSTERS_DATA: ClustersDataModel[] = [
  {
    id: 1,
    name: 'In-cluster',
    status: true,
    URL: 'https://kubernetes.default.svc',
    version: 'navcore@oulook..com',
    credentialsType: 'Token/Basic Auth',
    default: 'All namespaces',
    statusState: true,
    versionState: '1.23',
    details: '-',
    modified: 'a few seconds ago (Mon Dec 12 2022 20:46:11 GMT+0700) (next refresh in 1 seconds)',
    resync: '24 minutes ago (Mon Dec 12 2022 20:23:23 GMT+0700)',
    apiCount: 84,
    resourceCount: 3722,
    applicationCount: 16
  },
  {
    id: 2,
    name: 'In-cluster',
    status: true,
    URL: 'https://kubernetes.default.svc',
    version: 'navcore@oulook..com',
    credentialsType: 'Token/Basic Auth',
    default: 'All namespaces',
    statusState: true,
    versionState: '1.23',
    details: '-',
    modified: 'a few seconds ago (Mon Dec 12 2022 20:46:11 GMT+0700) (next refresh in 1 seconds)',
    resync: '24 minutes ago (Mon Dec 12 2022 20:23:23 GMT+0700)',
    apiCount: 84,
    resourceCount: 3722,
    applicationCount: 16
  },
  {
    id: 3,
    name: 'In-cluster',
    status: true,
    URL: 'https://kubernetes.default.svc',
    version: 'navcore@oulook..com',
    credentialsType: 'Token/Basic Auth',
    default: 'All namespaces',
    statusState: true,
    versionState: '1.23',
    details: '-',
    modified: 'a few seconds ago (Mon Dec 12 2022 20:46:11 GMT+0700) (next refresh in 1 seconds)',
    resync: '24 minutes ago (Mon Dec 12 2022 20:23:23 GMT+0700)',
    apiCount: 84,
    resourceCount: 3722,
    applicationCount: 16
  },
  {
    id: 4,
    name: 'In-cluster',
    status: true,
    URL: 'https://kubernetes.default.svc',
    version: 'navcore@oulook..com',
    credentialsType: 'Token/Basic Auth',
    default: 'All namespaces',
    statusState: true,
    versionState: '1.23',
    details: '-',
    modified: 'a few seconds ago (Mon Dec 12 2022 20:46:11 GMT+0700) (next refresh in 1 seconds)',
    resync: '24 minutes ago (Mon Dec 12 2022 20:23:23 GMT+0700)',
    apiCount: 84,
    resourceCount: 3722,
    applicationCount: 16
  }
];

const DUMMY_CLUSTERS_DETAIL_DATA = {
  id: 1,
  name: 'In-cluster',
  status: true,
  URL: 'https://kubernetes.default.svc',
  version: 'navcore@oulook..com',
  credentialsType: 'Token/Basic Auth',
  default: 'All namespaces',
  statusState: true,
  versionState: '1.23',
  details: '-',
  modified: 'a few seconds ago (Mon Dec 12 2022 20:46:11 GMT+0700) (next refresh in 1 seconds)',
  resync: '24 minutes ago (Mon Dec 12 2022 20:23:23 GMT+0700)',
  apiCount: 84,
  resourceCount: 3722,
  applicationCount: 16
};

// const ClustersDetailDefault = {
//   id: 0,
//   name: '',
//   status: true,
//   URL: '',
//   version: '',
//   credentialsType: '',
//   default: '',
//   statusState: true,
//   versionState: '',
//   details: '',
//   modified: '',
//   resync: '',
//   apiCount: 0,
//   resourceCount: 0,
//   applicationCount: 0
// };

const ClustersDefault: ClustersModel = {
  detail: DUMMY_CLUSTERS_DETAIL_DATA,
  main: {
    data: [],
    total: 0
  }
};

const ClustersReducer = (
  state: ClustersModel = ClustersDefault,
  action: ClustersAction
): ClustersModel => {
  switch (action.type) {
    case ClustersActionType.GetMainData:
      return { ...state, main: action.data };
    case ClustersActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const ClustersCommand = {
  GetMainData: (): TAction<ClustersAction, void> => {
    return (dispatch: TDispatch<ClustersAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_CLUSTERS_DATA,
            total: DUMMY_CLUSTERS_DATA.length
          },
          type: ClustersActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<ClustersAction, void> => {
    return (dispatch: TDispatch<ClustersAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_CLUSTERS_DETAIL_DATA,
          type: ClustersActionType.GetDetailData
        });
      });
    };
  }
};

export { ClustersCommand, ClustersDefault, ClustersReducer };
