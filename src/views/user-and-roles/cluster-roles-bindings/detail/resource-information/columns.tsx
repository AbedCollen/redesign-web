/* eslint-disable react/jsx-filename-extension */
import type { TableColumn } from 'react-data-table-component';

import type { ClusterRolesBindingsResourceInformationTableModel } from '@models/app/users-and-roles/cluster-roles-bindings/types';

const columns: TableColumn<ClusterRolesBindingsResourceInformationTableModel>[] =
  [
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
      name: 'Non-resouces URL',
      selector: (row) => row.nonResourcesUrl
    },
    {
      grow: 1,
      name: 'Resources Name',
      selector: (row) => row.resourcesName
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

export { columns };
