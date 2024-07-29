import { Tab, Tabs } from 'react-bootstrap';

import { PreviewConfirmModal } from './preview-confirm-modal';
import { PreviewMonacoEditor } from './preview-monaco-editor';
import { PreviewNxAvatar } from './preview-nx-avatar';
import { PreviewNxCircularProgressbar } from './preview-nx-circular-progressbar';
import { PreviewNxFormCheck } from './preview-nx-form-check';
import { PreviewNxSearch } from './preview-nx-search';

const ComponentPreview = () => {
  return (
    <div className="p-2">
      <Tabs
        className="mb-3"
        defaultActiveKey="confirm-modal"
      >
        <Tab eventKey="confirm-modal" title="ConfirmModal">
          <PreviewConfirmModal />
        </Tab>
        <Tab eventKey="nx-avatar" title="NxAvatar">
          <PreviewNxAvatar />
        </Tab>
        <Tab eventKey="nx-form-check" title="NxFormCheck">
          <PreviewNxFormCheck />
        </Tab>
        <Tab eventKey="nx-search" title="NxSearch">
          <PreviewNxSearch />
        </Tab>
        <Tab eventKey="monaco" title="Monaco Editor">
          <PreviewMonacoEditor />
        </Tab>
        <Tab eventKey="nx-circular-progressbar" title="NxCircularProgressbar">
          <PreviewNxCircularProgressbar />
        </Tab>
      </Tabs>

    </div>
  );
};

ComponentPreview.displayName = 'ComponentPreview';

export { ComponentPreview };
