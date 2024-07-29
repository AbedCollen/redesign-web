import { combineReducers } from 'redux';

import {
  APIGatewayCommand,
  APIGatewayDefault,
  APIGatewayReducer
} from './nextAPI/api-gateway/reducers';
import {
  NextAPIBrandingCommand,
  NextAPIBrandingDefault,
  NextAPIBrandingReducer
} from './nextAPI/branding/reducers';
import {
  NextFlowBrandingCommand,
  NextFlowBrandingDefault,
  NextFlowBrandingReducer
} from './nextFlow/branding/reducers';
import {
  NextIDBrandingCommand,
  NextIDBrandingDefault,
  NextIDBrandingReducer
} from './nextID/branding/reducers';
import {
  NextWebBrandingCommand,
  NextWebBrandingDefault,
  NextWebBrandingReducer
} from './nextWeb/branding/reducers';
import {
  RetentionCommand,
  RetentionDefault,
  RetentionReducer
} from './retention/reducers';

import type { SettingsModel } from './types';

const settingsReducer = combineReducers({
  apiGateway: APIGatewayReducer,
  nextAPIBranding: NextAPIBrandingReducer,
  nextFlowBranding: NextFlowBrandingReducer,
  nextIDBranding: NextIDBrandingReducer,
  nextWebBranding: NextWebBrandingReducer,
  retention: RetentionReducer
});

const settingsDefault: SettingsModel = {
  apiGateway: APIGatewayDefault,
  nextAPIBranding: NextAPIBrandingDefault,
  nextFlowBranding: NextFlowBrandingDefault,
  nextIDBranding: NextIDBrandingDefault,
  nextWebBranding: NextWebBrandingDefault,
  retention: RetentionDefault
};

const settingsCommand = {
  apiGateway: APIGatewayCommand,
  nextAPIBranding: NextAPIBrandingCommand,
  nextFlowBranding: NextFlowBrandingCommand,
  nextIDBranding: NextIDBrandingCommand,
  nextWebBranding: NextWebBrandingCommand,
  retention: RetentionCommand
};

export { settingsReducer, settingsDefault, settingsCommand };
