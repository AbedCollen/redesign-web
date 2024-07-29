import type {
  ClusterRolesAction,
  ClusterRolesModel
} from './cluster-roles/types';
import type {
  ClusterRolesBindingsAction,
  ClusterRolesBindingsModel
} from './cluster-roles-bindings/types';
import type { RolesAction, RolesModel } from './roles/types';
import type { RolesBindingsModel } from './roles-bindings/types';
import type {
  ServiceAccountsAction,
  ServiceAccountsModel
} from './service-accounts/types';
import type { UsersModel } from './users/types';

interface UserAndRolesModel {
  clusterRoles?: ClusterRolesModel
  clusterRolesBindings?: ClusterRolesBindingsModel
  roles?: RolesModel
  rolesBindings?: RolesBindingsModel
  serviceAccounts?: ServiceAccountsModel
  users?: UsersModel
}

type UserAndRolesAction =
  | ClusterRolesAction
  | ClusterRolesBindingsAction
  | RolesAction
  | ServiceAccountsAction;

export type { UserAndRolesModel, UserAndRolesAction };
