import type { FC } from 'react';
import { Alert, Button, Form, InputGroup } from 'react-bootstrap';

import { Info } from '@nxweb/icons/feather';

interface RetentionPeriodFormProps {
  data: {
    value: number
    timeUnit: string
  }
}

const RetentionPeriodForm: FC<RetentionPeriodFormProps> = ({ data }) => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center">
          <p className="w-100 text-start">Total Retention Period</p>
          <InputGroup className="mb-1">
            <Form.Control
              aria-label="Text input with dropdown button"
              defaultValue={data.value} />
            <Form.Select
              aria-label="Default select example"
              defaultValue={data.timeUnit}
            >
              <option value="Hours">Hours</option>
              <option value="Days">Days</option>
              <option value="Months">Months</option>
            </Form.Select>
          </InputGroup>
        </div>
      </div>
      <div className="text-center mt-2">
        <Button variant="primary">Save</Button>
      </div>
      <div className="w-100 mt-2">
        <Alert className="p-2" variant="success">
          <Info className="me-1" size={18} />
          Your last call to change retention to 7 days was successful.
        </Alert>
      </div>
    </div>
  );
};

RetentionPeriodForm.displayName = 'RetentionPeriodForm';

export default RetentionPeriodForm;
