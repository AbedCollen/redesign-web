interface RegistryDataModel {
  name: string
  namespace: string
  registries: string
  username: string
}

interface RegistryModel {
  main: {
    data: RegistryDataModel[]
    total: number
  }
}

enum RegistryActionType {
  GetMainData = '⌘➝Registry➝Main➝GetMainData'
}

interface RegistryAction {
  data: {
    data: RegistryDataModel[]
    total: number
  }
  type: RegistryActionType.GetMainData
}

export { RegistryActionType };
export type { RegistryDataModel, RegistryModel, RegistryAction };
