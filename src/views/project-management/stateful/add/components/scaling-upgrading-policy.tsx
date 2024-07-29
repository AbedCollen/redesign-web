import { useState } from 'react';
import { Accordion, Col, Form, InputGroup, Row } from 'react-bootstrap';

const ScalingUpgradingPolicy: React.FC = () => {
  const [selectedOptionScale, setSelectedOptionScale] =
    useState<string>('option1');

  const handleDropdownChangeScale = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOptionScale(event.target.value);
  };

  return (
    <Accordion className="mb-2" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="border border-primary-header rounded-top">
         <span className="text-primary-header">Scaling/Upgrade Policy</span>
        </Accordion.Header>
        <Accordion.Body className="nx-form-control">
          <Form.Group className="mb-1" controlId="formStorageClass">
            <Form.Select
              aria-label="Default select example"
              id="dropdown"
              value={selectedOptionScale}
              onChange={handleDropdownChangeScale}
            >
              <option value="option1">
                Rolling: Start new pods, then stop old
              </option>
              <option value="option2">
                Rolling: Stop old pods, then stop new
              </option>
              <option value="option3">Kill ALL pods, then start new</option>
              <option value="option4">Custom</option>
            </Form.Select>
          </Form.Group>
          {selectedOptionScale === 'option1' && (
            <div className="mb-1">
              <Col>
                <Form.Label>Batch Size</Form.Label>
                <InputGroup>
                  <Form.Control
                    aria-describedby="basic-addon2"
                    aria-label="BatchSize"
                    className="form-control "
                    placeholder="placeholder"
                    type="text" />
                  <InputGroup.Text
                    className="input-group-text"
                    id="basic-addon2"
                  >
                    pod(s)
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </div>
          )}
          <Row className="mb-1">
            <Col>
              <Form.Label>
                Minimum Ready Seconds
              </Form.Label>
              <InputGroup>
                <Form.Control
                  aria-describedby="basic-addon2"
                  aria-label="minReadySecs"
                  className="form-control "
                  placeholder="placeholder"
                  type="text" />
                <InputGroup.Text
                  className="input-group-text"
                  id="basic-addon2"
                >
                  seconds
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col>
              <Form.Label>Progress Deadline</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-describedby="basic-addon2"
                  aria-label="PrgsDeadline"
                  className="form-control "
                  placeholder="placeholder"
                  type="text" />
                <InputGroup.Text
                  className="input-group-text"
                  id="basic-addon2"
                >
                  seconds
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

ScalingUpgradingPolicy.displayName = 'ScalingUpgradingPolicy';

export { ScalingUpgradingPolicy };
