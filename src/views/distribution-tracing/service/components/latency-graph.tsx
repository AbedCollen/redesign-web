import React from 'react';

import { ResponsiveLine } from '@nivo/line';

interface LatencyGraphProps {
  readonly dataLine: {
    id: string
    color: string
    data: { x: string, y: string }[]
  }[]
}

const LatencyGraph: React.FC<LatencyGraphProps> = ({ dataLine }) => {
  return (
    <ResponsiveLine
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 36,
        legendPosition: 'middle'
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: -40,
        legendPosition: 'middle'
      }}
      axisRight={null}
      axisTop={null}
      colors={
        dataLine.map((item) => item.color)
      }
      data={dataLine}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 12,
          translateY: 70,
          itemWidth: 100,
          itemsSpacing: 7,
          itemDirection: 'left-to-right',
          itemHeight: 20,
          symbolSize: 12,
          symbolShape: 'square',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      lineWidth={0}
      margin={{ top: 20, right: 60, bottom: 80, left: 60 }}
      pointBorderColor={{ from: 'serieColor' }}
      pointBorderWidth={5}
      pointColor={{ theme: 'background' }}
      pointLabelYOffset={-12}
      pointSize={5}
      useMesh={true}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
      }} />
  );
};

LatencyGraph.displayName = 'LatencyGraph';

export default LatencyGraph;
