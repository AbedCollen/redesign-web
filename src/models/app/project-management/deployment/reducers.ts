import type { TAction, TDispatch } from '@models/types';

import { DeploymentActionType } from './types';

import type {
  DeploymentAction,
  DeploymentDataModel,
  DeploymentModel
} from './types';

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- BEGIN
const DUMMY_DEPLOYMENT_DATA: DeploymentDataModel[] = [
  {
    id: 1,
    containers: 'registry.gitlab.com/artoz/faas-env/python-env-3.10:1.33.1 + 1',
    createdDate: '2023-06-06T00:00:00+0000',
    isActive: true,
    name: 'dc-development-apiforesamsatswalayan-0-1',
    namespace: 'Bapenda',
    podsCreated: 1,
    restarts: 0,
    detail: {
      namespace: 'Bapenda',
      image: 'registry.gitlab.com/artoz/faas-env/python-env-3.10:1.33.1',
      workloadType: 'Placeholder',
      created: 'Placeholder',
      restart: 'Placeholder',
      requireAll: 'Bapenda',
      requireAny: 'registry.gitlab.com/artoz/faas-env/python-env-3.10:1.33.1',
      preferAny: 'Placeholder',
      scheduler: 'Placeholder',
      priority: 'Placeholder',
      portName: 'Bapenda',
      publish: 'registry.gitlab.com/artoz/faas-env/python-env-3.10:1.33.1',
      protocol: 'Placeholder',
      asA: 'Placeholder',
      onListening: 'Placeholder',
      maxSurge: 'Bapenda',
      maxUnavailable: 'Placeholder',
      minimumReady: 'Placeholder',
      progressDeadline: 'registry.gitlab.com/artoz/faas-env/python-env-3.10:1.33.1',
      podsTable: [
        {
          id: 1,
          state: 'running',
          name: 'deploy-nextcluster-api-794c6bcdf7-pw6tv',
          image: 'registry.gitlab.com/artoz/nextcluster/k8s-proxy:2.0.3-dev8',
          nodes: 'c-m-9thv8bf6:machine-m2d9z',
          detail: {
            namespace: 'nextcluster',
            requireAll: 'nodenextplatform = install',
            workload: 'deployment:nextcluster:deploy-nextcluster-api ',
            requireAny: 'No Rules.',
            podIp: '10.244.0.172',
            preferAny: 'No Rules.',
            node: '10.10.16.41',
            scheduler: 'default-scheduler',
            created: 'a month ago ',
            priority: 'n/a',
            dnsPolicy: 'ClusterFirst',
            useHost: 'false',
            containersTable: [
              {
                id: 1,
                state: 'running',
                name: 'nextcluster-proxyapi',
                image: 'registry.gitlab.com/artoz/nextcluster/k8s-proxy:2.0.3-dev8',
                restart: '0',
                detail: {
                  namespace: 'nextcluster',
                  requireAll: 'nodenextplatform = install',
                  image: 'registry.gitlab.com/artoz/nextcluster/k8s-proxy:2.0.3-dev8',
                  requireAny: 'No Rules.',
                  workloadType: 'deployment',
                  preferAny: 'No Rules.',
                  created: '21/09/2023',
                  scheduler: 'default-scheduler',
                  restarts: '0',
                  priority: 'n/a',
                  portName: 'test',
                  maxSurge: '1',
                  publishContainer: 'test',
                  maxUnavailable: '0',
                  protocol: 'test',
                  minimumReady: '0',
                  asA: 'test',
                  progressDeadline: '600',
                  onListening: '0',
                  autoRestart: 'Always',
                  dnsPolicy: 'ClusterFirst',
                  useHost: 'false',
                  pullImage: 'IfNotPresent',
                  scaleTable: [{
                    id: 1,
                    scale: 1,
                    name: 'deploy-nextcluster-api'
                  }],
                  podsTable: [{
                    id: 1,
                    state: 'test',
                    name: 'deploy-nextcluster-api-794c6bcdf7-pw6tv',
                    image: 'registry.gitlab.com/artoz/nextcluster/k8s-proxy:2.0.3-dev8',
                    nodes: 'c-m-9thv8bf6:machine-m2d9z'
                  }],
                  labelsTable: [{
                    id: 1,
                    key: 'app',
                    value: 'nextcluster-api'
                  }],
                  annotationsTable: [{
                    id: 1,
                    key: '',
                    value: 'Not Found'
                  }],
                  environmentTable: [{
                    id: 1,
                    key: '',
                    value: 'Not Found'
                  }],
                  volumesTable: [{
                    id: 1,
                    name: 'configproxyapi',
                    type: '/v3/project/schemas/volumeMount',
                    mountPoint: '/.env',
                    readonly: 'false'
                  }]
                }
              }
            ],
            eventsTable: [
              {
                id: 1,
                type: 'test',
                reason: 'test',
                message: 'test',
                lastSeen: 'test'
              }
            ],
            statusTable: [
              {
                id: 1,
                type: 'Ready',
                status: 'true',
                lastUpdate: 'a month ago'
              }
            ],
            labelsTable: [
              {
                id: 1,
                key: 'app',
                value: 'nextcluster-api'
              }
            ],
            annotationsTable: [
              {
                id: 1,
                key: 'tes',
                value: 'Not Found'
              }
            ]
          }
        }
      ],
      autoRestart: 'Bapenda',
      dnsPolicy: 'Bapenda',
      useHost: 'Bapenda',
      pullImage: 'Bapenda'
    }
  }

  /*
   * {
   *   id: 3,
   *   containers:
   *     'registry.gitlab.com/diginextdev/nextflow2.0/request-router:dev-0.0.2 +',
   *   createdDate: '2023-06-06T00:00:00+0000',
   *   isActive: true,
   *   name: 'dc-development-apiforesamsatswalayan-0-1',
   *   namespace: 'Bapenda',
   *   podsCreated: 1,
   *   restarts: 0,
   * },
   * {
   *   id: 4,
   *   containers: 'registry.gitlab.com/artoz/faas-env/python-env-3.10:1.33.1 + 1',
   *   createdDate: '2023-06-06T00:00:00+0000',
   *   isActive: false,
   *   name: 'dc-development-apiforesamsatswalayan-0-1',
   *   namespace: 'Bapenda',
   *   podsCreated: 1,
   *   restarts: 0,
   * },
   */
];

