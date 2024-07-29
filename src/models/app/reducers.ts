import { combineReducers } from 'redux';

import { appManagementCommand, appManagementDefault, appManagementReducer } from './app-management/reducers';
import {
  clusterManagementCommand,
  clusterManagementDefault,
  clusterManagementReducer
} from './cluster-management/reducers';
import {
  distributionTracingCommand,
  distributionTracingDefault,
  distributionTracingReducer
} from './distribution-tracing/reducers';
import { logsCommand, logsDefault, logsReducer } from './logs/reducers';
import {
  monitoringAlertingCommand,
  monitoringAlertingDefault,
  monitoringAlertingReducer
} from './monitoring-alerting/reducers';
import {
  projectManagementCommand,
  projectManagementDefault,
  projectManagementReducer
} from './project-management/reducers';
import {
  settingsCommand,
  settingsDefault,
  settingsReducer
} from './settings/reducers';
import {
  userAndRolesCommand,
  userAndRolesDefault,
  userAndRolesReducer
} from './users-and-roles/reducers';

import type { AppModel } from './types';

const AppReducer = combineReducers({
  clusterManagement: clusterManagementReducer,
  logs: logsReducer,
  monitoringAlerting: monitoringAlertingReducer,
  projectManagement: projectManagementReducer,
  settings: settingsReducer,
  distributionTracing: distributionTracingReducer,
  userAndRoles: userAndRolesReducer,
  appManagement: appManagementReducer
});

const AppDefault: AppModel = {
  clusterManagement: clusterManagementDefault,
  logs: logsDefault,
  monitoringAlerting: monitoringAlertingDefault,
  projectManagement: projectManagementDefault,
  settings: settingsDefault,
  distributionTracing: distributionTracingDefault,
  userAndRoles: userAndRolesDefault,
  appManagement: appManagementDefault
};

const AppCommand = {
  clusterManagement: clusterManagementCommand,
  logs: logsCommand,
  monitoringAlerting: monitoringAlertingCommand,
  projectManagement: projectManagementCommand,
  settings: settingsCommand,
  distributionTracing: distributionTracingCommand,
  userAndRoles: userAndRolesCommand,
  appManagement: appManagementCommand
};

export { AppReducer, AppDefault, AppCommand };
