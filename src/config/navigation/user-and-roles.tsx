import { User } from '@nxweb/icons/feather';

import { Avatar } from '@components/avatar';
import { IconClusterRoles, IconClusterRolesBindings, IconRoles, IconRolesBindings, IconServiceAccount } from '@components/icon';
import type { NavigationConfig as NavigationConfigType } from '@layouts/types';

import { allRoutes, navIds, shouldMenuShow } from '../constants';

const UserAndRolesNav: NavigationConfigType = [
  {
    icon: <Avatar className="me-1" icon={<User color="#4F7899" size={16} />} />,
    id: navIds.userAndRoles.users,
    navLink: allRoutes.userAndRoles.users,
    text: 'Users',
    hidden: () => shouldMenuShow('user-and-roles')
  },
  {
    icon: <Avatar className="me-1" icon={<IconServiceAccount size={16} />} />,
    id: navIds.userAndRoles.servicesAccounts,
    navLink: allRoutes.userAndRoles.servicesAccounts,
    text: 'Services Accounts',
    hidden: () => shouldMenuShow('user-and-roles')
  },
  {
    icon: <Avatar className="me-1" icon={<IconRoles size={16} />} />,
    id: navIds.userAndRoles.roles,
    navLink: allRoutes.userAndRoles.roles,
    text: 'Roles',
    hidden: () => shouldMenuShow('user-and-roles')
  },
  {
    icon: <Avatar className="me-1" icon={<IconRolesBindings size={16} />} />,
    id: navIds.userAndRoles.rolesBindings,
    navLink: allRoutes.userAndRoles.rolesBindings,
    text: 'Roles Bindings',
    hidden: () => shouldMenuShow('user-and-roles')
  },
  {
    icon: <Avatar className="me-1" icon={<IconClusterRoles size={16} />} />,
    id: navIds.userAndRoles.clusterRoles,
    navLink: allRoutes.userAndRoles.clusterRoles,
    text: 'Cluster Roles',
    hidden: () => shouldMenuShow('user-and-roles')
  },
  {
    icon: <Avatar className="me-1" icon={<IconClusterRolesBindings size={16} />} />,
    id: navIds.userAndRoles.clusterRolesBindings,
    navLink: allRoutes.userAndRoles.clusterRolesBindings,
    text: 'Cluster Roles Bindings',
    hidden: () => shouldMenuShow('user-and-roles')
  }
];

export { UserAndRolesNav };
