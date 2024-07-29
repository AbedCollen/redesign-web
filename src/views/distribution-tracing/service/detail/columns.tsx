// eslint-disable-next-line react/jsx-filename-extension
import type { TableColumn } from 'react-data-table-component';

import type { ServiceDetailModel } from '@models/app/distribution-tracing/service/types';

const columns: TableColumn<ServiceDetailModel>[] = [
  {
    grow: 1,
    name: 'Name',
    selector: (row) => row.name,
    minWidth: '300px'
  },
  {
    grow: 1,
    name: 'P50 (in ms)',
    selector: (row) => row.p50
  },
  {
    grow: 1,
    name: 'P95 (in ms)',
    selector: (row) => row.p95
  },
  {
    grow: 1,
    name: 'P99 (in ms)',
    selector: (row) => row.p99
  },
  {
    grow: 1,
    name: 'Number of Cell',
    selector: (row) => row.numberOfCell
  },
  {
    grow: 1,
    name: 'Error Rate',
    selector: (row) => row.errorRate
  }
];

export { columns };
