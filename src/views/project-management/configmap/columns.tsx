import { Button, Form, Modal } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { fromNow } from '@nxweb/core/date';
import { Check, Download, Edit2, Eye, Trash2 } from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom/confirm-modal';
import { MonacoEditor } from '@components/custom/monaco-editor';
import type { ConfigmapDataModel } from '@models/app/project-management/configmap/types';

const columns = (
  showMonaco: boolean[],
  handleCloseMonaco: (index: number) => void,
  handleShowMonaco: (index: number) => void,
  showDetail: boolean,
  handleCloseDetail: () => void,
  handleShowDetail: () => void,
  openConfirm: boolean,
  toggleModal: () => void,
  editConfigMap: (id: number) => void
): TableColumn<ConfigmapDataModel>[] => [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    cell: (row) => {
      return (
        <div>
          <a className="text-info" onClick={handleShowDetail}>
            {row.name}
          </a>
          <Modal
            centered={true}
            className="confirmation-modal"
            show={showDetail}
            size="lg"
          >
            <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
              <h5 className="pt-1">{row.name}</h5>
            </Modal.Header>
            <Modal.Body className="p-1">
              <Form>
                <Form.Group className="mb-1" controlId="hostIP">
                  <Form.Label>Keys</Form.Label>
                  <Form.Control placeholder="Placeholder" type="text" />
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Label>Value</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Placeholder"
                    style={{ height: '150px' }} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
              <Button
                className="justify-content-center"
                variant="outline-danger"
                onClick={handleCloseDetail}
              >
                Cancel
              </Button>
              <Button
                className="d-flex align-items-center justify-content-center gap-50"
                onClick={handleCloseDetail}
              >
                <Check size={20} />
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
    grow: 1,
    name: 'Name'
  },
  {
    grow: 1,
    minWidth: '150px',
    name: 'Namespace',
    selector: (row) => row.namespace
  },
  {
    grow: 1,
    minWidth: '150px',
    name: 'Keys',
    selector: (row) => row.keys
  },
  {
    cell: (row) => {
      return <div>{fromNow(row.createdDate)}</div>;
    },
    grow: 1,
    minWidth: '150px',
    name: 'Created'
  },
  {
    cell: (row, rowIndex) => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="d-flex align-items-center p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="Edit Config Map"
            onClick={() => editConfigMap(row.id)}
          >
            <Edit2 fill="currentColor" size={16} />
          </Button>

          <Button
            className="d-flex align-items-center p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="View YAML"
            onClick={() => handleShowMonaco(rowIndex)}
          >
            <Eye size={16} />
          </Button>

          <Button
            className="px-50 py-25 btn  border-danger btn-outline-primary"
            data-placement="top"
            data-toggle="tooltip"
            title="Delete Config Map"
            onClick={toggleModal}
          >
            <Trash2 className="text-danger" size={16} />
          </Button>
          <ConfirmModal
            content="Are you sure to delete?"
            show={openConfirm}
            title="Delete Items"
            toggleModal={toggleModal}
            variant="primary" />
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
    width: '200px'
  }
];

export { columns };
