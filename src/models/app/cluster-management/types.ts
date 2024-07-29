import type { NodesAction, NodesModel } from './nodes/types';
import type { NamespacesAction, NamespacesDataModel, NamespacesModel } from './namespaces/types';
import type { PersistentVolumeAction, PersistentVolumeDataModel, PersistentVolumeModel } from './storages/persistent-volume/types'
import type { StorageClassesAction, StorageClassesDataModel, StorageClassesModel } from './storages/storage-classes/types'
import { AlertEventModel } from './dashboard/eventAlert/types'
interface ClusterManagementModel {
  nodes?: NodesModel,
  namespaces?: NamespacesModel,
  persistentVolume?: PersistentVolumeModel,
  storageClasses?: StorageClassesModel,
  eventAlert?: AlertEventModel
}

type ClusterManagementAction = NodesAction;

export type { ClusterManagementModel, ClusterManagementAction };
