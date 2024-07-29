import { Button, Modal } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { classNames } from '@modules/@nxweb/core/cjs/strings';

import { Check, Download, Edit2, Trash2 } from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom/confirm-modal';
import { MonacoEditor } from '@components/custom/monaco-editor';
import type { VolumeDataModel } from '@models/app/project-management/volume/types';

const columns = (
  showMonaco: boolean[],
  handleCloseMonaco: (index: number) => void,
  handleShowMonaco: (index: number) => void,
  handleShowDetail: (idx: number) => void,
  openConfirm: boolean,
  toggleModal: () => void
): TableColumn<VolumeDataModel>[] => [
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
              'text-danger border-warning': !row.status,
              'text-success border-success': row.status
            }
          )}
        >
          <div className="text-body-3 fw-medium text-neutral-90">
            {row.status ? 'Bound' : 'Pending'}
          </div>
        </div>
      );
    },
    grow: 0,
    name: 'Status'
  },
  {
    cell: (row, idx) => (
      <a className="text-info" onClick={() => handleShowDetail(idx)}>
        {row.claimName}
      </a>
    ),
    grow: 0,
    minWidth: '250px',
    name: 'Claim Name'
  },
  {
    grow: 1,
    name: 'Namespace',
    selector: (row) => row.namespace
  },
  {
    grow: 1,
    name: 'Size',
    selector: (row) => row.size
  },
  {
    cell: (row) => <p className="m-0">{row.persistentVolume}</p>,
    grow: 0,
    minWidth: '225px',
    name: 'Persistent Volume'
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
            className="px-50 py-25 btn border-danger btn-outline-primary"
            data-placement="top"
            data-toggle="tooltip"
            title="Delete Volume"
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

          {/* Edit YAML */}
          <Modal
            centered={true}
            className="confirmation-modal"
            show={showMonaco[rowIndex]}
            size="lg"
          >
            <Modal.Header className="p-1">
              <div className="d-flex align-items-center">
                <p className="fw-bold me-25 m-0">Edit Yaml: </p>
                {row.claimName}
              </div>
            </Modal.Header>

            <Modal.Body className="p-1">
              <MonacoEditor language="yaml" />
            </Modal.Body>

            <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
              <Button
                className="justify-content-center text-danger"
                variant="flat-primary"
                onClick={() => handleCloseMonaco(rowIndex)}
              >
                Cancel
              </Button>
              <Button
                className="d-flex align-items-center justify-content-center gap-50"
                variant="outline-primary"
                onClick={() => handleCloseMonaco(rowIndex)}
              >
                <Download size={20} /> Download YAML
              </Button>
              <Button
                className="d-flex align-items-center justify-content-center gap-50"
                onClick={() => handleCloseMonaco(rowIndex)}
              >
                <Check size={20} /> Save
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
