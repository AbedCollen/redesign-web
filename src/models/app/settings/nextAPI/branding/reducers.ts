import type { TAction, TDispatch } from '@models/types';

import { NextAPIBrandingActionType } from './types';

import type {
  NextAPIBrandingAction,
  NextAPIBrandingDataModel,
  NextAPIBrandingModel
} from './types';

const DUMMY_NEXTAPI_BRANDING_DATA: NextAPIBrandingDataModel[] = [
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

const DUMMY_DETAIL_NEXTAPI_BRANDING_DATA: NextAPIBrandingDataModel = {
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

const NextAPIBrandingDefault: NextAPIBrandingModel = {
  detail: defaultDetailData,
  main: {
    data: [],
    pageSource: '',
    total: 0
  }
};

const NextAPIBrandingReducer = (
  state: NextAPIBrandingModel = NextAPIBrandingDefault,
  action: NextAPIBrandingAction
): NextAPIBrandingModel => {
  switch (action.type) {
    case NextAPIBrandingActionType.GetMainData:
      return { ...state, main: action.data };
    case NextAPIBrandingActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const NextAPIBrandingCommand = {
  GetMainData: (): TAction<NextAPIBrandingAction, void> => {
    return (dispatch: TDispatch<NextAPIBrandingAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_NEXTAPI_BRANDING_DATA,
            pageSource: 'nextAPI',
            total: DUMMY_NEXTAPI_BRANDING_DATA.length
          },
          type: NextAPIBrandingActionType.GetMainData
        });
      });
    };
  },

  GetDetailData: (): TAction<NextAPIBrandingAction, void> => {
    return (dispatch: TDispatch<NextAPIBrandingAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_NEXTAPI_BRANDING_DATA,
          type: NextAPIBrandingActionType.GetDetailData
        });
      });
    };
  }
};

export {
  NextAPIBrandingCommand,
  NextAPIBrandingDefault,
  NextAPIBrandingReducer
};
