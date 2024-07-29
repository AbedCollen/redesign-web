import { combineReducers } from 'redux';

import {
  SearchingCommand,
  SearchingDefault,
  SearchingReducer
} from './searching/reducers';
import {
  LogsSettingsCommand,
  LogsSettingsDefault,
  LogsSettingsReducer
} from './settings/reducers';

import type { LogsModel } from './types';

const logsReducer = combineReducers({
  searching: SearchingReducer,
  settings: LogsSettingsReducer
});

const logsDefault: LogsModel = {
  searching: SearchingDefault,
  settings: LogsSettingsDefault
};

const logsCommand = {
  searching: SearchingCommand,
  settings: LogsSettingsCommand
};

export { logsReducer, logsDefault, logsCommand };
