/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap';

import { Plus, Trash2 } from '@nxweb/icons/feather';

const Networking: React.FC = () => {
  const [inputsHost, setInputsHost] = useState<string[]>([]);

  const addInputHost = () => {
    setInputsHost([...inputsHost, '']);
  };

  const removeAllHost = () => {
    setInputsHost([]);
  };
  const removeInputHost = (index: number) => {
    const updatedInputs = [...inputsHost];

    updatedInputs.splice(index, 1);
    setInputsHost(updatedInputs);
  };

  // Name Server Variables
  const [inputsServer, setInputsServer] = useState<string[]>([]);

  const addInputServer = () => {
    setInputsServer([...inputsServer, '']);
  };

  const removeAllServer = () => {
    setInputsServer([]);
  };
  const removeInputServer = (index: number) => {
    const updatedInputs = [...inputsServer];

    updatedInputs.splice(index, 1);
    setInputsServer(updatedInputs);
  };

  // Dns Variables
  const [inputsDns, setInputsDns] = useState<string[]>([]);

  const addInputDns = () => {
    setInputsDns([...inputsDns, '']);
  };

  const removeAllDns = () => {
    setInputsDns([]);
  };
  const removeInputDns = (index: number) => {
    const updatedInputs = [...inputsDns];

    updatedInputs.splice(index, 1);
    setInputsDns(updatedInputs);
  };

  // Dns Resolve Variables
  const [inputsDnsRes, setInputsDnsRes] = useState<string[]>([]);

  const addInputDnsRes = () => {
    setInputsDnsRes([...inputsDnsRes, '']);
  };

  const removeAllDnsRes = () => {
    setInputsDnsRes([]);
  };
  const removeInputDnsRes = (index: number) => {
    const updatedInputs = [...inputsDnsRes];

    updatedInputs.splice(index, 1);
    setInputsDnsRes(updatedInputs);
  };

  return (
    <Accordion className="mb-2" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="border border-primary-header rounded-top">
         <span className="text-primary-header">Networking</span>
        </Accordion.Header>
        <Accordion.Body className="nx-form-control">
          <div className="d-flex gap-2 mb-1">
            <Col>
              <Form.Label className="fs-5 mb-25">
                Use Host&apos;s network for namespace
              </Form.Label>
              <div className="deployment-radio-flex">
                <div className="mb-75">
                  <Col className="d-flex gap-50">
                    <input id="yes" name="host" type="radio" value="yes" />
                    <label htmlFor="yes">Yes</label>
                  </Col>
                </div>
                <div className="mb-75">
                  <Col className="d-flex gap-50">
                    <input id="no" name="host" type="radio" value="no" />
                    <label htmlFor="no">No</label>
                  </Col>
                </div>
              </div>
            </Col>
            <Col>
              <Form.Label className="fs-5 mb-25">DNS policy</Form.Label>
              <div className="deployment-radio-flex">
                <div className="mb-75">
                  <Col className="d-flex gap-50">
                    <input id="cluster" name="DNS" type="radio" value="yes" />
                    <label htmlFor="cluster">Cluster First</label>
                  </Col>
                </div>
                <div className="mb-75">
                  <Col className="d-flex gap-50">
                    <input id="host" name="DNS" type="radio" value="no" />
                    <label htmlFor="host">
                      Cluster First with host network
                    </label>
                  </Col>
                </div>
              </div>
            </Col>
          </div>
          <div className="d-flex gap-2 mb-1">
            <Col>
              <Form.Label>Host Name</Form.Label>
              <div className="input-group ">
                <input
                  aria-describedby="basic-addon2"
                  aria-label="hostName"
                  className="form-control "
                  placeholder="e.g. web"
                  type="text" />
              </div>
            </Col>
            <Col>
              <Form.Label>Host Name</Form.Label>
              <div className="input-group ">
                <input
                  aria-describedby="basic-addon2"
                  aria-label="subdomain"
                  className="form-control "
                  placeholder="e.g. foo"
                  type="text" />
              </div>
            </Col>
          </div>
          <div className="mb-1">
            <Form.Label>Host Aliases (/etc/host entries)</Form.Label>
            <div className="bg-white rounded border border-1 p-2">
              {inputsHost.map((_input, index) => (
                <Form.Group className="mb-1" key={index}>
                  <div className="d-flex gap-2">
                    <Col className="m-0 justify-content-end ">
                      {index === 0 && <Form.Label>IP Address</Form.Label>}
                      <Form.Control
                        id="variable"
                        placeholder="e.g. 192.168..0.1"
                        type="text" />
                    </Col>
                    <Col
                      className="align-items-center justify-content-end"
                      md={1}
                    >
                      <Form.Label classame=""> </Form.Label>
                      <h5>=</h5>
                    </Col>
                    <Col className="m-0 justify-content-end ">
                      {index === 0 && <Form.Label>Hostname</Form.Label>}

                      <Form.Control
                        id="value"
                        placeholder="e.g. database"
                        type="text" />
                    </Col>
                    <div className="m-0 ps-0 d-flex align-items-sm-end">
                      <Button
                        variant="outline-danger"
                        onClick={() => removeInputHost(index)}
                      >
                        <Trash2 className="text-danger" size={18} />
                      </Button>
                    </div>
                  </div>
                </Form.Group>
              ))}
              <Col className="d-flex gap-2">
                <Button
                  className="d-flex gap-50 align-items-center"
                  size="sm"
                  variant="outline-info"
                  onClick={addInputHost}
                >
                  <Plus size={12} />
                  Add Host Alias
                </Button>
                {inputsHost.length === 0 && (
                  <Button
                    className="d-flex gap-50 align-items-center"
                    disabled={true}
                    size="sm"
                    variant=""
                    onClick={removeAllHost}
                  >
                    <Trash2 size={14} />
                    Remove All
                  </Button>
                )}
                {inputsHost.length > 0 && (
                  <Button
                    className="d-flex gap-50 align-items-center"
                    size="sm"
                    variant="outline-danger"
                    onClick={removeAllHost}
                  >
                    <Trash2 size={14} />
                    Remove All
                  </Button>
                )}
              </Col>
            </div>
          </div>
          <div className="mb-1">
            <Row>
              <Col>
                <p className="pt-0">DNS name server IP addresses</p>
                <div className="bg-white rounded border border-1 p-2">
                  {inputsServer.map((_input, index) => (
                    <Form.Group className="mb-1 d-block" key={index}>
                      <div className="pt-0 d-flex gap-2">
                        <Col className="m-0 justify-content-end ">
                          {index === 0 && <Form.Label>IP Addresses</Form.Label>}
                          <Form.Control
                            id="variable"
                            placeholder="e.g. 192.168..0.1"
                            type="text" />
                        </Col>
                        <div className="m-0 ps-0 d-flex align-items-sm-end">
                          <Button
                            className="lh-1"
                            variant="outline-danger"
                            onClick={() => removeInputServer(index)}
                          >
                            <Trash2 className="text-danger" size={18} />
                          </Button>
                        </div>
                      </div>
                    </Form.Group>
                  ))}
                  <Col className="d-flex gap-2">
                    <Button
                      className="d-flex gap-50 align-items-center"
                      size="sm"
                      variant="outline-info"
                      onClick={addInputServer}
                    >
                      <Plus size={12} />
                      Add Name Server
                    </Button>
                    {inputsServer.length === 0 && (
                      <Button
                        className="d-flex gap-50 align-items-center"
                        disabled={true}
                        size="sm"
                        variant=""
                        onClick={removeAllServer}
                      >
                        <Trash2 size={14} />
                        Remove All
                      </Button>
                    )}
                    {inputsServer.length > 0 && (
                      <Button
                        className="d-flex gap-50 align-items-center"
                        size="sm"
                        variant="outline-danger"
                        onClick={removeAllServer}
                      >
                        <Trash2 size={14} />
                        Remove All
                      </Button>
                    )}
                  </Col>
                </div>
              </Col>
              <Col>
                <p>DNS search domains</p>
                <div className="bg-white rounded border border-1 p-2">
                  {inputsDns.map((_input, index) => (
                    <Form.Group className="mb-1 d-block" key={index}>
                      <div className="d-flex gap-2">
                        <Col className="m-0 justify-content-end ">
                          {index === 0 &&
                            <Form.Label>DNS search domains</Form.Label>}

                          {index >= 0 && (
                            <Form.Control
                              id="variable"
                              placeholder="e.g. example.com"
                              type="text" />
                          )}
                        </Col>
                        <div className="m-0 ps-0 d-flex align-items-sm-end">
                          <Button
                            className="lh-1"
                            variant="outline-danger"
                            onClick={() => removeInputDns(index)}
                          >
                            <Trash2 className="text-danger" size={18} />
                          </Button>
                        </div>
                      </div>
                    </Form.Group>
                  ))}
                  <Col className="d-flex gap-2">
                    <Button
                      className="d-flex gap-50 align-items-center"
                      size="sm"
                      variant="outline-info"
                      onClick={addInputDns}
                    >
                      <Plus size={12} />
                      Add Search Domain
                    </Button>
                    {inputsDns.length === 0 && (
                      <Button
                        className="d-flex gap-50 align-items-center"
                        disabled={true}
                        size="sm"
                        variant=""
                        onClick={removeAllDns}
                      >
                        <Trash2 size={14} />
                        Remove All
                      </Button>
                    )}
                    {inputsDns.length > 0 && (
                      <Button
                        className="d-flex gap-50 align-items-center"
                        size="sm"
                        variant="outline-danger"
                        onClick={removeAllDns}
                      >
                        <Trash2 size={14} />
                        Remove All
                      </Button>
                    )}
                  </Col>
                </div>
              </Col>
            </Row>
          </div>
          <div className="mb-1">
            <Col>
              <p>DNS resolver options</p>
              <div className="bg-white rounded border border-1 p-2">
                {inputsDnsRes.map((_input, index) => (
                  <Form.Group className="mb-1 d-block" key={index}>
                    <div className="d-flex gap-2">
                      <Col className="m-0 justify-content-end ">
                        {index === 0 && <Form.Label>Name</Form.Label>}
                        <Form.Control
                          id="variable"
                          placeholder="e.g. ndots"
                          type="text" />
                      </Col>
                      <Col
                        className="d-flex align-items-end justify-content-center"
                        md={1}
                      >
                        {index === 0 && <Form.Label />}
                        <h5>=</h5>
                      </Col>
                      <Col className="m-0 justify-content-end ">
                        {index === 0 && <Form.Label>Value</Form.Label>}

                        <Form.Control
                          id="value"
                          placeholder="e.g. 5"
                          type="text" />
                      </Col>

                      <div className="m-0 ps-0 d-flex align-items-sm-end">
                        <Button
                          className="lh-1"
                          variant="outline-danger"
                          onClick={() => removeInputDnsRes(index)}
                        >
                          <Trash2 className="text-danger" size={18} />
                        </Button>
                      </div>
                    </div>
                  </Form.Group>
                ))}
                <Col className="d-flex gap-2">
                  <Button
                    className="d-flex gap-50 align-items-center"
                    size="sm"
                    variant="outline-info"
                    onClick={addInputDnsRes}
                  >
                    <Plus size={12} />
                    Add Host Alias
                  </Button>
                  {inputsDnsRes.length === 0 && (
                    <Button
                      className="d-flex gap-50 align-items-center"
                      disabled={true}
                      size="sm"
                      variant=""
                      onClick={removeAllDnsRes}
                    >
                      <Trash2 size={14} />
                      Remove All
                    </Button>
                  )}
                  {inputsDnsRes.length > 0 && (
                    <Button
                      className="d-flex gap-50 align-items-center"
                      size="sm"
                      variant="outline-danger"
                      onClick={removeAllDnsRes}
                    >
                      <Trash2 size={14} />
                      Remove All
                    </Button>
                  )}
                </Col>
              </div>
            </Col>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

Networking.displayName = 'Networking';

export { Networking };
