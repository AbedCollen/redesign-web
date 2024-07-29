import { lazy } from 'react';

import { allRoutes, navIds } from '@config/constants';

import type { CustomRouteType } from '.';

export const SettingsRoute: CustomRouteType[] = [
  {
    component: lazy(() => import('@views/settings/retention/index.js').then((m) => ({
      default: m.RetentionMain
    }))),
    path: allRoutes.settings.retention,
    title: 'Settings - Retention'
  },
  {
    component: lazy(() => import('@views/settings/nextAPI/api-gateway/index.js').then((m) => ({
      default: m.APIGateway
    }))),
    path: allRoutes.settings.apiGateway,
    title: 'Settings - NextAPI - API Gateway'
  },
  {
    component: lazy(() => import('@views/settings/nextAPI/branding/index.js').then((m) => ({
      default: m.NextAPIBranding
    }))),
    path: allRoutes.settings.nextAPIBranding,
    title: 'Settings - NextAPI - Branding'
  },
  {
    component: lazy(() => import('@src/views/settings/nextAPI/branding/detail.js').then((m) => ({
      default: m.NextAPIDetailBranding
    }))),
    meta: {
      groupId: 'settings-nextAPI',
      navId: navIds.settings.nextAPIBranding
    },
    path: allRoutes.settings.addNextAPIBranding,
    title: 'Settings - NextAPI - Add Branding'
  },
  {
    component: lazy(() => import('@src/views/settings/nextAPI/branding/detail.js').then((m) => ({
      default: m.NextAPIDetailBranding
    }))),
    meta: {
      groupId: 'settings-nextAPI',
      navId: navIds.settings.nextAPIBranding
    },
    path: allRoutes.settings.editNextAPIBranding,
    title: 'Settings - NextAPI - Edit Branding'
  },
  {
    component: lazy(() => import('@src/views/settings/nextAPI/branding/detail.js').then((m) => ({
      default: m.NextAPIDetailBranding
    }))),
    meta: {
      groupId: 'settings-nextAPI',
      navId: navIds.settings.nextAPIBranding
    },
    path: allRoutes.settings.viewNextAPIBranding,
    title: 'Settings - NextAPI - View Branding'
  },
  {
    component: lazy(() => import('@views/settings/nextWeb/branding/index.js').then((m) => ({
      default: m.NextWebBranding
    }))),
    path: allRoutes.settings.nextWebBranding,
    title: 'Settings - NextWeb - Branding'
  },
  {
    component: lazy(() => import('@views/settings/nextWeb/branding/detail.js').then((m) => ({
      default: m.NextWebDetailBranding
    }))),
    meta: {
      groupId: 'settings-nextWeb',
      navId: navIds.settings.nextWebBranding
    },
    path: allRoutes.settings.addNextWebBranding,
    title: 'Settings - NextWeb - Add Branding'
  },
  {
    component: lazy(() => import('@src/views/settings/nextWeb/branding/detail.js').then((m) => ({
      default: m.NextWebDetailBranding
    }))),
    meta: {
      groupId: 'settings-nextWeb',
      navId: navIds.settings.nextWebBranding
    },
    path: allRoutes.settings.editNextWebBranding,
    title: 'Settings - NextWeb - Edit Branding'
  },
  {
    component: lazy(() => import('@views/settings/nextWeb/branding/detail.js').then((m) => ({
      default: m.NextWebDetailBranding
    }))),
    meta: {
      groupId: 'settings-nextWeb',
      navId: navIds.settings.nextWebBranding
    },
    path: allRoutes.settings.viewNextWebBranding,
    title: 'Settings - NextWeb - View Branding'
  },
  {
    component: lazy(() => import('@views/settings/nextID/branding/index.js').then((m) => ({
      default: m.NextIDBranding
    }))),
    path: allRoutes.settings.nextIDBranding,
    title: 'Settings - NextID - Branding'
  },
  {
    component: lazy(() => import('@src/views/settings/nextID/branding/detail.js').then((m) => ({
      default: m.NextIDDetailBranding
    }))),
    meta: {
      groupId: 'settings-nextID',
      navId: navIds.settings.nextIDBranding
    },
    path: allRoutes.settings.addNextIDBranding,
    title: 'Settings - NextID - Add Branding'
  },
  {
    component: lazy(() => import('@src/views/settings/nextID/branding/detail.js').then((m) => ({
      default: m.NextIDDetailBranding
    }))),
    meta: {
      groupId: 'settings-nextID',
      navId: navIds.settings.nextIDBranding
    },
    path: allRoutes.settings.editNextIDBranding,
    title: 'Settings - NextID - Edit Branding'
  },
  {
    component: lazy(() => import('@src/views/settings/nextID/branding/detail.js').then((m) => ({
      default: m.NextIDDetailBranding
    }))),
    meta: {
      groupId: 'settings-nextID',
      navId: navIds.settings.nextIDBranding
    },
    path: allRoutes.settings.viewNextIDBranding,
    title: 'Settings - NextID - View Branding'
  },
  {
    component: lazy(() => import('@views/settings/nextFlow/branding/index.js').then((m) => ({
      default: m.NextFlowBranding
    }))),
    path: allRoutes.settings.nextFlowBranding,
    title: 'Settings - NextFlow - Branding'
  },
  {
    component: lazy(() => import('@views/settings/nextFlow/branding/detail.js').then((m) => ({
      default: m.NextFlowDetailBranding
    }))),
    meta: {
      groupId: 'settings-nextFlow',
      navId: navIds.settings.nextFlowBranding
    },
    path: allRoutes.settings.addNextFlowBranding,
    title: 'Settings - NextFlow - Add Branding'
  },
  {
    component: lazy(() => import('@src/views/settings/nextFlow/branding/detail.js').then(
      (m) => ({
        default: m.NextFlowDetailBranding
      })
    )),
    meta: {
      groupId: 'settings-nextFlow',
      navId: navIds.settings.nextFlowBranding
    },
    path: allRoutes.settings.editNextFlowBranding,
    title: 'Settings - NextFlow - Edit Branding'
  },
  {
    component: lazy(() => import('@views/settings/nextFlow/branding/detail.js').then(
      (m) => ({
        default: m.NextFlowDetailBranding
      })
    )),
    meta: {
      groupId: 'settings-nextFlow',
      navId: navIds.settings.nextFlowBranding
    },
    path: allRoutes.settings.viewNextFlowBranding,
    title: 'Settings - NextFlow - View Branding'
  }
];
