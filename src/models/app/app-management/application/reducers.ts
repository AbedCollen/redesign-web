import type { TAction, TDispatch } from '@models/types';

import { ApplicationActionType } from './types';

import type { ApplicationAction, ApplicationDataModel, ApplicationModel } from './types';

const DUMMY_APPLICATION_DATA: ApplicationDataModel[] = [
  {
    id: 1,
    title: 'bapenda-esamsatadmin',
    project: 'default',
    sync: false,
    health: true,
    repository: 'https://github.com/argoproj/argocd-example-apps.git',
    namespace: 'default',
    labels: '-',
    destination: '-',
    targetRevisionPath: 'HEAD',
    path: 'projects/clients/bapenda-demo-sapda/apps/esamsat-admin/yaml/'
  },
  {
    id: 2,
    title: 'appbuilder',
    project: 'default',
    sync: true,
    health: true,
    repository: 'https://github.com/argoproj/argocd-example-apps.git',
    namespace: 'default',
    labels: '-',
    destination: '-',
    targetRevisionPath: 'HEAD',
    path: 'projects/clients/bapenda-demo-sapda/apps/esamsat-admin/yaml/'
  },
  {
    id: 3,
    title: 'nextbytes-docs',
    project: 'default',
    sync: true,
    health: true,
    repository: 'https://github.com/argoproj/argocd-example-apps.git',
    namespace: 'default',
    labels: '-',
    destination: '-',
    targetRevisionPath: 'HEAD',
    path: 'projects/clients/bapenda-demo-sapda/apps/esamsat-admin/yaml/'
  },
  {
    id: 4,
    title: 'nextcluster-docs',
    project: 'default',
    sync: false,
    health: false,
    repository: 'https://github.com/argoproj/argocd-example-apps.git',
    namespace: 'default',
    labels: '-',
    destination: '-',
    targetRevisionPath: 'HEAD',
    path: 'projects/clients/bapenda-demo-sapda/apps/esamsat-admin/yaml/'
  },
  {
    id: 5,
    title: 'bapenda-esamsatadmin',
    project: 'default',
    sync: false,
    health: true,
    repository: 'https://github.com/argoproj/argocd-example-apps.git',
    namespace: 'default',
    labels: '-',
    destination: '-',
    targetRevisionPath: 'HEAD',
    path: 'projects/clients/bapenda-demo-sapda/apps/esamsat-admin/yaml/'
  },
  {
    id: 6,
    title: 'appbuilder',
    project: 'default',
    sync: true,
    health: true,
    repository: 'https://github.com/argoproj/argocd-example-apps.git',
    namespace: 'default',
    labels: '-',
    destination: '-',
    targetRevisionPath: 'HEAD',
    path: 'projects/clients/bapenda-demo-sapda/apps/esamsat-admin/yaml/'
  },
  {
    id: 7,
    title: 'nextbytes-docs',
    project: 'default',
    sync: true,
    health: true,
    repository: 'https://github.com/argoproj/argocd-example-apps.git',
    namespace: 'default',
    labels: '-',
    destination: '-',
    targetRevisionPath: 'HEAD',
    path: 'projects/clients/bapenda-demo-sapda/apps/esamsat-admin/yaml/'
  },
  {
    id: 8,
    title: 'nextcluster-docs',
    project: 'default',
    sync: false,
    health: false,
    repository: 'https://github.com/argoproj/argocd-example-apps.git',
    namespace: 'default',
    labels: '-',
    destination: '-',
    targetRevisionPath: 'HEAD',
    path: 'projects/clients/bapenda-demo-sapda/apps/esamsat-admin/yaml/'
  }
];

const ApplicationDetailData = {
  id: 0,
  title: '',
  project: '',
  sync: false,
  health: false,
  repository: '',
  namespace: '',
  labels: '',
  destination: '',
  targetRevisionPath: '',
  path: ''
};

const DUMMY_DETAIL_DATA = {
  id: 1,
  title: 'bapenda-esamsatadmin',
  project: 'default',
  sync: false,
  health: true,
  repository: 'https://github.com/argoproj/argocd-example-apps.git',
  namespace: 'default',
  labels: '-',
  destination: '-',
  targetRevisionPath: 'HEAD',
  path: 'projects/clients/bapenda-demo-sapda/apps/esamsat-admin/yaml/'
};

const ApplicationDefault: ApplicationModel = {
  detail: ApplicationDetailData,
  main: {
    data: [],
    total: 0
  }
};

const ApplicationReducer = (
  state: ApplicationModel = ApplicationDefault,
  action: ApplicationAction
): ApplicationModel => {
  switch (action.type) {
    case ApplicationActionType.GetMainData:
      return { ...state, main: action.data };
    case ApplicationActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const ApplicationCommand = {
  GetMainData: (): TAction<ApplicationAction, void> => {
    return (dispatch: TDispatch<ApplicationAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_APPLICATION_DATA,
            total: DUMMY_APPLICATION_DATA.length
          },
          type: ApplicationActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<ApplicationAction, void> => {
    return (dispatch: TDispatch<ApplicationAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_DATA,
          type: ApplicationActionType.GetDetailData
        });
      });
    };
  }
};

export { ApplicationCommand, ApplicationDefault, ApplicationReducer };
