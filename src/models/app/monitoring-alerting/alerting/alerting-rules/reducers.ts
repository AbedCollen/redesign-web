import type { TAction, TDispatch } from '@models/types';

import { AlertingRulesActionType } from './types';

import type {
  AlertingRulesAction,
  AlertingRulesDataModel,
  AlertingRulesModel
} from './types';

const DUMMY_ALERTING_RULES_DATA: AlertingRulesDataModel[] = [
  {
    status: '',
    alertName: '',
    severity: '',
    label: '',
    action: ''
  }
];

const AlertingRulesDefault: AlertingRulesModel = {
  main: {
    data: [],
    total: 0
  }
};

const AlertingRulesReducer = (
  state: AlertingRulesModel = AlertingRulesDefault,
  action: AlertingRulesAction
): AlertingRulesModel => {
  switch (action.type) {
    case AlertingRulesActionType.GetMainData:
      return { ...state, main: action.data };

    default:
      return { ...state };
  }
};

const AlertingRulesCommand = {
  GetMainData: (): TAction<AlertingRulesAction, void> => {
    return (dispatch: TDispatch<AlertingRulesAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_ALERTING_RULES_DATA,
            total: DUMMY_ALERTING_RULES_DATA.length
          },
          type: AlertingRulesActionType.GetMainData
        });
      });
    };
  }
};

export { AlertingRulesCommand, AlertingRulesDefault, AlertingRulesReducer };
