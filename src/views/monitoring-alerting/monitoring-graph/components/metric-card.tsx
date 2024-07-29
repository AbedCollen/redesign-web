import React from 'react';
import { Dropdown } from 'react-bootstrap';

import { ResponsiveLine } from '@nivo/line';

import {
  ChevronDown,
  Copy,
  Edit,
  Maximize,
  Trash2
} from '@nxweb/icons/feather';

interface MetricCardProps {
  readonly dataLine?: {
    color: string
    data: { x: string | null, y: string | null }[]
    id: string
  }[]
  readonly metric?: string
  readonly title: string
}

const MetricCard: React.FC<MetricCardProps> = ({
  dataLine = [],
  metric = 'No Data',
  title
}) => {
  return (
    <div className="border rounded p-1 mb-2">
      <div className="d-flex justify-content-between align-items-center">
        <div
          className="text-center fs-5 flex-grow-1"
          style={{ paddingLeft: '41.6px' }}
        >
          {title}
        </div>
        <div>
          <Dropdown className="no-arrow">
            <Dropdown.Toggle
              className="d-flex align-items-center"
              variant="flat-light"
            >
              <ChevronDown size={12} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="d-flex align-items-center gap-50">
                <Maximize size={16} />
                View
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center gap-50">
                <Edit size={16} />
                Edit
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center gap-50">
                <Copy size={16} />
                Clone
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center gap-50 text-danger">
                <Trash2 color="red" size={16} />
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: '170px', width: '100%' }}
      >
        {dataLine.length === 0
          ? <h5 className="text-center">{metric}</h5>

          : (
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
            colors={dataLine.map((item) => item.color)}
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
            margin={{ top: 10, right: 30, bottom: 40, left: 30 }}
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
          )}
      </div>
    </div>
  );
};

MetricCard.displayName = 'MetricCard';

export default MetricCard;
