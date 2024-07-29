import type { TAction, TDispatch } from '@models/types';

import { LogsSettingsActionType } from './types';

import type {
  LogsSettingsAction,
  LogsSettingsDataModel,
  LogsSettingsModel
} from './types';

const defaultData = {
  value: 0,
  timeUnit: ''
};

const DUMMY_LOGS_SETTINGS_DATA: LogsSettingsDataModel = {
  value: 21,
  timeUnit: 'Days'
};

const LogsSettingsDefault: LogsSettingsModel = {
  main: {
    logs: defaultData
  }
};

const LogsSettingsReducer = (
  state: LogsSettingsModel = LogsSettingsDefault,
  action: LogsSettingsAction
): LogsSettingsModel => {
  switch (action.type) {
    case LogsSettingsActionType.GetMainData:
      return {
        ...state,
        main: {
          logs: action.data.logs
        }
      };

    default:
      return { ...state };
  }
};

const LogsSettingsCommand = {
  GetMainData: (): TAction<LogsSettingsAction, void> => {
    return (dispatch: TDispatch<LogsSettingsAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            logs: DUMMY_LOGS_SETTINGS_DATA
          },
          type: LogsSettingsActionType.GetMainData
        });
      });
    };
  }
};

export { LogsSettingsCommand, LogsSettingsDefault, LogsSettingsReducer };
