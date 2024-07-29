import { CircleFill } from '@nxweb/icons/bootstrap';

import { Avatar } from '@components/avatar';
import { IconDashboardNoGradient, IconDatabase, IconEvent, IconNameSpaces, IconShare } from '@components/icon';
import type { NavigationConfig as NavigationConfigType } from '@layouts/types';

import { allRoutes, navIds, shouldMenuShow } from '../constants';

// Sidebar Menu for Cluster Management Routing

const ClusterManagementNav: NavigationConfigType = [
  {
    icon:
      <Avatar className="me-1" icon={<IconDashboardNoGradient size={16} />} />,
    id: navIds.clusterManagement.dashboard,
    navLink: allRoutes.clusterManagement.dashboard,
    text: 'Dashboard',
    hidden: () => shouldMenuShow('cluster-management')
  },
  {
    icon: <Avatar className="me-1" icon={<IconShare size={16} />} />,
    id: navIds.clusterManagement.nodes,
    navLink: allRoutes.clusterManagement.nodes,
    text: 'Nodes',
    hidden: () => shouldMenuShow('cluster-management')
  },
  {
    icon: <Avatar className="me-1" icon={<IconEvent size={16} />} />,
    id: navIds.clusterManagement.events,
    navLink: allRoutes.clusterManagement.events,
    text: 'Events',
    hidden: () => shouldMenuShow('cluster-management')
  },
  {
    icon: <Avatar className="me-1" icon={<IconNameSpaces size={16} />} />,
    id: navIds.clusterManagement.namespaces,
    navLink: allRoutes.clusterManagement.namespaces,
    text: 'Namespaces',
    hidden: () => shouldMenuShow('cluster-management')
  },
  {
    icon: <Avatar className="me-1" icon={<IconDatabase size={16} />} />,
    id: 'storage-sample',
    text: 'Storage',
    hidden: () => shouldMenuShow('cluster-management'),
    children: [
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.clusterManagement.persistentVolume,
        text: 'Persistent Volume',
        navLink: allRoutes.clusterManagement.persistentVolume
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.clusterManagement.storageClasses,
        text: 'Storage Classes',
        navLink: allRoutes.clusterManagement.storageClasses
      }
    ]
  }
];

export { ClusterManagementNav };
