interface NodesDataModel {
  clusterVersion: string
  CPU: number
  isActive: boolean
  name: string
  pods: number
  RAM: number
  roles: string
}

interface NodesModel {
  main: {
    data: NodesDataModel[]
    total: number
  }
}

enum NodesActionType {
  GetMainData = '⌘➝Nodes➝Main➝GetMainData'
}

interface NodesAction {
  data: {
    data: NodesDataModel[]
    total: number
  }
  type: NodesActionType.GetMainData
}

export { NodesActionType };
export type { NodesDataModel, NodesModel, NodesAction };
