import { Button } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { Eye, Trash2 } from '@nxweb/icons/feather';

import type { ClusterRolesDataModel } from '@models/app/users-and-roles/cluster-roles/types';

const columns = (
  toggleModal: () => void,
  detailClusterRoles: (id: number) => void
): TableColumn<ClusterRolesDataModel>[] => [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    grow: 1,
    name: 'Name',
    selector: (row) => row.name,
    maxWidth: '450px'
  },
  {
    grow: 1,
    name: 'Created',
    selector: (row) => row.created,
    wrap: true,
    minWidth: '200px'
  },
  {
    cell: (row) => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="px-50 py-25"
            variant="outline-primary"
            onClick={() => detailClusterRoles(row.id)}
          >
            <Eye size={16} />
          </Button>
          <Button
            className="px-50 py-25"
            variant="outline-danger"
            onClick={toggleModal}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      );
    },
    name: 'Action',
    width: '200px'
  }
];

export { columns };
