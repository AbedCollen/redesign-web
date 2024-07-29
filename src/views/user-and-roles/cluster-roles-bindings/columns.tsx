/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Button } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { Edit2, Trash2 } from '@nxweb/icons/feather';

import type { ClusterRolesBindingsDataModel } from '@models/app/users-and-roles/cluster-roles-bindings/types';

const columns = (
  toggleModal: () => void,
  detailClusterRolesBindings: (id: number) => void,
  editClusterRolesBindings: (id: number) => void
): TableColumn<ClusterRolesBindingsDataModel>[] => [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    cell: (row) => <a onClick={() => detailClusterRolesBindings(row.id)}>{row.name}</a>,
    grow: 1,
    name: 'Name',
    wrap: true,
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
            onClick={() => editClusterRolesBindings(row.id)}
          >
            <Edit2 size={16} />
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
