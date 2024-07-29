/* eslint-disable react/jsx-filename-extension */
import type { TableColumn } from 'react-data-table-component';

import type { RolesDetailDataModel } from '@models/app/users-and-roles/roles/types';

const Columns: TableColumn<RolesDetailDataModel>[] = [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '40px'
  },
  {
    grow: 1,
    name: 'Resources',
    selector: (row) => row.resources,
    width: '300px'
  },
  {
    grow: 1,
    name: 'Non-resource URL',
    selector: (row) => row.nonResourceURL
  },
  {
    grow: 1,
    name: 'Resource Names',
    selector: (row) => row.resourceNames
  },
  {
    grow: 1,
    name: 'Verbs',
    selector: (row) => row.verbs
  },
  {
    grow: 1,
    name: 'API Groups',
    selector: (row) => row.apiGroups
  }
];

export { Columns };
