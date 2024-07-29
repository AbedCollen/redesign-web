interface ProjectsDataModel {
  name: string
  isActive: boolean
  created: string
  label: string[]
  annotation: string[]
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
export type { ProjectsDataModel, ProjectsModel, ProjectsAction };
