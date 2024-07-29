interface NextIDBrandingDataModel {
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

interface NextIDBrandingModel {
  detail: NextIDBrandingDataModel
  main: {
    data: NextIDBrandingDataModel[]
    pageSource: string
    total: number
  }
}

enum NextIDBrandingActionType {
  GetMainData = '⌘➝NextIDBranding-Main-GetMainData',
  GetDetailData = '⌘➝NextIDBranding-Main-GetDetailData'
}

type NextIDBrandingAction =
  | {
    data: {
      data: NextIDBrandingDataModel[]
      pageSource: string
      total: number
    }
    type: NextIDBrandingActionType.GetMainData
  }
  | {
    data: NextIDBrandingDataModel
    type: NextIDBrandingActionType.GetDetailData
  };

export { NextIDBrandingActionType };
export type {
  NextIDBrandingDataModel,
  NextIDBrandingModel,
  NextIDBrandingAction
};
