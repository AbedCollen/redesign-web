interface SecretDataModel {
  id: number
  name: string
  namespace: string
  key: string
  created: string
  description: string
  scope: string
}

interface SecretModel {
  detail: SecretDataModel
  main: {
    data: SecretDataModel[]
    total: number
  }
}

enum SecretActionType {
  GetMainData = '⌘➝Secret➝Main➝GetMainData',
  GetDetailData = '⌘➝Deployment➝Main➝GetDetailData'
}

type SecretAction =
  | {
    data: {
      data: SecretDataModel[]
      total: number
    }
    type: SecretActionType.GetMainData
  }
  | {
    data: SecretDataModel
    type: SecretActionType.GetDetailData
  };

export { SecretActionType };
export type { SecretDataModel, SecretModel, SecretAction };
