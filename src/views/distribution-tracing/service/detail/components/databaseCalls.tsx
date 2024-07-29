import LineGraph from '../../components/line-graph';
import { DATA_ERROR_PERCENTAGE } from '../../constants';

const DatabaseCalls = () => {
  return (
    <div>
      <div className="border rounded p-1 mb-2">
        <p className="text-center fs-5">Database Calls RPS</p>
        <div style={{ height: '300px', width: '100%' }}>
          <LineGraph dataLine={DATA_ERROR_PERCENTAGE} />
        </div>
      </div>
      <div className="border rounded p-1">
        <p className="text-center fs-5">Database Calls Avg Duration</p>
        <div style={{ height: '300px', width: '100%' }}>
          <LineGraph dataLine={DATA_ERROR_PERCENTAGE} />
        </div>
      </div>
    </div>
  );
};

DatabaseCalls.displayName = 'DatabaseCalls';
export { DatabaseCalls };
