import { Button } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import {
  Edit,
  Trash2
} from '@nxweb/icons/feather';

import type { PodsTable } from '@models/app/project-management/deployment/types';

const columns = (
  onClick: (index: number) => void
): TableColumn<PodsTable>[] => [
  {
    name: 'Status',
    cell: (row) => {
      return (
        <div className="border-success rounded bg-light-success p-25">
            <span className="text-dark">{row.state}</span>
        </div>
      );
    },
    width: '150px'
  },
  {
    name: 'Name',
    grow: 1,
    allowOverflow: true,
    cell: (row) => (
      <a className="text-info" onClick={() => onClick(row.id)}>
        {row.name}
      </a>
    )
  },
  {
    name: 'Image',
    grow: 0,
    minWidth: '400px',
    selector: (row) => row.image
  },
  {
    name: 'Nodes',
    minWidth: '200px',
    allowOverflow: true,
    grow: 1,
    selector: (row) => row.nodes
  },
  {
    name: 'Action',
    cell: () => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="d-flex align-items-center p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="Edit Pods"
            variant="primary"
          >
            <Edit size={16} />
          </Button>

          <Button
            className="d-flex align-items-center p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="Delete Pods"
            variant="primary"
          >
            <Trash2 size={16} />
          </Button>

        </div>
      );
    },
    width: '125px'
  }
];

export { columns };
