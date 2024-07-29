import { lazy } from 'react';

import { allRoutes, navIds } from '@config/constants';

import type { CustomRouteType } from '.';

export const LogsRoute: CustomRouteType[] = [
  {
    component: lazy(() => import('@views/logs/searching/index.js').then((m) => ({
      default: m.SearchingMain
    }))),
    path: allRoutes.logs.searching,
    title: 'Logs - Searching'
  },
  {
    component: lazy(() => import('@views/logs/searching/detail/index.js').then((m) => ({
      default: m.SearchingDetailMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.logs.searching },
    path: allRoutes.logs.searchingDetail,
    title: 'Logs - Searching Detail'
  },
  {
    component: lazy(() => import('@views/logs/settings/index.js').then((m) => ({
      default: m.LogsSettingsMain
    }))),
    path: allRoutes.logs.settings,
    title: 'Logs - Settings'
  }
];
