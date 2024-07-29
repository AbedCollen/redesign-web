import type { TAction, TDispatch } from '@models/types';

import { RolesActionType } from './types';

import type { RolesAction, RolesDataModel, RolesModel } from './types';

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- BEGIN
const DUMMY_ROLES_DATA: RolesDataModel[] = [
  {
    id: 1,
    name: 'fission-v1-17-0-fission-builder',
    created: '5 days ago',
    detailTable: [
      {
        resources: 'canaryconfigs, environments, functions, httptriggers, kuberneteswatchtriggers, messagequeuetriggers, packages, timetriggers',
        nonResourceURL: '-',
        resourceNames: '-',
        verbs: '*',
        apiGroups: 'fission.io',
        namespace: 'default',
        createdDetail: 'Jan 4, 2022',
        uid: '9391c556-d6ce-470a-96bc-c733aff14eca'
      }
    ]
  },
  {
    id: 2,
    name: 'fission-v1-17-0-fission-builder',
    created: '5 days ago',
    detailTable: [
      {
        resources: 'canaryconfigs, environments, functions, httptriggers, kuberneteswatchtriggers, messagequeuetriggers, packages, timetriggers',
        nonResourceURL: '-',
        resourceNames: '-',
        verbs: '*',
        apiGroups: 'fission.io',
        namespace: 'default',
        createdDetail: 'Jan 4, 2022',
        uid: '9391c556-d6ce-470a-96bc-c733aff14eca'
      }
    ]
  }
];

const DUMMY_ROLES_DETAIL_DATA = {
  id: 1,
  name: 'fission-v1-17-0-fission-builder',
  created: '5 days ago',
  detailTable: [
    {
      resources: 'canaryconfigs, environments, functions, httptriggers, kuberneteswatchtriggers, messagequeuetriggers, packages, timetriggers',
      nonResourceURL: '-',
      resourceNames: '-',
      verbs: '*',
      apiGroups: 'fission.io',
      namespace: 'default',
      createdDetail: 'Jan 4, 2022',
      uid: '9391c556-d6ce-470a-96bc-c733aff14eca'
    }
  ]
};

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- END

const RolesDetailDefault = {
  id: 1,
  name: '',
  created: '',
  detailTable: [
    {
      resources: '',
      nonResourceURL: '',
      resourceNames: '',
      verbs: '',
      apiGroups: '',
      namespace: '',
      createdDetail: '',
      uid: ''
    }
  ]
};

const RolesDefault: RolesModel = {
  detail: RolesDetailDefault,
  main: {
    data: [],
    total: 0
  }
};

const RolesReducer = (state: RolesModel = RolesDefault, action: RolesAction): RolesModel => {
  switch (action.type) {
    case RolesActionType.GetMainData:
      return { ...state, main: action.data };
    case RolesActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const RolesCommand = {
  GetMainData: (): TAction<RolesAction, void> => {
    return (dispatch: TDispatch<RolesAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_ROLES_DATA,
            total: DUMMY_ROLES_DATA.length
          },
          type: RolesActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<RolesAction, void> => {
    return (dispatch: TDispatch<RolesAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_ROLES_DETAIL_DATA,
          type: RolesActionType.GetDetailData
        });
      });
    };
  }
};

export { RolesCommand, RolesDefault, RolesReducer };
