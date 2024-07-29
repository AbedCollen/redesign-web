import { Col, Form, Row } from 'react-bootstrap';

import { NxFormControl, NxFormSelect } from '@components/custom';

import { SELECT_OPTIONS } from '../../constants';

const Source = () => {
  return (
    <Row className="mb-1">
      <Col>
        <div className="border rounded-top border-secondary p-1 fw-bold">
          Source
        </div>
        <div className="border rounded-bottom border-top-0 p-1">
          <Row className="mb-1">
            <div className="nx-form-control">
              <Form.Label className="form-label">Repository URL</Form.Label>
            </div>
            <Col xs={9}>
              <NxFormControl label="" placeholder="Placeholder" />
            </Col>
            <Col>
              <NxFormSelect
                label=""
                options={SELECT_OPTIONS}
                placeholder="GIT" />
            </Col>
          </Row>

          <Row className="mb-1">
            <div className="nx-form-control">
              <Form.Label className="form-label">Revision</Form.Label>
            </div>
            <Col xs={9}>
              <NxFormControl label="" placeholder="Placeholder" />
            </Col>
            <Col>
              <NxFormSelect
                label=""
                options={SELECT_OPTIONS}
                placeholder="BRANCHES" />
            </Col>
          </Row>

          <Row className="mb-1">
            <Col>
              <NxFormControl label="Path" placeholder="Placeholder" />
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

Source.displayName = 'Source';

export { Source };
