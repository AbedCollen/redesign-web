import { combineReducers } from 'redux';

import { AlertingChannelCommand, AlertingChannelDefault, AlertingChannelReducer } from './alerting/alerting-channel/reducer';
import { AlertingRulesCommand, AlertingRulesDefault, AlertingRulesReducer } from './alerting/alerting-rules/reducers';
import { TriggeredAlertCommand, TriggeredAlertDefault, TriggeredAlertReducer } from './alerting/triggered-alert/reducer';
import {
  MonitoringGraphCommand,
  MonitoringGraphDefault,
  MonitoringGraphReducer
} from './monitoring-graph/reducers';

import type { MonitoringAlertingModel } from './types';

const monitoringAlertingReducer = combineReducers({
  monitoringGraph: MonitoringGraphReducer,
  alertingRules: AlertingRulesReducer,
  triggeredAlert: TriggeredAlertReducer,
  alertingChannel: AlertingChannelReducer
});

const monitoringAlertingDefault: MonitoringAlertingModel = {
  monitoringGraph: MonitoringGraphDefault,
  alertingRules: AlertingRulesDefault,
  triggeredAlert: TriggeredAlertDefault,
  alertingChannel: AlertingChannelDefault
};

const monitoringAlertingCommand = {
  monitoringGraph: MonitoringGraphCommand,
  alertingRules: AlertingRulesCommand,
  triggeredAlert: TriggeredAlertCommand,
  alertingChannel: AlertingChannelCommand
};

export {
  monitoringAlertingReducer,
  monitoringAlertingDefault,
  monitoringAlertingCommand
};