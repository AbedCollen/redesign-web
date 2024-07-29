interface NamespacesDataModel {
  isActive: boolean
  project: string
  name: string
  label: string[]
  create:string
}

interface NamespacesModel {
  main: {
    data: NamespacesDataModel[]
    total: number
  }
}

enum NamespacesActionType {
  GetMainData = '⌘➝Namespaces➝Main➝GetMainData'
}

interface NamespacesAction {
  data: {
    data: NamespacesDataModel[]
    total: number
  }
  type: NamespacesActionType.GetMainData
}

export { NamespacesActionType };
export type { NamespacesDataModel, NamespacesModel, NamespacesAction };
