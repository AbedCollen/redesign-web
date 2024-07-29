/* eslint-disable react/no-array-index-key */
import { Button, Col } from 'react-bootstrap';

import { Plus, X } from '@nxweb/icons/bootstrap';

import { allRoutes } from '@config/constants';

const ChooseTypeMain = () => {
  const numberOfRows = 2;
  const alertsPerRow = 2;

  return (
    <div className="element-wrapper">
      <div className="shadow-sm p-1 d-flex align-items-center">
        <Col className="p-1" xs={5}>
          <h4 className="fw-bold text-black m-0">
            Choose a type for the alert:
          </h4>
        </Col>
        <Col className="text-end">
          <div className="d-flex align-items-center justify-content-end gap-75">
            <Button
              as="a"
              className="d-flex align-items-center justify-content-center gap-50 btn-outline-primary border-danger text-danger"
              href={allRoutes.monitoringAlerting.alertingRules}
            >
              <X size={20} /> Cancel
            </Button>
          </div>
        </Col>
      </div>
      <div className="d-flex flex-column gap-2 shadow-sm p-2 m-2 rounded">
        {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
          <div className="d-flex gap-2" key={rowIndex}>
            {Array.from({ length: alertsPerRow }).map((_, colIndex) => (
              <Col key={colIndex}>
                <div>
                  <div className="border rounded-top border-secondary p-1 fw-bold">
                    Metric based Alert
                  </div>
                  <div className="border rounded-bottom border-top-0 p-1">
                    <p>
                      Send a notification when a condition occurs in the metric
                      data
                    </p>
                    <div className="gap-75 d-flex justify-content-end">
                      <Button
                        as="a"
                        className="gap-75 d-flex align-items-center"
                        href={allRoutes.monitoringAlerting.alertingRulesAdd}
                      >
                        <Plus size={20} /> Rules
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

ChooseTypeMain.displayName = 'ChooseTypeMain';
export { ChooseTypeMain };
