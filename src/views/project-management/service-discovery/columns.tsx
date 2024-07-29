/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import { Button, Dropdown } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { classNames } from '@modules/@nxweb/core/cjs/strings';

import {
  CheckCircle,
  Edit2,
  Eye,
  MoreVertical,
  Trash2,
  XCircle
} from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom';
import type { ServiceDiscoveryDataModel } from '@models/app/project-management/service-discovery/types';

const columns = (
  editServiceDiscovery: (id: number) => void,
  handleServiceDiscoveryDetail: (id: number) => void,
  handleServiceDiscoveryClusterDetail: (id: number) => void,
  openConfirm: boolean,
  toggleModal: () => void
): TableColumn<ServiceDiscoveryDataModel>[] => [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    style: {
      'align-items': 'start',
      paddingTop: '15px'
    },
    width: '75px'
  },
  {
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
    name: 'Status',
    style: {
      'align-items': 'start',
      paddingTop: '15px'
    },
    width: '115px'
  },
  {
    cell: (row) => (
      <a
        className="text-info"
        onClick={() => handleServiceDiscoveryDetail(row.id)}
      >
        {row.name}
      </a>
    ),
    grow: 1,
    name: 'Name',
    style: {
      'align-items': 'start',
      paddingTop: '15px'
    }
  },
  {
    cell: (row) => (
      <a
        className="text-info"
        onClick={() => handleServiceDiscoveryClusterDetail(row.id)}
      >
        {row.clusterapi}
      </a>
    ),
    grow: 1,
    name: 'Cluster API',
    style: {
      'align-items': 'start',
      paddingTop: '15px'
    }
  },
  {
    grow: 1,
    minWidth: '150px',
    name: 'Type',
    selector: (row) => row.type,
    style: {
      'align-items': 'start',
      paddingTop: '15px'
    }
  },
  {
    cell: (row) => {
      const MAX_LETTERS = 64;

      const listItems = row.domain.map((item, index) => (
        <div className="form-group" key={item + index}>
          <div className="d-flex gap-25 px-75 py-25 my-1 border-secondary rounded">
            {item.length <= MAX_LETTERS
              ? item
              : `${item.slice(0, MAX_LETTERS)}...`}
          </div>
        </div>
      ));

      return (
        <div className="">
          {listItems.map((item, index) => {
            return (
              <div className="form-group" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      );
    },
    grow: 1,
    minWidth: '235px',
    name: 'Domain',
    style: {
      'align-items': 'start'
    },
    wrap: true
  },
  {
    cell: (row) => {
      const MAX_LETTERS = 64;

      const listItems = row.target.map((item, index) => (
        <div className="form-group" key={item + index}>
          <div className="d-flex gap-25 px-75 py-25 my-1 border-secondary rounded">
            {item.length <= MAX_LETTERS
              ? item
              : `${item.slice(0, MAX_LETTERS)}...`}
          </div>
        </div>
      ));

      return (
        <div className="">
          {listItems.map((item, index) => {
            return (
              <div className="form-group" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      );
    },
    grow: 1,
    minWidth: '235px',
    name: 'Target',
    style: {
      'align-items': 'start'
    },
    wrap: true
  },
  {
    cell: (row) => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="d-flex align-items-center p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="Edit Service"
            onClick={() => editServiceDiscovery(row.id)}
          >
            <Edit2 fill="currentColor" size={14} />
          </Button>
          <Dropdown className="no-arrow">
            <Dropdown.Toggle className="px-50 py-25" variant="outline-primary">
              <MoreVertical size={16} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Eye className="me-1" size={16} />
                View Yaml
              </Dropdown.Item>
              <Dropdown.Item
                className="outline-danger text-danger"
                onClick={toggleModal}
              >
                <Trash2 className="me-1" color="red" size={16} />
                Delete Service
                <ConfirmModal
                  content="Are you sure to delete?"
                  show={openConfirm}
                  title="Delete Items"
                  toggleModal={toggleModal}
                  variant="primary" />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      );
    },
    name: 'Action',
    style: {
      'align-items': 'start',
      paddingTop: '15px'
    },
    width: '100px'
  }
];

export { columns };
