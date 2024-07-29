import { Button, Dropdown, Modal } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { classNames } from '@modules/@nxweb/core/cjs/strings';

import {
  Check,
  Download,
  Edit2,
  Eye,
  MoreVertical,
  Trash2
} from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom/confirm-modal';
import { MonacoEditor } from '@components/custom/monaco-editor';
import type { HpaDataModel } from '@models/app/project-management/hpa/types';

const columns = (
  openConfirm: boolean,
  toggleModal: () => void,
  editHpa: (id: number) => void,
  detailHpa: (id: number) => void,
  showMonaco: boolean[],
  handleCloseMonaco: (index: number) => void,
  handleShowMonaco: (index: number) => void
): TableColumn<HpaDataModel>[] => [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    cell: (row) => {
      return (
        <div
          className={classNames(
            'round d-flex align-items-center gap-25 px-75 py-25',
            {
              'text-danger border-danger': !row.status,
              'text-success border-success': row.status
            }
          )}
        >
          <div className="text-body-3 fw-medium">
            {row.status ? 'Active' : 'Pending'}
          </div>
        </div>
      );
    },
    grow: 0,
    name: 'Status'
  },
  {
    cell: (row) => <a onClick={() => detailHpa(row.id)}>{row.name}</a>,
    grow: 1,
    maxWidth: '200px',
    name: 'Name',
    wrap: true
  },
  {
    grow: 1,
    minWidth: '150px',
    name: 'Namespace',
    selector: (row) => row.namespace
  },
  {
    grow: 1,
    maxWidth: '180px',
    name: 'Target Workload',
    selector: (row) => row.targetWorkload,
    wrap: true
  },
  {
    grow: 0,
    minWidth: '150px',
    name: 'Current Replicas',
    selector: (row) => row.currentReplicas
  },
  {
    grow: 0,
    minWidth: '150px',
    name: 'Last Scale',
    selector: (row) => row.lastScale
  },
  {
    cell: (row, rowIndex) => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="d-flex align-items-center p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="Edit HPA"
            onClick={() => editHpa(row.id)}
          >
            <Edit2 fill="currentColor" size={16} />
          </Button>
          <Dropdown className="no-arrow">
            <Dropdown.Toggle className="px-50 py-25" variant="outline-primary">
              <MoreVertical size={16} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleShowMonaco(rowIndex)}>
                <Eye className="me-1" size={16} />
                View Yaml
              </Dropdown.Item>
              <Dropdown.Item
                className="outline-danger text-danger"
                onClick={toggleModal}
              >
                <Trash2 className="me-1" color="red" size={16} />
                Delete HPA
                <ConfirmModal
                  content="Are you sure to delete?"
                  show={openConfirm}
                  title="Delete Items"
                  toggleModal={toggleModal}
                  variant="primary" />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Modal
            centered={true}
            className="confirmation-modal"
            show={showMonaco[rowIndex]}
            size="lg"
          >
            <Modal.Header className="p-1">
              <div className="d-flex">
                <p className="fw-bold me-1">Edit Yaml :</p>
                {row.name}
              </div>
            </Modal.Header>
            <Modal.Body className="p-1">
              <MonacoEditor language="yaml" />
            </Modal.Body>

            <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
              <Button
                className="justify-content-center"
                variant="flat-danger"
                onClick={() => handleCloseMonaco(rowIndex)}
              >
                Cancel
              </Button>
              <Button
                className="d-flex align-items-center justify-content-center gap-50"
                variant="outline-primary"
                onClick={() => handleCloseMonaco(rowIndex)}
              >
                <Download size={20} />
                Download YAML
              </Button>
              <Button
                className="d-flex align-items-center justify-content-center gap-50"
                onClick={() => handleCloseMonaco(rowIndex)}
              >
                <Check size={20} />
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
    name: 'Action',
    width: '125px'
  }
];

export { columns };
