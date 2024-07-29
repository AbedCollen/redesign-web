interface CertificatesDataModel {
  server: string
  type: string[]
  info: string
}

interface CertificatesModel {
  main: {
    data: CertificatesDataModel[]
    total: number
  }
}

enum CertificatesActionType {
  GetMainData = '⌘➝Certificates➝Main➝GetMainData'
}

interface CertificatesAction {
  data: {
    data: CertificatesDataModel[]
    total: number
  }
  type: CertificatesActionType.GetMainData
}

export { CertificatesActionType };
export type { CertificatesAction, CertificatesDataModel, CertificatesModel };
