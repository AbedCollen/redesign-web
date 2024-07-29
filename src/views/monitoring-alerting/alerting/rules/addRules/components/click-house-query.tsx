import { Accordion, Form, InputGroup } from 'react-bootstrap';

import { EyeFill } from '@nxweb/icons/bootstrap';

import { MonacoEditor } from '@components/custom';

const ClickHouse = () => {
  return (
    <div className="flex-column d-flex gap-2 pt-1">
      <Accordion>
        <Accordion.Header className="border-primary rounded-top lh-1">
          <div className="d-flex gap-50 align-items-center">
            <EyeFill size={17} />A
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="d-flex flex-column gap-2">
            <MonacoEditor language="C#" />
            <InputGroup>
              <InputGroup.Text>Legend Format</InputGroup.Text>
              <Form.Control type="text" />
            </InputGroup>
          </div>
        </Accordion.Body>
      </Accordion>
    </div>
  );
};

ClickHouse.displayName = 'ClickHouse';

export default ClickHouse;
