import type { TAction, TDispatch } from '@models/types';

import { ServiceActionType } from './types';

import type {
  ServiceAction,
  ServiceDataModel,
  ServiceModel
} from './types';

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- BEGIN
const DUMMY_SERVICE_DATA: ServiceDataModel[] = [
  {
    id: 1,
    application: 'Customer',
    p99latency: '600.67',
    errorRate: '0.00',
    operationsPerSecond: '0.00',
    detail: [{
      name: 'HTTP GET /dispatch',
      p50: '600.67',
      p95: '0.00',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    },
    {
      name: 'HTTP GET:/customer',
      p50: '602.20',
      p95: '0.00',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    },
    {
      name: 'HTTP GET',
      p50: '79.46',
      p95: '0.00',
      p99: '0.01',
      numberOfCell: '0.01',
      errorRate: '0.01'
    },
    {
      name: '/driver.DriverService/FindNearest',
      p50: '35.22',
      p95: '18.52',
      p99: '0.02',
      numberOfCell: '0.02',
      errorRate: '0.02'
    },
    {
      name: 'HTTP GET:/route',
      p50: '998.59',
      p95: '0.24',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    }]
  },
  {
    id: 2,
    application: 'Mysql',
    p99latency: '602.20',
    errorRate: '0.00',
    operationsPerSecond: '0.00',
    detail: [{
      name: 'HTTP GET/ dispatch',
      p50: '600.67',
      p95: '0.00',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    },
    {
      name: 'HTTP GET:/customer',
      p50: '602.20',
      p95: '0.00',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    },
    {
      name: 'HTTP GET',
      p50: '79.46',
      p95: '0.00',
      p99: '0.01',
      numberOfCell: '0.01',
      errorRate: '0.01'
    },
    {
      name: '/driver.DriverService/FindNearest',
      p50: '35.22',
      p95: '18.52',
      p99: '0.02',
      numberOfCell: '0.02',
      errorRate: '0.02'
    },
    {
      name: 'HTTP GET:/route',
      p50: '998.59',
      p95: '0.24',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    }]
  },
  {
    id: 3,
    application: 'Route',
    p99latency: '79.46',
    errorRate: '0.00',
    operationsPerSecond: '0.01',
    detail: [{
      name: 'HTTP GET/ dispatch',
      p50: '600.67',
      p95: '0.00',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    },
    {
      name: 'HTTP GET:/customer',
      p50: '602.20',
      p95: '0.00',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    },
    {
      name: 'HTTP GET',
      p50: '79.46',
      p95: '0.00',
      p99: '0.01',
      numberOfCell: '0.01',
      errorRate: '0.01'
    },
    {
      name: '/driver.DriverService/FindNearest',
      p50: '35.22',
      p95: '18.52',
      p99: '0.02',
      numberOfCell: '0.02',
      errorRate: '0.02'
    },
    {
      name: 'HTTP GET:/route',
      p50: '998.59',
      p95: '0.24',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    }]
  },
  {
    id: 4,
    application: 'Redis',
    p99latency: '35.22',
    errorRate: '18.52',
    operationsPerSecond: '0.02',
    detail: [{
      name: 'HTTP GET/ dispatch',
      p50: '600.67',
      p95: '0.00',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    },
    {
      name: 'HTTP GET:/customer',
      p50: '602.20',
      p95: '0.00',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    },
    {
      name: 'HTTP GET',
      p50: '79.46',
      p95: '0.00',
      p99: '0.01',
      numberOfCell: '0.01',
      errorRate: '0.01'
    },
    {
      name: '/driver.DriverService/FindNearest',
      p50: '35.22',
      p95: '18.52',
      p99: '0.02',
      numberOfCell: '0.02',
      errorRate: '0.02'
    },
    {
      name: 'HTTP GET:/route',
      p50: '998.59',
      p95: '0.24',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    }]
  },
  {
    id: 5,
    application: 'Frontend',
    p99latency: '998.59',
    errorRate: '0.24',
    operationsPerSecond: '0.00',
    detail: [{
      name: 'HTTP GET/ dispatch',
      p50: '600.67',
      p95: '0.00',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    },
    {
      name: 'HTTP GET:/customer',
      p50: '602.20',
      p95: '0.00',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    },
    {
      name: 'HTTP GET',
      p50: '79.46',
      p95: '0.00',
      p99: '0.01',
      numberOfCell: '0.01',
      errorRate: '0.01'
    },
    {
      name: '/driver.DriverService/FindNearest',
      p50: '35.22',
      p95: '18.52',
      p99: '0.02',
      numberOfCell: '0.02',
      errorRate: '0.02'
    },
    {
      name: 'HTTP GET:/route',
      p50: '998.59',
      p95: '0.24',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    }]
  },
  {
    id: 6,
    application: 'Driver',
    p99latency: '240.19',
    errorRate: '0.00',
    operationsPerSecond: '0.00',
    detail: [{
      name: 'HTTP GET/ dispatch',
      p50: '600.67',
      p95: '0.00',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    },
    {
      name: 'HTTP GET:/customer',
      p50: '602.20',
      p95: '0.00',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    },
    {
      name: 'HTTP GET',
      p50: '79.46',
      p95: '0.00',
      p99: '0.01',
      numberOfCell: '0.01',
      errorRate: '0.01'
    },
    {
      name: '/driver.DriverService/FindNearest',
      p50: '35.22',
      p95: '18.52',
      p99: '0.02',
      numberOfCell: '0.02',
      errorRate: '0.02'
    },
    {
      name: 'HTTP GET:/route',
      p50: '998.59',
      p95: '0.24',
      p99: '0.00',
      numberOfCell: '0.00',
      errorRate: '0.00'
    }]
  }
];

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- END
const DefaultDetailData = {
  id: 0,
  application: '',
  p99latency: '',
  errorRate: '',
  operationsPerSecond: '',
  detail: [{
    name: '',
    p50: '',
    p95: '',
    p99: '',
    numberOfCell: '',
    errorRate: ''
  },
  {
    name: '',
    p50: '',
    p95: '',
    p99: '',
    numberOfCell: '',
    errorRate: ''
  },
  {
    name: '',
    p50: '',
    p95: '',
    p99: '',
    numberOfCell: '',
    errorRate: ''
  },
  {
    name: '',
    p50: '',
    p95: '',
    p99: '',
    numberOfCell: '',
    errorRate: ''
  },
  {
    name: '',
    p50: '',
    p95: '',
    p99: '',
    numberOfCell: '',
    errorRate: ''
  }]
};

