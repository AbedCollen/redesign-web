interface NextFlowBrandingDataModel {
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

interface NextFlowBrandingModel {
  detail: NextFlowBrandingDataModel
  main: {
    data: NextFlowBrandingDataModel[]
    pageSource: string
    total: number
  }
}

enum NextFlowBrandingActionType {
  GetMainData = '⌘➝NextFlowBranding-Main-GetMainData',
  GetDetailData = '⌘➝NextFlowBranding-Main-GetDetailData'
}

type NextFlowBrandingAction =
  | {
    data: {
      data: NextFlowBrandingDataModel[]
      pageSource: string
      total: number
    }
    type: NextFlowBrandingActionType.GetMainData
  }
  | {
    data: NextFlowBrandingDataModel
    type: NextFlowBrandingActionType.GetDetailData
  };

export { NextFlowBrandingActionType };
export type {
  NextFlowBrandingDataModel,
  NextFlowBrandingModel,
  NextFlowBrandingAction
};
