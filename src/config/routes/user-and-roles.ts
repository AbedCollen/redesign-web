/* eslint-disable import/max-dependencies */
import { lazy } from 'react';

import { allRoutes, navIds } from '@config/constants';

import type { CustomRouteType } from './index';

export const UserAndRolesRoute: CustomRouteType[] = [
  {
    component: lazy(() => import('@views/user-and-roles/users/index.js').then((m) => ({
      default: m.UsersMain
    }))),
    path: allRoutes.userAndRoles.users,
    title: 'User and Roles - Users'
  },
  {
    component: lazy(() => import('@views/user-and-roles/service-accounts/index.js').then((m) => ({
      default: m.ServiceAccountsMain
    }))),
    path: allRoutes.userAndRoles.servicesAccounts,
    title: 'User and Roles - Services Accounts'
  },
  {
    component: lazy(() => import(
      '@views/user-and-roles/service-accounts/edit-service-accounts.js'
    ).then((m) => ({ default: m.EditServiceAccountsMain }))),
    path: allRoutes.userAndRoles.editServiceAccounts,
    meta: {
      groupId: 'sample-group',
      navId: navIds.userAndRoles.servicesAccounts
    },
    title: 'User and Roles - Services Accounts Edit'
  },
  {
    component: lazy(() => import(
      '@views/user-and-roles/service-accounts/add-service-accounts.js'
    ).then((m) => ({ default: m.AddServiceAccountsMain }))),
    path: allRoutes.userAndRoles.addServiceAccounts,
    meta: {
      groupId: 'sample-group',
      navId: navIds.userAndRoles.servicesAccounts
    },
    title: 'User and Roles - Services Accounts Add'
  },
  {
    component: lazy(() => import('@views/user-and-roles/service-accounts/detail/index.js').then(
      (m) => ({ default: m.ServiceAccountsDetailMain })
    )),
    path: allRoutes.userAndRoles.servicesAccountsDetail,
    meta: {
      groupId: 'sample-group',
      navId: navIds.userAndRoles.servicesAccounts
    },
    title: 'User and Roles - Services Accounts Detail'
  },
  {
    component: lazy(() => import(
      '@views/user-and-roles/service-accounts/detail/edit-resources.js'
    ).then((m) => ({ default: m.EditResourcesMain }))),
    path: allRoutes.userAndRoles.editservicesAccountsDetail,
    title: 'User and Roles - Services Accounts Detail Edit Resources',
    meta: {
      groupId: 'sample-group',
      navId: navIds.userAndRoles.servicesAccounts
    }
  },
  {
    component: lazy(() => import(
      '@views/user-and-roles/service-accounts/detail/secret-detail/index.js'
    ).then((m) => ({ default: m.SecretDetailMain }))),
    path: allRoutes.userAndRoles.serviceAccountsDetailSecretDetail,
    meta: {
      groupId: 'sample-group',
      navId: navIds.userAndRoles.servicesAccounts
    },
    title: 'User and Roles - Secret Detail'
  },
  {
    component: lazy(() => import(
      '@views/user-and-roles/service-accounts/detail/secret-detail/edit-resources.js'
    ).then((m) => ({ default: m.EditResourcesMain }))),
    path: allRoutes.userAndRoles.editservicesAccountsSecretDetail,
    title: 'User and Roles - Services Accounts Secret Detail Edit Resources',
    meta: {
      groupId: 'sample-group',
      navId: navIds.userAndRoles.servicesAccounts
    }
  },
  {
    component: lazy(() => import('@views/user-and-roles/roles/index.js').then((m) => ({
      default: m.RolesMain
    }))),
    path: allRoutes.userAndRoles.roles,
    title: 'User and Roles - Roles'
  },
  {
    component: lazy(() => import('@views/user-and-roles/roles/detail/index.js').then((m) => ({
      default: m.RolesDetailMain
    }))),
    meta: {
      groupId: 'roles-group',
      navId: navIds.userAndRoles.roles
    },
    path: allRoutes.userAndRoles.rolesDetail,
    title: 'User and Roles - Roles Detail'
  },
  {
    component: lazy(() => import('@views/user-and-roles/roles/detail/edit-resources.js').then(
      (m) => ({
        default: m.EditResourcesMain
      })
    )),
    meta: {
      groupId: 'roles-group',
      navId: navIds.userAndRoles.roles
    },
    path: allRoutes.userAndRoles.rolesDetailEdit,
    title: 'User and Roles - Roles Detail'
  },
  {
    component: lazy(() => import('@views/user-and-roles/roles-bindings/index.js').then((m) => ({
      default: m.RolesBindingsMain
    }))),
    path: allRoutes.userAndRoles.rolesBindings,
    title: 'User and Roles - Roles Bindings'
  },
  {
    component: lazy(() => import('@views/user-and-roles/roles-bindings/detail/index.js').then(
      (m) => ({ default: m.RolesBindingsDetailMain })
    )),
    meta: {
      groupId: 'roles-binding-group',
      navId: navIds.userAndRoles.rolesBindings
    },
    path: allRoutes.userAndRoles.rolesBindingsDetail,
    title: 'User and Roles - Roles Bindings Detail'
  },
  {
    component: lazy(() => import(
      '@views/user-and-roles/roles-bindings/detail/edit-resources.js'
    ).then((m) => ({ default: m.EditResourcesMain }))),
    meta: {
      groupId: 'roles-binding-group',
      navId: navIds.userAndRoles.rolesBindings
    },
    path: allRoutes.userAndRoles.rolesBindingsDetailEdit,
    title: 'User and Roles - Roles Bindings Detail'
  },
  {
    component: lazy(() => import(
      '@views/user-and-roles/roles-bindings/detail/resources-information/index.js'
    ).then((m) => ({ default: m.RolesBindingsResourceInformation }))),
    meta: {
      groupId: 'roles-binding-group',
      navId: navIds.userAndRoles.rolesBindings
    },
    path: allRoutes.userAndRoles.rolesBindingsDetailResourcesInformation,
    title: 'User and Roles - Roles Bindings - Resource Information'
  },
  {
    component: lazy(() => import(
      '@views/user-and-roles/roles-bindings/detail/resources-information/edit-resources.js'
    ).then((m) => ({ default: m.EditResourcesMain }))),
    meta: {
      groupId: 'roles-binding-group',
      navId: navIds.userAndRoles.rolesBindings
    },
    path: allRoutes.userAndRoles.rolesBindingsDetailResourcesInformationEdit,
    title: 'User and Roles - Roles Bindings - Resource Information'
  },
  {
    component: lazy(() => import('@views/user-and-roles/cluster-roles/index.js').then((m) => ({
      default: m.ClusterRolesMain
    }))),
    path: allRoutes.userAndRoles.clusterRoles,
    title: 'User and Roles - Cluster Roles'
  },
  {
    component: lazy(() => import('@views/user-and-roles/cluster-roles/detail/index.js').then(
      (m) => ({ default: m.ClusterRolesDetail })
    )),
    path: allRoutes.userAndRoles.clusterRolesDetail,
    title: 'User and Roles - Cluster Roles Detail',
    meta: { groupId: 'sample-group', navId: navIds.userAndRoles.clusterRoles }
  },
  {
    component: lazy(() => import(
      '@views/user-and-roles/cluster-roles/detail/edit-resources.js'
    ).then((m) => ({ default: m.EditResourcesMain }))),
    path: allRoutes.userAndRoles.editClusterRolesDetail,
    title: 'User and Roles - Cluster Roles Edit Resources',
    meta: { groupId: 'sample-group', navId: navIds.userAndRoles.clusterRoles }
  },

  {
    component: lazy(() => import('@views/user-and-roles/cluster-roles-bindings/index.js').then(
      (m) => ({ default: m.ClusterRolesBindingsMain })
    )),
    path: allRoutes.userAndRoles.clusterRolesBindings,
    title: 'User and Roles - Cluster Roles Bindings'
  },
  {
    component: lazy(() => import(
      '@views/user-and-roles/cluster-roles-bindings/detail/index.js'
    ).then((m) => ({ default: m.ClusterRolesBindingsDetail }))),
    path: allRoutes.userAndRoles.clusterRolesBindingsDetail,
    title: 'User and Roles - Cluster Roles Bindings Detail',
    meta: {
      groupId: 'sample-group',
      navId: navIds.userAndRoles.clusterRolesBindings
    }
  },
  {
    component: lazy(() => import(
      '@views/user-and-roles/cluster-roles-bindings/detail/edit-resources.js'
    ).then((m) => ({ default: m.EditResourcesMain }))),
    path: allRoutes.userAndRoles.editClusterRolesBindingsDetail,
    title: 'User and Roles - Cluster Roles Bindings Edit Resources',
    meta: {
      groupId: 'sample-group',
      navId: navIds.userAndRoles.clusterRolesBindings
    }
  },
  {
    component: lazy(() => import(
      '@views/user-and-roles/cluster-roles-bindings/detail/resource-information/index.js'
    ).then((m) => ({ default: m.ClusterRolesBindingsResourceInformation }))),
    path: allRoutes.userAndRoles.clusterRolesBindingsResourceInformation,
    title: 'User and Roles - Cluster Roles Bindings Resources Information',
    meta: {
      groupId: 'sample-group',
      navId: navIds.userAndRoles.clusterRolesBindings
    }
  }
];
