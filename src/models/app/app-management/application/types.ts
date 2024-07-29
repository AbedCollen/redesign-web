interface ApplicationDataModel {
  id: number
  title: string
  project: string
  sync: boolean
  health: boolean
  repository: string
  namespace: string
  labels: string
  destination: string
  targetRevisionPath: string
  path: string
}

interface ApplicationModel {
  detail: ApplicationDataModel
  main: {
    data: ApplicationDataModel[]
    total: number
  }
}

enum ApplicationActionType {
  GetMainData = '⌘➝Application➝Main➝GetMainData',
  GetDetailData = '⌘➝Application➝Main➝GetDetailData'
}

type ApplicationAction =
  | {
    data: {
      data: ApplicationDataModel[]
      total: number
    }
    type: ApplicationActionType.GetMainData
  }
  | {
    data: ApplicationDataModel
    type: ApplicationActionType.GetDetailData
  };

export { ApplicationActionType };
export type { ApplicationAction, ApplicationDataModel, ApplicationModel };
