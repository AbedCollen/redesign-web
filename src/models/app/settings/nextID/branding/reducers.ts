import type { TAction, TDispatch } from '@models/types';

import { NextIDBrandingActionType } from './types';

import type {
  NextIDBrandingAction,
  NextIDBrandingDataModel,
  NextIDBrandingModel
} from './types';

const DUMMY_NEXTID_BRANDING_DATA: NextIDBrandingDataModel[] = [
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

const DUMMY_DETAIL_NEXTID_BRANDING_DATA: NextIDBrandingDataModel = {
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

const NextIDBrandingDefault: NextIDBrandingModel = {
  detail: defaultDetailData,
  main: {
    data: [],
    pageSource: '',
    total: 0
  }
};

const NextIDBrandingReducer = (
  state: NextIDBrandingModel = NextIDBrandingDefault,
  action: NextIDBrandingAction
): NextIDBrandingModel => {
  switch (action.type) {
    case NextIDBrandingActionType.GetMainData:
      return { ...state, main: action.data };
    case NextIDBrandingActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const NextIDBrandingCommand = {
  GetMainData: (): TAction<NextIDBrandingAction, void> => {
    return (dispatch: TDispatch<NextIDBrandingAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_NEXTID_BRANDING_DATA,
            pageSource: 'nextID',
            total: DUMMY_NEXTID_BRANDING_DATA.length
          },
          type: NextIDBrandingActionType.GetMainData
        });
      });
    };
  },

  GetDetailData: (): TAction<NextIDBrandingAction, void> => {
    return (dispatch: TDispatch<NextIDBrandingAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_NEXTID_BRANDING_DATA,
          type: NextIDBrandingActionType.GetDetailData
        });
      });
    };
  }
};

export { NextIDBrandingCommand, NextIDBrandingDefault, NextIDBrandingReducer };
