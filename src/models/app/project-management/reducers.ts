import { combineReducers } from 'redux';

import { CertificateCommand, CertificateDefault, CertificateReducer } from './certificate/reducers';
import {
  ConfigmapCommand,
  ConfigmapDefault,
  ConfigmapReducer
} from './configmap/reducers';
import {
  DeploymentCommand,
  DeploymentDefault,
  DeploymentReducer
} from './deployment/reducers';
import { HpaCommand, HpaDefault, HpaReducer } from './hpa/reducers';
import { IngressCommand, IngressDefault, IngressReducer } from './ingress/reducers';
import { ProjectsCommand, ProjectsDefault, ProjectsReducer } from './projects/reducers';
import { RegistryCommand, RegistryDefault, RegistryReducer } from './registry/reducers';
import { SecretCommand, SecretDefault, SecretReducer } from './secret/reducers';
import { ServiceDiscoveryCommand, ServiceDiscoveryDefault, ServiceDiscoveryReducer } from './service-discovery/reducers';
import { VolumeCommand, VolumeDefault, VolumeReducer } from './volume/reducers';

import type { ProjectManagementModel } from './types';

const projectManagementReducer = combineReducers({
  certificate: CertificateReducer,
  configmap: ConfigmapReducer,
  deployment: DeploymentReducer,
  hpa: HpaReducer,
  ingress: IngressReducer,
  projects: ProjectsReducer,
  registry: RegistryReducer,
  secret: SecretReducer,
  servicediscovery: ServiceDiscoveryReducer,
  volume: VolumeReducer
});

const projectManagementDefault: ProjectManagementModel = {
  certificate: CertificateDefault,
  configmap: ConfigmapDefault,
  deployment: DeploymentDefault,
  hpa: HpaDefault,
  ingress: IngressDefault,
  projects: ProjectsDefault,
  registry: RegistryDefault,
  secret: SecretDefault,
  servicediscovery: ServiceDiscoveryDefault,
  volume: VolumeDefault
};

const projectManagementCommand = {
  certificate: CertificateCommand,
  configmap: ConfigmapCommand,
  deployment: DeploymentCommand,
  hpa: HpaCommand,
  ingress: IngressCommand,
  projects: ProjectsCommand,
  registry: RegistryCommand,
  secret: SecretCommand,
  servicediscovery: ServiceDiscoveryCommand,
  volume: VolumeCommand
};

export {
  projectManagementReducer,
  projectManagementDefault,
  projectManagementCommand
};
