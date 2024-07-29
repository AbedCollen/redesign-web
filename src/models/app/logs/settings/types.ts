interface LogsSettingsDataModel {
  value: number
  timeUnit: string
}

interface LogsSettingsModel {
  main: {
    logs: LogsSettingsDataModel
  }
}

enum LogsSettingsActionType {
  GetMainData = '⌘➝LogsSettings➝Main➝GetMainData'
}

interface LogsSettingsAction {
  data: {
    logs: LogsSettingsDataModel
  }
  type: LogsSettingsActionType.GetMainData
}

export { LogsSettingsActionType };
export type { LogsSettingsDataModel, LogsSettingsModel, LogsSettingsAction };
