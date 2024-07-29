import type { FC } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';

import { Check, UploadCloud } from '@nxweb/icons/feather';

import { MonacoEditor } from '@components/custom';

interface JSONModalProps {
  show: boolean
  toggleModal: () => void
}

const JSONModal: FC<JSONModalProps> = ({ show, toggleModal }) => {
  return (
    <Modal
      centered={true}
      className="confirmation-modal"
      show={show}
      size="lg"
    >
      <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
        <h5 className="pt-1">Import JSON</h5>
      </Modal.Header>
      <Modal.Body className="p-1">
        <Row>
          <Col>
            <MonacoEditor language="json" />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
        <Button
          className="justify-content-center gap-50"
          variant="flat-primary"
          onClick={toggleModal}
        >
          Cancel
        </Button>
        <Button
          className="justify-content-center gap-50"
          variant="outline-primary"
          onClick={toggleModal}
        >
        <UploadCloud size={20} />
          Upload JSON
        </Button>
        <Button
          className="justify-content-center gap-50"
          variant="primary"
          onClick={toggleModal}
        >
        <Check size={20} />
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

JSONModal.displayName = 'JSONModal';
export { JSONModal };
