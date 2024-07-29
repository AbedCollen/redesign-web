import type { AlertingChannelAction, AlertingChannelModel } from './alerting/alerting-channel/types';
import type { AlertingRulesAction, AlertingRulesModel } from './alerting/alerting-rules/types';
import type { TriggeredAlertAction, TriggeredAlertModel } from './alerting/triggered-alert/types';
import type {
  MonitoringGraphAction,
  MonitoringGraphModel
} from './monitoring-graph/types';

interface MonitoringAlertingModel {
  monitoringGraph?: MonitoringGraphModel
  alertingRules?: AlertingRulesModel
  triggeredAlert?: TriggeredAlertModel
  alertingChannel?: AlertingChannelModel
}

type MonitoringAlertingAction = MonitoringGraphAction | AlertingChannelAction | AlertingRulesAction | TriggeredAlertAction ;

export type { MonitoringAlertingModel, MonitoringAlertingAction };