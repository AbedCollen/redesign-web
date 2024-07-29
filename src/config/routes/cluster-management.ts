import { lazy } from 'react';

import { allRoutes } from '@config/constants';

import type { CustomRouteType } from '.';

export const ClusterManagementRoute: CustomRouteType[] = [
  {
    component: lazy(() => import('@views/cluster-management/dashboard/index.js').then((m) => ({ default: m.DashboardMain }))),
    path: allRoutes.clusterManagement.dashboard,
    title: 'Cluster Management - Dashboard'
  },
  {
    component: lazy(() => import('@views/cluster-management/nodes/index.js').then((m) => ({ default: m.NodesMain }))),
    path: allRoutes.clusterManagement.nodes,
    title: 'Cluster Management - Nodes'
  },
  {
    component: lazy(() => import('@views/cluster-management/events/index.js').then((m) => ({ default: m.EventsMain }))),
    path: allRoutes.clusterManagement.events,
    title: 'Cluster Management - Events'
  },
  {
    component: lazy(() => import('@views/cluster-management/namespaces/index.js').then((m) => ({ default: m.NamespacesMain }))),
    path: allRoutes.clusterManagement.namespaces,
    title: 'Cluster Management - Namespaces'
  },
  {
    component: lazy(() => import('@views/cluster-management/storages/persistent-volume/index.js').then((m) => ({ default: m.PersistentVolumeMain }))),
    path: allRoutes.clusterManagement.persistentVolume,
    title: 'Cluster Management - Persistent Volume'
  },
  {
    component: lazy(() => import('@views/cluster-management/storages/storage-classes/index.js').then((m) => ({ default: m.StorageClassesMain }))),
    path: allRoutes.clusterManagement.storageClasses,
    title: 'Cluster Management - Storage Classes'
  }
];
