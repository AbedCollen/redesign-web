/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Button, Dropdown, ProgressBar } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { classNames } from '@modules/@nxweb/core/cjs/strings';

import { Edit2, MoreVertical } from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom';
import type { NodesDataModel } from '@models/app/cluster-management/nodes/types';

import { EditModalNodes } from './components/EditModal';
import { DrainModalNodes } from './components/drain-modal';

const PROGRESS_BAR_MULTIPLIER_4 = 25;
const PROGRESS_BAR_MULTIPLIER_11_6 = 9;
const PROGRESS_BAR_MULTIPLIER_110 = 0.9;

const columns = (
  editModal: boolean,
  cordonModal: boolean,
  drainModal: boolean,
  toggleEditModal: () => void,
  toggleCordonModal: () => void,
  toggleDrainModal: () => void
): TableColumn<NodesDataModel>[] => [
  {
    center: true,
    name: '#',
    selector: () => '#',
    width: '75px'
  },
  {
    cell: (row) => {
      return (
        <div
          className={classNames(
            'round d-flex align-items-center gap-25 px-75 py-25',
            {
              'bg-light-danger border-danger': !row.isActive,
              'bg-light-success border-success': row.isActive
            }
          )}
        >
          <div
            className={classNames('text-body-3 fw-medium', {
              'text-danger': !row.isActive,
              'text-success': row.isActive
            })}
          >
            {row.isActive ? 'Active' : 'Inactive'}
          </div>
        </div>
      );
    },
    name: 'Status',
    width: '115px'
  },
  {
    cell: (row) => row.name,
    grow: 1,
    name: 'Name'
  },
  {
    cell: (row) => {
      return (
        <div
          className={classNames(
            'round d-flex align-items-center gap-25 px-75 py-25 bg-light'
          )}
        >
          <div className="text-body-3 fw-medium text-neutral-90">
            {row.roles}
          </div>
        </div>
      );
    },
    name: 'Roles',
    width: '130px'
  },
  {
    cell: (row) => row.clusterVersion,
    grow: 1,
    name: 'Cluster Version'
  },
  {
    cell: (row) => {
      return (
        <div className={classNames('w-100 text-center')}>
          <div>{row.CPU} of 4 Used</div>
          <div>
            <ProgressBar now={row.CPU * PROGRESS_BAR_MULTIPLIER_4} variant={row.CPU < 40 ? 'success' : row.CPU > 80 ? 'danger' : 'warning'} />
          </div>
        </div>
      );
    },
    grow: 1,
    name: 'CPU'
  },
  {
    cell: (row) => {
      return (
        <div className={classNames('w-100 text-center')}>
          <div>{row.RAM} of 11.6 Used</div>
          <div>
            <ProgressBar now={row.RAM * PROGRESS_BAR_MULTIPLIER_11_6} variant={row.RAM < 40 ? 'success' : row.RAM > 80 ? 'danger' : 'warning'} />
          </div>
        </div>
      );
    },
    grow: 1,
    name: 'RAM'
  },
  {
    cell: (row) => {
      return (
        <div className={classNames('w-100 text-center')}>
          <div>{row.pods} of 110 Used</div>
          <div>
            <ProgressBar now={row.pods * PROGRESS_BAR_MULTIPLIER_110} variant={row.pods < 40 ? 'success' : row.pods > 80 ? 'danger' : 'warning'} />
          </div>
        </div>
      );
    },
    grow: 1,
    name: 'Pods'
  },
  {
    cell: () => {
      return (
        <div className="col d-flex gap-1">
          <Button
            className="d-flex align-items-center gap-50 py-50"
            onClick={toggleEditModal}
          >
            <Edit2 fill="currentColor" size={16} />
            Node
          </Button>

          <EditModalNodes show={editModal} toggleModal={toggleEditModal} />

          <Dropdown className="no-arrow d-flex align-items-center">
            <Dropdown.Toggle className="p-50" variant="outline-primary">
              <MoreVertical size={16} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={toggleCordonModal}>Cordon Node</Dropdown.Item>
              <Dropdown.Item onClick={toggleDrainModal}>Drain Node</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <ConfirmModal content="Are you sure want to cordon nextplatfrom-vm-fab03?" show={cordonModal} title="Cordon Confirmation" toggleModal={toggleCordonModal} />

          <DrainModalNodes show={drainModal} toggleModal={toggleDrainModal} />

        </div>
      );
    },
    name: 'Action',
    width: '180px'
  }
];

export { columns };
