import type { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

import { ResponsivePie } from '@nivo/pie';

interface PieChartProps {
  readonly data: {
    color: string;
    id: string;
    label: string;
    title: string;
    value: number;
  }[];
}

const PieChart: FC<PieChartProps> = ({ data }) => {
  return (
    <div
      className="d-flex m-0 justify-content-center"
      id="project-inventory-pie"
    >
      <div className="me-1" style={{ height: '180px', width: '40%' }}>
        <ResponsivePie
          activeOuterRadiusOffset={8}
          colors={['#E3A5F9', 'hsla(207, 92%, 90%, 1)']}
          cornerRadius={45}
          data={data}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          fit={false}
          innerRadius={0.75}
          margin={{ bottom: 10, left: 0, right: 0, top: 10 }}
          padAngle={1}
        />
      </div>
      <Row className="d-flex align-items-center">
        <Col>
          <div className="d-flex justify-content-center border p-50 px-1 rounded bg-light mb-1">
            <div className="text-black">{data[0].title}</div>
            <div className="text-info">: {data[0].value + data[1].value}</div>
          </div>
          <Row className="pb-50">
            <div className="d-flex align-items-center text-center">
              <div className="me-25 m-0 text-center d-flex align-items-center justify-content-center alert legend1" />
              <div>{data[0].label}: {data[0].value}</div>
            </div>
          </Row>
          <Row>
            <div className="d-flex align-items-center text-center">
              <div className="me-25 m-0 text-center d-flex align-items-center justify-content-center alert legend2" />
              <div>{data[1].label}: {data[1].value}</div>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

PieChart.displayName = 'PieChart';

export default PieChart;
