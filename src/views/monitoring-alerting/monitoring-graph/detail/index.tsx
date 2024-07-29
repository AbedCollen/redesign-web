/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';

import { ChevronDown, RefreshCW } from '@nxweb/icons/feather';

import GraphMetricHeader from '../components/graph-metric-header';
import GraphMetricSummary from '../components/graph-metric-summary';
import { FORM_CHECK_LABEL, TIME_FILTER_DROPDOWN } from '../constants';

const GraphMetricMain = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Last 5 min');

  const handleFilterViews = (eventKey: string | null) => {
    if (eventKey !== null) {
      setSelectedFilter(eventKey);
    }
  };

  return (
    <div className="element-wrapper">
      <div className="shadow-sm p-2 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <h5 className="fw-bold text-black m-0">Graph Metric</h5>
        </div>
        <div>
          <div className="d-flex justify-content-end">
            <div className="me-1">
              <Dropdown onSelect={(e) => handleFilterViews(e || '')}>
                <Dropdown.Toggle
                  className="d-flex align-items-center"
                  variant="outline-primary"
                >
                  {selectedFilter}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {TIME_FILTER_DROPDOWN.map((key) => (
                    <Dropdown.Item eventKey={key.eventKey}>
                      {key.eventKey}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div>
              <Button className="d-flex align-items-center me-1">
                <RefreshCW size={22} />
              </Button>
            </div>

            <Dropdown className="no-arrow">
              <Dropdown.Toggle variant="outline-primary">
                <ChevronDown size={20} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Form>
                  <Form.Group className="p-1">
                    <Form.Check label="Auto Refresh" type="checkbox" />
                  </Form.Group>
                  <div className="dropdown-divider" />
                  <Form.Group className="px-1">
                    <Form.Label className="my-1">Refresh Interval</Form.Label>
                    {FORM_CHECK_LABEL.map((labelForm) => (
                      <Form.Check
                        className="mb-1"
                        id="refreshinterval"
                        label={labelForm.label}
                        name="bindingMode"
                        type="radio" />
                    ))}
                  </Form.Group>
                </Form>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="mt-1">Last Refresh - 3 mins ago</div>
        </div>
      </div>

      <div className="p-2 border rounded m-2">
        <GraphMetricHeader />
      </div>

      <div className="p-2 border rounded m-2">
        <GraphMetricSummary />
      </div>
    </div>
  );
};

GraphMetricMain.displayName = 'GraphMetricMain';
export { GraphMetricMain };
