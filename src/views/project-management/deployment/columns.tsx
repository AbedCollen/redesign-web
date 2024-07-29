import { Button, Dropdown } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { classNames } from '@modules/@nxweb/core/cjs/strings';

import { fromNow } from '@nxweb/core/date';
import {
  CheckCircle,
  Edit2,
  MoreVertical,
  XCircle
} from '@nxweb/icons/feather';

import type { DeploymentDataModel } from '@models/app/project-management/deployment/types';

const columns = (
  onClick: (index: number) => void,
  onClickEdit: (index: number) => void
): TableColumn<DeploymentDataModel>[] => [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    name: 'Status',
    cell: (row) => {
      return (
        <div
          className={classNames(
            'round d-flex align-items-center gap-25 px-75 py-25',
            {
              'text-danger border-danger': !row.isActive,
              'text-success border-success': row.isActive
            }
          )}
        >
          {row.isActive ? <CheckCircle size={12} /> : <XCircle size={12} />}
          <div className="text-body-3 fw-medium text-neutral-90">
            {row.isActive ? 'Active' : 'Inactive'}
          </div>
        </div>
      );
    },
    width: '115px'
  },
  {
    name: 'Name',
    grow: 1,
    cell: (row) => (
      <a className="text-info" onClick={() => onClick(row.id)}>
        {row.name}
      </a>
    )
  },
  {
    name: 'Namespace',
    grow: 0,
    minWidth: '150px',
    selector: (row) => row.namespace
  },
  {
    name: 'Containers',
    grow: 1,
    cell: (row) => {
      return (
        <div className="d-flex flex-column gap-50">
          <div className="text-body-3 text-neutral-90">{row.containers}</div>
          <div className="text-body-3 text-neutral-60 fw-medium">
            {row.podsCreated} Pods Created - {fromNow(row.createdDate)}
          </div>
          <div className="text-body-3 text-neutral-60 fw-medium">
            Pods Restarts: {row.restarts}
          </div>
        </div>
      );
    }
  },
  {
    name: 'Action',
    cell: (row) => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="d-flex align-items-center p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="Edit Deployment"
            onClick={() => onClickEdit(row.id)}
          >
            <Edit2 fill="currentColor" size={16} />
          </Button>
          <Dropdown className="no-arrow">
            <Dropdown.Toggle className="px-50 py-25" variant="outline-primary">
              <MoreVertical size={16} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">View YAML</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Redeploy Workload</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Delete Workload</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      );
    },
    width: '125px'
  }
];

export { columns };
