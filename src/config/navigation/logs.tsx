import { Avatar } from '@components/avatar';
import { IconSearching, IconSettings } from '@components/icon';
import type { NavigationConfig as NavigationConfigType } from '@layouts/types';

import { allRoutes, navIds, shouldMenuShow } from '../constants';

const LogsNav: NavigationConfigType = [
  {
    icon: <Avatar className="me-1" icon={<IconSearching size={16} />} />,
    id: navIds.logs.searching,
    navLink: allRoutes.logs.searching,
    text: 'Searching',
    hidden: () => shouldMenuShow('logs')
  },
  {
    icon: (
      <Avatar
        className="me-1"
        icon={<IconSettings size={16} />} />
    ),
    id: navIds.logs.settings,
    navLink: allRoutes.logs.settings,
    text: 'Settings',
    hidden: () => shouldMenuShow('logs')
  }
];

export { LogsNav };
