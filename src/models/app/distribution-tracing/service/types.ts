interface ServiceDataModel {
  id: number
  application: string
  p99latency: string
  errorRate: string
  operationsPerSecond: string
  detail: ServiceDetailModel[]
}

interface ServiceDetailModel {
  name: string
  p50: string
  p95: string
  p99: string
  numberOfCell: string
  errorRate: string
}

interface ServiceModel {
  detail: ServiceDataModel
  main: {
    data: ServiceDataModel[]
    total: number
  }
}

enum ServiceActionType {
  GetMainData = '⌘➝Service➝Main➝GetMainData',
  GetDetailData = '⌘➝Service➝Detail➝GetDetailData'
}

type ServiceAction = {
  data: {
    data: ServiceDataModel[]
    total: number
  }
  type: ServiceActionType.GetMainData
} | {
  data: ServiceDataModel
  type: ServiceActionType.GetDetailData
};

export { ServiceActionType };
export type { ServiceDataModel, ServiceModel, ServiceAction, ServiceDetailModel };
