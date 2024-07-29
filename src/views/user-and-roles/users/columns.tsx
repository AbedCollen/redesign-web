import { Button } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { LogIN } from '@nxweb/icons/feather';

import type { UsersDataModel } from '@models/app/users-and-roles/users/types';

const columns: TableColumn<UsersDataModel>[] = [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '50px'
  },
  {
    cell: (row) => row.userName,
    grow: 1,
    name: 'Username'
  },
  {
    cell: (row) => row.fullName,
    grow: 1,
    name: 'Full Name'
  },
  {
    cell: (row) => row.loginSince,
    grow: 1,
    name: 'Login Since'
  },
  {
    cell: () => {
      return (
        <Button className="px-50 py-25" variant="outline-primary">
          <LogIN size={16} />
        </Button>
      );
    },
    name: 'Action',
    width: '160px'
  }
];

export { columns };
