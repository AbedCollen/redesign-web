import type { TAction, TDispatch } from '@models/types';

import { ServiceDiscoveryActionType } from './types';

import type {
  ServiceDiscoveryAction,
  ServiceDiscoveryDataModel,
  ServiceDiscoveryModel
} from './types';

const DUMMY_SERVICEDISCOVERY_DATA: ServiceDiscoveryDataModel[] = [
  {
    affinityTable: [
      {
        sessionAffinity: 'None'
      },
      {
        sessionAffinity: 'None'
      }
    ],
    clusterapi: '10.107.80.26',
    domain: [
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-'
    ],
    id: 1,
    isActive: true,
    labelTable: [
      {
        key: 'field.cattle.io/ingressState',
        value: 'nginx'
      },
      {
        key: 'field.cattle.io/ingress.class',
        value: '{}'
      }
    ],
    name: 'placeholderSD',
    portTable: [
      {
        portName: 'http',
        protocol: 'TCP',
        servicePort: 3000,
        targetPort: 3000
      },
      {
        portName: 'http',
        protocol: 'TCP',
        servicePort: 3000,
        targetPort: 3000
      }
    ],
    publishedTable: [
      {
        ipAddresses: false
      },
      {
        ipAddresses: true
      }
    ],
    target: [
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-'
    ],
    type: 'selector'
  },
  {
    affinityTable: [
      {
        sessionAffinity: 'None'
      },
      {
        sessionAffinity: 'None'
      }
    ],
    clusterapi: '10.107.80.26',
    domain: [
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-'
    ],
    id: 1,
    isActive: true,
    labelTable: [
      {
        key: 'field.cattle.io/ingressState',
        value: 'nginx'
      },
      {
        key: 'field.cattle.io/ingress.class',
        value: '{}'
      }
    ],
    name: 'placeholderSD',
    portTable: [
      {
        portName: 'http',
        protocol: 'TCP',
        servicePort: 3000,
        targetPort: 3000
      },
      {
        portName: 'http',
        protocol: 'TCP',
        servicePort: 3000,
        targetPort: 3000
      }
    ],
    publishedTable: [
      {
        ipAddresses: false
      },
      {
        ipAddresses: true
      }
    ],
    target: [
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-'
    ],
    type: 'selector'
  },
  {
    affinityTable: [
      {
        sessionAffinity: 'None'
      },
      {
        sessionAffinity: 'None'
      }
    ],
    clusterapi: '10.107.80.26',
    domain: [
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-'
    ],
    id: 1,
    isActive: true,
    labelTable: [
      {
        key: 'field.cattle.io/ingressState',
        value: 'nginx'
      },
      {
        key: 'field.cattle.io/ingress.class',
        value: '{}'
      }
    ],
    name: 'placeholderSD',
    portTable: [
      {
        portName: 'http',
        protocol: 'TCP',
        servicePort: 3000,
        targetPort: 3000
      },
      {
        portName: 'http',
        protocol: 'TCP',
        servicePort: 3000,
        targetPort: 3000
      }
    ],
    publishedTable: [
      {
        ipAddresses: false
      },
      {
        ipAddresses: true
      }
    ],
    target: [
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
      'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-'
    ],
    type: 'selector'
  }
];

const DUMMY_SERVICE_DISCOVERY_DETAIL_DATA = {
  affinityTable: [
    {
      sessionAffinity: 'None'
    },
    {
      sessionAffinity: 'None'
    }
  ],
  clusterapi: '10.107.80.26',
  domain: [
    'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
    'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
    'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-'
  ],
  id: 3,
  isActive: true,
  labelTable: [
    {
      key: 'field.cattle.io/ingressState',
      value: 'nginx'
    },
    {
      key: 'field.cattle.io/ingress.class',
      value: '{}'
    }
  ],
  name: 'placeholderSD',
  portTable: [
    {
      portName: 'http',
      protocol: 'TCP',
      servicePort: 3000,
      targetPort: 3000
    },
    {
      portName: 'http',
      protocol: 'TCP',
      servicePort: 3000,
      targetPort: 3000
    }
  ],
  publishedTable: [
    {
      ipAddresses: false
    },
    {
      ipAddresses: true
    }
  ],
  target: [
    'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-',
    'api-dev-tokrum.cloud.nextplatform.ai/ svc-apigateway-dev-tokrumapi-qa-tokrum.cloud.nextplatform.ai/ svc-apigateway-qa-tokrumapi-'
  ],
  type: 'selector'
};

const ServiceDiscoveryDetailDefault = {
  affinityTable: [
    {
      sessionAffinity: ''
    }
  ],
  clusterapi: '',
  domain: [''],
  id: 0,
  isActive: true,
  labelTable: [
    {
      key: '',
      value: ''
    }
  ],
  name: '',
  portTable: [
    {
      portName: '',
      protocol: '',
      servicePort: 0,
      targetPort: 0
    }
  ],
  publishedTable: [
    {
      ipAddresses: false
    }
  ],
  target: [''],
  type: ''
};

const ServiceDiscoveryDefault: ServiceDiscoveryModel = {
  detail: ServiceDiscoveryDetailDefault,
  main: {
    data: [],
    total: 0
  }
};

const ServiceDiscoveryReducer = (
  state: ServiceDiscoveryModel = ServiceDiscoveryDefault,
  action: ServiceDiscoveryAction
): ServiceDiscoveryModel => {
  switch (action.type) {
    case ServiceDiscoveryActionType.GetMainData:
      return { ...state, main: action.data };
    case ServiceDiscoveryActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const ServiceDiscoveryCommand = {
  GetDetailData: (): TAction<ServiceDiscoveryAction, void> => {
    return (dispatch: TDispatch<ServiceDiscoveryAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_SERVICE_DISCOVERY_DETAIL_DATA,
          type: ServiceDiscoveryActionType.GetDetailData
        });
      });
    };
  },
  GetMainData: (): TAction<ServiceDiscoveryAction, void> => {
    return (dispatch: TDispatch<ServiceDiscoveryAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_SERVICEDISCOVERY_DATA,
            total: DUMMY_SERVICEDISCOVERY_DATA.length
          },
          type: ServiceDiscoveryActionType.GetMainData
        });
      });
    };
  }
};

export {
  ServiceDiscoveryCommand,
  ServiceDiscoveryDefault,
  ServiceDiscoveryReducer
};
