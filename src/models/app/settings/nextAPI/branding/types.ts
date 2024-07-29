interface NextAPIBrandingDataModel {
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

interface NextAPIBrandingModel {
  detail: NextAPIBrandingDataModel
  main: {
    data: NextAPIBrandingDataModel[]
    pageSource: string
    total: number
  }
}

enum NextAPIBrandingActionType {
  GetMainData = '⌘➝NextAPIBranding-Main-GetMainData',
  GetDetailData = '⌘➝NextAPIBranding-Main-GetDetailData'
}

type NextAPIBrandingAction =
  | {
    data: {
      data: NextAPIBrandingDataModel[]
      pageSource: string
      total: number
    }
    type: NextAPIBrandingActionType.GetMainData
  }
  | {
    data: NextAPIBrandingDataModel
    type: NextAPIBrandingActionType.GetDetailData
  };

export { NextAPIBrandingActionType };
export type {
  NextAPIBrandingDataModel,
  NextAPIBrandingModel,
  NextAPIBrandingAction
};
