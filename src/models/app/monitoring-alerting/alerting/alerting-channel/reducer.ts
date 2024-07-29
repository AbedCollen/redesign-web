import type { TAction, TDispatch } from '@models/types';

import { AlertingChannelActionType } from './types';

import type {
  AlertingChannelAction,
  AlertingChannelDataModel,
  AlertingChannelModel
} from './types';

const DUMMY_ALERTING_CHANNEL_DATA: AlertingChannelDataModel[] = [
  {
    name: '',
    type: '',
    action: ''
  }
];

const AlertingChannelDefault: AlertingChannelModel = {
  main: {
    data: [],
    total: 0
  }
};

const AlertingChannelReducer = (
  state: AlertingChannelModel = AlertingChannelDefault,
  action: AlertingChannelAction
): AlertingChannelModel => {
  switch (action.type) {
    case AlertingChannelActionType.GetMainData:
      return { ...state, main: action.data };

    default:
      return { ...state };
  }
};

const AlertingChannelCommand = {
  GetMainData: (): TAction<AlertingChannelAction, void> => {
    return (dispatch: TDispatch<AlertingChannelAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_ALERTING_CHANNEL_DATA,
            total: DUMMY_ALERTING_CHANNEL_DATA.length
          },
          type: AlertingChannelActionType.GetMainData
        });
      });
    };
  }
};

export { AlertingChannelCommand, AlertingChannelDefault, AlertingChannelReducer };
