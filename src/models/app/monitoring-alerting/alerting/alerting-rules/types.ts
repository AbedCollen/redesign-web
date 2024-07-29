interface AlertingRulesDataModel {
  status: string
  alertName: string
  severity: string
  label: string
  action: string
}

interface AlertingRulesModel {
  main: {
    data: AlertingRulesDataModel[]
    total: number
  }
}

enum AlertingRulesActionType {
  GetMainData = '⌘➝AlertingRules-Main-GetMainData'
}

interface AlertingRulesAction {
  data: {
    data: AlertingRulesDataModel[]
    total: number
  }
  type: AlertingRulesActionType.GetMainData
}

export { AlertingRulesActionType };
export type { AlertingRulesDataModel, AlertingRulesModel, AlertingRulesAction };
