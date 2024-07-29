import { Accordion } from 'react-bootstrap';

import { MonacoEditor } from '@components/custom';

const ApplicationsParameters = () => {
  return (
    <Accordion className="mb-2">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="border-primary-header rounded-top">
          Directory
        </Accordion.Header>
        <Accordion.Body className="d-block">
          <MonacoEditor language="yaml" />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

ApplicationsParameters.displayName = 'ApplicationsParameters';

export default ApplicationsParameters;
