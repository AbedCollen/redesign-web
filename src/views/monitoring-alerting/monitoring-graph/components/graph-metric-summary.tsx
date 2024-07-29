import { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { Download, Plus } from '@nxweb/icons/feather';

import { StoreCommand, useStore } from '@models/store';

import MetricCard from './metric-card';
import {
  DATA_CONTAINER_READY,
  DATA_CONTAINER_RESTART,
  DATA_NODE_ALLOCATABLE_CPIJ,
  DATA_NODE_ALLOCATABLE_MEMORY,
  DATA_NODE_CONDITION_PRESSURE,
  DATA_NODE_CONDITION_READY,
  DATA_NODE_CPU_USAGE,
  DATA_NODE_MEMORY_USAGE,
  DATA_POD_CPU_UTILIZATION,
  DATA_POD_IO_NETWORK_RECEIVE,
  DATA_POD_IO_NETWORK_TRANSMIT,
  DATA_POD_MEMORY_USAGE
} from '../constants';

const GraphMetricSummary = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.monitoringAlerting?.monitoringGraph?.detail
  );

  useEffect(() => {
    dispatch(
      StoreCommand.app.monitoringAlerting.monitoringGraph.GetDetailData()
    );
  }, [dispatch]);

  return (
    <>
      <div className="d-flex justify-content-end gap-75">
        <Button
          className="d-flex justify-content-center gap-50"
          variant="outline-primary"
        >
          <Download size={20} />
          Save Layout
        </Button>
        <Button
          className="d-flex justify-content-center gap-50"
          variant="primary"
        >
          <Plus size={20} />
          Add Panel
        </Button>
      </div>

      <div className="m-1 p-1 border rounded">
        <Row>
          <Col>
            <MetricCard
              metric={store?.detail.totalCpuUsage}
              title="Total CPU usage" />
          </Col>
          <Col>
            <MetricCard
              metric={store?.detail.totalMemoryUsage}
              title="Total Memory Usage" />
          </Col>
          <Col>
            <MetricCard
              metric={store?.detail.totalAllocateableMemory}
              title="Total Allocatable Memory" />
          </Col>
        </Row>
        <Row>
          <Col>
            <MetricCard
              metric={store?.detail.totalAllocateableCpu}
              title="Total Allocatable CPU" />
          </Col>
          <Col>
            <MetricCard
              metric={store?.detail.totalNetworkIoTransmit}
              title="Total Network IO (transmit)" />
          </Col>
          <Col>
            <MetricCard
              metric={store?.detail.totalNetworkIoReceive}
              title="Total Network IO (receive)" />
          </Col>
        </Row>
        <Row>
          <Col>
            <MetricCard title="Total Network IO Pressure" />
          </Col>
          <Col>
            <MetricCard
              dataLine={DATA_NODE_CONDITION_READY}
              title="Node Condition: Ready" />
          </Col>
          <Col>
            <MetricCard
              dataLine={DATA_NODE_CONDITION_PRESSURE}
              title="Node Condition: Memory Pressure" />
          </Col>
        </Row>
        <Row>
          <Col>
            <MetricCard
              dataLine={DATA_NODE_MEMORY_USAGE}
              title="Node Memory Usage" />
          </Col>
          <Col>
            <MetricCard dataLine={DATA_NODE_CPU_USAGE} title="Node CPU Usage" />
          </Col>
        </Row>
        <Row>
          <Col>
            <MetricCard
              dataLine={DATA_NODE_ALLOCATABLE_MEMORY}
              title="Node Allocatable Memory" />
          </Col>
          <Col>
            <MetricCard
              dataLine={DATA_NODE_ALLOCATABLE_CPIJ}
              title="Node Allocatable CPIJ" />
          </Col>
        </Row>
        <Row>
          <Col>
            <MetricCard title="Node Network IO" />
          </Col>
          <Col>
            <MetricCard title="Node Network Errors" />
          </Col>
        </Row>
        <Row>
          <Col>
            <MetricCard
              dataLine={DATA_POD_IO_NETWORK_RECEIVE}
              title="Pod Network IO (receive)" />
          </Col>
          <Col>
            <MetricCard
              dataLine={DATA_POD_IO_NETWORK_TRANSMIT}
              title="Pod Network IO (transmit)" />
          </Col>
        </Row>
        <Row>
          <Col>
            <MetricCard
              dataLine={DATA_POD_CPU_UTILIZATION}
              title="Pod CPU Utilization" />
          </Col>
          <Col>
            <MetricCard
              dataLine={DATA_POD_MEMORY_USAGE}
              title="Pod Memory Usage" />
          </Col>
        </Row>
        <Row>
          <Col>
            <MetricCard
              dataLine={DATA_CONTAINER_RESTART}
              title="Container Restarts" />
          </Col>
          <Col>
            <MetricCard
              dataLine={DATA_CONTAINER_READY}
              title="Container Ready" />
          </Col>
        </Row>
      </div>
    </>
  );
};

GraphMetricSummary.displayName = 'GraphMetricSummary';

export default GraphMetricSummary;
