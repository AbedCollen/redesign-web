import type { TAction, TDispatch } from '@models/types';

import { NextFlowBrandingActionType } from './types';

import type {
  NextFlowBrandingAction,
  NextFlowBrandingDataModel,
  NextFlowBrandingModel
} from './types';

const DUMMY_NEXTFLOW_BRANDING_DATA: NextFlowBrandingDataModel[] = [
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

const DUMMY_DETAIL_NEXTFLOW_BRANDING_DATA: NextFlowBrandingDataModel = {
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

const NextFlowBrandingDefault: NextFlowBrandingModel = {
  detail: defaultDetailData,
  main: {
    data: [],
    pageSource: '',
    total: 0
  }
};

const NextFlowBrandingReducer = (
  state: NextFlowBrandingModel = NextFlowBrandingDefault,
  action: NextFlowBrandingAction
): NextFlowBrandingModel => {
  switch (action.type) {
    case NextFlowBrandingActionType.GetMainData:
      return { ...state, main: action.data };
    case NextFlowBrandingActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const NextFlowBrandingCommand = {
  GetMainData: (): TAction<NextFlowBrandingAction, void> => {
    return (dispatch: TDispatch<NextFlowBrandingAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_NEXTFLOW_BRANDING_DATA,
            pageSource: 'nextFlow',
            total: DUMMY_NEXTFLOW_BRANDING_DATA.length
          },
          type: NextFlowBrandingActionType.GetMainData
        });
      });
    };
  },

  GetDetailData: (): TAction<NextFlowBrandingAction, void> => {
    return (dispatch: TDispatch<NextFlowBrandingAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_NEXTFLOW_BRANDING_DATA,
          type: NextFlowBrandingActionType.GetDetailData
        });
      });
    };
  }
};

export {
  NextFlowBrandingCommand,
  NextFlowBrandingDefault,
  NextFlowBrandingReducer
};
