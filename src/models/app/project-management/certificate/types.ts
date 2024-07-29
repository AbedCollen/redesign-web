interface CertificateDataModel {
  algorithm: string
  description: string
  domainNames: string
  expired: string
  fingerprint: string
  id: number
  issuer: string
  name: string
  namespace: string
  scope: string
  serialNumber: string
  validBeginning: string
}

interface CertificateModel {
  detail: CertificateDataModel
  main: {
    data: CertificateDataModel[]
    total: number
  }
}

enum CertificateActionType {
  GetMainData = '⌘➝Certificate➝Main➝GetMainData',
  GetDetailData = '⌘➝Certificate➝Main➝GetDetailData'
}

type CertificateAction =
  | {
    data: {
      data: CertificateDataModel[]
      total: number
    }
    type: CertificateActionType.GetMainData
  }
  | {
    data: CertificateDataModel
    type: CertificateActionType.GetDetailData
  };

export { CertificateActionType };
export type { CertificateDataModel, CertificateModel, CertificateAction };
