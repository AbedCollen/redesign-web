/* eslint-disable react/jsx-key */
import { Accordion, Col, Row } from 'react-bootstrap';

import DashboardChartHealth from './components/dashboard-chart-health.js';
import DashboardChartSync from './components/dashboard-chart-sync.js';
import SearchCard from './components/search-card.js';
import SummaryIcon from './components/summary.js';

const chartTitle =
  'text-center border rounded-top border-bottom-0 fw-bold pt-1 fs-2';

const chart = 'text-center border rounded-bottom border-top-0 p-1';

const DashboardMain = () => {
  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mt-1 text-black">Dashboard</h4>
      <div className="p-1 border rounded mt-3">
        <Accordion className="mb-2" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border border-primary-header rounded-top">
              <div className="p-1 fs-2 text-primary-header">
                Application Summary
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="p-1">
                <SearchCard />
              </Row>
              <Row className="d-flex justify-content-between p-1">
                <Col>
                  <div>
                    <div className={chartTitle}>Sync</div>
                    <div className={chart}>
                      <DashboardChartSync />
                    </div>
                  </div>
                </Col>
                <Col>
                  <div>
                    <div className={chartTitle}>Health</div>
                    <div className={chart}>
                      <DashboardChartHealth />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="p-1">
                <SummaryIcon />
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

DashboardMain.displayName = 'DashboardMain';

export { DashboardMain };
