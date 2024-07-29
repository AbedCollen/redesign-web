import type { TAction, TDispatch } from '@models/types';

import { NamespacesActionType } from './types';

import type { NamespacesAction, NamespacesDataModel, NamespacesModel } from './types';

const DUMMY_NAMESPACES_DATA: NamespacesDataModel[] = [
  {
    create: 'placeholder',
    isActive: true,
    label: ['placeholder'],
    name: 'placeholder',
    project: 'placeholder'
  },
  {
    create: 'test3',
    isActive: true,
    label: ['test1'],
    name: 'placeholder1',
    project: 'test2'
  },
  {
    create: 'test6',
    isActive: true,
    label: ['Long text that does make sense for it to be in a long text place', 'testing1', 'testing2', 'testing3', 'testing4', 'testing5'],
    name: 'placeholder3',
    project: 'test45'
  },
  {
    create: 'test6',
    isActive: true,
    label: ['Long text that does make sense for it to be in a long text place', 'testing1', 'testing2', 'testing3', 'testing4', 'testing5'],
    name: 'placeholder3',
    project: 'test45'
  },
  {
    create: 'test6',
    isActive: true,
    label: ['Long text that does make sense for it to be in a long text place', 'testing1', 'testing2', 'testing3', 'testing4', 'testing5'],
    name: 'placeholder3',
    project: 'test45'
  }
];

const NamespacesDefault: NamespacesModel = {
  main: {
    data: [],
    total: 0
  }
};

const NamespacesReducer = (
  state: NamespacesModel = NamespacesDefault,
  action: NamespacesAction
): NamespacesModel => {
  switch (action.type) {
    case NamespacesActionType.GetMainData:
      return { ...state, main: action.data };

    default:
      return { ...state };
  }
};

const NamespacesCommand = {
  GetMainData: (): TAction<NamespacesAction, void> => {
    return (dispatch: TDispatch<NamespacesAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_NAMESPACES_DATA,
            total: DUMMY_NAMESPACES_DATA.length
          },
          type: NamespacesActionType.GetMainData
        });
      });
    };
  }
};

export { NamespacesCommand, NamespacesDefault, NamespacesReducer };
