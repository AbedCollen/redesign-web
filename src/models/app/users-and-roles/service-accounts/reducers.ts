import type { TAction, TDispatch } from '@models/types';

import { ServiceAccountsActionType } from './types';

import type {
  ServiceAccountsAction,
  ServiceAccountsDataModel,
  ServiceAccountsModel
} from './types';

const DUMMY_SERVICE_ACCOUNTS_DATA: ServiceAccountsDataModel[] = [
  {
    id: 1,
    name: 'brig',
    labels: [
      'app.kubernetes.io/name: kubernetes-external-secrets',
      'chart: brig-4.14.0',
      'release: wire-server',
      'wireService: cargohold',
      'wireService: gundeck',
      'app.kubernetes.io/instance: externalsecrets',
      'app.kubernetes.io/managed-by: Helm'
    ],
    created: '5 month ago',
    detail: {
      metadata: {
        name: 'brig',
        namespace: 'default',
        created: 'Aug 5, 2022',
        age: '5 month ago',
        uid: '2b8bc8fa-4071-4281-bd1b-63e9a79a219b',
        labels: [
          'app.kubernetes.io/name: kubernetes-external-secrets',
          'chart: brig-4.14.0',
          'release: wire-server',
          'wireService: cargohold'
        ],
        annotation: [
          'wireService: gundeck',
          'app.kubernetes.io/instance: externalsecrets',
          'app.kubernetes.io/managed-by: Helm'
        ]
      },
      secrets: [
        {
          id: 1,
          name: 'brig-token-xm8x8',
          labels: ['-'],
          type: 'kubernetes.io/service-account-token',
          created: '5 month ago',
          detail: {
            metadataSecret: {
              name: 'brig-token-xm8x8',
              namespace: 'default',
              created: 'Aug 5, 2022',
              age: '5 month ago',
              uid: '2b8bc8fa-4071-4281-bd1b-63e9a79a219b',
              labels: [],
              annotation: [
                'wireService: gundeck',
                'app.kubernetes.io/instance: externalsecrets',
                'app.kubernetes.io/managed-by: Helm'
              ]
            },
            dataSecret: {
              crt: '1066 bytes',
              namespace: 'default',
              token: '888 bytes'
            }
          }
        }
      ]
    }
  },
  {
    id: 2,
    name: 'cargohold',
    labels: [
      'app.kubernetes.io/name: kubernetes-external-secrets',
      'chart: brig-4.14.0',
      'release: wire-server',
      'wireService: cargohold',
      'wireService: gundeck',
      'app.kubernetes.io/instance: externalsecrets',
      'app.kubernetes.io/managed-by: Helm'
    ],
    created: '5 month ago',
    detail: {
      metadata: {
        name: 'brig',
        namespace: 'default',
        created: 'Aug 5, 2022',
        age: '5 month ago',
        uid: '2b8bc8fa-4071-4281-bd1b-63e9a79a219b',
        labels: [
          'app.kubernetes.io/name: kubernetes-external-secrets',
          'chart: brig-4.14.0',
          'release: wire-server',
          'wireService: cargohold'
        ],
        annotation: [
          'wireService: gundeck',
          'app.kubernetes.io/instance: externalsecrets',
          'app.kubernetes.io/managed-by: Helm'
        ]
      },
      secrets: [
        {
          id: 2,
          name: 'brig-token-xm9x9',
          labels: ['-'],
          type: 'kubernetes.io/service-account-token',
          created: '5 month ago',
          detail: {
            metadataSecret: {
              name: 'brig-token-xm9x9',
              namespace: 'default',
              created: 'Aug 5, 2022',
              age: '5 month ago',
              uid: '2b8bc8fa-4071-4281-bd1b-63e9a79a219b',
              labels: [],
              annotation: [
                'wireService: gundeck',
                'app.kubernetes.io/instance: externalsecrets',
                'app.kubernetes.io/managed-by: Helm'
              ]
            },
            dataSecret: {
              crt: '1066 bytes',
              namespace: 'default',
              token: '888 bytes'
            }
          }
        }
      ]
    }
  }
];