/*
 * FOR SIMULATION PURPOSES ONLY, DELETE LATER --- END
 * const defaultDetailData = {
 *   containers: '',
 *   createdDate: '',
 *   id: 0,
 *   isActive: true,
 *   name: '',
 *   namespace: '',
 *   podsCreated: 0,
 *   restarts: 0
 * };
 * const DUMMY_DETAIL_DATA = {
 *   containers: 'test',
 *   createdDate: 'test',
 *   id: 1,
 *   isActive: true,
 *   name: 'test',
 *   namespace: 'test',
 *   podsCreated: 0,
 *   restarts: 0
 * };
 */

const DeploymentDefault: DeploymentModel = {
  detail: DUMMY_DEPLOYMENT_DATA[0],
  main: {
    data: [],
    total: 0
  }
};

const DeploymentReducer = (
  state: DeploymentModel = DeploymentDefault,
  action: DeploymentAction
): DeploymentModel => {
  switch (action.type) {
    case DeploymentActionType.GetMainData:
      return { ...state, main: action.data };
    case DeploymentActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const DeploymentCommand = {
  GetMainData: (): TAction<DeploymentAction, void> => {
    return (dispatch: TDispatch<DeploymentAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_DEPLOYMENT_DATA,
            total: DUMMY_DEPLOYMENT_DATA.length
          },
          type: DeploymentActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<DeploymentAction, void> => {
    return (dispatch: TDispatch<DeploymentAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DEPLOYMENT_DATA[0],
          type: DeploymentActionType.GetDetailData
        });
      });
    };
  }
};

export { DeploymentCommand, DeploymentDefault, DeploymentReducer };
