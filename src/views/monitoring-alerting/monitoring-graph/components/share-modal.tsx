import type { FC } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';

import { Copy } from '@nxweb/icons/feather';

import { MonacoEditor } from '@components/custom';

interface ShareModalProps {
  show: boolean;
  toggleModal: () => void;
}

const ShareModal: FC<ShareModalProps> = ({ show, toggleModal }) => {
  return (
    <Modal centered={true} className="confirmation-modal" show={show} size="lg">
      <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
        <h5 className="pt-1">Share</h5>
      </Modal.Header>
      <Modal.Body className="p-1">
        <Row>
          <Col className="d-flex justify-content-end">
            <Button className="px-50 py-25" variant="flat-secondary">
              <Copy className="me-1" size={16} />
              Copy to Clipboard
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <MonacoEditor language="json" />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
        <Button
          className="justify-content-center"
          variant="flat-primary"
          onClick={toggleModal}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ShareModal.displayName = 'ShareModal';
export { ShareModal };
