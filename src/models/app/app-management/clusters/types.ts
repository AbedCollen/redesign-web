interface ClustersDataModel {
  id: number
  name: string
  status: boolean
  URL: string
  version: string
  credentialsType: string
  default: string
  statusState: boolean
  versionState: string
  details: string
  modified: string
  resync: string
  apiCount: number
  resourceCount: number
  applicationCount: number
}

interface ClustersModel {
  detail: ClustersDataModel
  main: {
    data: ClustersDataModel[]
    total: number
  }
}

enum ClustersActionType {
  GetMainData = '⌘➝Clusters➝Main➝GetMainData',
  GetDetailData = '⌘➝Clusters➝Main➝GetDetailData'
}

type ClustersAction =
  | {
    data: {
      data: ClustersDataModel[]
      total: number
    }
    type: ClustersActionType.GetMainData
  }
  | {
    data: ClustersDataModel
    type: ClustersActionType.GetDetailData
  };

export { ClustersActionType };
export type { ClustersAction, ClustersDataModel, ClustersModel };
