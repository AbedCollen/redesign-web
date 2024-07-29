/* eslint-disable react/jsx-filename-extension */
import type { TableColumn } from 'react-data-table-component';

import type { RolesBindingsDetailDataModel } from '@models/app/users-and-roles/roles-bindings/types';

const Columns: TableColumn<RolesBindingsDetailDataModel>[] = [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    grow: 3,
    name: 'Resources',
    selector: (row) => row.resources
  },
  {
    grow: 3,
    name: 'Non-resource URL',
    selector: (row) => row.nonResourceURL
  },
  {
    grow: 3,
    name: 'Resource Names',
    selector: (row) => row.resourceNames
  },
  {
    grow: 3,
    name: 'Verbs',
    selector: (row) => row.verbs
  },
  {
    grow: 3,
    name: 'API Groups',
    selector: (row) => row.apiGroups
  }
];

export { Columns };
