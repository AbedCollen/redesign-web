import type { AppManagementAction, AppManagementModel } from './app-management/types';
import type {
  ClusterManagementAction,
  ClusterManagementModel
} from './cluster-management/types';
import type {
  DistributionTracingAction,
  DistributionTracingModel
} from './distribution-tracing/types';
import type { LogsAction, LogsModel } from './logs/types';
import type {
  MonitoringAlertingAction,
  MonitoringAlertingModel
} from './monitoring-alerting/types';
import type {
  ProjectManagementAction,
  ProjectManagementModel
} from './project-management/types';
import type { SettingsAction, SettingsModel } from './settings/types';
import type {
  UserAndRolesAction,
  UserAndRolesModel
} from './users-and-roles/types';

export interface AppModel {
  clusterManagement: ClusterManagementModel
  distributionTracing: DistributionTracingModel
  logs: LogsModel
  monitoringAlerting: MonitoringAlertingModel
  projectManagement: ProjectManagementModel
  settings: SettingsModel
  userAndRoles: UserAndRolesModel
  appManagement: AppManagementModel
}

export type AppAction =
  AppManagementAction | ClusterManagementAction | DistributionTracingAction | LogsAction | MonitoringAlertingAction | ProjectManagementAction | SettingsAction | UserAndRolesAction;
