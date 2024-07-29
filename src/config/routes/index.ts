import { lazy } from 'react';

import type { RouteType } from '@nxweb/core/router';

import { AppManagementRoute } from './app-management';
import { ClusterManagementRoute } from './cluster-management';
import { DistributionTracingRoute } from './distribution-tracing';
import { LogsRoute } from './logs';
import { MonitoringAlertingRoute } from './monitoring-alerting';
import { ProjectManagementRoute } from './project-management';
import { SettingsRoute } from './settings';
import { UserAndRolesRoute } from './user-and-roles';

interface CustomRouteType extends RouteType {
  breadcrumbs?: string[]
  IoTDemo?: boolean
}

export const RouteConfig: CustomRouteType[] = [
  {
    component: lazy(() => import('@views/landing/index.js').then((m) => ({ default: m.Landing }))),
    layout: 'blank',
    path: '/',
    title: 'NEXTCLUSTER'
  },
  {
    component: lazy(() => import('@views/components/index.js').then((m) => ({ default: m.ComponentPreview }))),
    path: '/components-preview',
    title: 'Components Preview'
  },
  ...ClusterManagementRoute,
  ...LogsRoute,
  ...ProjectManagementRoute,
  ...SettingsRoute,
  ...DistributionTracingRoute,
  ...MonitoringAlertingRoute,
  ...UserAndRolesRoute,
  ...AppManagementRoute
];

export type { CustomRouteType };
