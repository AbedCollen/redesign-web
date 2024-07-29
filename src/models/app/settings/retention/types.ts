interface RetentionDataModel {
  value: number
  timeUnit: string
}

interface RetentionModel {
  main: {
    logs: RetentionDataModel
    metrics: RetentionDataModel
    traces: RetentionDataModel
  }
}

enum RetentionActionType {
  GetMainData = '⌘➝Retention-Main-GetMainData'
}

interface RetentionAction {
  data: {
    logsData: RetentionDataModel
    metricsData: RetentionDataModel
    tracesData: RetentionDataModel
  }
  type: RetentionActionType.GetMainData
}

export { RetentionActionType };
export type { RetentionDataModel, RetentionModel, RetentionAction };
