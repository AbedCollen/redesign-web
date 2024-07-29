/* eslint-disable react/jsx-filename-extension */
import type { TableColumn } from 'react-data-table-component';

import { fromNow } from '@nxweb/core/date';

import type { HpaStatusTableDataModel } from '@models/app/project-management/hpa/types';

const columns: TableColumn<HpaStatusTableDataModel>[] = [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    cell: (row) => row.type,
    grow: 1,
    name: 'Type',
    width: '200px'
  },
  {
    cell: (row) => row.statusContent,
    grow: 1,
    name: 'Status',
    width: '150px'
  },
  {
    cell: (row) => <div>{fromNow(row.lastUpdate)}</div>,
    grow: 1,
    name: 'Last Update',
    width: '150px'
  },
  {
    cell: (row) => row.reason,
    grow: 1,
    name: 'Reason',
    width: '200px'
  },
  {
    cell: (row) => row.message,
    grow: 1,
    name: 'Message'
  }
];

export { columns };
