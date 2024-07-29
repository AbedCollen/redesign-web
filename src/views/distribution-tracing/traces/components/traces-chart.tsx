/* eslint-disable import/no-extraneous-dependencies */
import { ResponsiveLine } from '@nivo/line';

const TRACES_CHART_DATA = [
  {
    id: 'USER',
    color: 'hsl(152, 70%, 50%)',
    data: [
      {
        x: '17:00:00',
        y: 250
      }
    ]
  }
];

const TracesChart = () => {
  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: '400px', width: '100%' }}
      >
        {TRACES_CHART_DATA.length === 0 && <div>No data</div>}
        {TRACES_CHART_DATA.length > 0 && (
          <ResponsiveLine
            areaOpacity={0}
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
              legendOffset: -45,
              legendPosition: 'middle'
            }}
            axisRight={null}
            axisTop={null}
            data={TRACES_CHART_DATA}
            enableGridX={false}
            legends={[]}
            margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
            pointBorderColor={{ from: 'color', modifiers: [] }}
            pointBorderWidth={2}
            pointColor={{ from: 'color', modifiers: [] }}
            pointLabelYOffset={-12}
            pointSize={5}
            useMesh={true}
            xScale={{ type: 'point' }}
            yFormat=" >-.2f"
            yScale={{
              type: 'linear',
              min: 0,
              max: 500,
              stacked: true,
              reverse: false
            }} />
        )}
      </div>
    </div>
  );
};

TracesChart.displayName = 'TracesChart';

export default TracesChart;
