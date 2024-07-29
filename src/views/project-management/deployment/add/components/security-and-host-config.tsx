import { useState } from 'react';
import { Accordion, Col, Form, InputGroup } from 'react-bootstrap';

const SecurityAndHostConfig: React.FC = () => {
  const [memOption, setMemOption] = useState<string>('noLimit');

  const handleMemOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemOption(event.target.value);
  };
  const [cpuOption, setCpuOption] = useState<string>('noLimit');

  const handleCpuOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpuOption(event.target.value);
  };

  return (
    <Accordion className="mb-2" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="border border-primary-header rounded-top">
          <span className="text-primary-header">
            Security and Host Config{' '}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="mb-2 d-flex gap-2">
            <Col>
              <Form.Label>Pull Image</Form.Label>
              <div className="mb-50 d-flex gap-50">
                <input
                  id="always"
                  name="image"
                  type="radio"
                  value="always" />
                <label htmlFor="always">Always</label>
              </div>
              <div className="mb-50 d-flex gap-50">
                <input
                  id="if"
                  name="image"
                  type="radio"
                  value="if" />
                <label htmlFor="if">Only if not already on the node</label>
              </div>
              <div className="mb-50 d-flex gap-50">
                <input
                  id="never"
                  name="image"
                  type="radio"
                  value="never" />
                <label htmlFor="never">Never</label>
              </div>
            </Col>
            <Col>
              <Form.Label>Privileged</Form.Label>
              <div className="d-flex gap-50 mb-50">
                <input
                  id="privilegeNo"
                  name="privileged"
                  type="radio"
                  value="privilegeNo" />
                <label htmlFor="privilegeNo">No</label>
              </div>
              <div className="d-flex gap-50 mb-50">
                <input
                  id="privilegeYes"
                  name="privileged"
                  type="radio"
                  value="privilegeYes" />
                <label htmlFor="privilegeYes">
                  Yes: container has full access to the host
                </label>
              </div>
            </Col>
            <Col>
              <Form.Label>Privileged Escalation</Form.Label>
              <div className="mb-50 d-flex gap-50">
                <input
                  id="escalationNo"
                  name="privEscalation"
                  type="radio"
                  value="escalationNo" />
                <label htmlFor="escalationNo">No</label>
              </div>
              <div className="mb-50 d-flex gap-50">
                <input
                  id="escalationYes"
                  name="privEscalation"
                  type="radio"
                  value="escalationYes" />
                <Col>
                  <label htmlFor="escalationYes">
                    Yes: container can gain more privileges than its parent process
                  </label>
                </Col>
              </div>
            </Col>
          </div>
          <div className="mb-2 d-flex gap-2">
            <Col>
              <Form.Label>Use Host&apos;s PID Namespace</Form.Label>
              <div className="mb-50 d-flex gap-50">
                <input
                  id="pidNo"
                  name="PID"
                  type="radio"
                  value="pidNo" />
                <label htmlFor="pidNo">No</label>
              </div>
              <div className="mb-50 d-flex gap-50">
                <input
                  id="pidYes"
                  name="PID"
                  type="radio"
                  value="pidYes" />
                <label htmlFor="pidYes">Yes</label>
              </div>
            </Col>
            <Col>
              <Form.Label>Use Host&apos;s IPC Namepsace</Form.Label>
              <div className="mb-50 d-flex gap-50">
                <input
                  id="ipcNo"
                  name="IPC"
                  type="radio"
                  value="ipcNo" />
                <label htmlFor="ipcNo">No</label>
              </div>
              <div className="mb-50 d-flex gap-50">
                <input
                  id="ipcYes"
                  name="IPC"
                  type="radio"
                  value="ipcYes" />
                <label htmlFor="ipcYes">Yes</label>
              </div>
            </Col>
            <Col>
              <Form.Label>Run as Non-Root</Form.Label>
              <div className="mb-50 d-flex gap-50">
                <input
                  id="rootNo"
                  name="root"
                  type="radio"
                  value="rootNo" />
                <label htmlFor="rootNo">No</label>
              </div>
              <div className="mb-50 d-flex gap-50">
                <input
                  id="rootYes"
                  name="root"
                  type="radio"
                  value="rootYes" />
                <label htmlFor="rootYes">
                  Yes: container must run as a non-root user
                </label>
              </div>
            </Col>
          </div>
          <div className="mb-2 d-flex gap-2">
            <Col>
              <Form.Label>Read-Only Root Filesystem</Form.Label>
              <div className="mb-50 d-flex gap-50">
                <input
                  id="readNo"
                  name="read"
                  type="radio"
                  value="readNo"
                  onChange={handleCpuOption} />
                <label htmlFor="readNo">No</label>
              </div>
              <div className="mb-50 d-flex gap-50">
                <input
                  id="readYes"
                  name="read"
                  type="radio"
                  value="readYes"
                  onChange={handleCpuOption} />
                <label htmlFor="readYes">Yes</label>
              </div>
            </Col>
          </div>
          <div className="mb-2 d-flex gap-2">
            <Col className="border p-1 rounded-3">
              <Form.Group className="mb-2">
                <Form.Label className="fs-5">Memory Reservation</Form.Label>
                <InputGroup>
                  <Form.Control
                    aria-describedby="basic-addon2"
                    aria-label="minReadySecs"
                    placeholder="e.g 128"
                    type="text" />
                  <InputGroup.Text
                    className="input-group-text"
                    id="basic-addon2"
                  >
                    MiB
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <div className="mb-2">
                <Form.Label>Memory Limit</Form.Label>
                <div className="mb-50 d-flex gap-50">
                  <input
                    id="gpuLimitNo"
                    name="GPU"
                    type="radio"
                    value="noLimit"
                    onChange={handleMemOption} />
                  <label htmlFor="gpuLimitNo">No Limit</label>
                </div>
                <div className="mb-50 d-flex gap-50">
                  <input
                    id="gpuLimitYes"
                    name="GPU"
                    type="radio"
                    value="limit"
                    onChange={handleMemOption} />
                  <label htmlFor="gpuLimitYes">Limit</label>
                </div>
              </div>
              <InputGroup className="mb-2">
                {memOption === 'noLimit'
                  ? (
                  <Form.Control
                    aria-describedby="basic-addon2"
                    aria-label="minReadySecs"
                    disabled={true}
                    placeholder="e.g 128"
                    type="text" />
                  )
                  : (
                  <Form.Control
                    aria-describedby="basic-addon2"
                    aria-label="minReadySecs"
                    disabled={false}
                    placeholder="e.g 128"
                    type="text" />
                  )}
                <InputGroup.Text
                  className="input-group-text"
                  id="basic-addon2"
                >
                  MiB
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col className="border p-1 rounded-3">
              <div className="mb-2">
                <Form.Label className="fs-5">CPU Reservation</Form.Label>
                <InputGroup>
                  <Form.Control
                    aria-describedby="basic-addon2"
                    aria-label="PrgsDeadline"
                    placeholder="e.g. 1000"
                    type="text" />
                  <InputGroup.Text
                    className="input-group-text"
                    id="basic-addon2"
                  >
                    milli CPUs
                  </InputGroup.Text>
                </InputGroup>
              </div>
              <div className="mb-2">
                <Form.Label>CPU Limit</Form.Label>
                <div className="mb-50 d-flex gap-50">
                  <input
                    id="cpuLimitNo"
                    name="CPU"
                    type="radio"
                    value="noLimit"
                    onChange={handleCpuOption} />
                  <label htmlFor="cpuLimitNo">No Limit</label>
                </div>
                <div className="mb-50 d-flex gap-50">
                  <input
                    id="cpuLimitYes"
                    name="CPU"
                    type="radio"
                    value="limit"
                    onChange={handleCpuOption} />
                  <label htmlFor="cpuLimitYes">Limit</label>
                </div>
              </div>
              <InputGroup className="mb-2">
                {cpuOption === 'noLimit'
                  ? (
                  <Form.Control
                    aria-describedby="basic-addon2"
                    aria-label="minReadySecs"
                    disabled={true}
                    placeholder="e.g. 1000"
                    type="text" />
                  )
                  : (
                  <Form.Control
                    aria-describedby="basic-addon2"
                    aria-label="minReadySecs"
                    disabled={false}
                    placeholder="e.g. 1000"
                    type="text" />
                  )}
                <InputGroup.Text
                  className="input-group-text"
                  id="basic-addon2"
                >
                  milli CPUs
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col className="border p-1 rounded-3">
              <Form.Label className="fs-5">GPU Reservation</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-describedby="basic-addon2"
                  aria-label="PrgsDeadline"
                  placeholder="e.g. 1"
                  type="text" />
                <InputGroup.Text
                  className="input-group-text"
                  id="basic-addon2"
                >
                  GPUs
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

SecurityAndHostConfig.displayName = 'SecurityAndHostConfig';

export { SecurityAndHostConfig };
