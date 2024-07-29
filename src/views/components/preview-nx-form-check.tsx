import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import { NxFormCheck } from '@components/custom';

const PreviewNxFormCheck = () => {
  const [selectedType, setSelectedType] = useState<'checkbox' | 'radio' | 'switch'>('checkbox');

  return (
    <div>
      <Row className="mb-2">
        <Col xs={4}>
          <NxFormCheck
            type={selectedType} />
        </Col>
        <Col xs={4}>
          <div className="text-body-2 fw-medium mb-50">Types</div>
          <div className="d-flex align-items-center gap-1">
            <Form.Check checked={selectedType === 'checkbox'} label="Checkbox" name="form-1" type="radio" onChange={() => setSelectedType('checkbox')} />
            <Form.Check checked={selectedType === 'radio'} label="Radio" name="form-1" type="radio" onChange={() => setSelectedType('radio')} />
            <Form.Check checked={selectedType === 'switch'} label="Switch" name="form-1" type="radio" onChange={() => setSelectedType('switch')} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <pre className="p-2">
            <Row>
              <Col>
{`<NxFormCheck
  checked?:       ------>  // Accepts boolean, defaults to false
  className?: {
    container?:       ------>  // Accepts string
    input?:       ------>  // Accepts string
    label?:       ------>  // Accepts string
  }
  customStyles?: {
    container?:       ------>  // Accepts React inline CSS object
    input?:       ------>  // Accepts React inline CSS object
    label?:       ------>  // Accepts React inline CSS object
  }
  isInvalid?:       ------>  // Accepts boolean | string, defaults to undefined
  isValid?:       ------>  // Accepts boolean | string, defaults to undefined
  label?:       ------>  // Accepts React components | string | number, defaults to "Input Label"
  required?:       ------>  // Accepts boolean, defaults to false
  subText?:       ------>  // Accepts React components | string | number, defaults to undefined
  type?:       ------>  // Accepts 'checkbox' | 'radio' | 'switch', defaults to 'checkbox'
  onChange?:       ------>  // Accepts function
/>`}
              </Col>
            </Row>
          </pre>
        </Col>
      </Row>
    </div>
  );
};

PreviewNxFormCheck.displayName = 'PreviewNxFormCheck';

export { PreviewNxFormCheck };
