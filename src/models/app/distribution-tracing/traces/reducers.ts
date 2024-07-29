import type { TAction, TDispatch } from '@models/types';

import { TracesActionType } from './types';

import type { TracesAction, TracesDataModel, TracesModel } from './types';

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- BEGIN
const DUMMY_TRACES_DATA: TracesDataModel[] = [
  {
    id: 1,
    date: '2023/07/07 17:37:59',
    idNumber: '52729a9d23c56641241dc77c9c21ca4',
    service: 'bpmnengine.demo',
    operation: 'getInstancesList',
    duration: '0.12 ms',
    method: '-',
    statusCode: '-',
    detail: {
      otelCollectorId: '3e3167f8-c83f-4a75-9348-a9ffd92f0d27',
      telemetrySdkLanguage: 'ccp',
      telemetrySdkName: 'opentelemetry',
      telemetrySdkVersion: '1.4.1'
    }
  },
  {
    id: 2,
    date: '2023/07/07 17:37:59',
    idNumber: '52729a9d23c56641241dc77c9c21ca4',
    service: 'frontend',
    operation: 'HTTP GET /dispatch',
    duration: '1006.79 ms',
    method: 'GET',
    statusCode: '200',
    detail: {
      otelCollectorId: '3e3167f8-c83f-4a75-9348-a9ffd92f0d27',
      telemetrySdkLanguage: 'ccp',
      telemetrySdkName: 'opentelemetry',
      telemetrySdkVersion: '1.4.1'
    }
  },
  {
    id: 3,
    date: '2023/07/07 17:37:59',
    idNumber: '52729a9d23c56641241dc77c9c21ca4',
    service: 'frontend',
    operation: 'HTTP GET /dispatch',
    duration: '1040.10 ms',
    method: 'GET',
    statusCode: '200',
    detail: {
      otelCollectorId: '3e3167f8-c83f-4a75-9348-a9ffd92f0d27',
      telemetrySdkLanguage: 'ccp',
      telemetrySdkName: 'opentelemetry',
      telemetrySdkVersion: '1.4.1'
    }
  },
  {
    id: 4,
    date: '2023/07/07 17:37:59',
    idNumber: '52729a9d23c56641241dc77c9c21ca4',
    service: 'frontend',
    operation: 'HTTP GET /customer',
    duration: '606.81 ms',
    method: '-',
    statusCode: '-',
    detail: {
      otelCollectorId: '3e3167f8-c83f-4a75-9348-a9ffd92f0d27',
      telemetrySdkLanguage: 'ccp',
      telemetrySdkName: 'opentelemetry',
      telemetrySdkVersion: '1.4.1'
    }
  },
  {
    id: 5,
    date: '2023/07/07 17:37:59',
    idNumber: '52729a9d23c56641241dc77c9c21ca4',
    service: 'frontend',
    operation: 'HTTP GET',
    duration: '606.75 ms',
    method: 'GET',
    statusCode: '200',
    detail: {
      otelCollectorId: '3e3167f8-c83f-4a75-9348-a9ffd92f0d27',
      telemetrySdkLanguage: 'ccp',
      telemetrySdkName: 'opentelemetry',
      telemetrySdkVersion: '1.4.1'
    }
  },
  {
    id: 6,
    date: '2023/07/07 17:37:59',
    idNumber: '52729a9d23c56641241dc77c9c21ca4',
    service: 'customer',
    operation: 'HTTP GET /customer',
    duration: '606.51 ms',
    method: 'GET',
    statusCode: '200',
    detail: {
      otelCollectorId: '3e3167f8-c83f-4a75-9348-a9ffd92f0d27',
      telemetrySdkLanguage: 'ccp',
      telemetrySdkName: 'opentelemetry',
      telemetrySdkVersion: '1.4.1'
    }
  },
  {
    id: 7,
    date: '2023/07/07 17:37:59',
    idNumber: '52729a9d23c56641241dc77c9c21ca4',
    service: 'mysql',
    operation: 'SQL SELECT',
    duration: '606.81 ms',
    method: '-',
    statusCode: '-',
    detail: {
      otelCollectorId: '3e3167f8-c83f-4a75-9348-a9ffd92f0d27',
      telemetrySdkLanguage: 'ccp',
      telemetrySdkName: 'opentelemetry',
      telemetrySdkVersion: '1.4.1'
    }
  },
  {
    id: 8,
    date: '2023/07/07 17:37:59',
    idNumber: '52729a9d23c56641241dc77c9c21ca4',
    service: 'frontend',
    operation: '/driver.DriverService/FindNearest',
    duration: '192.10 ms',
    method: '-',
    statusCode: '-',
    detail: {
      otelCollectorId: '3e3167f8-c83f-4a75-9348-a9ffd92f0d27',
      telemetrySdkLanguage: 'ccp',
      telemetrySdkName: 'opentelemetry',
      telemetrySdkVersion: '1.4.1'
    }
  }
];

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- END
const DefaultDetailData = {
  id: 0,
  date: '',
  idNumber: '',
  service: '',
  operation: '',
  duration: '',
  method: '',
  statusCode: '',
  detail: {
    otelCollectorId: '',
    telemetrySdkLanguage: '',
    telemetrySdkName: '',
    telemetrySdkVersion: ''
  }
};

const DUMMY_DETAIL_DATA = {
  id: 1,
  date: '2023/07/07 17:37:59',
  idNumber: '52729a9d23c56641241dc77c9c21ca4',
  service: 'bpmnengine.demo',
  operation: 'getInstancesList',
  duration: '0.12 ms',
  method: '-',
  statusCode: '-',
  detail: {
    otelCollectorId: '3e3167f8-c83f-4a75-9348-a9ffd92f0d27',
    telemetrySdkLanguage: 'ccp',
    telemetrySdkName: 'opentelemetry',
    telemetrySdkVersion: '1.4.1'
  }
};

const TracesDefault: TracesModel = {
  detail: DefaultDetailData,
  main: {
    data: [],
    total: 0
  }
};

const TracesReducer = (
  state: TracesModel = TracesDefault,
  action: TracesAction
): TracesModel => {
  switch (action.type) {
    case TracesActionType.GetMainData:
      return { ...state, main: action.data };
    case TracesActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const TracesCommand = {
  GetMainData: (): TAction<TracesAction, void> => {
    return (dispatch: TDispatch<TracesAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_TRACES_DATA,
            total: DUMMY_TRACES_DATA.length
          },
          type: TracesActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<TracesAction, void> => {
    return (dispatch: TDispatch<TracesAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_DATA,
          type: TracesActionType.GetDetailData
        });
      });
    };
  }
};

export { TracesCommand, TracesDefault, TracesReducer };
