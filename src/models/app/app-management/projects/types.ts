interface ProjectsDataModel {
  id: number
  name: string
  description: string
}

interface ProjectsModel {
  main: {
    data: ProjectsDataModel[]
    total: number
  }
}

enum ProjectsActionType {
  GetMainData = '⌘➝Projects➝Main➝GetMainData'
}

interface ProjectsAction {
  data: {
    data: ProjectsDataModel[]
    total: number
  }
  type: ProjectsActionType.GetMainData
}

export { ProjectsActionType };
export type { ProjectsAction, ProjectsDataModel, ProjectsModel };
