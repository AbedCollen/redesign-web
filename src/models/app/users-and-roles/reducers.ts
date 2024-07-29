import { combineReducers } from 'redux';

import {
  ClusterRolesCommand,
  ClusterRolesDefault,
  ClusterRolesReducer
} from './cluster-roles/reducers';
import {
  ClusterRolesBindingsCommand,
  ClusterRolesBindingsDefault,
  ClusterRolesBindingsReducer
} from './cluster-roles-bindings/reducers';
import { RolesCommand, RolesDefault, RolesReducer } from './roles/reducers';
import {
  RolesBindingsCommand,
  RolesBindingsDefault,
  RolesBindingsReducer
} from './roles-bindings/reducer';
import {
  ServiceAccountsCommand,
  ServiceAccountsDefault,
  ServiceAccountsReducer
} from './service-accounts/reducers';
import { UsersCommand, UsersDefault, UsersReducer } from './users/reducers';

import type { UserAndRolesModel } from './types';

const userAndRolesReducer = combineReducers({
  clusterRoles: ClusterRolesReducer,
  clusterRolesBindings: ClusterRolesBindingsReducer,
  roles: RolesReducer,
  rolesBindings: RolesBindingsReducer,
  serviceAccounts: ServiceAccountsReducer,
  users: UsersReducer
});

const userAndRolesDefault: UserAndRolesModel = {
  clusterRoles: ClusterRolesDefault,
  clusterRolesBindings: ClusterRolesBindingsDefault,
  roles: RolesDefault,
  rolesBindings: RolesBindingsDefault,
  serviceAccounts: ServiceAccountsDefault,
  users: UsersDefault
};

const userAndRolesCommand = {
  clusterRoles: ClusterRolesCommand,
  clusterRolesBindings: ClusterRolesBindingsCommand,
  roles: RolesCommand,
  rolesBindings: RolesBindingsCommand,
  serviceAccounts: ServiceAccountsCommand,
  users: UsersCommand
};

export { userAndRolesCommand, userAndRolesDefault, userAndRolesReducer };
