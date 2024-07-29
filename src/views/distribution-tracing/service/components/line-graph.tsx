import React from 'react';

import { ResponsiveLine } from '@nivo/line';

interface LineGraphProps {
  readonly dataLine: {
    id: string
    color: string
    data: { x: string | null, y: string | null }[]
  }[]
}

const LineGraph: React.FC<LineGraphProps> = ({ dataLine }) => {
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
        curve="catmullRom"
        data={dataLine}
        enablePoints={false}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 12,
            translateY: 70,
            itemWidth: 100,
            itemHeight: 20,
            itemsSpacing: 7,
            symbolSize: 20,
            symbolShape: 'square',
            itemDirection: 'left-to-right',
            itemTextColor: '#777',
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
        lineWidth={3}
        margin={{ top: 20, right: 60, bottom: 80, left: 60 }}
        pointBorderColor={{ from: 'serieColor' }}
        pointBorderWidth={2}
        pointColor={{ theme: 'background' }}
        pointLabelYOffset={-12}
        pointSize={10}
        useMesh={true}
        xScale={{ type: 'point' }}
        yFormat=" >-.2f"
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }} />
  );
};

LineGraph.displayName = 'LineGraph';

export default LineGraph;
