import { CircleFill } from '@nxweb/icons/bootstrap';
import { Settings } from '@nxweb/icons/feather';

import { Avatar } from '@components/avatar';
import { IconNextFlow, IconNextID, IconNextLogo } from '@components/icon';
import type { NavigationConfig as NavigationConfigType } from '@layouts/types';

import { allRoutes, navIds, shouldMenuShow } from '../constants';

const SettingsNav: NavigationConfigType = [
  {
    icon: <Avatar className="me-1" icon={<Settings color="#4F7899" size={16} />} />,
    id: navIds.settings.retention,
    navLink: allRoutes.settings.retention,
    text: 'Retention',
    hidden: () => shouldMenuShow('settings')
  },
  {
    icon: <Avatar className="me-1" icon={<IconNextLogo size={16} />} />,
    id: 'settings-nextAPI',
    text: 'NextAPI',
    hidden: () => shouldMenuShow('settings'),
    children: [
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.settings.apiGateway,
        text: 'API Gateway',
        navLink: allRoutes.settings.apiGateway
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.settings.nextAPIBranding,
        text: 'Branding',
        navLink: allRoutes.settings.nextAPIBranding
      }
    ]
  },
  {
    icon: <Avatar className="me-1" icon={<IconNextLogo size={16} />} />,
    id: 'settings-nextWeb',
    text: 'NextWeb',
    hidden: () => shouldMenuShow('settings'),
    children: [
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.settings.nextWebBranding,
        text: 'Branding',
        navLink: allRoutes.settings.nextWebBranding
      }
    ]
  },
  {
    icon: <Avatar className="me-1" icon={<IconNextID size={16} />} />,
    id: 'settings-nextID',
    text: 'NextID',
    hidden: () => shouldMenuShow('settings'),
    children: [
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.settings.nextIDBranding,
        text: 'Branding',
        navLink: allRoutes.settings.nextIDBranding
      }
    ]
  },
  {
    icon: <Avatar className="me-1" icon={<IconNextFlow size={16} />} />,
    id: 'settings-nextFlow',
    text: 'NextFlow',
    hidden: () => shouldMenuShow('settings'),
    children: [
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.settings.nextFlowBranding,
        text: 'Branding',
        navLink: allRoutes.settings.nextFlowBranding
      }
    ]
  }
];

export { SettingsNav };
