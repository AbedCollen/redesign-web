/* eslint-disable react/jsx-filename-extension */
import { Button } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { Eye } from '@nxweb/icons/feather';

import type { RolesDataModel } from '@models/app/users-and-roles/roles/types';

const columns = (
  handleRolesDetail: (id: number) => void
): TableColumn<RolesDataModel>[] => [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    grow: 3,
    name: 'Name',
    selector: (row) => row.name
  },
  {
    grow: 3,
    name: 'Created',
    selector: (row) => row.created
  },
  {
    grow: 1,
    name: 'Action',
    cell: (row) => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="px-50 py-25"
            variant="outline-primary"
            onClick={() => handleRolesDetail(row.id)}
          >
            <Eye size={16} />
          </Button>
        </div>
      );
    }
  }
];

export { columns };
