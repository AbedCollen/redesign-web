import type { TAction, TDispatch } from '@models/types';

import { HpaActionType } from './types';

import type { HpaAction, HpaDataModel, HpaModel } from './types';

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- BEGIN
const DUMMY_HPA_DATA: HpaDataModel[] = [
  {
    id: 1,
    status: true,
    name: 'demo:dc-development-taskmanager-1-0',
    namespace: 'Placeholder',
    targetWorkload: 'deployment:demo:dc-development-taskmanager-1-0',
    currentReplicas: 1,
    lastScale: 'Placeholder',
    minReplicas: 1,
    maxReplicas: 8,
    desiredReplicas: 1,
    created: '11/11/2022',
    currentStatus: 'Average Value: 1m Average Utilization: 10',
    metricType: 'Resource',
    metricName: 'cpu',
    targetType: 'Utilization',
    quantity: 90,
    statusTable: [
      {
        type: 'AbleToScale',
        statusContent: 'Placeholder',
        lastUpdate: '07/20/2023',
        reason: 'ReadyForNewScale',
        message: 'recommended size matches current size'
      },
      {
        type: 'ScalingActive',
        statusContent: 'Placeholder',
        lastUpdate: '08/02/2023',
        reason: 'ValidMetricFound',
        message:
          'the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)'
      },
      {
        type: 'Scaling Limited',
        statusContent: 'Placeholder',
        lastUpdate: '07/20/2023',
        reason: 'DesiredWithinRange',
        message:
          'the desired count is within the acceptable range'
      }
    ],
    description: 'Placeholder'
  },
  {
    id: 2,
    status: false,
    name: 'demo:dc-development-taskmanager-1-0',
    namespace: 'Placeholder',
    targetWorkload: 'deployment:demo:dc-development-taskmanager-1-0',
    currentReplicas: 1,
    lastScale: 'Placeholder',
    minReplicas: 1,
    maxReplicas: 10,
    desiredReplicas: 1,
    created: '10/11/2022',
    currentStatus: 'Average Value: 1m Average Utilization: 10',
    metricType: 'Resource',
    metricName: 'cpu',
    targetType: 'Utilization',
    quantity: 90,
    statusTable: [
      {
        type: 'AbleToScale',
        statusContent: 'Placeholder',
        lastUpdate: '07/20/2023',
        reason: 'ReadyForNewScale',
        message: 'recommended size matches current size'
      },
      {
        type: 'ScalingActive',
        statusContent: 'Placeholder',
        lastUpdate: '08/02/2023',
        reason: 'ValidMetricFound',
        message:
          'the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)'
      }
    ],
    description: 'Placeholder'
  }
];

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- END
const defaultDetailData = {
  id: 0,
  status: false,
  name: '',
  namespace: '',
  targetWorkload: '',
  currentReplicas: 0,
  lastScale: '',
  minReplicas: 0,
  maxReplicas: 0,
  desiredReplicas: 0,
  created: '',
  currentStatus: '',
  metricType: '',
  metricName: '',
  targetType: '',
  quantity: 90,
  statusTable: [
    {
      type: '',
      statusContent: '',
      lastUpdate: '',
      reason: '',
      message: ''
    }
  ],
  description: ''
};

const DUMMY_DETAIL_DATA = {
  id: 1,
  status: true,
  name: 'demo:dc-development-taskmanager-1-0',
  namespace: 'Placeholder',
  targetWorkload: 'deployment:demo:dc-development-taskmanager-1-0',
  currentReplicas: 1,
  lastScale: 'Placeholder',
  minReplicas: 1,
  maxReplicas: 8,
  desiredReplicas: 1,
  created: '11/11/2022',
  currentStatus: 'Average Value: 1m Average Utilization: 10',
  metricType: 'Resource',
  metricName: 'cpu',
  targetType: 'Utilization',
  quantity: 90,
  statusTable: [
    {
      type: 'AbleToScale',
      statusContent: 'Placeholder',
      lastUpdate: '07/20/2023',
      reason: 'ReadyForNewScale',
      message: 'recommended size matches current size'
    },
    {
      type: 'ScalingActive',
      statusContent: 'Placeholder',
      lastUpdate: '08/02/2023',
      reason: 'ValidMetricFound',
      message:
        'the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)'
    },
    {
      type: 'Scaling Limited',
      statusContent: 'Placeholder',
      lastUpdate: '07/20/2023',
      reason: 'DesiredWithinRange',
      message:
        'the desired count is within the acceptable range'
    }
  ],
  description: 'Placeholder'
};

const HpaDefault: HpaModel = {
  detail: defaultDetailData,
  main: {
    data: [],
    total: 0
  }
};

const HpaReducer = (
  state: HpaModel = HpaDefault,
  action: HpaAction
): HpaModel => {
  switch (action.type) {
    case HpaActionType.GetMainData:
      return { ...state, main: action.data };
    case HpaActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const HpaCommand = {
  GetMainData: (): TAction<HpaAction, void> => {
    return (dispatch: TDispatch<HpaAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_HPA_DATA,
            total: DUMMY_HPA_DATA.length
          },
          type: HpaActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<HpaAction, void> => {
    return (dispatch: TDispatch<HpaAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_DATA,
          type: HpaActionType.GetDetailData
        });
      });
    };
  }
};

export { HpaCommand, HpaDefault, HpaReducer };
