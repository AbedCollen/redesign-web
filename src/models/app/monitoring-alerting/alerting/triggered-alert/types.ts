interface TriggeredAlertDataModel {
  status: string
  alertName: string
  severity: string
  label: string
  action: string
}

interface TriggeredAlertModel {
  main: {
    data: TriggeredAlertDataModel[]
    total: number
  }
}

enum TriggeredAlertActionType {
  GetMainData = '⌘➝TriggeredAlert-Main-GetMainData'
}

interface TriggeredAlertAction {
  data: {
    data: TriggeredAlertDataModel[]
    total: number
  }
  type: TriggeredAlertActionType.GetMainData
}

export { TriggeredAlertActionType };
export type { TriggeredAlertDataModel, TriggeredAlertModel, TriggeredAlertAction };
