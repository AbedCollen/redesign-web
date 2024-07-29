/* eslint-disable react/jsx-filename-extension */

import type { TableColumn } from 'react-data-table-component';

import type { AlertingChannelDataModel } from '@models/app/monitoring-alerting/alerting/alerting-channel/types';

const Columns: TableColumn<AlertingChannelDataModel>[] = [
  {
    grow: 1,
    name: 'Name',
    selector: (row) => row.name
  },
  {
    grow: 1,
    name: 'Type',
    selector: (row) => row.type
  },
  {
    grow: 1,
    name: 'Action',
    selector: (row) => row.action
  }
];

export { Columns };
