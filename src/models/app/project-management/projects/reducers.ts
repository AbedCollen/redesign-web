import type { TAction, TDispatch } from '@models/types';

import { ProjectsActionType } from './types';

import type { ProjectsAction, ProjectsDataModel, ProjectsModel } from './types';

const DUMMY_PROJECTS_DATA: ProjectsDataModel[] = [
  {
    name: 'Bapenda',
    isActive: true,
    created: '21/07/2023',
    label: ['label1'],
    annotation: ['annotation1']
  },
  {
    name: 'Makers',
    isActive: true,
    created: '21/07/2023',
    label: ['label1'],
    annotation: ['annotation1']
  },
  {
    name: 'Navcore',
    isActive: true,
    created: '21/07/2023',
    label: ['label1'],
    annotation: ['annotation1']
  },
  {
    name: 'TokoRumahan',
    isActive: true,
    created: '21/07/2023',
    label: ['label1'],
    annotation: ['annotation1']
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
