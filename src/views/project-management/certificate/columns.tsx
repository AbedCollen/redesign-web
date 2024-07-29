import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { formatDate, fromNow } from '@nxweb/core/date';
import {
  Check,
  Download,
  Edit2,
  Eye,
  MoreVertical,
  Trash2,
  X
} from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom/confirm-modal';
import { MonacoEditor } from '@components/custom/monaco-editor';
import type { CertificateDataModel } from '@models/app/project-management/certificate/types';

const columns = (
  open: boolean,
  toggleModal: () => void,
  editCertificate: (id: number) => void,
  showMonaco: boolean[],
  handleCloseMonaco: (index: number) => void,
  handleShowMonaco: (index: number) => void,
  showDetail: boolean[],
  handleCloseDetail: (index: number) => void,
  handleShowDetail: (index: number) => void
): TableColumn<CertificateDataModel>[] => [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    cell: (row, rowIndex) => {
      return (
        <div>
          <a className="text-dark" onClick={() => handleShowDetail(rowIndex)}>
            {row.name}
          </a>
          <Modal
            centered={true}
            className="confirmation-modal"
            show={showDetail[rowIndex]}
            size="lg"
          >
            <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
              <h5 className="pt-1">Certificate Detail - {row.name}</h5>
            </Modal.Header>
            <Modal.Body className="p-1">
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-1" controlId="formDomainName">
                      <Form.Label>Domain Names</Form.Label>
                      <Form.Control
                        defaultValue={`ExpiresAlgorithm${formatDate(
                          row.expired,
                          'DD/MM/YYYY'
                        )} (${fromNow(row.expired)})${row.algorithm}`}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-1" controlId="formValidBeginning">
                      <Form.Label>Valid Beginning</Form.Label>
                      <Form.Control
                        defaultValue={`${formatDate(
                          row.validBeginning,
                          'DD/MM/YYYY'
                        )} (${fromNow(row.validBeginning)})`}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-1" controlId="formExpires">
                      <Form.Label>Expires</Form.Label>
                      <Form.Control
                        defaultValue={`${formatDate(
                          row.expired,
                          'DD/MM/YYYY'
                        )} (${fromNow(row.expired)})`}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-1" controlId="formAlgorithm">
                      <Form.Label>Algorithm</Form.Label>
                      <Form.Control
                        defaultValue={row.algorithm}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-1" controlId="formIssuer">
                      <Form.Label>Issuer</Form.Label>
                      <Form.Control
                        defaultValue={row.issuer}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-1" controlId="formSerialNumber">
                      <Form.Label>Serial Number</Form.Label>
                      <Form.Control
                        defaultValue={row.serialNumber}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-1" controlId="formFingerprint">
                      <Form.Label>Finger Print</Form.Label>
                      <Form.Control
                        defaultValue={row.fingerprint}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                  <Col />
                </Row>
              </Form>
            </Modal.Body>
            <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
              <Button
                className="d-flex align-items-center justify-content-center gap-50"
                onClick={() => handleCloseDetail(rowIndex)}
              >
                <X size={20} />
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
    grow: 1,
    minWidth: '150px',
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
    minWidth: '300px',
    name: 'Domain Names',
    selector: (row) => row.domainNames
  },
  {
    cell: (row) => {
      return <div>{fromNow(row.expired)}</div>;
    },
    grow: 1,
    name: 'Expired'
  },
  {
    cell: (row, rowIndex) => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="d-flex align-items-center p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="Edit Certificate"
            onClick={() => editCertificate(row.id)}
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
                href="#/action-2"
                onClick={toggleModal}
              >
                <Trash2 className="me-1" color="red" size={16} />
                Delete Certificates
                <ConfirmModal
                  content="Are you sure to delete?"
                  show={open}
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
