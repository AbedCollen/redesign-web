interface MonitoringGraphDataModel {
  id: number
  name: string
  description: string
  tags: string[]
  createdAt: string
  lastUpdateTime: string
  detail: MonitoringGraphDetailModel
  variableDetail: MonitoringGraphVariableModel[]
}

interface MonitoringGraphVariableModel {
  id: number
  variable: string
  definition: string
  variableDetail: VariableModel
}

interface VariableModel {
  name: string
  description: string
  type: string
}

interface MonitoringGraphDetailModel {
  totalCpuUsage: string
  totalMemoryUsage: string
  totalAllocateableMemory: string
  totalAllocateableCpu: string
  totalNetworkIoTransmit: string
  totalNetworkIoReceive: string
}

interface MonitoringGraphModel {
  detail: MonitoringGraphDataModel
  main: {
    data: MonitoringGraphDataModel[]
    total: number
  }
}

enum MonitoringGraphActionType {
  GetMainData = '⌘➝MonitoringGraph➝Main➝GetMainData',
  GetDetailData = '⌘➝MonitoringGraph➝Detail➝GetDetailData'
}

type MonitoringGraphAction =
  | {
    data: {
      data: MonitoringGraphDataModel[]
      total: number
    }
    type: MonitoringGraphActionType.GetMainData
  }
  | {
    data: MonitoringGraphDataModel
    type: MonitoringGraphActionType.GetDetailData
  };

export { MonitoringGraphActionType };
export type {
  MonitoringGraphDataModel,
  MonitoringGraphModel,
  MonitoringGraphAction,
  MonitoringGraphDetailModel,
  MonitoringGraphVariableModel
};
