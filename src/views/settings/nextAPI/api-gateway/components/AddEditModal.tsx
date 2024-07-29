/* eslint-disable @typescript-eslint/init-declarations */
import type { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

import { Check } from '@nxweb/icons/feather';

import { NxFormControl } from '@components/custom';

interface AddEditModalProps {
  readonly toggleModal: () => void
  readonly type: string
}

const className = { input: 'border rounded p-1' };

const AddEditModal: FC<AddEditModalProps> = ({ toggleModal, type }) => {
  return (
    <>
      <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
        <h5 className="pt-1">{type} API Gateway</h5>
      </Modal.Header>
      <Modal.Body className="p-1">
        <Form>
          <Row className="mt-1">
            <Col>
              <NxFormControl
                className={className}
                label="Name"
                placeholder="Cluster Name" />
            </Col>
            <Col>
              <NxFormControl
                className={className}
                label="Display"
                placeholder="Cluster Display Name" />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              <NxFormControl
                className={className}
                label="Server"
                placeholder="Select Server" />
            </Col>
            <Col>
              <NxFormControl
                className={className}
                label="Port"
                placeholder="Public Port" />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              <NxFormControl
                className={className}
                label="Management Port"
                placeholder="Management Port" />
            </Col>
            <Col>
              <NxFormControl
                className={className}
                label="Load Balancer"
                placeholder="Load Balancer URL" />
            </Col>
          </Row>
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
    </>
  );
};

AddEditModal.displayName = 'AddEditModal';
export { AddEditModal };
