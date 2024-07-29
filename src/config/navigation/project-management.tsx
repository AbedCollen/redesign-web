import { Avatar } from '@components/avatar';
import { IconConfigMap, IconDaemon, IconDocument, IconHPA, IconInggres, IconRegistry, IconRocket, IconSecret, IconStateful, IconUnion, IconVolume } from '@components/icon';
import type { NavigationConfig as NavigationConfigType } from '@layouts/types';

import { allRoutes, navIds, shouldMenuShow } from '../constants';

const ProjectManagementNav: NavigationConfigType = [
  {
    hidden: () => shouldMenuShow('project-management'),
    icon: <Avatar className="me-1" icon={<IconRocket size={16} />} />,
    id: navIds.projectManagement.deployment,
    navLink: allRoutes.projectManagement.deployment,
    text: 'Deployment'
  },
  {
    hidden: () => shouldMenuShow('project-management'),
    icon: <Avatar className="me-1" icon={<IconStateful size={16} />} />,
    id: navIds.projectManagement.stateful,
    navLink: allRoutes.projectManagement.stateful,
    text: 'StatefulSet'
  },
  {
    hidden: () => shouldMenuShow('project-management'),
    icon: <Avatar className="me-1" icon={<IconDaemon size={16} />} />,
    id: navIds.projectManagement.daemon,
    navLink: allRoutes.projectManagement.daemon,
    text: 'DaemonSet'
  },
  {
    hidden: () => shouldMenuShow('project-management'),
    icon: <Avatar className="me-1" icon={<IconInggres size={16} />} />,
    id: navIds.projectManagement.ingress,
    navLink: allRoutes.projectManagement.ingress,
    text: 'Ingress'
  },
  {
    hidden: () => shouldMenuShow('project-management'),
    icon: <Avatar className="me-1" icon={<IconUnion size={16} />} />,
    id: navIds.projectManagement.serviceDiscovery,
    navLink: allRoutes.projectManagement.serviceDiscovery,
    text: 'Service Discovery'
  },
  {
    hidden: () => shouldMenuShow('project-management'),
    icon: <Avatar className="me-1" icon={<IconVolume size={16} />} />,
    id: navIds.projectManagement.volume,
    navLink: allRoutes.projectManagement.volume,
    text: 'Volume'
  },
  {
    hidden: () => shouldMenuShow('project-management'),
    icon: <Avatar className="me-1" icon={<IconConfigMap size={16} />} />,
    id: navIds.projectManagement.configmap,
    navLink: allRoutes.projectManagement.configmap,
    text: 'Config Map'
  },
  {
    hidden: () => shouldMenuShow('project-management'),
    icon: <Avatar className="me-1" icon={<IconHPA size={16} />} />,
    id: navIds.projectManagement.hpa,
    navLink: allRoutes.projectManagement.hpa,
    text: 'HPA'
  },
  {
    hidden: () => shouldMenuShow('project-management'),
    icon: <Avatar className="me-1" icon={<IconSecret size={16} />} />,
    id: navIds.projectManagement.secret,
    navLink: allRoutes.projectManagement.secret,
    text: 'Secret'
  },
  {
    hidden: () => shouldMenuShow('project-management'),
    icon: <Avatar className="me-1" icon={<IconDocument size={16} />} />,
    id: navIds.projectManagement.certificate,
    navLink: allRoutes.projectManagement.certificate,
    text: 'Certificate'
  },
  {
    hidden: () => shouldMenuShow('project-management'),
    icon: <Avatar className="me-1" icon={<IconRegistry size={16} />} />,
    id: navIds.projectManagement.registry,
    navLink: allRoutes.projectManagement.registry,
    text: 'Registry'
  }
];

export { ProjectManagementNav };
