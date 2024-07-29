/* eslint-disable react/jsx-key */
import { Col, Form, Row } from 'react-bootstrap';

import { FORM_SEVERITY } from '../../constant';

const StepThree = () => {
  return (
    <>
      <span className="form-label">Step 3 - Alert Configuration</span>
      <div className="d-flex flex-column gap-1">
        <Row className="mb-50">
          <Col>
            <Form.Group controlId="formStorageClass">
              <Form.Label className="fs-4 text-dark">Severity</Form.Label>
              <Form.Select aria-label="Default select example">
                {FORM_SEVERITY.map((value) => <option value="0">{value.label}</option>)}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-50">
          <Col>
            <Form.Group controlId="formName">
              <Form.Label className="fs-4 text-dark">
                Alert Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control placeholder="Placeholder" type="text" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-50">
          <Col>
            <Form.Group controlId="formDescription">
              <Form.Label className="fs-4 text-dark">
                Alert Description
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Placeholder"
                style={{ height: '150px' }} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-50">
          <Col>
            <Form.Group controlId="formName">
              <Form.Label className="fs-4 text-dark">Label</Form.Label>
              <Form.Control placeholder="Placeholder" type="text" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-50">
          <Col>
            <Form.Group className="mb-1" controlId="formName">
              <Form.Label className="fs-4 text-dark">
                Notification Channels
              </Form.Label>
              <Form.Control placeholder="Placeholder" type="text" />
            </Form.Group>
          </Col>
        </Row>
      </div>
    </>
  );
};

StepThree.displayName = 'StepThree';

export default StepThree;
