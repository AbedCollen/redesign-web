import type { TAction, TDispatch } from '@models/types';

import { IngressActionType } from './types';

import type { IngressAction, IngressDataModel, IngressModel } from './types';

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- BEGIN
const DUMMY_INGRESS_DATA: IngressDataModel[] = [
  {
    id: 1,
    status: true,
    name: 'dc-development-apiforesamsatswalayan-0-1',
    namespace: 'Bapenda',
    domain: [
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-'
    ],
    target: [
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-'
    ],
    hostTable: [
      {
        path: '/',
        target: 'svc-nextflow-bamengine',
        port: 11003
      },
      {
        path: 'Placeholder',
        target: 'Placeholder',
        port: 11003
      }
    ],
    labelTable: [
      {
        key: 'app',
        value: 'nextflow-bpmnengine'
      }
    ],
    annotationTable: [
      {
        key: 'field.cattle.io/ingressState',
        value: '{}'
      },
      {
        key: 'kubernetes.io/ingress.class',
        value: 'nginx'
      }
    ]
  },
  {
    id: 2,
    status: true,
    name: 'dc-development-apiforesamsatswalayan-0-1',
    namespace: 'Bapenda',
    domain: [
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-'
    ],
    target: [
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-'
    ],
    hostTable: [
      {
        path: '/',
        target: 'svc-nextflow-bamengine2',
        port: 11003
      },
      {
        path: 'Placeholder2',
        target: 'Placeholder2',
        port: 11003
      }
    ],
    labelTable: [
      {
        key: 'app2',
        value: 'nextflow-bpmnengine2'
      }
    ],
    annotationTable: [
      {
        key: 'field.cattle.io/ingressState2',
        value: '{}'
      },
      {
        key: 'kubernetes.io/ingress.class2',
        value: 'nginx'
      }
    ]
  }
];

const DUMMY_INGRESS_DETAIL_DATA = {
  id: 1,
  status: true,
  name: 'dc-development-apiforesamsatswalayan-0-1',
  namespace: 'Bapenda',
  domain: [
    'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
    'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
    'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-'
  ],
  target: [
    'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
    'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-'
  ],
  hostTable: [
    {
      path: '/',
      target: 'svc-nextflow-bamengine',
      port: 11003
    },
    {
      path: 'Placeholder',
      target: 'Placeholder',
      port: 11003
    }
  ],
  labelTable: [
    {
      key: 'app',
      value: 'nextflow-bpmnengine'
    }
  ],
  annotationTable: [
    {
      key: 'field.cattle.io/ingressState',
      value: '{}'
    },
    {
      key: 'kubernetes.io/ingress.class',
      value: 'nginx'
    }
  ]
};

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- END

const IngressDetailDefault = {
  id: 0,
  status: true,
  name: '',
  namespace: '',
  domain: [''],
  target: [''],
  hostTable: [{
    path: '',
    target: '',
    port: 0
  }],
  labelTable: [{
    key: '',
    value: ''
  }],
  annotationTable: [{
    key: '',
    value: ''
  }]
};

const IngressDefault: IngressModel = {
  detail: IngressDetailDefault,
  main: {
    data: [],
    total: 0
  }
};

const IngressReducer = (state: IngressModel = IngressDefault, action: IngressAction): IngressModel => {
  switch (action.type) {
    case IngressActionType.GetMainData:
      return { ...state, main: action.data };
    case IngressActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const IngressCommand = {
  GetMainData: (): TAction<IngressAction, void> => {
    return (dispatch: TDispatch<IngressAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_INGRESS_DATA,
            total: DUMMY_INGRESS_DATA.length
          },
          type: IngressActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<IngressAction, void> => {
    return (dispatch: TDispatch<IngressAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_INGRESS_DETAIL_DATA,
          type: IngressActionType.GetDetailData
        });
      });
    };
  }
};

export { IngressCommand, IngressDefault, IngressReducer };
