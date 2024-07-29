interface IngressDataModel {
  id: number
  status: boolean
  name: string
  namespace: string
  domain: string[]
  target: string[]
  hostTable: IngressHostDataModel[]
  labelTable: IngressLabelDataModel[]
  annotationTable: IngressAnnotationDataModel[]
}

interface IngressHostDataModel {
  path: string
  target: string
  port: number
}

interface IngressLabelDataModel {
  key: string
  value: string
}

interface IngressAnnotationDataModel {
  key: string
  value: string
}

interface IngressModel {
  detail: IngressDataModel
  main: {
    data: IngressDataModel[]
    total: number
  }
}

enum IngressActionType {
  GetMainData = '⌘➝Ingress➝Main➝GetMainData',
  GetDetailData = '⌘➝Ingress➝Main➝GetDetailData'
}

type IngressAction = {
  data: {
    data: IngressDataModel[]
    total: number
  }
  type: IngressActionType.GetMainData
} | {
  data: IngressDataModel
  type: IngressActionType.GetDetailData
};

export { IngressActionType };
export type { IngressDataModel, IngressModel, IngressAction, IngressHostDataModel, IngressLabelDataModel, IngressAnnotationDataModel };
