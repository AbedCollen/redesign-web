import LineGraph from '../../components/line-graph';
import {
  DATA_ERROR_PERCENTAGE,
  DATA_EXTERNAL_CALL_DURATION,
  DATA_EXTERNAL_CALL_DURATION_BY_ADDRESS,
  DATA_EXTERNAL_CALL_RPS
} from '../../constants';

const ExternalCalls = () => {
  return (
    <div>
      <div className="border rounded p-1 mb-2">
        <p className="text-center fs-5">External Call Error Percentage</p>
        <div style={{ height: '300px', width: '100%' }}>
          <LineGraph dataLine={DATA_ERROR_PERCENTAGE} />
        </div>
      </div>
      <div className="border rounded p-1 mb-2">
        <p className="text-center fs-5">External Call duration</p>
        <div style={{ height: '300px', width: '100%' }}>
          <LineGraph dataLine={DATA_EXTERNAL_CALL_DURATION} />
        </div>
      </div>
      <div className="border rounded p-1 mb-2">
        <p className="text-center fs-5">External Call RPS (by Address)</p>
        <div style={{ height: '300px', width: '100%' }}>
          <LineGraph dataLine={DATA_EXTERNAL_CALL_RPS} />
        </div>
      </div>
      <div className="border rounded p-1 mb-2">
        <p className="text-center fs-5">External Call duration (by Address)</p>
        <div style={{ height: '300px', width: '100%' }}>
          <LineGraph dataLine={DATA_EXTERNAL_CALL_DURATION_BY_ADDRESS} />
        </div>
      </div>
    </div>
  );
};

ExternalCalls.displayName = 'ExternalCalls';
export { ExternalCalls };
