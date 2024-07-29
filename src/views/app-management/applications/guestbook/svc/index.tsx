/* eslint-disable react/jsx-key */
import { Button, Tab, Tabs } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

import { RefreshCcw, Trash2 } from '@nxweb/icons/feather';

import { SummaryTab } from './components/summary-tab';

const GuestBookSVCMain = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const handleSyncApp = () => {
    navigate(`/app-management/applications/sync-app/${id}`);
  };

  return (
    <div className="element-wrapper">
      <div className="d-flex justify-content-between align-items-center shadow-sm p-2">
        <h5 className="fw-bold text-black">guestbook-ui</h5>
        <div className="d-flex gap-1 align-items-center">
          <Button
            as="a"
            className="d-flex gap-50 align-items-center"
            variant="outline-danger"
          >
            <Trash2 size={20} /> Delete
          </Button>
          <Button
            className="d-flex gap-50 align-items-center"
            onClick={handleSyncApp}
          >
            <RefreshCcw size={16} /> Sync
          </Button>
        </div>
      </div>
      <div className="m-2 p-1 border rounded">
        <Tabs
          className="border-bottom mb-2"
          defaultActiveKey="summary"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="summary" title="Summary">
            <SummaryTab />
          </Tab>
          <Tab eventKey="events" title="Events">
            <span>No Events Available</span>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

GuestBookSVCMain.displayName = 'GuestBookSVCMain';

export { GuestBookSVCMain };
