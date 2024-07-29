import type { TableColumn } from 'react-data-table-component';

import type { ServiceDataModel } from '@models/app/distribution-tracing/service/types';

const columns = (
  detailService: (id: number) => void
): TableColumn<ServiceDataModel>[] => [
  {
    cell: (row) => <a onClick={() => detailService(row.id)}>{row.application}</a>,
    grow: 1,
    name: 'Application'
  },
  {
    grow: 1,
    name: 'P99 latency (in ms)',
    selector: (row) => row.p99latency
  },
  {
    grow: 1,
    name: 'Error Rate (% of total)',
    selector: (row) => row.errorRate
  },
  {
    grow: 1,
    name: 'Operation Per Second',
    selector: (row) => row.operationsPerSecond
  }
];

export { columns };
