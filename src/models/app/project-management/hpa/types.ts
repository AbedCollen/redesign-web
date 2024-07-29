interface HpaDataModel {
  id: number
  status: boolean
  name: string
  namespace: string
  targetWorkload: string
  currentReplicas: number
  lastScale: string
  minReplicas: number
  maxReplicas: number
  desiredReplicas: number
  created: string
  currentStatus: string
  metricType: string
  metricName: string
  targetType: string
  quantity: number
  statusTable: HpaStatusTableDataModel[]
  description: string
}

interface HpaStatusTableDataModel {
  type: string
  statusContent: string
  lastUpdate: string
  reason: string
  message: string
}

interface HpaModel {
  detail: HpaDataModel
  main: {
    data: HpaDataModel[]
    total: number
  }
}

enum HpaActionType {
  GetMainData = '⌘➝Hpa➝Main➝GetMainData',
  GetDetailData = '⌘➝Hpa➝Main➝GetDetailData'
}

type HpaAction =
  | {
    data: {
      data: HpaDataModel[]
      total: number
    }
    type: HpaActionType.GetMainData
  }
  | {
    data: HpaDataModel
    type: HpaActionType.GetDetailData
  };

export { HpaActionType };
export type { HpaDataModel, HpaModel, HpaAction, HpaStatusTableDataModel };
