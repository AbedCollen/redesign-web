interface AlertingChannelDataModel {
  name: string
  type: string
  action: string
}

interface AlertingChannelModel {
  main: {
    data: AlertingChannelDataModel[]
    total: number
  }
}

enum AlertingChannelActionType {
  GetMainData = '⌘➝AlertingChannel-Main-GetMainData'
}

interface AlertingChannelAction {
  data: {
    data: AlertingChannelDataModel[]
    total: number
  }
  type: AlertingChannelActionType.GetMainData
}

export { AlertingChannelActionType };
export type { AlertingChannelDataModel, AlertingChannelModel, AlertingChannelAction };
