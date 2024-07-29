/* eslint-disable react/jsx-filename-extension */
import type { TableColumn } from 'react-data-table-component';

import type { VolumeDataModel } from '@models/app/project-management/volume/types';

const columns: TableColumn<VolumeDataModel>[] = [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    grow: 1,
    name: 'Type',
    selector: (row) => row.type
  },
  {
    grow: 1,
    minWidth: '250px',
    name: 'Reason',
    selector: (row) => row.reason
  },
  {
    grow: 1,
    name: 'Message',
    selector: (row) => row.message
  },
  {
    grow: 1,
    name: 'Last Seen',
    selector: (row) => row.lastSeen
  }
];

export { columns };
