import type { SearchingAction, SearchingModel } from './searching/types';
import type { LogsSettingsAction, LogsSettingsModel } from './settings/types';

interface LogsModel {
  searching?: SearchingModel
  settings?: LogsSettingsModel
}

type LogsAction = LogsSettingsAction | SearchingAction;

export type { LogsModel, LogsAction };
