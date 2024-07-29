import { Form } from 'react-bootstrap';

import TracesChart from './traces-chart';
import {
  FUNCTION_FILTER_DROPDOWN,
  GROUPBY_FILTER_DROPDOWN
} from '../constants';

const TracesChartLayout = () => {
  return (
    <Form className="py-1">
      <div className="d-flex gap-75 w-100">
        <Form.Group className="mb-1 w-100" controlId="formStorageClass">
          <Form.Label className="fw-bold fs-5 text-dark">Function</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="">Please select</option>
            {FUNCTION_FILTER_DROPDOWN.map((key) => (
              <option key={key.eventKey} value={key.eventKey}>
                {key.eventKey}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-1 w-100" controlId="formStorageClass">
          <Form.Label className="fw-bold fs-5 text-dark">Group By</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="">Please select</option>
            {GROUPBY_FILTER_DROPDOWN.map((key) => (
              <option key={key.eventKey} value={key.eventKey}>
                {key.eventKey}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </div>
      <div className="border rounded">
        <TracesChart />
      </div>
    </Form>
  );
};

TracesChartLayout.displayName = 'TracesChartLayout';
export { TracesChartLayout };
