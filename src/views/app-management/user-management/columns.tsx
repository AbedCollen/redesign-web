/* eslint-disable react/jsx-filename-extension */
import type { TableColumn } from 'react-data-table-component';

import type { UserManagementDataModel } from '@models/app/app-management/user-management/types';

const columns = (
  userManagementDetail: (id: number) => void
): TableColumn<UserManagementDataModel>[] => [
  {
    grow: 1,
    name: 'Name',
    cell: (row) => <a onClick={() => userManagementDetail(row.id)}>{row.name}</a>
  },
  {
    grow: 1,
    name: 'Enabled',
    selector: (row) => row.enabled
  },
  {
    grow: 1,
    name: 'Capabilities',
    selector: (row) => row.capabilities
  }
];

export { columns };
