import { combineReducers } from 'redux';

import { ApplicationCommand, ApplicationDefault, ApplicationReducer } from './application/reducers';
import { CertificatesCommand, CertificatesDefault, CertificatesReducer } from './certificates/reducers';
import { ClustersCommand, ClustersDefault, ClustersReducer } from './clusters/reducers';
import { ProjectsCommand, ProjectsDefault, ProjectsReducer } from './projects/reducers';
import { RepositoriesCommand, RepositoriesDefault, RepositoriesReducer } from './repositories/reducers';
import { UserManagementCommand, UserManagementDefault, UserManagementReducer } from './user-management/reducers';

import type { AppManagementModel } from './types';

const appManagementReducer = combineReducers({

  application: ApplicationReducer,
  certificates: CertificatesReducer,
  clusters: ClustersReducer,
  projects: ProjectsReducer,
  repositories: RepositoriesReducer,
  userManagement: UserManagementReducer
});

const appManagementDefault: AppManagementModel = {

  application: ApplicationDefault,
  certificates: CertificatesDefault,
  clusters: ClustersDefault,
  projects: ProjectsDefault,
  repositories: RepositoriesDefault,
  userManagement: UserManagementDefault
};

const appManagementCommand = {

  application: ApplicationCommand,
  certificates: CertificatesCommand,
  clusters: ClustersCommand,
  projects: ProjectsCommand,
  repositories: RepositoriesCommand,
  userManagement: UserManagementCommand

};

export {
  appManagementCommand, appManagementDefault, appManagementReducer
};
