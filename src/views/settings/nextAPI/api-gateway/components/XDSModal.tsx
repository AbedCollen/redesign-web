import type { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

import { Check } from '@nxweb/icons/feather';

import { NxFormControl, NxFormSelect } from '@components/custom';

interface XDSModalAPIGatewayProps {
  readonly toggleConfirmationModal: () => void
  readonly toggleModal: () => void
}

const className = { input: 'border rounded p-1' };

const XDSModalAPIGateway: FC<XDSModalAPIGatewayProps> = ({
  toggleConfirmationModal,
  toggleModal
}) => {
  return (
    <>
      <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
        <h5 className="pt-1">XDS Cluster</h5>
      </Modal.Header>
      <Modal.Body className="p-1">
        <Form>
          <Row className="mt-1">
            <Col>
              <NxFormControl
                className={className}
                disabled={true}
                label="Cluster Name"
                placeholder="Development" />
            </Col>
            <Col>
              <NxFormControl
                className={className}
                disabled={true}
                label="Host Address"
                placeholder="10.10.16.17" />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              <NxFormControl
                className={className}
                label="Host Port"
                placeholder="22" />
            </Col>
            <Col>
              <NxFormControl
                className={className}
                label="Host User"
                placeholder="nextplatform" />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              <NxFormSelect
                className={className}
                label="Copy PB"
                options={[
                  {
                    label: 'True',
                    value: 'true'
                  },
                  {
                    label: 'False',
                    value: 'false'
                  }
                ]} />
            </Col>
            <Col>
              <NxFormControl
                className={className}
                label="Proxy Address"
                placeholder="0.0.0.0" />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              <NxFormControl
                className={className}
                disabled={true}
                label="Proxy Port"
                placeholder="8081" />
            </Col>
            <Col>
              <NxFormControl
                className={className}
                disabled={true}
                label="Proxy URL"
                placeholder="https://apigateway-dev.tokrum.com" />
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
        <Button
          className="justify-content-center"
          variant="flat-danger"
          onClick={toggleConfirmationModal}
        >
          Delete
        </Button>

        <Button
          className="justify-content-center"
          variant="outline-primary"
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

XDSModalAPIGateway.displayName = 'XDSModalAPIGateway';
export { XDSModalAPIGateway };
