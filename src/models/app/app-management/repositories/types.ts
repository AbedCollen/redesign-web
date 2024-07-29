interface RepositoriesDataModel {
  URL: string
  repository: string
  username: string
  status: boolean
}

interface RepositoriesModel {
  main: {
    data: RepositoriesDataModel[]
    total: number
  }
}

enum RepositoriesActionType {
  GetMainData = '⌘➝Repositories➝Main➝GetMainData'
}

interface RepositoriesAction {
  data: {
    data: RepositoriesDataModel[]
    total: number
  }
  type: RepositoriesActionType.GetMainData
}

export { RepositoriesActionType };
export type { RepositoriesAction, RepositoriesDataModel, RepositoriesModel };
