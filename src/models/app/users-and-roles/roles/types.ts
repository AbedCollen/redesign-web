interface RolesDataModel {
  id: number
  name: string
  created: string
  detailTable: RolesDetailDataModel[]
}

interface RolesDetailDataModel {
  resources: string
  nonResourceURL: string
  resourceNames: string
  verbs: string
  apiGroups: string
  namespace: string
  createdDetail: string
  uid: string
}

interface RolesModel {
  detail: RolesDataModel
  main: {
    data: RolesDataModel[]
    total: number
  }
}

enum RolesActionType {
  GetMainData = '⌘➝Roles➝Main➝GetMainData',
  GetDetailData = '⌘➝Roles➝Main➝GetDetailData'
}

  type RolesAction = {
    data: {
      data: RolesDataModel[]
      total: number
    }
    type: RolesActionType.GetMainData
  } | {
    data: RolesDataModel
    type: RolesActionType.GetDetailData
  };

export { RolesActionType };
export type { RolesDataModel, RolesModel, RolesAction, RolesDetailDataModel };
