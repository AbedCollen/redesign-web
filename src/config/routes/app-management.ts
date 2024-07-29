/* eslint-disable import/max-dependencies */
import { lazy } from 'react';

import { allRoutes, navIds } from '@config/constants';

import type { CustomRouteType } from '.';

export const AppManagementRoute: CustomRouteType[] = [
  {
    component: lazy(() => import('@views/app-management/dashboard/index.js').then((m) => ({
      default: m.DashboardMain
    }))),
    path: allRoutes.appManagement.dashboard,
    title: 'App Management - Dashboard'
  },
  {
    component: lazy(() => import('@views/app-management/applications/index.js').then((m) => ({
      default: m.ApplicationsMain
    }))),
    path: allRoutes.appManagement.applications,
    title: 'App Management - Applications'
  },
  {
    component: lazy(() => import('@views/app-management/applications/sync/sync-all.js').then((m) => ({
      default: m.SyncAllMain
    }))),
    meta: {
      groupId: 'app-management-applications',
      navId: navIds.appManagement.applications
    },
    path: allRoutes.appManagement.applicationsSyncAll,
    title: 'App Management - Applications - Sync All'
  },
  {
    component: lazy(() => import('@views/app-management/applications/sync/sync-app.js').then((m) => ({
      default: m.SyncAppMain
    }))),
    meta: {
      groupId: 'app-management-applications',
      navId: navIds.appManagement.applications
    },
    path: allRoutes.appManagement.applicationsSyncApp,
    title: 'App Management - Applications - Sync App'
  },
  {
    component: lazy(() => import('@views/app-management/applications/sync/sync-app.js').then((m) => ({
      default: m.SyncAppMain
    }))),
    meta: {
      groupId: 'app-management-applications',
      navId: navIds.appManagement.applications
    },
    path: allRoutes.appManagement.applicationsSyncNodes,
    title: 'App Management - Applications - Sync App'
  },
  {
    component: lazy(() => import('@views/app-management/applications/detail/map-detail.js').then((m) => ({
      default: m.MapDetailMain
    }))),
    meta: {
      groupId: 'app-management-applications',
      navId: navIds.appManagement.applications
    },
    path: allRoutes.appManagement.applicationsMap,
    title: 'App Management - Applications Map'
  },
  {
    component: lazy(() => import('@views/app-management/applications/detail/index.js').then((m) => ({
      default: m.ApplicationsDetailMain
    }))),
    meta: {
      groupId: 'app-management-applications',
      navId: navIds.appManagement.applications
    },
    path: allRoutes.appManagement.applicationsDetail,
    title: 'App Management - Applications Detail'
  },
  {
    component: lazy(() => import('@views/app-management/applications/add-application.js').then((m) => ({
      default: m.AddApplicationMain
    }))),
    meta: {
      groupId: 'app-management-applications',
      navId: navIds.appManagement.applications
    },
    path: allRoutes.appManagement.applicationsAddApplication,
    title: 'App Management - Applications - Add App'
  },
  {
    component: lazy(() => import('@views/app-management/applications/guestbook/svc/index.js').then((m) => ({
      default: m.GuestBookSVCMain
    }))),
    meta: {
      groupId: 'app-management-applications',
      navId: navIds.appManagement.applications
    },
    path: allRoutes.appManagement.applicationGuestBookSVC,
    title: 'App Management - Applications - Guest Book - SVC'
  },
  {
    component: lazy(() => import('@views/app-management/applications/guestbook/deploy/index.js').then((m) => ({
      default: m.GuestBookDeployMain
    }))),
    meta: {
      groupId: 'app-management-applications',
      navId: navIds.appManagement.applications
    },
    path: allRoutes.appManagement.applicationGuestBookDeploy,
    title: 'App Management - Applications - Guest Book - SVC'
  },
  {
    component: lazy(() => import('@views/app-management/user-management/index.js').then((m) => ({
      default: m.UserManagementMain
    }))),
    path: allRoutes.appManagement.userManagement,
    title: 'App Management - User Management'
  },
  {
    component: lazy(() => import('@views/app-management/user-management/detail/index.js').then((m) => ({
      default: m.UserManagementDetailMain
    }))),
    meta: {
      groupId: 'app-management-user-management',
      navId: navIds.appManagement.userManagement
    },
    path: allRoutes.appManagement.userManagementDetail,
    title: 'App Management - User Management Detail'
  },
  {
    component: lazy(() => import('@views/app-management/settings/repositories/index.js').then((m) => ({
      default: m.RepositoriesMain
    }))),
    meta: {
      groupId: 'app-management-settings',
      navId: navIds.appManagement.settingRepositories
    },
    path: allRoutes.appManagement.settingRepositories,
    title: 'App Management - Settings - Repositories'
  },
  {
    component: lazy(() => import('@views/app-management/settings/repositories/add-repositories/add-ssh.js').then((m) => ({
      default: m.SSHAddMain
    }))),
    meta: {
      groupId: 'app-management-settings',
      navId: navIds.appManagement.settingRepositories
    },
    path: allRoutes.appManagement.settingRepositoriesAddSSH,
    title: 'App Management - Settings - Repositories - Add SSH'
  },
  {
    component: lazy(() => import('@views/app-management/settings/repositories/add-repositories/add-https.js').then((m) => ({
      default: m.HTTPSAddMain
    }))),
    meta: {
      groupId: 'app-management-settings',
      navId: navIds.appManagement.settingRepositories
    },
    path: allRoutes.appManagement.settingRepositoriesAddHTTPS,
    title: 'App Management - Settings - Repositories - Add HTTPS'
  },
  {
    component: lazy(() => import('@views/app-management/settings/repositories/add-repositories/add-github.js').then((m) => ({
      default: m.GithubAddMain
    }))),
    meta: {
      groupId: 'app-management-settings',
      navId: navIds.appManagement.settingRepositories
    },
    path: allRoutes.appManagement.settingRepositoriesAddGithub,
    title: 'App Management - Settings - Repositories - Add Github'
  },
  {
    component: lazy(() => import('@views/app-management/settings/certificates/index.js').then((m) => ({
      default: m.CertificatesMain
    }))),
    meta: {
      groupId: 'app-management-settings',
      navId: navIds.appManagement.settingCertificates
    },
    path: allRoutes.appManagement.settingCertificates,
    title: 'App Management - Settings - Certificates'
  },
  {
    component: lazy(() => import('@views/app-management/settings/certificates/add-certificates/add-tls.js').then((m) => ({
      default: m.CertificatesAddTLS
    }))),
    meta: {
      groupId: 'app-management-settings',
      navId: navIds.appManagement.settingCertificates
    },
    path: allRoutes.appManagement.settingCertificatesAddTLS,
    title: 'App Management - Settings - Certificates - Add TLS'
  },
  {
    component: lazy(() => import('@views/app-management/settings/certificates/add-certificates/add-ssh.js').then((m) => ({
      default: m.CertificatesAddSSH
    }))),
    meta: {
      groupId: 'app-management-settings',
      navId: navIds.appManagement.settingCertificates
    },
    path: allRoutes.appManagement.settingCertificatesAddSSH,
    title: 'App Management - Settings - Certificates - Add SSH'
  },
  {
    component: lazy(() => import('@views/app-management/settings/clusters/index.js').then((m) => ({
      default: m.ClustersMain
    }))),
    meta: {
      groupId: 'app-management-settings',
      navId: navIds.appManagement.settingClusters
    },
    path: allRoutes.appManagement.settingClusters,
    title: 'App Management - Settings - Clusters'
  },
  {
    component: lazy(() => import('@views/app-management/settings/clusters/detail/index.js').then((m) => ({
      default: m.ClustersDetailMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.appManagement.settingClusters },
    path: allRoutes.appManagement.detailClusters,
    title: 'App Management - Clusters Detail'
  },
  {
    component: lazy(() => import('@views/app-management/settings/projects/index.js').then((m) => ({
      default: m.ProjectsMain
    }))),
    meta: {
      groupId: 'app-management-settings',
      navId: navIds.appManagement.settingProjects
    },
    path: allRoutes.appManagement.settingProjects,
    title: 'App Management - Settings - Projects'
  },
  {
    component: lazy(() => import('@views/app-management/settings/projects/add-projects.js').then((m) => ({
      default: m.AddProjects
    }))),
    meta: { groupId: 'sample-group', navId: navIds.appManagement.settingProjects },
    path: allRoutes.appManagement.settingAddProjects,
    title: 'App Management - Projects Detail'
  },
  {
    component: lazy(() => import('@views/app-management/settings/projects/detail/index.js').then((m) => ({
      default: m.ProjectsDetailMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.appManagement.settingProjects },
    path: allRoutes.appManagement.settingProjectsDetail,
    title: 'App Management - Projects Detail'
  },
  {
    component: lazy(() => import('@views/app-management/help/overview/index.js').then((m) => ({
      default: m.OverviewMain
    }))),
    meta: {
      groupId: 'app-management-help',
      navId: navIds.appManagement.helpOverview
    },
    path: allRoutes.appManagement.helpOverview,
    title: 'App Management - Help - Overview'
  },
  {
    component: lazy(() => import('@views/app-management/help/understand-the-basic/index.js').then((m) => ({
      default: m.UnderstandTheBasicMain
    }))),
    meta: {
      groupId: 'app-management-help',
      navId: navIds.appManagement.helpUnderstandTheBasic
    },
    path: allRoutes.appManagement.helpUnderstandTheBasic,
    title: 'App Management - Help - Understand the Basic'
  },
  {
    component: lazy(() => import('@views/app-management/help/core-concept/index.js').then((m) => ({
      default: m.CoreConceptMain
    }))),
    meta: {
      groupId: 'app-management-help',
      navId: navIds.appManagement.helpCoreConcept
    },
    path: allRoutes.appManagement.helpCoreConcept,
    title: 'App Management - Help - Core Concept'
  },
  {
    component: lazy(() => import('@views/app-management/help/getting-started/index.js').then((m) => ({
      default: m.GettingStartedMain
    }))),
    meta: {
      groupId: 'app-management-help',
      navId: navIds.appManagement.helpGettingStarted
    },
    path: allRoutes.appManagement.helpGettingStarted,
    title: 'App Management - Help - Getting Started'
  },
  {
    component: lazy(() => import('@views/app-management/help/operator-manual/index.js').then((m) => ({
      default: m.OperatorManualMain
    }))),
    meta: {
      groupId: 'app-management-help',
      navId: navIds.appManagement.helpOperatorManual
    },
    path: allRoutes.appManagement.helpOperatorManual,
    title: 'App Management - Help - Operator Manual'
  },
  {
    component: lazy(() => import('@views/app-management/help/user-guide/index.js').then((m) => ({
      default: m.UserGuideMain
    }))),
    meta: {
      groupId: 'app-management-help',
      navId: navIds.appManagement.helpUserGuide
    },
    path: allRoutes.appManagement.helpUserGuide,
    title: 'App Management - Help - User Guide'
  },
  {
    component: lazy(() => import('@views/app-management/help/developer-guide/index.js').then((m) => ({
      default: m.DeveloperGuideMain
    }))),
    meta: {
      groupId: 'app-management-help',
      navId: navIds.appManagement.helpDeveloperGuide
    },
    path: allRoutes.appManagement.helpDeveloperGuide,
    title: 'App Management - Help - Developer Guide'
  },
  {
    component: lazy(() => import('@views/app-management/help/faq/index.js').then((m) => ({
      default: m.FaqMain
    }))),
    meta: {
      groupId: 'app-management-help',
      navId: navIds.appManagement.helpFAQ
    },
    path: allRoutes.appManagement.helpFAQ,
    title: 'App Management - Help - FAQ'
  },
  {
    component: lazy(() => import('@views/app-management/help/security-consideration/index.js').then((m) => ({
      default: m.SecurityConsiderationMain
    }))),
    meta: {
      groupId: 'app-management-help',
      navId: navIds.appManagement.helpSecurityConsideration
    },
    path: allRoutes.appManagement.helpSecurityConsideration,
    title: 'App Management - Help - Security Consideration'
  },
  {
    component: lazy(() => import('@views/app-management/help/support/index.js').then((m) => ({
      default: m.SupportMain
    }))),
    meta: {
      groupId: 'app-management-help',
      navId: navIds.appManagement.helpSupport
    },
    path: allRoutes.appManagement.helpSupport,
    title: 'App Management - Help - Support'
  },
  {
    component: lazy(() => import('@views/app-management/help/roadmap/index.js').then((m) => ({
      default: m.RoadmapMain
    }))),
    meta: {
      groupId: 'app-management-help',
      navId: navIds.appManagement.helpRoadmap
    },
    path: allRoutes.appManagement.helpRoadmap,
    title: 'App Management - Help - Roadmap'
  },
  {
    component: lazy(() => import('@views/app-management/help/releases/index.js').then((m) => ({
      default: m.ReleasesMain
    }))),
    meta: {
      groupId: 'app-management-help',
      navId: navIds.appManagement.helpReleases
    },
    path: allRoutes.appManagement.helpReleases,
    title: 'App Management - Help - Releases'
  },
  {
    component: lazy(() => import('@views/app-management/help/blog/index.js').then((m) => ({
      default: m.BlogMain
    }))),
    meta: {
      groupId: 'app-management-help',
      navId: navIds.appManagement.helpBlog
    },
    path: allRoutes.appManagement.helpBlog,
    title: 'App Management - Help - Blog'
  }
];
