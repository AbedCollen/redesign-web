import { lazy } from 'react';

import { allRoutes, navIds } from '@config/constants';

import type { CustomRouteType } from '.';

export const DistributionTracingRoute: CustomRouteType[] = [
  {
    component: lazy(() => import('@views/distribution-tracing/traces/index.js').then((m) => ({
      default: m.TracesMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.distributionTracing.traces },
    path: allRoutes.distributionTracing.traces,
    title: 'Distribution Tracing - Traces'
  },
  {
    component: lazy(() => import('@views/distribution-tracing/traces/detail/index.js').then(
      (m) => ({
        default: m.TracesDetailMain
      })
    )),
    meta: { groupId: 'sample-group', navId: navIds.distributionTracing.traces },
    path: allRoutes.distributionTracing.tracesDetail,
    title: 'Distribution Tracing - Traces Detail'
  },
  {
    component: lazy(() => import(
      '@views/distribution-tracing/traces/detail/timestamp/index.js'
    ).then((m) => ({
      default: m.TracesDetailTimeMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.distributionTracing.traces },
    path: allRoutes.distributionTracing.tracesDetailTime,
    title: 'Distribution Tracing - Traces Detail Time'
  },
  {
    component: lazy(() => import('@views/distribution-tracing/service/index.js').then((m) => ({
      default: m.ServiceMain
    }))),
    path: allRoutes.distributionTracing.service,
    title: 'Distribution Tracing - Service'
  },
  {
    component: lazy(() => import('@views/distribution-tracing/service/detail/index.js').then(
      (m) => ({
        default: m.ServiceDetailMain
      })
    )),
    meta: {
      groupId: 'sample-group',
      navId: navIds.distributionTracing.service
    },
    path: allRoutes.distributionTracing.serviceDetail,
    title: 'Distribution Tracing - Service Detail'
  },
  {
    component: lazy(() => import('@views/distribution-tracing/livemap/index.js').then((m) => ({
      default: m.LiveMapMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.distributionTracing.livemap },
    path: allRoutes.distributionTracing.livemap,
    title: 'Distribution Tracing - Live Map'
  },
  {
    component: lazy(() => import(
      '@views/distribution-tracing/livemap/detail/index.js'
    ).then((m) => ({
      default: m.LiveMapDetail
    }))),
    meta: { groupId: 'sample-group', navId: navIds.distributionTracing.livemap },
    path: allRoutes.distributionTracing.livemapDetail,
    title: 'Distribution Tracing - Live Map Detail'
  }
];
