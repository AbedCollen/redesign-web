import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { ResponsiveBump } from '@nivo/bump';

interface ClusterMetricsProps {
  readonly dataBump: {
    color: string
    data: { x: number, y: number }[]
    id: string
    title: string
  }[]
}

const BumpChartMetrics: React.FC<ClusterMetricsProps> = ({ dataBump }) => {
  return (
    <Row id="line-container">
      <Col>
        <Row>
          <div className="p-0 ps-1 fw-bold">{dataBump[0].title}</div>
        </Row>
        <Row className="d-flex align-items-center justify-content-center" style={{ height: '170px', width: '100%' }}>
          <ResponsiveBump
            activeLineWidth={0}
            activePointSize={5}
            axisBottom={null}
            axisLeft={null}
            axisRight={null}
            axisTop={null}
            colors={[dataBump[0].color, dataBump[1].color]}
            data={dataBump}
            enableGridX={false}
            endLabel={false}
            endLabelPadding={0}
            inactiveLineWidth={2}
            inactiveOpacity={0.15}
            inactivePointSize={0}
            margin={{ bottom: 10, left: 0, right: 0, top: 10 }}
            pointBorderColor={{ from: 'serie.color', modifiers: [] }}
            pointColor="black"
            pointSize={2}
            startLabelPadding={0} />
        </Row>
      </Col>
    </Row>
  );
};

BumpChartMetrics.displayName = 'BumpChartMetrics';

export default BumpChartMetrics;
