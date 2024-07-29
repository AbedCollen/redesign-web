import type { FC } from 'react';
import { Col, ProgressBar } from 'react-bootstrap';

interface ClusterInventoryProps {
  readonly data: {
    title: string
    healthy: number
    unhealthy: number
  }
}

const ProgressChart: FC<ClusterInventoryProps> = ({ data }) => {
  return (
    <Col className="border rounded p-1 my-1" id="progress-bar">
      <div className="d-flex border rounded ps-1 py-25 fs-6 bg-light-secondary">
        <div className="text-black pe-50">{data.title}:</div>
        <div className="text-info">{data.healthy + data.unhealthy}</div>
      </div>

      <div className="mt-50">
        <ProgressBar
          className="progress-bar-background"
          now={(data.healthy / (data.healthy + data.unhealthy)) * 100} />
      </div>

      {data.title === 'Nodes' &&
        <div className="d-flex justify-content-between mt-25 fs-6">
          <div>Ready: {data.healthy}</div>
          <div>Not Ready: {data.unhealthy}</div>
        </div>}
      {data.title === 'Pods' &&
        <div className="d-flex justify-content-between mt-25 fs-6">
          <div>Created: {data.healthy}</div>
          <div>Maximum: {data.unhealthy}</div>
        </div>}
      {data.title === 'Storage Classes' || data.title === 'Namespaces'
        ? (<div className="d-flex justify-content-between mt-25 fs-6">
          <div>Created: {data.healthy}</div>
           </div>)
        : null }
      {data.title === 'Presistent Volume' || data.title === 'Presistent Volume Claim'
        ? (<div className="d-flex justify-content-between mt-25 fs-6">
          <div>Bounded: {data.healthy}</div>
          <div>Unbounded: {data.unhealthy}</div>
           </div>)
        : null }
    </Col>
  );
};

ProgressChart.displayName = 'ProgressChart';

export default ProgressChart;
