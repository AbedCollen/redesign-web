import type { TAction, TDispatch } from '@models/types';

import { NextWebBrandingActionType } from './types';

import type {
  NextWebBrandingAction,
  NextWebBrandingDataModel,
  NextWebBrandingModel
} from './types';

const DUMMY_NEXTWEB_BRANDING_DATA: NextWebBrandingDataModel[] = [
  {
    brandingName: 'Branding 1',
    platformName: 'Platform Name',
    platformLogo: 'urlPlatformLogo',
    isPlatformLogoActive: false,
    backgroundColor: '#000000',
    backgroundImage: 'urlBackgroundImage',
    isBackgroundImageActive: false,
    title: 'Title',
    welcomeText: 'Welcome text',
    messageOfTheDay: 'Today is a great day!',
    useMOTDService: false,
    about: 'About',
    css: 'body { font-family: Arial, sans-serif; }',
    script: 'console.log("Script executed!");'
  },
  {
    brandingName: 'Branding 2',
    platformName: 'Platform Name',
    platformLogo: 'urlPlatformLogo',
    isPlatformLogoActive: false,
    backgroundColor: '#000000',
    backgroundImage: 'urlBackgroundImage',
    isBackgroundImageActive: false,
    title: 'Title',
    welcomeText: 'Welcome text',
    messageOfTheDay: 'Today is a great day!',
    useMOTDService: false,
    about: 'About',
    css: 'body { font-family: Arial, sans-serif; }',
    script: 'console.log("Script executed!");'
  },
  {
    brandingName: 'Branding 3',
    platformName: 'Platform Name',
    platformLogo: 'urlPlatformLogo',
    isPlatformLogoActive: false,
    backgroundColor: '#000000',
    backgroundImage: 'urlBackgroundImage',
    isBackgroundImageActive: false,
    title: 'Title',
    welcomeText: 'Welcome text',
    messageOfTheDay: 'Today is a great day!',
    useMOTDService: false,
    about: 'About',
    css: 'body { font-family: Arial, sans-serif; }',
    script: 'console.log("Script executed!");'
  }
];

const defaultDetailData = {
  brandingName: '',
  platformName: '',
  platformLogo: '',
  isPlatformLogoActive: false,
  backgroundColor: '',
  backgroundImage: '',
  isBackgroundImageActive: false,
  title: '',
  welcomeText: '',
  messageOfTheDay: '',
  useMOTDService: false,
  about: '',
  css: '',
  script: ''
};

const DUMMY_DETAIL_NEXTWEB_BRANDING_DATA: NextWebBrandingDataModel = {
  brandingName: 'Branding Detail',
  platformName: 'Platform Detail',
  platformLogo: 'urlPlatformLogo',
  isPlatformLogoActive: true,
  backgroundColor: '#000000',
  backgroundImage: 'urlBackgroundImage',
  isBackgroundImageActive: false,
  title: 'Title Detail',
  welcomeText: 'Welcome Detail',
  messageOfTheDay: 'Detail!',
  useMOTDService: true,
  about: 'Detail',
  css: 'body { font-family: Arial, sans-serif; }',
  script: 'console.log("Script executed!");'
};

const NextWebBrandingDefault: NextWebBrandingModel = {
  detail: defaultDetailData,
  main: {
    data: [],
    pageSource: '',
    total: 0
  }
};

const NextWebBrandingReducer = (
  state: NextWebBrandingModel = NextWebBrandingDefault,
  action: NextWebBrandingAction
): NextWebBrandingModel => {
  switch (action.type) {
    case NextWebBrandingActionType.GetMainData:
      return { ...state, main: action.data };
    case NextWebBrandingActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const NextWebBrandingCommand = {
  GetMainData: (): TAction<NextWebBrandingAction, void> => {
    return (dispatch: TDispatch<NextWebBrandingAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_NEXTWEB_BRANDING_DATA,
            pageSource: 'nextWeb',
            total: DUMMY_NEXTWEB_BRANDING_DATA.length
          },
          type: NextWebBrandingActionType.GetMainData
        });
      });
    };
  },

  GetDetailData: (): TAction<NextWebBrandingAction, void> => {
    return (dispatch: TDispatch<NextWebBrandingAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_NEXTWEB_BRANDING_DATA,
          type: NextWebBrandingActionType.GetDetailData
        });
      });
    };
  }
};

export {
  NextWebBrandingCommand,
  NextWebBrandingDefault,
  NextWebBrandingReducer
};
