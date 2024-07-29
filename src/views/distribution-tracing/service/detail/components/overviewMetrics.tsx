import type { FC } from 'react';

import { CustomDataTable } from '@components/custom';
import type { ServiceDataModel } from '@models/app/distribution-tracing/service/types';

import LatencyGraph from '../../components/latency-graph';
import LineGraph from '../../components/line-graph';
import {
  DATA_ERROR_PERCENTAGE,
  DATA_LATENCY,
  DATA_RATE
} from '../../constants';
import { columns } from '../columns';

interface OverviewMetricsProps {
  readonly store: ServiceDataModel | undefined
}

const OverviewMetrics: FC<OverviewMetricsProps> = ({ store }) => {
  return (
    <div>
      <div className="border rounded p-1 mb-2">
        <p className="text-center fs-5">Latency</p>
        <div style={{ height: '300px', width: '100%' }}>
          <LatencyGraph dataLine={DATA_LATENCY} />
        </div>
      </div>
      <div className="border rounded p-1 mb-2">
        <p className="text-center fs-5">Rate (ops/s)</p>
        <div style={{ height: '300px', width: '100%' }}>
          <LineGraph dataLine={DATA_RATE} />
        </div>
      </div>
      <div className="border rounded p-1 mb-2">
        <p className="text-center fs-5">Error Percentage</p>
        <div style={{ height: '300px', width: '100%' }}>
          <LineGraph dataLine={DATA_ERROR_PERCENTAGE} />
        </div>
      </div>
      <div className="border rounded p-1">
        <p className="fs-5">Key Operations</p>
        <CustomDataTable columns={columns} data={store?.detail || []} />
      </div>
    </div>
  );
};

OverviewMetrics.displayName = 'OverviewMetrics';
export { OverviewMetrics };
