import type {
  APIGatewayAction,
  APIGatewayModel
} from './nextAPI/api-gateway/types';
import type {
  NextAPIBrandingAction,
  NextAPIBrandingModel
} from './nextAPI/branding/types';
import type {
  NextFlowBrandingAction,
  NextFlowBrandingModel
} from './nextFlow/branding/types';
import type {
  NextIDBrandingAction,
  NextIDBrandingModel
} from './nextID/branding/types';
import type {
  NextWebBrandingAction,
  NextWebBrandingModel
} from './nextWeb/branding/types';
import type { RetentionAction, RetentionModel } from './retention/types';

interface SettingsModel {
  apiGateway: APIGatewayModel
  nextAPIBranding: NextAPIBrandingModel
  nextFlowBranding: NextFlowBrandingModel
  nextIDBranding: NextIDBrandingModel
  nextWebBranding: NextWebBrandingModel
  retention: RetentionModel
}

type SettingsAction =
  | APIGatewayAction
  | NextAPIBrandingAction
  | NextFlowBrandingAction
  | NextIDBrandingAction
  | NextWebBrandingAction
  | RetentionAction;

export type { SettingsModel, SettingsAction };
