import type { TAction, TDispatch } from '@models/types';

import { APIGatewayActionType } from './types';

import type {
  APIGatewayAction,
  APIGatewayDataModel,
  APIGatewayModel
} from './types';

const DUMMY_APIGATEWAY_DATA: APIGatewayDataModel[] = [
  {
    baseURL: 'https://apigateway-dev.tokrum.com',
    display: 'Development',
    name: 'development',
    ports: '8081 / 9901',
    status: 'Running'
  },
  {
    baseURL: 'https://apigateway.tokrum.com',
    display: 'Production',
    name: 'production',
    ports: '8082 / 9902',
    status: 'Running'
  }
];

const APIGatewayDefault: APIGatewayModel = {
  main: {
    data: [],
    total: 0
  }
};

const APIGatewayReducer = (
  state: APIGatewayModel = APIGatewayDefault,
  action: APIGatewayAction
): APIGatewayModel => {
  switch (action.type) {
    case APIGatewayActionType.GetMainData:
      return { ...state, main: action.data };

    default:
      return { ...state };
  }
};

const APIGatewayCommand = {
  GetMainData: (): TAction<APIGatewayAction, void> => {
    return (dispatch: TDispatch<APIGatewayAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_APIGATEWAY_DATA,
            total: DUMMY_APIGATEWAY_DATA.length
          },
          type: APIGatewayActionType.GetMainData
        });
      });
    };
  }
};

export { APIGatewayCommand, APIGatewayDefault, APIGatewayReducer };
