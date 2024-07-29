/* eslint-disable react/jsx-filename-extension */
import type { TableColumn } from 'react-data-table-component';

import type { UserManagementDetailModel } from '@models/app/app-management/user-management/types';

const columns: TableColumn<UserManagementDetailModel>[] = [
  {
    grow: 1,
    name: 'ID',
    selector: (row) => row.id
  },
  {
    grow: 1,
    name: 'Issued at',
    selector: (row) => row.issuedAt
  },
  {
    grow: 1,
    name: 'Expires at',
    selector: (row) => row.expiresAt
  }
];

export { columns };
