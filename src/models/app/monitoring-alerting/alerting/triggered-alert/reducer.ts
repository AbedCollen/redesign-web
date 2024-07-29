import type { TAction, TDispatch } from '@models/types';

import { TriggeredAlertActionType } from './types';

import type {
  TriggeredAlertAction,
  TriggeredAlertDataModel,
  TriggeredAlertModel
} from './types';

const DUMMY_TRIGGERED_ALERT_DATA: TriggeredAlertDataModel[] = [
  {
    status: '',
    alertName: '',
    severity: '',
    label: '',
    action: ''
  }
];

const TriggeredAlertDefault: TriggeredAlertModel = {
  main: {
    data: [],
    total: 0
  }
};

const TriggeredAlertReducer = (
  state: TriggeredAlertModel = TriggeredAlertDefault,
  action: TriggeredAlertAction
): TriggeredAlertModel => {
  switch (action.type) {
    case TriggeredAlertActionType.GetMainData:
      return { ...state, main: action.data };

    default:
      return { ...state };
  }
};

const TriggeredAlertCommand = {
  GetMainData: (): TAction<TriggeredAlertAction, void> => {
    return (dispatch: TDispatch<TriggeredAlertAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_TRIGGERED_ALERT_DATA,
            total: DUMMY_TRIGGERED_ALERT_DATA.length
          },
          type: TriggeredAlertActionType.GetMainData
        });
      });
    };
  }
};

export { TriggeredAlertCommand, TriggeredAlertDefault, TriggeredAlertReducer };
