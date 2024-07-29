import type { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { Check, Upload } from '@nxweb/icons/feather';

import { MonacoEditor } from '@components/custom';

interface ModalYAMLProps {
  readonly showMonaco: boolean
  readonly toggleMonaco: () => void
}

const modalButton = 'd-flex align-items-center justify-content-center gap-50';

const AddModalYAML: FC<ModalYAMLProps> = ({ showMonaco, toggleMonaco }) => {
  return (
    <Modal
      centered={true}
      className="confirmation-modal"
      show={showMonaco}
      size="xl"
    >
      <Modal.Body className="p-1">
        <MonacoEditor height="400px" language="yaml" />
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
          <Upload size={20} />
          Import YAML
        </Button>
        <Button className={modalButton} onClick={toggleMonaco}>
          <Check size={20} />
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

AddModalYAML.displayName = 'AddModalYAML';

export { AddModalYAML };
