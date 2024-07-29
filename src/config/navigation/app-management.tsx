import { CircleFill } from '@nxweb/icons/bootstrap';
import { Settings } from '@nxweb/icons/feather';

import { Avatar } from '@components/avatar';
import type { NavigationConfig as NavigationConfigType } from '@layouts/types';

import { allRoutes, navIds, shouldMenuShow } from '../constants';

const AppManagementNav: NavigationConfigType = [
  {
    icon: <Avatar className="me-1" icon={<Settings size={16} />} />,
    id: navIds.appManagement.dashboard,
    navLink: allRoutes.appManagement.dashboard,
    text: 'Dashboard',
    hidden: () => shouldMenuShow('app-management')
  },
  {
    icon: <Avatar className="me-1" icon={<Settings size={16} />} />,
    id: navIds.appManagement.applications,
    navLink: allRoutes.appManagement.applications,
    text: 'Applications',
    hidden: () => shouldMenuShow('app-management')
  },
  {
    icon: <Avatar className="me-1" icon={<Settings size={16} />} />,
    id: navIds.appManagement.userManagement,
    navLink: allRoutes.appManagement.userManagement,
    text: 'User Management',
    hidden: () => shouldMenuShow('app-management')
  },
  {
    icon: <Avatar className="me-1" icon={<Settings size={16} />} />,
    id: 'app-management-settings',
    text: 'Settings',
    hidden: () => shouldMenuShow('app-management'),
    children: [
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.settingRepositories,
        text: 'Repositories',
        navLink: allRoutes.appManagement.settingRepositories
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.settingCertificates,
        text: 'Certificates',
        navLink: allRoutes.appManagement.settingCertificates
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.settingClusters,
        text: 'Clusters',
        navLink: allRoutes.appManagement.settingClusters
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.settingProjects,
        text: 'Projects',
        navLink: allRoutes.appManagement.settingProjects
      }
    ]
  },
  {
    icon: <Avatar className="me-1" icon={<Settings size={16} />} />,
    id: 'app-management-help',
    text: 'Help',
    hidden: () => shouldMenuShow('app-management'),
    children: [
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.helpOverview,
        text: 'Overview',
        navLink: allRoutes.appManagement.helpOverview
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.helpUnderstandTheBasic,
        text: 'Understand the Basic',
        navLink: allRoutes.appManagement.helpUnderstandTheBasic
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.helpCoreConcept,
        text: 'Core Concept',
        navLink: allRoutes.appManagement.helpCoreConcept
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.helpGettingStarted,
        text: 'Getting Started',
        navLink: allRoutes.appManagement.helpGettingStarted
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.helpOperatorManual,
        text: 'Operator Manual',
        navLink: allRoutes.appManagement.helpOperatorManual
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.helpUserGuide,
        text: 'User Guide',
        navLink: allRoutes.appManagement.helpUserGuide
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.helpDeveloperGuide,
        text: 'Developer Guide',
        navLink: allRoutes.appManagement.helpDeveloperGuide
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.helpFAQ,
        text: 'FAQ',
        navLink: allRoutes.appManagement.helpFAQ
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.helpSecurityConsideration,
        text: 'Security Consideration',
        navLink: allRoutes.appManagement.helpSecurityConsideration
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.helpSupport,
        text: 'Support',
        navLink: allRoutes.appManagement.helpSupport
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.helpRoadmap,
        text: 'Roadmap',
        navLink: allRoutes.appManagement.helpRoadmap
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.helpReleases,
        text: 'Releases',
        navLink: allRoutes.appManagement.helpReleases
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.appManagement.helpBlog,
        text: 'Blog',
        navLink: allRoutes.appManagement.helpBlog
      }
    ]
  }
];

export { AppManagementNav };