const DUMMY_DETAIL_DATA = {
  id: 1,
  application: 'Customer',
  p99latency: '600.67',
  errorRate: '0.00',
  operationsPerSecond: '0.00',
  detail: [{
    name: 'HTTP GET /dispatch',
    p50: '600.67',
    p95: '0.00',
    p99: '0.00',
    numberOfCell: '0.00',
    errorRate: '0.00'
  },
  {
    name: 'HTTP GET:/customer',
    p50: '602.20',
    p95: '0.00',
    p99: '0.00',
    numberOfCell: '0.00',
    errorRate: '0.00'
  },
  {
    name: 'HTTP GET',
    p50: '79.46',
    p95: '0.00',
    p99: '0.01',
    numberOfCell: '0.01',
    errorRate: '0.01'
  },
  {
    name: '/driver.DriverService/FindNearest',
    p50: '35.22',
    p95: '18.52',
    p99: '0.02',
    numberOfCell: '0.02',
    errorRate: '0.02'
  },
  {
    name: 'HTTP GET:/route',
    p50: '998.59',
    p95: '0.24',
    p99: '0.00',
    numberOfCell: '0.00',
    errorRate: '0.00'
  }]
};

const ServiceDefault: ServiceModel = {
  detail: DefaultDetailData,
  main: {
    data: [],
    total: 0
  }
};

const ServiceReducer = (
  state: ServiceModel = ServiceDefault,
  action: ServiceAction
): ServiceModel => {
  switch (action.type) {
    case ServiceActionType.GetMainData:
      return { ...state, main: action.data };
    case ServiceActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const ServiceCommand = {
  GetMainData: (): TAction<ServiceAction, void> => {
    return (dispatch: TDispatch<ServiceAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_SERVICE_DATA,
            total: DUMMY_SERVICE_DATA.length
          },
          type: ServiceActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<ServiceAction, void> => {
    return (dispatch: TDispatch<ServiceAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_DATA,
          type: ServiceActionType.GetDetailData
        });
      });
    };
  }
};

export { ServiceCommand, ServiceDefault, ServiceReducer };
