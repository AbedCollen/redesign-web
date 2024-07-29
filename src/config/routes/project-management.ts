/* eslint-disable import/max-dependencies */
import { lazy } from 'react';

import { allRoutes, navIds } from '@config/constants';

import type { CustomRouteType } from '.';

export const ProjectManagementRoute: CustomRouteType[] = [
  {
    component: lazy(() => import('@views/project-management/projects/index.js').then((m) => ({
      default: m.ProjectsMain
    }))),
    path: allRoutes.projectManagement.projects,
    title: 'Projects'
  },
  {
    component: lazy(() => import('@views/project-management/deployment/index.js').then((m) => ({
      default: m.DeploymentMain
    }))),
    path: allRoutes.projectManagement.deployment,
    title: 'Project Management - Deployment'
  },
  {
    component: lazy(() => import('@views/project-management/stateful/index.js').then((m) => ({
      default: m.StatefulMain
    }))),
    path: allRoutes.projectManagement.stateful,
    title: 'Project Management - Stateful'
  },
  {
    component: lazy(() => import('@views/project-management/daemon/index.js').then((m) => ({
      default: m.DaemonMain
    }))),
    path: allRoutes.projectManagement.daemon,
    title: 'Project Management - Daemon'
  },
  {
    component: lazy(() => import('@views/project-management/volume/index.js').then((m) => ({
      default: m.VolumeMain
    }))),
    path: allRoutes.projectManagement.volume,
    title: 'Project Management - Volume'
  },
  {
    component: lazy(() => import('@views/project-management/volume/detail/index.js').then((m) => ({
      default: m.VolumeDetailMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.projectManagement.volume },
    path: allRoutes.projectManagement.volumeDetail,
    title: 'Project Management - Volume Detail'
  },
  {
    component: lazy(() => import('@views/project-management/volume/addVolume.js').then((m) => ({
      default: m.VolumeAddMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.projectManagement.volume },
    path: allRoutes.projectManagement.volumeAdd,
    title: 'Project Management - Add Volume'
  },
  {
    component: lazy(() => import('@views/project-management/secret/index.js').then((m) => ({
      default: m.SecretMain
    }))),
    path: allRoutes.projectManagement.secret,
    title: 'Project Management - Secret'
  },
  {
    component: lazy(() => import('@views/project-management/secret/add-secret-form.js').then(
      (m) => ({ default: m.AddSecretFormMain })
    )),
    meta: { navId: navIds.projectManagement.secret },
    path: allRoutes.projectManagement.addSecretForm,
    title: 'Project Management - Add Secret Form'
  },
  {
    component: lazy(() => import('@views/project-management/secret/edit-secret-form.js').then(
      (m) => ({ default: m.EditSecretFormMain })
    )),
    meta: { navId: navIds.projectManagement.secret },
    path: allRoutes.projectManagement.editSecretForm,
    title: 'Project Management - Edit Secret Form'
  },
  {
    component: lazy(() => import('@views/project-management/registry/index.js').then((m) => ({
      default: m.RegistryMain
    }))),
    path: allRoutes.projectManagement.registry,
    title: 'Project Management - Registry'
  },
  {
    component: lazy(() => import('@views/project-management/registry/add-credential.js').then(
      (m) => ({ default: m.AddCredentialMain })
    )),
    meta: { groupId: 'sample-group', navId: navIds.projectManagement.registry },
    path: allRoutes.projectManagement.addCredential,
    title: 'Project Management - Add Credential'
  },
  {
    component: lazy(() => import('@views/project-management/deployment/index.js').then((m) => ({
      default: m.DeploymentMain
    }))),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.deployment
    },
    path: '/sample-child',
    title: 'Sample Child'
  },
  {
    component: lazy(() => import('@views/project-management/configmap/index.js').then((m) => ({
      default: m.ConfigmapMain
    }))),
    path: allRoutes.projectManagement.configmap,
    title: 'Project Management - Config Map'
  },
  {
    component: lazy(() => import('@views/project-management/configmap/add-config-map.js').then(
      (m) => ({ default: m.AddConfigMap })
    )),
    meta: { groupId: 'add-group', navId: navIds.projectManagement.configmap },
    path: allRoutes.projectManagement.addConfigMap,
    title: 'Project Management - Add Config Map'
  },
  {
    component: lazy(() => import('@views/project-management/configmap/edit-config-map.js').then(
      (m) => ({ default: m.EditConfigMap })
    )),
    meta: { groupId: 'add-group', navId: navIds.projectManagement.configmap },
    path: allRoutes.projectManagement.editConfigMap,
    title: 'Project Management - Edit Config Map'
  },
  {
    component: lazy(() => import('@views/project-management/ingress/index.js').then((m) => ({
      default: m.IngressMain
    }))),
    path: allRoutes.projectManagement.ingress,
    title: 'Project Management - Ingress'
  },
  {
    component: lazy(() => import('@views/project-management/ingress/addIngress.js').then((m) => ({
      default: m.IngressAddMain
    }))),
    meta: { groupId: 'add-group', navId: navIds.projectManagement.ingress },
    path: allRoutes.projectManagement.ingressAdd,
    title: 'Project Management - Add Ingress'
  },
  {
    component: lazy(() => import('@views/project-management/ingress/detail/editIngress.js').then(
      (m) => ({ default: m.IngressEditMain })
    )),
    meta: { groupId: 'add-group', navId: navIds.projectManagement.ingress },
    path: allRoutes.projectManagement.ingressEdit,
    title: 'Project Management - Edit Ingress'
  },
  {
    component: lazy(() => import('@views/project-management/ingress/detail/index.js').then((m) => ({
      default: m.IngressDetailMain
    }))),
    meta: { groupId: 'add-group', navId: navIds.projectManagement.ingress },
    path: allRoutes.projectManagement.ingressDetail,
    title: 'Project Management - Ingress Detail'
  },
  {
    component: lazy(() => import('@views/project-management/service-discovery/index.js').then(
      (m) => ({ default: m.ServiceDiscoveryMain })
    )),
    path: allRoutes.projectManagement.serviceDiscovery,
    title: 'Project Management - Service Discovery'
  },
  {
    component: lazy(() => import(
      '@views/project-management/service-discovery/detail/nameDetail.js'
    ).then((m) => ({ default: m.ServiceDiscoveryDetailMain }))),
    meta: {
      groupId: 'service-discovery-group',
      navId: navIds.projectManagement.serviceDiscovery
    },
    path: allRoutes.projectManagement.serviceDiscoveryDetail,
    title: 'Project Management - Service Discovery Detail'
  },
  {
    component: lazy(() => import(
      '@views/project-management/service-discovery/detail/clusterDetail.js'
    ).then((m) => ({ default: m.ServiceDiscoveryClusterDetail }))),
    meta: {
      groupId: 'service-discovery-group',
      navId: navIds.projectManagement.serviceDiscovery
    },
    path: allRoutes.projectManagement.serviceDiscoveryClusterDetail,
    title: 'Project Management - Service Discovery Cluster Detail'
  },
  {
    component: lazy(() => import(
      '@views/project-management/service-discovery/add-service-discovery.js'
    ).then((m) => ({ default: m.AddServiceDiscovery }))),
    meta: {
      groupId: 'service-discovery-group',
      navId: navIds.projectManagement.serviceDiscovery
    },
    path: allRoutes.projectManagement.addServiceDiscovery,
    title: 'Project Management - Add Service Discovery'
  },
  {
    component: lazy(() => import(
      '@views/project-management/service-discovery/edit-service-discovery.js'
    ).then((m) => ({ default: m.EditServiceDiscovery }))),
    meta: {
      groupId: 'service-discovery-group',
      navId: navIds.projectManagement.serviceDiscovery
    },
    path: allRoutes.projectManagement.editServiceDiscovery,
    title: 'Project Management - Edit Service Discovery'
  },
  {
    component: lazy(() => import('@views/project-management/hpa/index.js').then((m) => ({
      default: m.HpaMain
    }))),
    path: allRoutes.projectManagement.hpa,
    title: 'Project Management - HPA'
  },
  {
    component: lazy(() => import('@views/project-management/hpa/detail/index.js').then((m) => ({
      default: m.HpaDetailMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.projectManagement.hpa },
    path: allRoutes.projectManagement.detailHpa,
    title: 'Project Management - HPA Detail'
  },
  {
    component: lazy(() => import('@views/project-management/hpa/add-hpa.js').then((m) => ({
      default: m.AddHpaMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.projectManagement.hpa },
    path: allRoutes.projectManagement.addHpa,
    title: 'Project Management - Add HPA'
  },
  {
    component: lazy(() => import('@views/project-management/hpa/edit-hpa.js').then((m) => ({
      default: m.EditHpaMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.projectManagement.hpa },
    path: allRoutes.projectManagement.editHpa,
    title: 'Project Management - Edit HPA'
  },
  {
    component: lazy(() => import('@views/project-management/certificate/index.js').then((m) => ({
      default: m.CertificateMain
    }))),
    path: allRoutes.projectManagement.certificate,
    title: 'Project Management - Certificate'
  },
  {
    component: lazy(() => import('@views/project-management/certificate/add-certificate.js').then(
      (m) => ({ default: m.AddCertificateMain })
    )),
    meta: { groupId: 'add-group', navId: navIds.projectManagement.certificate },
    path: allRoutes.projectManagement.addCertificate,
    title: 'Project Management - Add Certificate'
  },
  {
    component: lazy(() => import('@views/project-management/certificate/edit-certificate.js').then(
      (m) => ({ default: m.EditCertificateMain })
    )),
    meta: { groupId: 'add-group', navId: navIds.projectManagement.certificate },
    path: allRoutes.projectManagement.editCertificate,
    title: 'Project Management - Edit Certificate'
  },
  {
    component: lazy(() => import('@views/project-management/deployment/detail/index.js').then(
      (m) => ({ default: m.DeploymentDetailMain })
    )),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.deployment
    },
    path: allRoutes.projectManagement.deploymentDetail,
    title: 'Project Management - Deployment Detail'
  },
  {
    component: lazy(() => import('@views/project-management/deployment/detail/pod-detail/index.js').then(
      (m) => ({ default: m.PodDetailMain })
    )),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.deployment
    },
    path: allRoutes.projectManagement.podDetail,
    title: 'Project Management - Pod Detail'
  },
  {
    component: lazy(() => import('@views/project-management/deployment/detail/pod-detail/container-detail/index.js').then(
      (m) => ({ default: m.ContainerDetailMain })
    )),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.deployment
    },
    path: allRoutes.projectManagement.containerDetail,
    title: 'Project Management - Container Detail'
  },
  {
    component: lazy(() => import('@views/project-management/stateful/detail/index.js').then(
      (m) => ({ default: m.StatefulDetailMain })
    )),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.stateful
    },
    path: allRoutes.projectManagement.statefulDetail,
    title: 'Project Management - Stateful Detail'
  },
  {
    component: lazy(() => import('@views/project-management/stateful/add/index.js').then(
      (m) => ({ default: m.StateFulAddMain })
    )),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.stateful
    },
    path: allRoutes.projectManagement.statefulAdd,
    title: 'Project Management - Add Stateful'
  },
  {
    component: lazy(() => import('@views/project-management/daemon/add/index.js').then(
      (m) => ({ default: m.DaemonAddMain })
    )),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.daemon
    },
    path: allRoutes.projectManagement.daemonAdd,
    title: 'Project Management - Add Daemon'
  },
  {
    component: lazy(() => import('@views/project-management/stateful/detail/pod-detail/index.js').then(
      (m) => ({ default: m.PodDetailMain })
    )),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.stateful
    },
    path: allRoutes.projectManagement.statefulPodDetail,
    title: 'Project Management - Pod Detail'
  },
  {
    component: lazy(() => import('@views/project-management/stateful/detail/pod-detail/container-detail/index.js').then(
      (m) => ({ default: m.ContainerDetailMain })
    )),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.stateful
    },
    path: allRoutes.projectManagement.statefulContainerDetail,
    title: 'Project Management - Container Detail'
  },
  {
    component: lazy(() => import('@views/project-management/daemon/add/index.js').then(
      (m) => ({ default: m.DaemonAddMain })
    )),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.daemon
    },
    path: allRoutes.projectManagement.daemonAdd,
    title: 'Project Management - Add Daemon'
  },
  {
    component: lazy(() => import('@views/project-management/daemon/detail/index.js').then(
      (m) => ({ default: m.DaemonDetailMain })
    )),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.daemon
    },
    path: allRoutes.projectManagement.daemonDetail,
    title: 'Project Management - Daemon Detail'
  },
  {
    component: lazy(() => import('@views/project-management/daemon/detail/pod-detail/index.js').then(
      (m) => ({ default: m.PodDetailMain })
    )),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.daemon
    },
    path: allRoutes.projectManagement.daemonPodDetail,
    title: 'Project Management - Pod Detail'
  },
  {
    component: lazy(() => import('@views/project-management/daemon/detail/pod-detail/container-detail/index.js').then(
      (m) => ({ default: m.ContainerDetailMain })
    )),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.daemon
    },
    path: allRoutes.projectManagement.daemonContainerDetail,
    title: 'Project Management - Container Detail'
  },
  {
    // eslint-disable-next-line import/max-dependencies
    component: lazy(() => import('@views/project-management/deployment/add/index.js').then((m) => ({
      default: m.DeploymentAddMain
    }))),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.deployment
    },
    path: allRoutes.projectManagement.deploymentAdd,
    title: 'Project Management - Add Deployment'
  },
  {
    // eslint-disable-next-line import/max-dependencies
    component: lazy(() => import('@views/project-management/deployment/edit/index.js').then((m) => ({
      default: m.EditDeployment
    }))),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.deployment
    },
    path: allRoutes.projectManagement.deploymentEdit,
    title: 'Project Management - Edit Deployment'
  },
  {
    component: lazy(() => import('@views/project-management/stateful/edit/index.js').then((m) => ({
      default: m.EditStateful
    }))),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.stateful
    },
    path: allRoutes.projectManagement.statefulEdit,
    title: 'Project Management - Edit Stateful'
  },
  {
    component: lazy(() => import('@views/project-management/daemon/edit/index.js').then((m) => ({
      default: m.EditDaemon
    }))),
    meta: {
      groupId: 'sample-group',
      navId: navIds.projectManagement.daemon
    },
    path: allRoutes.projectManagement.daemonEdit,
    title: 'Project Management - Edit Daemon'
  }
];
