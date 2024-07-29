import type { TAction, TDispatch } from '@models/types';

import { ProjectsActionType } from './types';

import type { ProjectsAction, ProjectsDataModel, ProjectsModel } from './types';

const DUMMY_PROJECTS_DATA: ProjectsDataModel[] = [
  {
    id: 1,
    name: 'Default',
    description: '-'
  },
  {
    id: 2,
    name: 'Default',
    description: '-'
  },
  {
    id: 3,
    name: 'Default',
    description: '-'
  },
  {
    id: 4,
    name: 'Default',
    description: '-'
  }
];

const ProjectsDefault: ProjectsModel = {
  main: {
    data: [],
    total: 0
  }
};

const ProjectsReducer = (
  state: ProjectsModel = ProjectsDefault,
  action: ProjectsAction
): ProjectsModel => {
  switch (action.type) {
    case ProjectsActionType.GetMainData:
      return { ...state, main: action.data };

    default:
      return { ...state };
  }
};

const ProjectsCommand = {
  GetMainData: (): TAction<ProjectsAction, void> => {
    return (dispatch: TDispatch<ProjectsAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_PROJECTS_DATA,
            total: DUMMY_PROJECTS_DATA.length
          },
          type: ProjectsActionType.GetMainData
        });
      });
    };
  }
};

export { ProjectsCommand, ProjectsDefault, ProjectsReducer };
