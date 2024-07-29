import { Accordion, Col, Form } from 'react-bootstrap';

const Command: React.FC = () => {
  return (
    <Accordion className="mb-2" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="border border-primary-header rounded-top">
          <span className="text-primary-header">Command{' '}</span>
        </Accordion.Header>
        <Accordion.Body className="nx-form-control">
          <div className="d-flex gap-2 mb-1">
            <Col>
              <Form.Label className="fw-bold">Entrypoint</Form.Label>
              <div className="input-group">
                <Form.Control
                  aria-describedby="basic-addon2"
                  aria-label="entrypoint"
                  className="form-control"
                  placeholder="e.g. /bin/sh"
                  type="text" />
              </div>
            </Col>
            <Col>
              <Form.Label className="fw-bold">Command</Form.Label>
              <div className="input-group">
                <Form.Control
                  aria-describedby="basic-addon2"
                  aria-label="command"
                  className="form-control"
                  placeholder="e.g. /bin/sbin/httpd -f httpd.conf"
                  type="text" />
              </div>
            </Col>
          </div>
          <div className="d-flex gap-2 mb-1">
            <Col>
              <Form.Label className="fw-bold">Working Dir</Form.Label>
              <div className="input-group">
                <Form.Control
                  aria-describedby="basic-addon2"
                  aria-label="workDir"
                  className="form-control"
                  placeholder="e.g. /myapp"
                  type="text" />
              </div>
            </Col>
            <Col>
              <Form.Label className="fw-bold">User ID</Form.Label>
              <div className="input-group">
                <Form.Control
                  aria-describedby="basic-addon2"
                  aria-label="userId"
                  className="form-control"
                  placeholder="e.g. 501"
                  type="text" />
              </div>
            </Col>
          </div>
          <div className="d-flex gap-2 mb-1">
            <Col>
              <Form.Label className="fw-bold">Console</Form.Label>
              <div className="input-group">
                <select
                  className="form-select"
                  id="console"
                  name=""
                  placeholder="Placeholder"
                >
                  <option hidden={true} value="placeholder">
                    Source
                  </option>
                  <option value="item1">Item 1</option>
                  <option value="item2">Item 2</option>
                  <option value="item3">Item 3</option>
                  <option value="item4">Item 4</option>
                </select>
              </div>
            </Col>
            <Col>
              <Form.Label className="fw-bold">Auto Restart</Form.Label>
              <select
                className="form-select"
                id="restart"
                name=""
                placeholder="Placeholder"
              >
                <option hidden={true} value="placeholder">
                  Always
                </option>
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
                <option value="item4">Item 4</option>
              </select>
            </Col>
          </div>
          <div className="d-flex gap-2 mb-1">
            <Col>
              <Form.Label className="fw-bold">Filesystem Group</Form.Label>
              <div className="input-group">
                <Form.Control
                  aria-describedby="basic-addon2"
                  aria-label="fileSystem"
                  className="form-control"
                  placeholder="e.g. 501"
                  type="text" />
              </div>
            </Col>
            <Col>
              <Form.Label className="fw-bold">Stop Timeout</Form.Label>
              <div className="input-group">
                <Form.Control
                  aria-describedby="basic-addon2"
                  aria-label="timeout"
                  className="form-control"
                  placeholder=""
                  type="text" />
              </div>
            </Col>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

Command.displayName = 'Command';

export { Command };
