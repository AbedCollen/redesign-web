interface ClusterRolesDataModel {
  id: number
  name: string
  created: string
  detail: ClusterRolesDetailModel
}

interface ClusterRolesDetailModel {
  metadataName: string
  metadataCreated: string
  metadataAge: string
  metadataUID: string
  rulesTable: ClusterRolesRulesTableModel[]
}

interface ClusterRolesRulesTableModel {
  resources: string
  nonResourcesUrl: string
  resourcesName: string
  verbs: string
  apiGroups: string
}

interface ClusterRolesModel {
  detail: ClusterRolesDataModel
  main: {
    data: ClusterRolesDataModel[]
    total: number
  }
}

enum ClusterRolesActionType {
  GetMainData = '⌘➝ClusterRoles➝Main➝GetMainData',
  GetDetailData = '⌘➝ClusterRoles➝Detail➝GetDetailData'
}

type ClusterRolesAction =
  | {
    data: {
      data: ClusterRolesDataModel[]
      total: number
    }
    type: ClusterRolesActionType.GetMainData
  }
  | {
    data: ClusterRolesDataModel
    type: ClusterRolesActionType.GetDetailData
  };

export { ClusterRolesActionType };
export type {
  ClusterRolesDataModel,
  ClusterRolesModel,
  ClusterRolesAction,
  ClusterRolesDetailModel,
  ClusterRolesRulesTableModel
};
