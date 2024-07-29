import { lazy } from 'react';

import { allRoutes, navIds } from '@config/constants';

import type { CustomRouteType } from '.';

export const MonitoringAlertingRoute: CustomRouteType[] = [
  {
    component: lazy(() => import('@views/monitoring-alerting/monitoring-graph/index.js').then((m) => ({ default: m.MonitoringGraphMain }))),
    path: allRoutes.monitoringAlerting.monitoringGraph,
    title: 'Monitoring and Alerting - Monitoring Graph'
  },
  {
    component: lazy(() => import('@views/monitoring-alerting/monitoring-graph/new-variable.js').then((m) => ({ default: m.NewVariableMain }))),
    path: allRoutes.monitoringAlerting.addNewVariable,
    meta: { groupId: 'sample-group', navId: navIds.monitoringAlerting.monitoringGraph },
    title: 'Monitoring and Alerting - New Variable'
  },
  {
    component: lazy(() => import('@views/monitoring-alerting/monitoring-graph/edit-variable.js').then((m) => ({ default: m.EditVariableMain }))),
    path: allRoutes.monitoringAlerting.editVariable,
    meta: { groupId: 'sample-group', navId: navIds.monitoringAlerting.monitoringGraph },
    title: 'Monitoring and Alerting - Edit Variable'
  },
  {
    component: lazy(() => import('@views/monitoring-alerting/monitoring-graph/create-graph.js').then((m) => ({ default: m.CreateGraphMain }))),
    path: allRoutes.monitoringAlerting.createGraph,
    meta: { groupId: 'sample-group', navId: navIds.monitoringAlerting.monitoringGraph },
    title: 'Monitoring and Alerting - Create Graph'
  },
  {
    component: lazy(() => import('@views/monitoring-alerting/monitoring-graph/detail/index.js').then((m) => ({ default: m.GraphMetricMain }))),
    path: allRoutes.monitoringAlerting.viewDetails,
    meta: { groupId: 'sample-group', navId: navIds.monitoringAlerting.monitoringGraph },
    title: 'Monitoring and Alerting - View Details'
  },
  {
    component: lazy(() => import('@views/monitoring-alerting/alerting/rules/index.js').then((m) => ({
      default: m.AlertingRulesMain
    }))),
    path: allRoutes.monitoringAlerting.alertingRules,
    title: 'Monitoring And Alerting - Alerting Rules'
  },
  {
    component: lazy(() => import('@views/monitoring-alerting/alerting/rules/addRules/choose-type.js').then((m) => ({
      default: m.ChooseTypeMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.monitoringAlerting.alertingRules },
    path: allRoutes.monitoringAlerting.alertingRulesChooseType,
    title: 'Monitoring And Alerting - Choose Rules Type'
  },
  {
    component: lazy(() => import('@views/monitoring-alerting/alerting/rules/addRules/index.js').then((m) => ({
      default: m.AlertingAddMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.monitoringAlerting.alertingRules },
    path: allRoutes.monitoringAlerting.alertingRulesAdd,
    title: 'Monitoring And Alerting - Add Alerting Rules'
  },
  {
    component: lazy(() => import('@views/monitoring-alerting/alerting/triggers-alert/index.js').then((m) => ({
      default: m.TriggeredAlertMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.monitoringAlerting.alertingTriggers },
    path: allRoutes.monitoringAlerting.alertingTriggers,
    title: 'Monitoring And Alerting - Alerting Triggers'
  },
  {
    component: lazy(() => import('@views/monitoring-alerting/alerting/channels/index.js').then((m) => ({
      default: m.AlertingChannelMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.monitoringAlerting.alertingChannels },
    path: allRoutes.monitoringAlerting.alertingChannels,
    title: 'Monitoring And Alerting - Alerting Channels'
  },
  {
    component: lazy(() => import('@src/views/monitoring-alerting/alerting/channels/add-channel.js').then((m) => ({
      default: m.AddChannelMain
    }))),
    meta: { groupId: 'sample-group', navId: navIds.monitoringAlerting.alertingChannels },
    path: allRoutes.monitoringAlerting.alertingChannelAdd,
    title: 'Monitoring And Alerting - Add Alerting Channel'
  }
];
