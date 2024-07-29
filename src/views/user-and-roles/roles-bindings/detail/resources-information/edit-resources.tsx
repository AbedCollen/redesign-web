import { Button, Tab, Tabs } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { RefreshCW } from '@nxweb/icons/feather';

import { MonacoEditor } from '@components/custom/monaco-editor';

const EditResourcesMain = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="element-wrapper">
      <div className="p-2 shadow-sm d-flex justify-content-between align-items-center">
        <h5 className="fw-bold text-black m-0">Edit Resource</h5>
        <div className="d-flex gap-2">
          <Button
            className="d-flex align-items-center justify-content-center gap-50"
            variant="flat-primary"
            onClick={goBack}
          >
            Cancel
          </Button>
          <Button
            className="d-flex align-items-center justify-content-center gap-50"
            onClick={goBack}
          >
            <RefreshCW size={20} /> Update
          </Button>
        </div>
      </div>
      <div className="m-2 p-1 border rounded">
        <Tabs
          className="border-bottom"
          defaultActiveKey="YAML"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="YAML" title="YAML">
            <MonacoEditor language="yaml" />
          </Tab>

          <Tab eventKey="JSON" title="JSON">
            <MonacoEditor language="json" />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

EditResourcesMain.displayName = 'EditResourcesMain';
export { EditResourcesMain };
