import type { TAction, TDispatch } from '@models/types';

import { RetentionActionType } from './types';

import type {
  RetentionAction,
  RetentionDataModel,
  RetentionModel
} from './types';

const defaultData = {
  value: 0,
  timeUnit: ''
};

const DUMMY_METRICS_DATA: RetentionDataModel = {
  value: 7,
  timeUnit: 'Hours'
};

const DUMMY_LOGS_DATA: RetentionDataModel = {
  value: 21,
  timeUnit: 'Days'
};

const DUMMY_TRACES_DATA: RetentionDataModel = {
  value: 3,
  timeUnit: 'Months'
};

const RetentionDefault: RetentionModel = {
  main: {
    logs: defaultData,
    metrics: defaultData,
    traces: defaultData
  }
};

const RetentionReducer = (
  state: RetentionModel = RetentionDefault,
  action: RetentionAction
): RetentionModel => {
  switch (action.type) {
    case RetentionActionType.GetMainData:
      return {
        ...state,
        main: {
          logs: action.data.logsData,
          metrics: action.data.metricsData,
          traces: action.data.tracesData
        }
      };

    default:
      return { ...state };
  }
};

const RetentionCommand = {
  GetMainData: (): TAction<RetentionAction, void> => {
    return (dispatch: TDispatch<RetentionAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            logsData: DUMMY_LOGS_DATA,
            metricsData: DUMMY_METRICS_DATA,
            tracesData: DUMMY_TRACES_DATA
          },
          type: RetentionActionType.GetMainData
        });
      });
    };
  }
};

export { RetentionCommand, RetentionDefault, RetentionReducer };
