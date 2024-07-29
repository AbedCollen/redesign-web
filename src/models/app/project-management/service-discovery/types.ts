interface ServiceDiscoveryDataModel {
  affinityTable: ServiceDiscoveryAffinityDataModel[]
  clusterapi: string
  domain: string[]
  id: number
  isActive: boolean
  labelTable: ServiceDiscoveryLabelDataModel[]
  name: string
  portTable: ServiceDiscoveryPortDataModel[]
  publishedTable: ServiceDiscoveryPublishedDataModel[]
  target: string[]
  type: string
}

interface ServiceDiscoveryAffinityDataModel {
  sessionAffinity: string
}

interface ServiceDiscoveryLabelDataModel {
  key: string
  value: string
}

interface ServiceDiscoveryPortDataModel {
  portName: string
  protocol: string
  servicePort: number
  targetPort: number
}

interface ServiceDiscoveryPublishedDataModel {
  ipAddresses: boolean
}

interface ServiceDiscoveryModel {
  detail: ServiceDiscoveryDataModel
  main: {
    data: ServiceDiscoveryDataModel[]
    total: number
  }
}

enum ServiceDiscoveryActionType {
  GetMainData = '⌘➝ServiceDiscovery➝Main➝GetMainData',
  GetDetailData = '⌘➝ServiceDiscovery➝Main➝GetDetailData'
}

type ServiceDiscoveryAction =
  | {
    data: {
      data: ServiceDiscoveryDataModel[]
      total: number
    }
    type: ServiceDiscoveryActionType.GetMainData
  }
  | {
    data: ServiceDiscoveryDataModel
    type: ServiceDiscoveryActionType.GetDetailData
  };

export { ServiceDiscoveryActionType };
export type {
  ServiceDiscoveryDataModel,
  ServiceDiscoveryModel,
  ServiceDiscoveryAction,
  ServiceDiscoveryAffinityDataModel,
  ServiceDiscoveryLabelDataModel,
  ServiceDiscoveryPortDataModel,
  ServiceDiscoveryPublishedDataModel
};
