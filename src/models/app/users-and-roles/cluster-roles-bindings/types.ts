interface ClusterRolesBindingsDataModel {
  id: number
  name: string
  created: string
  detail: ClusterRolesBindingsDetailModel
}

interface ClusterRolesBindingsDetailModel {
  metadataName: string
  metadataCreated: string
  metadataAge: string
  metadataUID: string
  resourceInformation: string
  rulesTable: ClusterRolesBindingsRulesTableModel[]
  resourceInformationTable: ClusterRolesBindingsResourceInformationTableModel[]
}

interface ClusterRolesBindingsResourceInformationTableModel {
  resources: string
  nonResourcesUrl: string
  resourcesName: string
  verbs: string
  apiGroups: string
}

interface ClusterRolesBindingsRulesTableModel {
  resources: string
  namespaces: string
  kind: string
  apiGroups: string
}

interface ClusterRolesBindingsModel {
  detail: ClusterRolesBindingsDataModel
  main: {
    data: ClusterRolesBindingsDataModel[]
    total: number
  }
}

enum ClusterRolesBindingsActionType {
  GetMainData = '⌘➝ClusterRolesBindings➝Main➝GetMainData',
  GetDetailData = '⌘➝ClusterRolesBindings➝Detail➝GetDetailData'
}

type ClusterRolesBindingsAction =
  | {
    data: {
      data: ClusterRolesBindingsDataModel[]
      total: number
    }
    type: ClusterRolesBindingsActionType.GetMainData
  }
  | {
    data: ClusterRolesBindingsDataModel
    type: ClusterRolesBindingsActionType.GetDetailData
  };

export { ClusterRolesBindingsActionType };
export type {
  ClusterRolesBindingsDataModel,
  ClusterRolesBindingsModel,
  ClusterRolesBindingsAction,
  ClusterRolesBindingsDetailModel,
  ClusterRolesBindingsRulesTableModel,
  ClusterRolesBindingsResourceInformationTableModel
};
