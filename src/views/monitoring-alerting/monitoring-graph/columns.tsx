/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Dropdown } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import {
  Edit2,
  Eye,
  MoreVertical,
  Share2,
  Trash2
} from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom/confirm-modal';
import type {
  MonitoringGraphDataModel,
  MonitoringGraphVariableModel
} from '@models/app/monitoring-alerting/monitoring-graph/types';

import { EditModal } from './components/edit-modal';
import { ShareModal } from './components/share-modal';

const columns = (
  detailGraph: (id: number) => void,
  shareModal: boolean,
  toggleShareModal: () => void,
  openConfirm: boolean,
  toggleModal: () => void,
  editModal: boolean,
  toggleEditModal: () => void
): TableColumn<MonitoringGraphDataModel>[] => [
  {
    cell: (row) => <a onClick={() => detailGraph(row.id)}>{row.name}</a>,
    grow: 1,
    maxWidth: '170px',
    name: 'Name',
    wrap: true
  },
  {
    grow: 1,
    maxWidth: '250px',
    name: 'Description',
    selector: (row) => row.description,
    wrap: true
  },
  {
    cell: (row) => row.tags.map((tag) => (
        <div className="border-secondary bg-light-secondary round d-flex align-items-center gap-25 px-75 py-25 mx-25">
          {tag}
        </div>
    )),
    grow: 1,
    minWidth: '200px',
    name: 'Tags (Can be multiple)'
  },
  {
    grow: 1,
    maxWidth: '180px',
    name: 'Created At',
    selector: (row) => row.createdAt
  },
  {
    grow: 1,
    maxWidth: '180px',
    name: 'Last Update Time',
    selector: (row) => row.lastUpdateTime
  },
  {
    cell: (row) => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button className="px-50 py-25" onClick={toggleEditModal}>
            <Edit2 fill="white" size={16} />
          </Button>
          <Dropdown className="no-arrow">
            <Dropdown.Toggle className="px-50 py-25" variant="outline-primary">
              <MoreVertical size={16} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => detailGraph(row.id)}>
                <Eye className="me-1" size={16} />
                View Details
              </Dropdown.Item>
              <Dropdown.Item onClick={toggleShareModal}>
                <Share2 className="me-1" size={16} />
                Share
              </Dropdown.Item>
              <Dropdown.Item
                className="outline-danger text-danger"
                onClick={toggleModal}
              >
                <Trash2 className="me-1" color="red" size={16} />
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <EditModal show={editModal} toggleModal={toggleEditModal} />
          <ConfirmModal
            content="Are you sure to delete?"
            show={openConfirm}
            title="Delete Items"
            toggleModal={toggleModal}
            variant="danger" />
          <ShareModal show={shareModal} toggleModal={toggleShareModal} />
        </div>
      );
    },
    name: 'Action',
    width: '125px'
  }
];

const variableColumns = (
  openConfirm: boolean,
  toggleConfirmModal: () => void,
  editVariable: (id: number) => void
): TableColumn<MonitoringGraphVariableModel>[] => [
  {
    grow: 1,
    name: 'Variable',
    selector: (row) => row.variable
  },
  {
    grow: 1,
    name: 'Definition',
    selector: (row) => row.definition
  },
  {
    cell: (row) => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="px-50 py-50"
            variant="outline-primary"
            onClick={() => editVariable(row.id)}
          >
            <Edit2 fill="primary" size={16} />
          </Button>
          <Button
            className="px-50 py-50"
            variant="outline-danger"
            onClick={toggleConfirmModal}
          >
            <Trash2 size={16} />
          </Button>
          <ConfirmModal
            content="Are you sure to delete?"
            show={openConfirm}
            title="Delete Items"
            toggleModal={toggleConfirmModal}
            variant="danger" />
        </div>
      );
    },
    name: 'Action',
    width: '125px'
  }
];

export { columns, variableColumns };
