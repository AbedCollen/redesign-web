import type { NavigationConfig as NavigationConfigType } from '@layouts/types';

import { AppManagementNav } from './app-management';
import { ClusterManagementNav } from './cluster-management';
import { DistributionTracingNav } from './distribution-tracing';
import { LogsNav } from './logs';
import { MonitoringAlertingNav } from './monitoring-alerting';
import { ProjectManagementNav } from './project-management';
import { SettingsNav } from './settings';
import { UserAndRolesNav } from './user-and-roles';

const NavigationConfig: NavigationConfigType = [
  ...ClusterManagementNav,
  ...LogsNav,
  ...ProjectManagementNav,
  ...SettingsNav,
  ...DistributionTracingNav,
  ...MonitoringAlertingNav,
  ...UserAndRolesNav,
  ...AppManagementNav
];

export { NavigationConfig };
