import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { NxFormControl } from '@components/custom/nx-form-control';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { AlertEvent } from './components/alert-event';
import CircularBar from './components/cluster-capacity-circular-bar';
import ProgressChart from './components/cluster-inventory-progress';
import BumpChartMetrics from './components/cluster-metrics';
import PieChart from './components/project-inventory-pie';
import {
  DATA_BUMP,
  DATA_BUMP_2,
  DATA_BUMP_3,
  DATA_BUMP_4,
  DATA_BUMP_5,
  DATA_BUMP_6,
  DATA_CLUSTER_CAPACITY,
  DATA_CLUSTER_CAPACITY_2,
  DATA_CLUSTER_INVENTORY_1,
  DATA_CLUSTER_INVENTORY_2,
  DATA_CLUSTER_INVENTORY_3,
  DATA_CLUSTER_INVENTORY_4,
  DATA_CLUSTER_INVENTORY_5,
  DATA_CLUSTER_INVENTORY_6,
  DATA_LINE,
  DATA_LINE_2,
  DATA_LINE_3
} from './constants';

const DashboardMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.clusterManagement?.eventAlert?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.clusterManagement.eventAlert.GetMainData());
  }, [dispatch]);

  const [activeButton, setActiveButton] = useState('today');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const formControlClassName = { input: 'border rounded p-1 border-info w-100' };

  return (
    <div className="p-2" id="dashboard">
      <h4 className="fw-bold mb-2 text-black">Dashboard</h4>
      <Row>
        {/* Sisi kiri */}
        <Col className="element-wrapper" sm={8}>
          <div className="border rounded p-2 mb-1">
            <h5 className="pb-1 fw-bold">Cluster Detail</h5>
            <Row className="d-flex">
              <Col className="px-1">
                <NxFormControl
                  className={formControlClassName}
                  label="Name"
                  placeholder="Information"
                  readOnly={true} />
              </Col>
              <Col className="p-0 pe-1">
                <NxFormControl
                  className={formControlClassName}
                  label="Cluster Version"
                  placeholder="Information"
                  readOnly={true} />
              </Col>
              <Col className="p-0 pe-1">
                <NxFormControl
                  className={formControlClassName}
                  label="Created at"
                  placeholder="Information"
                  readOnly={true} />
              </Col>
              <Col className="p-0 pe-1">
                <NxFormControl
                  className={formControlClassName}
                  label="High Availability"
                  placeholder="Information"
                  readOnly={true} />
              </Col>
            </Row>
          </div>
          {/* Color Gradient */}
          <svg style={{ height: 0, width: 0 }}>
            <defs>
              <linearGradient gradientTransform="rotate(90)" id="gradient">
                <stop offset="0%" stopColor="#E3A5F9" />
                <stop offset="100%" stopColor="#5B8AB0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="border rounded p-2 mb-3">
            <h5 className="pb-1 fw-bold">Cluster Capacity</h5>
            <Row className="d-flex justify-content-between">
              <Col className="p-0">
                <CircularBar data={DATA_CLUSTER_CAPACITY} />
              </Col>
              <Col className="p-0">
                <CircularBar data={DATA_CLUSTER_CAPACITY_2} />
              </Col>
            </Row>
          </div>

          <div className="border rounded p-2 mb-3">
            <h5 className="pb-1 fw-bold">Cluster Inventory</h5>
            <Row className="gap-50 font-size-CI">
              <Col className="p-0">
                <ProgressChart data={DATA_CLUSTER_INVENTORY_1} />
              </Col>
              <Col className="p-0">
                <ProgressChart data={DATA_CLUSTER_INVENTORY_2} />
              </Col>
              <Col className="p-0">
                <ProgressChart data={DATA_CLUSTER_INVENTORY_3} />
              </Col>
            </Row>
            <Row className="gap-50 font-size-CI">
              <Col className="p-0">
                <ProgressChart data={DATA_CLUSTER_INVENTORY_4} />
              </Col>
              <Col className="p-0">
                <ProgressChart data={DATA_CLUSTER_INVENTORY_5} />
              </Col>
              <Col className="p-0">
                <ProgressChart data={DATA_CLUSTER_INVENTORY_6} />
              </Col>
            </Row>
          </div>

          <div className="border rounded p-2 mb-3">
            <h5 className="pb-1 fw-bold">Project Inventory</h5>
            <div>
              <div>
                <Row className="d-flex justify-content-between">
                  <Col className="p-0">
                    <PieChart data={DATA_LINE} />
                  </Col>
                  <Col className="p-0">
                    <PieChart data={DATA_LINE_2} />
                  </Col>
                  <Col className="p-0">
                    <PieChart data={DATA_LINE_3} />
                  </Col>
                </Row>
              </div>
            </div>
          </div>

          <div className="border rounded p-2 pb-0 mb-3">
            <h5 className="pb-1 fw-bold">Cluster Status</h5>
            <div className="d-flex my-2 justify-content-between align-items-center text-center">
              <p className="d-flex flex-row align-items-center justify-content-center text-center m-0">
                <div className="me-1 bg-success text-center d-flex align-items-center justify-content-center rounded-circle alert-circle">
                  ✔
                </div>
                Controlled Manager
              </p>
              <p className="d-flex flex-row align-items-center justify-content-center m-0">
                <div className="me-1 bg-warning text-center d-flex align-items-center justify-content-center rounded-circle alert-circle">
                  !
                </div>
                ETCD
              </p>
              <p className="d-flex flex-row align-items-center justify-content-center m-0">
                <div className="me-1 bg-success text-center d-flex align-items-center justify-content-center rounded-circle alert-circle">
                  ✔
                </div>
                Scheduler
              </p>
            </div>
          </div>

          <div className="border rounded p-2" id="cluster-metrics">
            <h5 className="pb-1 fw-bold">Cluster Metrics</h5>
            <div>
              <div className="d-flex mb-2 pt-1">
                <Button
                  className={`me-1 rounded button ${
                    activeButton === 'today' ? 'highlighted' : ''
                  }`}
                  variant={`${activeButton === 'today' ? 'light' : ''}`}
                  onClick={() => handleButtonClick('today')}
                >
                  Today
                </Button>
                <Button
                  className={`me-1 rounded button ${
                    activeButton === 'thisWeek' ? 'highlighted' : ''
                  }`}
                  variant={`${activeButton === 'thisWeek' ? 'light' : ''}`}
                  onClick={() => handleButtonClick('thisWeek')}
                >
                  This Week
                </Button>
                <Button
                  className={`me-1 rounded button ${
                    activeButton === 'thisMonth' ? 'highlighted' : ''
                  }`}
                  variant={`${activeButton === 'thisMonth' ? 'light' : ''}`}
                  onClick={() => handleButtonClick('thisMonth')}
                >
                  This Month
                </Button>
              </div>

              <Row className="d-flex justify-content-between">
                <Col className="p-0 ps-2">
                  <BumpChartMetrics dataBump={DATA_BUMP} />
                </Col>
                <Col className="p-0 ps-2">
                  <BumpChartMetrics dataBump={DATA_BUMP_2} />
                </Col>
                <Col className="p-0 ps-2">
                  <BumpChartMetrics dataBump={DATA_BUMP_3} />
                </Col>
              </Row>
              <Row className="d-flex justify-content-between">
                <Col className="p-0 ps-2">
                  <BumpChartMetrics dataBump={DATA_BUMP_4} />
                </Col>
                <Col className="p-0 ps-2">
                  <BumpChartMetrics dataBump={DATA_BUMP_5} />
                </Col>
                <Col className="p-0 ps-2">
                  <BumpChartMetrics dataBump={DATA_BUMP_6} />
                </Col>
              </Row>
            </div>
          </div>
        </Col>

        {/* Sisi kanan */}
        <Col className="element-wrapper" sm={4}>
          <div className="border rounded p-2 mb-3">
            <h5 className="pb-1 fw-bold">Events</h5>
            <div>
              <AlertEvent data={store?.data || []} />

              <div className="d-flex justify-content-center border-top pt-1">
                <Button
                  as="a"
                  className="text-blue"
                  href={allRoutes.clusterManagement.events}
                  variant="link"
                >
                  View All
                </Button>
              </div>
            </div>
          </div>
          <div className="border rounded p-2">
            <h5 className="pb-1 fw-bold">Alerts</h5>
            <div>
              <div className="d-grid gap-2 pt-1 pb-2">
                <AlertEvent data={store?.data || []} />

                <div className="d-flex justify-content-center border-top pt-1">
                  <Button
                    as="a"
                    className="text-blue"
                    href={allRoutes.monitoringAlerting.alertingTriggers}
                    variant="link"
                  >
                    View All
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

DashboardMain.displayName = 'DashboardMain';
export { DashboardMain };
