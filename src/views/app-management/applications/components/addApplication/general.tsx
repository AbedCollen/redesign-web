import { Col, Row } from 'react-bootstrap';

import {
  NxFormCheckGroup,
  NxFormControl,
  NxFormSelect
} from '@components/custom';

import { SELECT_OPTIONS, SYNC_OPTIONS } from '../../constants';

const General = () => {
  return (
    <Row className="mb-1">
      <Col>
        <div className="border rounded-top border-secondary p-1 fw-bold">
          General
        </div>
        <div className="border rounded-bottom border-top-0 p-1 text-dark">
          <Row className="mb-1">
            <Col>
              <NxFormControl label="Label" placeholder="Placeholder" />
            </Col>
          </Row>

          <Row className="mb-1">
            <Col>
              <NxFormSelect
                label="Database"
                options={SELECT_OPTIONS}
                placeholder="Placeholder" />
            </Col>
            <Col>
              <NxFormSelect
                label="Database"
                options={SELECT_OPTIONS}
                placeholder="Placeholder" />
            </Col>
          </Row>

          <Row className="mb-1">
            <Col>
              <NxFormCheckGroup items={SYNC_OPTIONS} label="Sync Options" />
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

General.displayName = 'General';

export { General };
