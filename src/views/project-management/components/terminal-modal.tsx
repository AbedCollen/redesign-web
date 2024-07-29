import type { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { MonacoEditor } from '@components/custom';

interface TerminalModalProps {
  readonly open: boolean
  readonly toggleShowModal: () => void
  readonly type: 'Log Detail' | 'Shell'
}

const TerminalModal: FC<TerminalModalProps> = ({
  open,
  toggleShowModal,
  type
}) => {
  return (
        <Modal
          centered={true}
          className="confirmation-modal"
          show={open}
          size="lg"
        >
          <Modal.Header className="p-1">
            <h5 className="fw-bold">{type}</h5>
          </Modal.Header>

          <Modal.Body className="p-1"><MonacoEditor language="yaml" /></Modal.Body>

          <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
            {type === 'Log Detail' && (
              <Button
                className="px-50 py-25"
                variant="primary"
                onClick={toggleShowModal}
              >
                Clear Screen
              </Button>
            )}
            <Button
              className="px-50 py-25"
              variant="primary"
              onClick={toggleShowModal}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
  );
};

TerminalModal.displayName = 'TerminalModal';
export { TerminalModal };
