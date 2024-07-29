/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap';

import { Check, Plus, Trash2, X } from '@nxweb/icons/feather';

import { allRoutes } from '@config/constants';

const EditServiceDiscovery = () => {
  const [inputs, setInputs] = useState<string[]>(['']);
  const handleInputChange = (index: number, value: string) => {
    const updatedInputs = [...inputs];

    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };
  const removeInput = (index: number) => {
    const updatedInputs = [...inputs];

    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };
  const addInput = () => {
    setInputs([...inputs, '']);
  };
  const removeAllLabel = () => {
    setInputs(['']);
  };

  const [inputsCerti, setInputsCerti] = useState<string[]>(['']);
  const removeInputCerti = (indexCerti: number) => {
    const updatedInputsCerti = [...inputsCerti];

    updatedInputsCerti.splice(indexCerti, 1);
    setInputsCerti(updatedInputsCerti);
  };
  const addInputCerti = () => {
    setInputsCerti([...inputsCerti, '']);
  };
  const removeAllCerti = () => {
    setInputsCerti(['']);
  };

  return (
    <div className="element-wrapper">
      <Row className="shadow-sm p-2">
        <Col xs={5}>
          <h4 className="fw-bold text-black">Edit Service Discovery</h4>
        </Col>
        <Col className="text-end">
          <div className="d-flex align-items-center justify-content-end gap-75">
            <Button
              as="a"
              className="d-flex align-items-center justify-content-center gap-50 btn-outline-primary border-danger text-danger"
              href={allRoutes.projectManagement.serviceDiscovery}
            >
              <X size={20} /> Cancel
            </Button>
            <Button className="d-flex align-items-center justify-content-center gap-50">
              <Check size={20} /> Save
            </Button>
          </div>
        </Col>
      </Row>
      <div className="border rounded m-2 p-2">
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-1" controlId="name">
                <Form.Label className="fw-bold fs-4 text-dark">Name</Form.Label>
                <Form.Control placeholder="Placeholder" type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-1" controlId="formStorageClass">
                <Form.Label className="fw-bold fs-4 text-dark">
                  Namespace
                </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Output Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-1" controlId="formStorageClass">
                <Form.Label className="fw-bold fs-4 text-dark">
                  Enable Affinity
                </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="1">No</option>
                  <option value="2">Yes</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-1" controlId="formDescription">
                <Form.Label className="fs-4 text-dark">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Placeholder"
                  style={{ height: '150px' }} />
              </Form.Group>
            </Col>
          </Row>
          <Accordion className="pb-1" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="border-primary rounded-top">
                Resolve to
              </Accordion.Header>
              <Accordion.Body>
                <div className="">
                  <div className="d-flex">
                    <Form.Group className="mb-1" controlId="formStorageClass">
                      <Row>
                        <Col>
                          <Form.Check
                            className="pb-1"
                            label="One or more external IP addresses"
                            name="radioGroup"
                            type="radio"
                            value="option1" />
                          <Form.Check
                            className="pb-1"
                            label="An external hostname"
                            name="radioGroup"
                            type="radio"
                            value="option2" />
                          <Form.Check
                            className="pb-1"
                            label="Alias of another DNS record's value"
                            name="radioGroup"
                            type="radio"
                            value="option3" />
                        </Col>
                        <Col>
                          <Row>
                            <Form.Check
                              className="pb-1"
                              label="One or more workloads"
                              name="radioGroup"
                              type="radio"
                              value="option4" />
                            <Form.Check
                              className="pb-1"
                              label="The set of pods which match a selector"
                              name="radioGroup"
                              type="radio"
                              value="option5" />
                          </Row>
                        </Col>
                      </Row>
                    </Form.Group>
                  </div>
                  <div className="border rounded p-1">
                    {inputs.map((input, index) => (
                      <Form.Group key={index}>
                        <Row>
                          {index === 1 && (
                            <Row className="pb-1">
                              <Col>
                                <Form.Label className="fw-bold fs-5 text-dark">
                                  Host
                                </Form.Label>
                              </Col>
                              <Col sm={1}>
                                <Form.Label />
                              </Col>
                            </Row>
                          )}
                          {index >= 1 && (
                            <Row className="pb-1">
                              <Col>
                                <Form.Control
                                  placeholder={`Key ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleInputChange(index, e.target.value)} />
                              </Col>
                              <Col sm={1}>
                                <Button
                                  variant="outline-danger"
                                  onClick={() => removeInput(index)}
                                >
                                  <Trash2 className="text-danger" size={14} />
                                </Button>
                              </Col>
                            </Row>
                          )}
                        </Row>
                      </Form.Group>
                    ))}
                    <div>
                      <Row>
                        <Col className="pe-1 d-flex">
                          <div className="pe-1">
                            <Button
                              size="sm"
                              variant="outline-info"
                              onClick={addInput}
                            >
                              <div className="d-flex align-items-center">
                                <Plus size={12} />
                                <p className="m-0 ps-1">Target IP</p>
                              </div>
                            </Button>
                          </div>
                          <div>
                            {inputs.length > 1 && (
                              <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={removeAllLabel}
                              >
                                <div className="d-flex align-items-center">
                                  <Trash2 size={14} />
                                  <p className="m-0 ps-1">Remove All</p>
                                </div>
                              </Button>
                            )}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="pb-1" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="border-primary rounded-top">
                As a
              </Accordion.Header>
              <Accordion.Body>
                <div className="">
                  <Form.Group className="mb-1" controlId="formStorageClass">
                    <Form.Label className="fw-bold fs-5 text-dark">
                      Placeholder
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Select Output Type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="pb-1" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="border-primary rounded-top">
                Port Mapping
              </Accordion.Header>
              <Accordion.Body>
                <div className="">
                  <div className="border rounded p-1">
                    {inputs.map((input, index) => (
                      <Form.Group key={index}>
                        <Row>
                          {index === 1 && (
                            <Row className="pb-1">
                              <Col>
                                <Form.Label className="fw-bold fs-5 text-dark">
                                  Port Name
                                </Form.Label>
                              </Col>
                              <Col>
                                <Form.Label className="fw-bold fs-5 text-dark">
                                  Publish service port
                                </Form.Label>
                              </Col>
                              <Col>
                                <Form.Label className="fw-bold fs-5 text-dark">
                                  Protocol
                                </Form.Label>
                              </Col>
                              <Col>
                                <Form.Label className="fw-bold fs-5 text-dark">
                                  Target Port
                                </Form.Label>
                              </Col>
                              <Col sm={1}>
                                <Form.Label />
                              </Col>
                            </Row>
                          )}
                          {index >= 1 && (
                            <Row className="pb-1">
                              <Col>
                                <Form.Control
                                  placeholder={`Key ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleInputChange(index, e.target.value)} />
                              </Col>
                              <Col>
                                <Form.Control
                                  placeholder={`Value ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleInputChange(index, e.target.value)} />
                              </Col>
                              <Col>
                                <Form.Control
                                  placeholder={`Value ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleInputChange(index, e.target.value)} />
                              </Col>
                              <Col>
                                <Form.Control
                                  placeholder={`Value ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleInputChange(index, e.target.value)} />
                              </Col>
                              <Col sm={1}>
                                <Button
                                  variant="outline-danger"
                                  onClick={() => removeInput(index)}
                                >
                                  <Trash2 className="text-danger" size={14} />
                                </Button>
                              </Col>
                            </Row>
                          )}
                        </Row>
                      </Form.Group>
                    ))}
                    <div>
                      <Row>
                        <Col className="pe-1 d-flex">
                          <div className="pe-1">
                            <Button
                              size="sm"
                              variant="outline-info"
                              onClick={addInput}
                            >
                              <div className="d-flex align-items-center">
                                <Plus size={12} />
                                <p className="m-0 ps-1">Port</p>
                              </div>
                            </Button>
                          </div>
                          <div>
                            {inputs.length > 1 && (
                              <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={removeAllLabel}
                              >
                                <div className="d-flex align-items-center">
                                  <Trash2 size={14} />
                                  <p className="m-0 ps-1">Remove All</p>
                                </div>
                              </Button>
                            )}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="pb-1" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="border-primary rounded-top">
                Labels
              </Accordion.Header>
              <Accordion.Body>
                <div className="">
                  <div className="border rounded p-1">
                    {inputs.map((input, index) => (
                      <Form.Group key={index}>
                        <Row>
                          {index === 1 && (
                            <Row className="pb-1">
                              <Col sm={5}>
                                <Form.Label className="fw-bold fs-5 text-dark">
                                  Key Value
                                </Form.Label>
                              </Col>
                              <Col sm={1}>
                                <Form.Label />
                              </Col>
                              <Col sm={5}>
                                <Form.Label className="fw-bold fs-5 text-dark">
                                  Value
                                </Form.Label>
                              </Col>
                              <Col sm={1}>
                                <Form.Label />
                              </Col>
                            </Row>
                          )}
                          {index >= 1 && (
                            <Row className="pb-1">
                              <Col sm={5}>
                                <Form.Control
                                  placeholder={`Key ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleInputChange(index, e.target.value)} />
                              </Col>
                              <Col sm={1}>
                                <h5 className="text-center">=</h5>
                              </Col>
                              <Col sm={5}>
                                <Form.Control
                                  placeholder={`Value ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleInputChange(index, e.target.value)} />
                              </Col>
                              <Col sm={1}>
                                <Button
                                  variant="outline-danger"
                                  onClick={() => removeInput(index)}
                                >
                                  <Trash2 className="text-danger" size={14} />
                                </Button>
                              </Col>
                            </Row>
                          )}
                        </Row>
                      </Form.Group>
                    ))}
                    <div>
                      <Row>
                        <Col className="pe-1 d-flex">
                          <div className="pe-1">
                            <Button
                              size="sm"
                              variant="outline-info"
                              onClick={addInput}
                            >
                              <div className="d-flex align-items-center">
                                <Plus size={12} />
                                <p className="m-0 ps-1">Label</p>
                              </div>
                            </Button>
                          </div>
                          <div>
                            {inputs.length > 1 && (
                              <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={removeAllLabel}
                              >
                                <div className="d-flex align-items-center">
                                  <Trash2 size={14} />
                                  <p className="m-0 ps-1">Remove All</p>
                                </div>
                              </Button>
                            )}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="pb-1" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="border-primary rounded-top">
                Annotations
              </Accordion.Header>
              <Accordion.Body>
                <div className="">
                  {inputsCerti.length === 1 && (
                    <div className="border rounded p-1">
                      <Row>
                        <Col className="pe-1 d-flex">
                          <div className="pe-1">
                            <Button
                              size="sm"
                              variant="outline-info"
                              onClick={addInputCerti}
                            >
                              <div className="d-flex align-items-center">
                                <Plus size={12} />
                                <p className="m-0 ps-1">Host</p>
                              </div>
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  )}
                  {inputsCerti.map((_inputCerti, indexCerti) => (
                    <Form.Group key={indexCerti}>
                      {indexCerti >= 1 && (
                        <Form.Group
                          className="mb-1"
                          controlId="formStorageClass"
                        >
                          <Form.Label className="fw-bold fs-5 text-dark">
                            Namespace
                          </Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Select Output Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group>
                      )}
                      {indexCerti >= 1 && (
                        <div>
                          <div className="border rounded p-1">
                            {inputs.map((input, index) => (
                              <Form.Group key={index}>
                                <Row>
                                  {index === 1 && (
                                    <Row className="pb-1">
                                      <Col>
                                        <Form.Label className="fw-bold fs-5 text-dark">
                                          Host
                                        </Form.Label>
                                      </Col>
                                      <Col sm={1}>
                                        <Form.Label />
                                      </Col>
                                    </Row>
                                  )}
                                  {index >= 1 && (
                                    <Row className="pb-1">
                                      <Col>
                                        <Form.Control
                                          placeholder={`Key ${index}`}
                                          type="text"
                                          value={input}
                                          onChange={(e) => handleInputChange(
                                            index,
                                            e.target.value
                                          )} />
                                      </Col>
                                      <Col sm={1}>
                                        <Button
                                          variant="outline-danger"
                                          onClick={() => removeInput(index)}
                                        >
                                          <Trash2
                                            className="text-danger"
                                            size={14} />
                                        </Button>
                                      </Col>
                                    </Row>
                                  )}
                                </Row>
                              </Form.Group>
                            ))}
                            <Row>
                              <Col className="pe-1 d-flex">
                                <div className="pe-1">
                                  <Button
                                    size="sm"
                                    variant="outline-info"
                                    onClick={addInput}
                                  >
                                    <div className="d-flex align-items-center">
                                      <Plus size={12} />
                                      <p className="m-0 ps-1">Host</p>
                                    </div>
                                  </Button>
                                </div>
                                <div>
                                  <Button
                                    disabled={inputs.length <= 1}
                                    size="sm"
                                    variant={
                                      inputs.length <= 1
                                        ? 'outline-secondary'
                                        : 'outline-danger'
                                    }
                                    onClick={removeAllLabel}
                                  >
                                    <div className="d-flex align-items-center">
                                      <Trash2 size={14} />
                                      <p className="m-0 ps-1">Remove All </p>
                                    </div>
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                          </div>
                          <div className="d-flex justify-content-end pt-1">
                            <Button
                              size="sm"
                              variant="outline-danger"
                              onClick={() => removeInputCerti(indexCerti)}
                            >
                              <div className="d-flex align-items-center">
                                <Trash2 size={14} />
                                <p className="m-0 ps-1">Remove Certificate </p>
                              </div>
                            </Button>
                          </div>
                        </div>
                      )}
                    </Form.Group>
                  ))}
                  {inputsCerti.length >= 2 && (
                    <div className="d-flex justify-content-end pt-1">
                      <Row>
                        <Col className="pe-1 d-flex">
                          <div className="pe-1">
                            <Button
                              disabled={inputsCerti.length <= 1}
                              size="sm"
                              variant={
                                inputsCerti.length <= 1
                                  ? 'outline-secondary'
                                  : 'outline-danger'
                              }
                              onClick={removeAllCerti}
                            >
                              <div className="d-flex align-items-center">
                                <Trash2 size={14} />
                                <p className="m-0 ps-1">
                                  Remove All Certificate{' '}
                                </p>
                              </div>
                            </Button>
                          </div>
                          <div>
                            <Button
                              size="sm"
                              variant="outline-info"
                              onClick={addInputCerti}
                            >
                              <div className="d-flex align-items-center">
                                <Plus size={12} />
                                <p className="m-0 ps-1">Certificate</p>
                              </div>
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  )}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Form>
      </div>
    </div>
  );
};

EditServiceDiscovery.displayName = 'EditServiceDiscovery';
export { EditServiceDiscovery };
