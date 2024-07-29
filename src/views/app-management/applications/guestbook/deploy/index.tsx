/* eslint-disable react/jsx-key */
import { Button, Col, Row, Tab, Tabs } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

import { Copy, Download, Plus, RefreshCcw, Trash2 } from '@nxweb/icons/feather';

import { MonacoEditor, NxSearch } from '@components/custom';

import { SummaryTab } from './components/summary-tab';

const GuestBookDeployMain = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const handleSyncApp = () => {
    navigate(`/app-management/applications/sync-app/${id}`);
  };

  return (
    <div className="element-wrapper">
      <div className="d-flex justify-content-between align-items-center shadow-sm p-2">
        <h5 className="fw-bold m-0 text-black">guestbook-ui</h5>
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
          <Tab eventKey="log" title="Log">
            <Row className="mb-1">
              <Col sm={4}>
                <NxSearch />
              </Col>
              <Col className="d-flex justify-content-end gap-75 ">
                <Button
                  className="d-flex gap-50 align-items-center"
                  variant="outline-primary"
                >
                  <Copy />
                  Copy
                </Button>
                <Button
                  className="d-flex gap-50 align-items-center"
                  variant="outline-primary"
                >
                  <Plus />
                  Follow
                </Button>
                <Button className="d-flex gap-50 align-items-center">
                  <Download />
                  Download
                </Button>
              </Col>
            </Row>
            <div>
              <MonacoEditor language="Yaml" />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

GuestBookDeployMain.displayName = 'GuestBookDeployMain';

export { GuestBookDeployMain };
