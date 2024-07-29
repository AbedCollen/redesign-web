import type { FC } from 'react';

import { NxCircularProgressbar } from '@components/custom/index';

interface CircularBarProps {
  readonly data: {
    label: string
    title: string
    value: number
  }[]
}

const CircularBar: FC<CircularBarProps> = ({ data }) => {
  return (
    <div className=" d-flex p-3" id="cluster-capacity-circular">
      <div className="pie-container text-center">
        <NxCircularProgressbar
          styles={{
            path: {
              stroke: 'url(#gradient)'
            },
            text: {
              color: '#646464',
              fontSize: '12px'
            },
            trail: {
              stroke: '#F3F9FF'
            }
          }}
          text={
            <div>
              <p className="fw-bold m-0">{data[0].title}</p>
              <p className="m-0 text-muted">Available</p>
            </div>
          }
          value={(data[0].value / data[1].value) * 100} />
      </div>
      <div className="ms-2">
        <div className="mt-2">
          <div className="fw-bold d-flex">
            <div className="me-1 rounded legend-req" />
            Requested
          </div>
          <div>{(data[0].value / data[1].value) * 100}%</div>
        </div>
        <div className="mt-2">
          <div className="fw-bold d-flex">
            <div className="me-1 rounded legend-cap" />
            Capacity
          </div>
          <div>{100 - (data[0].value / data[1].value) * 100}%</div>
        </div>
      </div>
    </div>
  );
};

CircularBar.displayName = 'CircularBar';

export default CircularBar;
