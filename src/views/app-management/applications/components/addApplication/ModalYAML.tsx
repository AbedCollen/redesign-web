import type { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { Download } from '@nxweb/icons/bootstrap';
import { Check } from '@nxweb/icons/feather';

import { MonacoEditor } from '@components/custom';

interface ModalYAMLProps {
  readonly showMonaco: boolean
  readonly toggleMonaco: () => void
}

const modalButton = 'd-flex align-items-center justify-content-center gap-50';

const ModalYAML: FC<ModalYAMLProps> = ({ showMonaco, toggleMonaco }) => {
  return (
    <Modal
      centered={true}
      className="confirmation-modal"
      show={showMonaco}
      size="lg"
    >
      <Modal.Body className="p-1">
        <MonacoEditor language="yaml" />
      </Modal.Body>

      <Modal.Footer className="d-flex align-items-center gap-1">
        <Button
          className="justify-content-center"
          variant="flat-danger"
          onClick={toggleMonaco}
        >
          Cancel
        </Button>
        <Button
          className={modalButton}
          variant="outline-primary"
          onClick={toggleMonaco}
        >
          <Download size={20} /> Download YAML
        </Button>
        <Button className={modalButton} onClick={toggleMonaco}>
          <Check size={20} /> Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalYAML.displayName = 'ModalYAML';

export { ModalYAML };
