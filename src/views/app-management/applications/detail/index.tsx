import { Tab, Tabs } from 'react-bootstrap';

import ApplicationsDiff from './components/diff';
import ApplicationsEvents from './components/events';
import ApplicationsHistoryAndRollback from './components/history-and-rollback';
import ApplicationsManifest from './components/manifest';
import ApplicationsParameters from './components/parameters';
import ApplicationsSummary from './components/summary';
import ApplicationsSyncStatus from './components/sync-status';

const ApplicationsDetailMain = () => {
  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold text-black mt-1">Applications Details</h4>
      <div className="p-1 border rounded mt-3">
        <Tabs
          className="border-bottom mb-2"
          defaultActiveKey="summary"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="summary" title="Summary">
            <ApplicationsSummary />
          </Tab>
          <Tab eventKey="parameters" title="Parameters">
            <ApplicationsParameters />
          </Tab>
          <Tab eventKey="manifest" title="Manifest">
            <ApplicationsManifest />
          </Tab>
          <Tab eventKey="diff" title="Diff">
            <ApplicationsDiff />
          </Tab>
          <Tab eventKey="events" title="Events">
            <ApplicationsEvents />
          </Tab>
          <Tab eventKey="sync-status" title="Sync Status">
            <ApplicationsSyncStatus />
          </Tab>
          <Tab eventKey="history-and-rollback" title="History and Rollback">
            <ApplicationsHistoryAndRollback />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

ApplicationsDetailMain.displayName = 'ApplicationsDetailMain';

export { ApplicationsDetailMain };
