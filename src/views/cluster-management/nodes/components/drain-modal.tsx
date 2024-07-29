/* eslint-disable react/jsx-key */
import type { FC } from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';

interface DrainModalNodesProps {
  readonly show: boolean
  readonly toggleModal: () => void
}

const OPTION_DELETE = [
  {
    label: 'Yes',
    value: 'yes'
  },
  {
    label: 'No',
    value: 'no'
  }
];

const OPTION_FORCE = [
  {
    label: 'Yes',
    value: 'yes'
  },
  {
    label: 'No',
    value: 'no'
  }
];

const DrainModalNodes: FC<DrainModalNodesProps> = ({ show, toggleModal }) => {
  return (
    <Modal centered={true} className="confirmation-modal" show={show} size="lg">
      <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
        <h5 className="pt-1">Drain Node</h5>
      </Modal.Header>
      <Modal.Body className="p-1">
        <Form>
          <Form.Group className="nx-form-check mb-3">
            <Form.Label>Delete Local Data</Form.Label>
            {OPTION_DELETE.map((item) => <Form.Check className="mb-25" label={item.label} type="radio" value={item.value} />)}
          </Form.Group>
          <Form.Group className="nx-form-check mb-3">
            <Form.Label>Force</Form.Label>
            {OPTION_FORCE.map((item) => <Form.Check className="mb-25" label={item.label} type="radio" value={item.value} />)}
          </Form.Group>
          <Form.Group className="mb-3 nx-form-control">
            <Form.Label>
              Grace period for pod to terminate themselves
            </Form.Label>
            <InputGroup>
              <Form.Control placeholder="e.g. 30" />
              <InputGroup.Text id="basic-addon2">seconds</InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3 nx-form-control">
            <Form.Label>Drain timeout</Form.Label>
            <InputGroup>
              <Form.Control placeholder="e.g. 60" />
              <InputGroup.Text id="basic-addon2">seconds</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex align-items-center justify-content-end">
        <Button
          className="justify-content-center"
          variant="primary"
          onClick={toggleModal}
        >
          Drain
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

DrainModalNodes.displayName = 'DrainModalNodes';
export { DrainModalNodes };