const DefaultServiceAccountDetailData = {
  id: 0,
  name: '',
  labels: [''],
  created: '',
  detail: {
    metadata: {
      name: '',
      namespace: '',
      created: '',
      age: '',
      uid: '',
      labels: [''],
      annotation: ['']
    },
    secrets: [
      {
        id: 0,
        name: '',
        labels: [''],
        type: '',
        created: '',
        detail: {
          metadataSecret: {
            name: '',
            namespace: '',
            created: '',
            age: '',
            uid: '',
            labels: [''],
            annotation: ['']
          },
          dataSecret: {
            crt: '',
            namespace: '',
            token: ''
          }
        }
      }
    ]
  }
};

const DUMMY_DETAIL_DATA = {
  id: 1,
  name: 'brig',
  labels: [
    'app.kubernetes.io/name: kubernetes-external-secrets',
    'chart: brig-4.14.0',
    'release: wire-server',
    'wireService: cargohold',
    'wireService: gundeck',
    'app.kubernetes.io/instance: externalsecrets',
    'app.kubernetes.io/managed-by: Helm'
  ],
  created: '5 month ago',
  detail: {
    metadata: {
      name: 'brig',
      namespace: 'default',
      created: 'Aug 5, 2022',
      age: '5 month ago',
      uid: '2b8bc8fa-4071-4281-bd1b-63e9a79a219b',
      labels: [
        'app.kubernetes.io/name: kubernetes-external-secrets',
        'chart: brig-4.14.0',
        'release: wire-server',
        'wireService: cargohold'
      ],
      annotation: [
        'wireService: gundeck',
        'app.kubernetes.io/instance: externalsecrets',
        'app.kubernetes.io/managed-by: Helm'
      ]
    },
    secrets: [
      {
        id: 1,
        name: 'brig-token-xm8x8',
        labels: ['-'],
        type: 'kubernetes.io/service-account-token',
        created: '5 month ago',
        detail: {
          metadataSecret: {
            name: 'brig-token-xm8x8',
            namespace: 'default',
            created: 'Aug 5, 2022',
            age: '5 month ago',
            uid: '2b8bc8fa-4071-4281-bd1b-63e9a79a219b',
            labels: [],
            annotation: [
              'wireService: gundeck',
              'app.kubernetes.io/instance: externalsecrets',
              'app.kubernetes.io/managed-by: Helm'
            ]
          },
          dataSecret: {
            crt: '1066 bytes',
            namespace: 'default',
            token: '888 bytes'
          }
        }
      }
    ]
  }
};

const ServiceAccountsDefault: ServiceAccountsModel = {
  detail: DefaultServiceAccountDetailData,
  main: {
    data: [],
    total: 0
  }
};

const ServiceAccountsReducer = (
  state: ServiceAccountsModel = ServiceAccountsDefault,
  action: ServiceAccountsAction
): ServiceAccountsModel => {
  switch (action.type) {
    case ServiceAccountsActionType.GetMainData:
      return { ...state, main: action.data };
    case ServiceAccountsActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const ServiceAccountsCommand = {
  GetMainData: (): TAction<ServiceAccountsAction, void> => {
    return (dispatch: TDispatch<ServiceAccountsAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_SERVICE_ACCOUNTS_DATA,
            total: DUMMY_SERVICE_ACCOUNTS_DATA.length
          },
          type: ServiceAccountsActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<ServiceAccountsAction, void> => {
    return (dispatch: TDispatch<ServiceAccountsAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_DATA,
          type: ServiceAccountsActionType.GetDetailData
        });
      });
    };
  }
};

export {
  ServiceAccountsCommand,
  ServiceAccountsDefault,
  ServiceAccountsReducer
};
