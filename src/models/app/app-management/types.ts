import type { ApplicationModel } from './application/types';
import type { CertificatesAction, CertificatesModel } from './certificates/types';
import type { ClustersAction, ClustersModel } from './clusters/types';
import type { ProjectsAction, ProjectsModel } from './projects/types';
import type { RepositoriesAction, RepositoriesModel } from './repositories/types';
import type { UserManagementModel, UserManagementAction } from './user-management/types';

interface AppManagementModel {

  application?: ApplicationModel
  certificates?: CertificatesModel
  clusters?: ClustersModel
  projects?: ProjectsModel
  repositories?: RepositoriesModel
  userManagement?: UserManagementModel

}

type AppManagementAction = CertificatesAction | ClustersAction | ProjectsAction | RepositoriesAction | UserManagementAction;

export type { AppManagementModel, AppManagementAction };
