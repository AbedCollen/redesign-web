import { useState } from 'react';
import { Accordion, Col, Form } from 'react-bootstrap';

const HealthCheck: React.FC = () => {
  const [healthCheck, setHealthCheck] = useState<boolean>(false);
  const readinessHandler = () => {
    setHealthCheck(!healthCheck);
  };

  return (
    <Accordion className="mb-2" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="border border-primary-header rounded-top">
          <span className="text-primary-header">
            Health Check
          </span>
        </Accordion.Header>
        <Accordion.Body className="container nx-form-control">
          <div className="text-end">
            {/* INLINE */}
            {healthCheck === true
              ? <span aria-hidden="true" className="user-select-none" style={{ cursor: 'pointer' }} onClick={() => readinessHandler()}>Use the same check for liveness and readiness</span>
              : <span aria-hidden="true" className="user-select-none" style={{ cursor: 'pointer' }} onClick={() => readinessHandler()}>Define a seperate liveness</span>}
          </div>
          <div className="bg-white">
            <Form.Group>
              <div className="d-flex gap-2">
                <Col className="d-flex flex-column">
                  <Form.Label>readiness check</Form.Label>
                  <Form.Select id="source" name="" placeholder="Placeholder">
                    <option hidden={true} value="placeholder">Source</option>
                    <option value="item1">Item 1</option>
                    <option value="item2">Item 2</option>
                    <option value="item3">Item 3</option>
                    <option value="item4">Item 4</option>
                  </Form.Select>
                </Col>
                {healthCheck === true && (
                    <Col className="d-flex flex-column">
                      <Form.Label>liveness check</Form.Label>
                      <Form.Select id="source" name="" placeholder="Placeholder">
                        <option hidden={true} value="placeholder">Source</option>
                        <option value="item1">Item 1</option>
                        <option value="item2">Item 2</option>
                        <option value="item3">Item 3</option>
                        <option value="item4">Item 4</option>
                      </Form.Select>
                    </Col>)
                  }

              </div>
            </Form.Group>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

HealthCheck.displayName = 'HealthCheck';

export { HealthCheck };
