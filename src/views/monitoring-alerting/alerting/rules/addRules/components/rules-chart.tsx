import { ResponsiveLine } from '@nivo/line';

interface RulesChartProps {
  data: {
    id: string
    color: string
    data: { x: string, y: number }[]
  }[]
}

const RulesChart: React.FC<RulesChartProps> = ({ data }) => {
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
      colors={data[0].color}
      curve="catmullRom"
      data={data}
      enablePoints={false}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 30,
          translateY: 47,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 90,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 15,
          symbolShape: 'circle',
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
      margin={{ top: 20, right: 60, bottom: 50, left: 60 }}
      useMesh={true}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 0,
        max: 800,
        stacked: true,
        reverse: false
      }} />
  );
};

RulesChart.displayName = 'RulesChart';

export default RulesChart;
