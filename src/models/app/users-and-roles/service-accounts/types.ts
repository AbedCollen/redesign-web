interface ServiceAccountsDataModel {
  id: number
  name: string
  labels: string[]
  created: string
  detail: ServiceAccountDetailModel
}

interface ServiceAccountDetailModel {
  metadata: MetadataModel
  secrets: SecretModel[]
}

interface MetadataModel {
  name: string
  namespace: string
  created: string
  age: string
  uid: string
  labels: string[]
  annotation: string[]
}

interface SecretModel {
  id: number
  name: string
  labels: string[]
  type: string
  created: string
  detail: {
    metadataSecret: MetadataModel
    dataSecret: DataModel
  }
}

interface DataModel {
  crt: string
  namespace: string
  token: string
}

interface ServiceAccountsModel {
  detail: ServiceAccountsDataModel
  main: {
    data: ServiceAccountsDataModel[]
    total: number
  }
}

enum ServiceAccountsActionType {
  GetMainData = '⌘➝ServiceAccounts➝Main➝GetMainData',
  GetDetailData = '⌘➝ServiceAccounts➝Detail➝GetDetailData'
}

type ServiceAccountsAction =
  | {
    data: {
      data: ServiceAccountsDataModel[]
      total: number
    }
    type: ServiceAccountsActionType.GetMainData
  }
  | {
    data: ServiceAccountsDataModel
    type: ServiceAccountsActionType.GetDetailData
  };

export { ServiceAccountsActionType };
export type {
  ServiceAccountsDataModel,
  ServiceAccountsModel,
  ServiceAccountsAction,
  ServiceAccountDetailModel,
  MetadataModel,
  SecretModel,
  DataModel
};
