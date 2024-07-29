import { CircleFill } from '@nxweb/icons/bootstrap';

import { Avatar } from '@components/avatar';
import { IconGraphMetric, IconNotification } from '@components/icon';
import type { NavigationConfig as NavigationConfigType } from '@layouts/types';

import { allRoutes, navIds, shouldMenuShow } from '../constants';

const MonitoringAlertingNav: NavigationConfigType = [
  {
    hidden: () => shouldMenuShow('monitoring-alerting'),
    icon: <Avatar className="me-1" icon={<IconGraphMetric size={16} />} />,
    id: navIds.monitoringAlerting.monitoringGraph,
    navLink: allRoutes.monitoringAlerting.monitoringGraph,
    text: 'Graph Metric'
  },
  {
    icon: <Avatar className="me-1" icon={<IconNotification size={16} />} />,
    id: 'storage-sample',
    text: 'Alerting',
    hidden: () => shouldMenuShow('monitoring-alerting'),
    children: [
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.monitoringAlerting.alertingRules,
        navLink: allRoutes.monitoringAlerting.alertingRules,
        text: 'Alerting Rules'
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.monitoringAlerting.alertingTriggers,
        navLink: allRoutes.monitoringAlerting.alertingTriggers,
        text: 'Triggered Alerts'
      },
      {
        icon: <CircleFill color="#4F7899" size={6} />,
        id: navIds.monitoringAlerting.alertingChannels,
        navLink: allRoutes.monitoringAlerting.alertingChannels,
        text: 'Alerting Channels'
      }
    ]
  }
];

export { MonitoringAlertingNav };
