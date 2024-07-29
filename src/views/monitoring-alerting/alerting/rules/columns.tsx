/* eslint-disable react/jsx-filename-extension */
import type { TableColumn } from 'react-data-table-component';

import type { AlertingRulesDataModel } from '@models/app/monitoring-alerting/alerting/alerting-rules/types';

const Columns: TableColumn<AlertingRulesDataModel>[] = [
  {
    grow: 1,
    name: 'Status',
    selector: (row) => row.status
  },
  {
    grow: 1,
    name: 'Alert Name',
    selector: (row) => row.alertName
  },
  {
    grow: 1,
    name: 'Severity',
    selector: (row) => row.severity
  },
  {
    grow: 1,
    name: 'Label',
    selector: (row) => row.label
  },
  {
    grow: 1,
    name: 'Action',
    selector: (row) => row.action
  }
];

export { Columns };
