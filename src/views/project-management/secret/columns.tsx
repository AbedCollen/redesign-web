import { Button, Dropdown, Modal } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

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
import type { SecretDataModel } from '@models/app/project-management/secret/types';

const columns = (
  openConfirm: boolean,
  toggleModal: () => void,
  editSecretForm: (id: number) => void,
  showMonaco: boolean[],
  handleCloseMonaco: (index: number) => void,
  handleShowMonaco: (index: number) => void
): TableColumn<SecretDataModel>[] => [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    grow: 1,
    minWidth: '150px',
    name: 'Name',
    selector: (row) => row.name
  },
  {
    grow: 1,
    minWidth: '150px',
    name: 'Namespace',
    selector: (row) => row.namespace
  },
  {
    grow: 1,
    name: 'Key',
    selector: (row) => row.key
  },
  {
    grow: 1,
    name: 'Created',
    selector: (row) => row.created,
    width: '120px'
  },
  {
    cell: (row, rowIndex) => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="d-flex align-items-center p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="Edit Secret"
            onClick={() => editSecretForm(row.id)}
          >
            <Edit2 fill="currentColor" size={16} />
          </Button>
          <Dropdown className="no-arrow">
            <Dropdown.Toggle className="px-50 py-25" variant="outline-primary">
              <MoreVertical size={16} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#/action-1"
                onClick={() => handleShowMonaco(rowIndex)}
              >
                <Eye className="me-1" size={16} />
                View Yaml
              </Dropdown.Item>
              <Dropdown.Item
                className="outline-danger text-danger"
                onClick={toggleModal}
              >
                <Trash2 className="me-1" color="red" size={16} />
                Delete Secret
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
                variant="outline-danger"
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
