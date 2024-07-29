interface ConfigmapDataModel {
  id: number
  createdDate: string
  name: string
  namespace: string
  keys: string
}

interface ConfigmapModel {
  detail: ConfigmapDataModel
  main: {
    data: ConfigmapDataModel[]
    total: number
  }
}

enum ConfigmapActionType {
  GetMainData = '⌘➝Configmap➝Main➝GetMainData',
  GetDetailData = '⌘➝Configmap➝Main➝GetDetailData'
}

type ConfigmapAction = {
  data: {
    data: ConfigmapDataModel[]
    total: number
  }
  type: ConfigmapActionType.GetMainData
} | {
  data: ConfigmapDataModel
  type: ConfigmapActionType.GetDetailData
};

export { ConfigmapActionType };
export type { ConfigmapDataModel, ConfigmapModel, ConfigmapAction };
