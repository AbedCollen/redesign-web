/* eslint-disable react/jsx-filename-extension */
import type { TableColumn } from 'react-data-table-component';

import type { ClusterRolesBindingsRulesTableModel } from '@models/app/users-and-roles/cluster-roles-bindings/types';

const columns: TableColumn<ClusterRolesBindingsRulesTableModel>[] = [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    grow: 1,
    name: 'Resources',
    selector: (row) => row.resources
  },
  {
    grow: 1,
    name: 'Namespaces',
    selector: (row) => row.namespaces
  },
  {
    grow: 1,
    name: 'Kind',
    selector: (row) => row.kind
  },
  {
    grow: 1,
    name: 'API Groups',
    selector: (row) => row.apiGroups
  }
];

export { columns };
