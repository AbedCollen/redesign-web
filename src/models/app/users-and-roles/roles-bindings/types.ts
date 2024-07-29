interface RolesBindingsDataModel {
  id: number
  name: string
  created: string
  detailTable: RolesBindingsDetailDataModel[]
}

interface RolesBindingsDetailDataModel {
  resources: string
  nonResourceURL: string
  resourceNames: string
  verbs: string
  apiGroups: string
  metadataNamespace: string
  createdDetail: string
  uid: string
  rulesNamespace: string
  kind: string
}

interface RolesBindingsModel {
  detail: RolesBindingsDataModel
  main: {
    data: RolesBindingsDataModel[]
    total: number
  }
}

enum RolesBindingsActionType {
  GetMainData = '⌘➝RolesBindings➝Main➝GetMainData',
  GetDetailData = '⌘➝RolesBindings➝Main➝GetDetailData'
}

type RolesBindingsAction =
  | {
    data: {
      data: RolesBindingsDataModel[]
      total: number
    }
    type: RolesBindingsActionType.GetMainData
  }
  | {
    data: RolesBindingsDataModel
    type: RolesBindingsActionType.GetDetailData
  };

export { RolesBindingsActionType };
export type {
  RolesBindingsDataModel,
  RolesBindingsModel,
  RolesBindingsAction,
  RolesBindingsDetailDataModel
};
