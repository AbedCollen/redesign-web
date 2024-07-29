import { TrendingUP } from '@nxweb/icons/feather';

import { Avatar } from '@components/avatar';
import { IconService, IconTraces } from '@components/icon';
import type { NavigationConfig as NavigationConfigType } from '@layouts/types';

import { allRoutes, navIds, shouldMenuShow } from '../constants';

const DistributionTracingNav: NavigationConfigType = [
  {
    icon: <Avatar className="me-1" icon={<IconService size={16} />} />,
    id: navIds.distributionTracing.service,
    navLink: allRoutes.distributionTracing.service,
    text: 'Service',
    hidden: () => shouldMenuShow('distribution-tracing')
  },
  {
    icon: <Avatar className="me-1" icon={<IconTraces size={16} />} />,
    id: navIds.distributionTracing.traces,
    navLink: allRoutes.distributionTracing.traces,
    text: 'Traces',
    hidden: () => shouldMenuShow('distribution-tracing')
  },
  {
    icon: <Avatar className="me-1" icon={<TrendingUP size={16} />} />,
    id: navIds.distributionTracing.livemap,
    navLink: allRoutes.distributionTracing.livemap,
    text: 'Live Map',
    hidden: () => shouldMenuShow('distribution-tracing')
  }
];

export { DistributionTracingNav };
