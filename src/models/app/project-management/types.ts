import type { CertificateModel } from './certificate/types';
import type { ConfigmapModel } from './configmap/types';
import type { DeploymentAction, DeploymentModel } from './deployment/types';
import type { HpaModel } from './hpa/types';
import type { IngressModel } from './ingress/types';
import type { ProjectsModel } from './projects/types';
import type { RegistryModel } from './registry/types';
import type { SecretModel } from './secret/types';
import type { ServiceDiscoveryModel } from './service-discovery/types';
import type { VolumeModel } from './volume/types';

interface ProjectManagementModel {
  certificate?: CertificateModel
  configmap?: ConfigmapModel
  deployment?: DeploymentModel
  hpa?: HpaModel
  ingress?: IngressModel
  projects?: ProjectsModel
  registry?: RegistryModel
  secret?: SecretModel
  servicediscovery?: ServiceDiscoveryModel
  volume?: VolumeModel
}

type ProjectManagementAction = DeploymentAction;

export type { ProjectManagementModel, ProjectManagementAction };
