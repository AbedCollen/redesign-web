import { combineReducers } from 'redux';

import { NodesCommand, NodesDefault, NodesReducer } from './nodes/reducers';
import { NamespacesCommand, NamespacesDefault, NamespacesReducer } from './namespaces/reducers';
import { PersistentVolumeCommand, PersistentVolumeDefault, PersistentVolumeReducer } from './storages/persistent-volume/reducers';
import { StorageClassesCommand, StorageClassesDefault, StorageClassesReducer } from './storages/storage-classes/reducers';

import type { ClusterManagementModel } from './types';
import { AlertEventCommand, AlertEventDefault, AlertEventReducer } from './dashboard/eventAlert/reducers';

const clusterManagementReducer = combineReducers({
  nodes: NodesReducer,
  namespaces: NamespacesReducer,
  persistentVolume: PersistentVolumeReducer,
  storageClasses: StorageClassesReducer,
  eventAlert: AlertEventReducer,
});

const clusterManagementDefault: ClusterManagementModel = {
  nodes: NodesDefault,
  namespaces: NamespacesDefault,
  eventAlert: AlertEventDefault,
  persistentVolume: PersistentVolumeDefault,
  storageClasses: StorageClassesDefault
};

const clusterManagementCommand = {
  nodes: NodesCommand,
  namespaces: NamespacesCommand,
  persistentVolume: PersistentVolumeCommand,
  storageClasess: StorageClassesCommand,
  eventAlert: AlertEventCommand
};

export {
  clusterManagementReducer,
  clusterManagementDefault,
  clusterManagementCommand
};
