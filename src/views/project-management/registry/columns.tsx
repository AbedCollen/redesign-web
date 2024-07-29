/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Modal } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { Check, Download, Edit2, Trash2 } from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom/confirm-modal';
import { MonacoEditor } from '@components/custom/monaco-editor';
import type { RegistryDataModel } from '@models/app/project-management/registry/types';

const columns = (
  showMonaco: boolean[],
  handleCloseMonaco: (index: number) => void,
  handleShowMonaco: (index: number) => void,
  toggleModal: () => void,
  open: boolean
): TableColumn<RegistryDataModel>[] => [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    grow: 1,
    name: 'Name',
    selector: (row) => row.name
  },
  {
    grow: 0,
    minWidth: '150px',
    name: 'Namespace',
    selector: (row) => row.namespace
  },
  {
    grow: 1,
    name: 'Registries',
    selector: (row) => row.registries
  },
  {
    grow: 1,
    name: 'Username',
    selector: (row) => row.username
  },
  {
    cell: (row, rowIndex) => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="d-flex align-items-center gap-50 p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="Edit YAML"
            onClick={() => handleShowMonaco(rowIndex)}
          >
            <Edit2 fill="currentColor" size={16} />
          </Button>
          <Button
            className="px-50 py-25 btn  border-danger btn-outline-primary"
            data-placement="top"
            data-toggle="tooltip"
            title="Delete Registry"
            onClick={toggleModal}
          >
            <Trash2 className="text-danger" size={16} />
          </Button>
          <ConfirmModal
            content="Are you sure to delete all items?"
            show={open}
            title="Delete Items"
            toggleModal={toggleModal} />

          <Modal
            centered={true}
            className="confirmation-modal"
            show={showMonaco[rowIndex]}
            size="lg"
          >
            <Modal.Header className="p-1">
              <div className="d-flex align-items-center">
                <p className="fw-bold me-25 m-0">Edit Yaml: </p>
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
    width: '200px'
  }
];

export { columns };
