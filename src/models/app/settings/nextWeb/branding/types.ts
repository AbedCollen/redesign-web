interface NextWebBrandingDataModel {
  brandingName: string
  platformName: string
  platformLogo: string
  isPlatformLogoActive: boolean
  backgroundColor: string
  backgroundImage: string
  isBackgroundImageActive: boolean
  title: string
  welcomeText: string
  messageOfTheDay: string
  useMOTDService: boolean
  about: string
  css: string
  script: string
}

interface NextWebBrandingModel {
  detail: NextWebBrandingDataModel
  main: {
    data: NextWebBrandingDataModel[]
    pageSource: string
    total: number
  }
}

enum NextWebBrandingActionType {
  GetMainData = '⌘➝NextWebBranding-Main-GetMainData',
  GetDetailData = '⌘➝NextWebBranding-Main-GetDetailData'
}

type NextWebBrandingAction =
  | {
    data: {
      data: NextWebBrandingDataModel[]
      pageSource: string
      total: number
    }
    type: NextWebBrandingActionType.GetMainData
  }
  | {
    data: NextWebBrandingDataModel
    type: NextWebBrandingActionType.GetDetailData
  };

export { NextWebBrandingActionType };
export type {
  NextWebBrandingDataModel,
  NextWebBrandingModel,
  NextWebBrandingAction
};
