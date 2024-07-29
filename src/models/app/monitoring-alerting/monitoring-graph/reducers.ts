import type { TAction, TDispatch } from '@models/types';

import { MonitoringGraphActionType } from './types';

import type {
  MonitoringGraphAction,
  MonitoringGraphDataModel,
  MonitoringGraphModel
} from './types';

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- BEGIN

const DUMMY_MONITORING_GRAPH_DATA: MonitoringGraphDataModel[] = [
  {
    id: 1,
    name: 'Kubernetes Metrics',
    description: 'Kubernetes Infrastructure Metrics Dashboard',
    tags: ['k8s', 'monitoring', 'kubelet'],
    createdAt: '07/16/2023 08:56:26 PM',
    lastUpdateTime: '07/18/2023 01:07:07 PM',
    detail: {
      totalCpuUsage: '16.0',
      totalMemoryUsage: '240 GiB',
      totalAllocateableMemory: '15.4 GiB',
      totalAllocateableCpu: '4',
      totalNetworkIoTransmit: '0 B/s',
      totalNetworkIoReceive: '0 B/s'
    },
    variableDetail: [
      {
        id: 1,
        variable: 'cluster',
        definition: '-',
        variableDetail: {
          name: 'placeholder',
          description: 'placeholder',
          type: 'Query'
        }
      },
      {
        id: 2,
        variable: 'namespace',
        definition: '-',
        variableDetail: {
          name: 'placeholder',
          description: 'placeholder',
          type: 'Textbox'
        }
      }
    ]
  }
];

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- END
const DefaultDetailData = {
  id: 0,
  name: '',
  description: '',
  tags: [''],
  createdAt: '',
  lastUpdateTime: '',
  detail: {
    totalCpuUsage: '',
    totalMemoryUsage: '',
    totalAllocateableMemory: '',
    totalAllocateableCpu: '',
    totalNetworkIoTransmit: '',
    totalNetworkIoReceive: ''
  },
  variableDetail: [
    {
      id: 0,
      variable: '',
      definition: '',
      variableDetail: {
        name: '',
        description: '',
        type: ''
      }
    },
    {
      id: 0,
      variable: '',
      definition: '',
      variableDetail: {
        name: '',
        description: '',
        type: ''
      }
    }
  ]
};

const DUMMY_DETAIL_DATA = {
  id: 1,
  name: 'Kubernetes Metrics',
  description: 'Kubernetes Infrastructure Metrics Dashboard',
  tags: ['k8s', 'monitoring', 'kubelet'],
  createdAt: '07/16/2023 08:56:26 PM',
  lastUpdateTime: '07/18/2023 01:07:07 PM',
  detail: {
    totalCpuUsage: '16.0',
    totalMemoryUsage: '240 GiB',
    totalAllocateableMemory: '15.4 GiB',
    totalAllocateableCpu: '4',
    totalNetworkIoTransmit: '0 B/s',
    totalNetworkIoReceive: '0 B/s'
  },
  variableDetail: [
    {
      id: 1,
      variable: 'cluster',
      definition: '-',
      variableDetail: {
        name: 'placeholder',
        description: 'placeholder',
        type: 'Query'
      }
    },
    {
      id: 2,
      variable: 'namespace',
      definition: '-',
      variableDetail: {
        name: 'placeholder',
        description: 'placeholder',
        type: 'Textbox'
      }
    }
  ]
};

const MonitoringGraphDefault: MonitoringGraphModel = {
  detail: DefaultDetailData,
  main: {
    data: [],
    total: 0
  }
};

const MonitoringGraphReducer = (
  state: MonitoringGraphModel = MonitoringGraphDefault,
  action: MonitoringGraphAction
): MonitoringGraphModel => {
  switch (action.type) {
    case MonitoringGraphActionType.GetMainData:
      return { ...state, main: action.data };
    case MonitoringGraphActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const MonitoringGraphCommand = {
  GetMainData: (): TAction<MonitoringGraphAction, void> => {
    return (dispatch: TDispatch<MonitoringGraphAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_MONITORING_GRAPH_DATA,
            total: DUMMY_MONITORING_GRAPH_DATA.length
          },
          type: MonitoringGraphActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<MonitoringGraphAction, void> => {
    return (dispatch: TDispatch<MonitoringGraphAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_DATA,
          type: MonitoringGraphActionType.GetDetailData
        });
      });
    };
  }
};

export {
  MonitoringGraphCommand,
  MonitoringGraphDefault,
  MonitoringGraphReducer
};
