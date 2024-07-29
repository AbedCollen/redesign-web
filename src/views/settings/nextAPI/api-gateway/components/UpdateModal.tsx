import type { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

import { StopCircleFill } from '@nxweb/icons/bootstrap';

import { NxFormSelect } from '@components/custom';

const CONST_PROJECTS_OPTIONS = [
  {
    label: 'Bapenda',
    value: 'Bapenda'
  },
  {
    label: 'Default',
    value: 'Default'
  },
  {
    label: 'Default.old',
    value: 'Default.old'
  },
  {
    label: 'Demo',
    value: 'Demo'
  },
  {
    label: 'Makers',
    value: 'Makers'
  },
  {
    label: 'Navcore',
    value: 'Navcore'
  },
  {
    label: 'NextAPI',
    value: 'NextAPI'
  },
  {
    label: 'NextCluster',
    value: 'NextCluster'
  }
];

const CONST_CERTIFICATES_OPTIONS = [
  {
    label: 'ssl-cloud-nextplatform-ai',
    value: 'ssl-cloud-nextplatform-ai'
  },
  {
    label: 'ssl-makersinstitute-io',
    value: 'ssl-makersinstitute-io'
  },
  {
    label: 'ssl-nextplatform.io',
    value: 'ssl-nextplatform.io'
  },
  {
    label: 'ssl-tokrum-com',
    value: 'ssl-tokrum-com'
  },
  {
    label: 'vault-postgres-nextflow',
    value: 'vault-postgres-nextflow'
  }
];

const className = { input: 'border rounded p-1' };

interface UpdateModalAPIGatewayProps {
  readonly toggleModal: () => void
}

const UpdateModalAPIGateway: FC<UpdateModalAPIGatewayProps> = ({
  toggleModal
}) => {
  return (
    <>
      <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
        <h5 className="pt-1">Update API Gateway Status</h5>
      </Modal.Header>
      <Modal.Body className="p-1">
        <Form>
          <Row>
            <Col>
              <NxFormSelect
                className={className}
                label="Projects"
                options={CONST_PROJECTS_OPTIONS.map((option) => ({
                  label: option.label,
                  value: option.value
                }))} />
            </Col>
            <Col>
              <NxFormSelect
                allowEmpty={false}
                className={className}
                label="Certificate"
                options={CONST_CERTIFICATES_OPTIONS.map((option) => ({
                  label: option.label,
                  value: option.value
                }))} />
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
          <StopCircleFill size={20} />
          Stop
        </Button>
      </Modal.Footer>
    </>
  );
};

UpdateModalAPIGateway.displayName = 'UpdateModalAPIGateway';
export { UpdateModalAPIGateway };
