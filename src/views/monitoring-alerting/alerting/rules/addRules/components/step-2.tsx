import { useState } from 'react';
import { Col, Dropdown, Form, InputGroup } from 'react-bootstrap';

import {
  FORM_DURING_LAST,
  FORM_METRICS_TEXT,
  FORM_THRESHOLD
} from '../../constant';

const StepTwo = () => {
  const [selectedMetrics, setSelectedMetrics] = useState('above');
  const [selectedThreshold, setSelectedThreshold] = useState('at least once');
  const [selectedDuration, setSelectedDuration] = useState('5 mins');

  return (
    <>
      <span className="form-label">Step 2 - Define Alert Conditions</span>
      <div className="d-flex flex-column gap-1">
        <p className="d-flex gap-1 align-items-center">
          Send notification when the metrics is
          <Col xs={1}>
            <Dropdown>
              <Dropdown.Toggle
                className="w-100 d-flex flex-row align-items-center"
                variant="outline-secondary"
              >
                <div className="d-flex align-items-center justify-content-start gap-50 text-truncate">
                  {selectedMetrics}
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {FORM_METRICS_TEXT.map((value) => (
                  <Dropdown.Item
                    key={value.label}
                    onClick={() => setSelectedMetrics(value.label)}
                  >
                    {value.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          the threshold
          <Col xs={1}>
            <Dropdown>
              <Dropdown.Toggle
                className="w-100 d-flex flex-row align-items-center"
                variant="outline-secondary"
              >
                <div className="d-flex align-items-center justify-content-start gap-50 text-truncate">
                  {selectedThreshold}
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {FORM_THRESHOLD.map((value) => (
                  <Dropdown.Item
                    key={value.label}
                    onClick={() => setSelectedThreshold(value.label)}
                  >
                    {value.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          during the last
          <Col xs={1}>
            <Dropdown>
              <Dropdown.Toggle
                className="w-100 d-flex flex-row align-items-center"
                variant="outline-secondary"
              >
                <div className="d-flex align-items-center justify-content-start gap-50 text-truncate">
                  {selectedDuration}
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {FORM_DURING_LAST.map((value) => (
                  <Dropdown.Item
                    key={value.label}
                    onClick={() => setSelectedDuration(value.label)}
                  >
                    {value.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </p>
        <InputGroup>
          <InputGroup.Text>Alert Threshold</InputGroup.Text>
          <Form.Control type="text" />
        </InputGroup>
      </div>
    </>
  );
};

StepTwo.displayName = 'StepTwo';

export default StepTwo;
