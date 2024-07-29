import type { FC } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import { Check } from '@nxweb/icons/feather';

import { NxFormControl } from '@components/custom/nx-form-control';

interface AddModalNodesProps {
  show: boolean
  toggleModal: () => void
}

const AddModalNodes: FC<AddModalNodesProps> = ({ show, toggleModal }) => {
  return (
    <Modal centered={true} className="confirmation-modal" show={show} size="lg">
      <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
        <h5 className="pt-1">Add Nodes</h5>
      </Modal.Header>
      <Modal.Body className="p-1">
        <Form>
          <NxFormControl
            className={{ container: 'mb-1' }}
            label="Host IP"
            placeholder="Placeholder"
            type="text" />

          <NxFormControl
            as="textarea"
            className={{ container: 'mb-1' }}
            label="Private Key"
            placeholder="Placeholder"
            rows={5} />
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
        <Button
          className="justify-content-center"
          variant="flat-primary"
          onClick={toggleModal}
        >
          Cancel
        </Button>
        <Button
          className="d-flex align-items-center justify-content-center gap-50"
          onClick={toggleModal}
        >
          <Check size={20} />
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

AddModalNodes.displayName = 'AddModalNodes';
export { AddModalNodes };
