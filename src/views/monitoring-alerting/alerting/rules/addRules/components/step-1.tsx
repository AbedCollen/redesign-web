import { Tab, Tabs } from 'react-bootstrap';

import ClickHouse from './click-house-query';
import PromQL from './promql';
import QueryBuilder from './query-builder';

const StepOne = () => {
  return (
    <>
      <span className="form-label">Step 1 - Define the metric</span>
      <div>
        <Tabs
          className="border-bottom"
          defaultActiveKey="queryBuilder"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="queryBuilder" title="Query Builder">
            <QueryBuilder />
          </Tab>

          <Tab eventKey="clickHouse" title="ClickHouse Query">
            <ClickHouse />
          </Tab>

          <Tab eventKey="promQL" title="PromQL">
            <PromQL />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

StepOne.displayName = 'StepOne';

export default StepOne;
