/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap';

import { Check, Plus, Trash2, X } from '@nxweb/icons/feather';

import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

const IngressAddMain = () => {
  const [, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.ingress?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.ingress.GetMainData());
  }, [dispatch]);

  // Rules
  const [inputsRule, setInputsRule] = useState<string[]>(['']);
  const addInputRule = () => {
    setInputsRule([...inputsRule, '']);
  };
  const removeInputRule = (indexRule: number) => {
    const updatedInputsRule = [...inputsRule];

    updatedInputsRule.splice(indexRule, 1);
    setInputsRule(updatedInputsRule);
  };
  const removeAllRule = () => {
    setInputsRule(['']);
  };

  const [serviceInputs, setServiceInputs] = useState<string[]>(['']);
  const handleServiceInputs = (index: number, value: string) => {
    const updatedInputs = [...serviceInputs];

    updatedInputs[index] = value;
    setServiceInputs(updatedInputs);
  };
  const addServiceInput = () => {
    setServiceInputs([...serviceInputs, '']);
  };
  const removeServiceInput = (index: number) => {
    const updatedInputs = [...serviceInputs];

    updatedInputs.splice(index, 1);
    setServiceInputs(updatedInputs);
  };
  const removeAllServiceInputs = () => {
    setServiceInputs(['']);
  };

  const [workloadInputs, setWorkloadInputs] = useState<string[]>(['']);
  const handleWorkloadInputs = (index: number, value: string) => {
    const updatedInputs = [...workloadInputs];

    updatedInputs[index] = value;
    setWorkloadInputs(updatedInputs);
  };
  const addWorkloadInput = () => {
    setWorkloadInputs([...workloadInputs, '']);
  };
  const removeWorkloadInput = (index: number) => {
    const updatedInputs = [...workloadInputs];

    updatedInputs.splice(index, 1);
    setWorkloadInputs(updatedInputs);
  };
  const removeAllWorkloadInputs = () => {
    setWorkloadInputs(['']);
  };

  // Certificate
  const [inputsCerti, setInputsCerti] = useState<string[]>(['']);
  const addInputCerti = () => {
    setInputsCerti([...inputsCerti, '']);
  };
  const removeInputCerti = (indexCerti: number) => {
    const updatedInputsCerti = [...inputsCerti];

    updatedInputsCerti.splice(indexCerti, 1);
    setInputsCerti(updatedInputsCerti);
  };
  const removeAllCerti = () => {
    setInputsCerti(['']);
  };

  const [hostInputs, setHostInputs] = useState<string[]>(['']);
  const handleHostInputs = (index: number, value: string) => {
    const updatedInputs = [...hostInputs];

    updatedInputs[index] = value;
    setHostInputs(updatedInputs);
  };
  const addHostInput = () => {
    setHostInputs([...hostInputs, '']);
  };
  const removeHostInput = (index: number) => {
    const updatedInputs = [...hostInputs];

    updatedInputs.splice(index, 1);
    setHostInputs(updatedInputs);
  };
  const removeAllHostInputs = () => {
    setHostInputs(['']);
  };

  // Labels
  const [labelInputs, setLabelInputs] = useState<string[]>(['']);
  const handleLabelInputs = (index: number, value: string) => {
    const updatedInputs = [...labelInputs];

    updatedInputs[index] = value;
    setLabelInputs(updatedInputs);
  };
  const addLabelInputs = () => {
    setLabelInputs([...labelInputs, '']);
  };
  const removeLabelInputs = (index: number) => {
    const updatedInputs = [...labelInputs];

    updatedInputs.splice(index, 1);
    setLabelInputs(updatedInputs);
  };
  const removeAllLabelInputs = () => {
    setLabelInputs(['']);
  };

  // Annotations
  const [annoInputs, setAnnoInputs] = useState<string[]>(['']);
  const handleAnnoInputs = (index: number, value: string) => {
    const updatedInputs = [...annoInputs];

    updatedInputs[index] = value;
    setAnnoInputs(updatedInputs);
  };
  const addAnnoInputs = () => {
    setAnnoInputs([...annoInputs, '']);
  };
  const removeAnnoInputs = (index: number) => {
    const updatedInputs = [...annoInputs];

    updatedInputs.splice(index, 1);
    setAnnoInputs(updatedInputs);
  };
  const removeAllAnnoInputs = () => {
    setAnnoInputs(['']);
  };

  return (
    <div className="element-wrapper">
      <Row className="shadow-sm p-2">
        <Col xs={5}>
          <h4 className="fw-bold text-black">Add Ingress</h4>
        </Col>
        <Col className="text-end">
          <div className="d-flex align-items-center justify-content-end gap-75">
            <Button
              as="a"
              className="d-flex align-items-center justify-content-center gap-50 btn-outline-primary border-danger text-danger"
              href={allRoutes.projectManagement.ingress}
            >
              <X size={20} /> Cancel
            </Button>
            <Button className="d-flex align-items-center justify-content-center gap-50">
              <Check size={20} /> Save
            </Button>
          </div>
        </Col>
      </Row>
      <div className="m-2 border rounded">
        <Form className="mt-1 rounded shadow-sm p-1">
          <Row>
            <Col>
              <Form.Group className="mb-1" controlId="formName">
                <Form.Label className="fs-4 text-dark">Name</Form.Label>
                <Form.Control placeholder="Placeholder" type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-1" controlId="formStorageClass">
                <Form.Label className="fs-4 text-dark">Namespace</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>nextid</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="formDescription">
                <Form.Label className="fs-4 text-dark">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Placeholder"
                  style={{ height: '150px' }} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Accordion className="mt-1" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="border-primary rounded-top">
                  Rules
                </Accordion.Header>
                <Accordion.Body>
                  <div className="">
                    {inputsRule.length === 1 && (
                      <div className="border rounded p-1">
                        <Row>
                          <Col className="pe-1 d-flex">
                            <div className="pe-1">
                              <Button
                                size="sm"
                                variant="outline-info"
                                onClick={addInputRule}
                              >
                                <div className="d-flex align-items-center">
                                  <Plus size={12} />
                                  <p className="m-0 ps-1">Rule</p>
                                </div>
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    )}
                    {inputsRule.map((_inputRule, indexRule) => (
                      <Form.Group key={indexRule}>
                        {indexRule >= 1 && (
                          <Form.Group
                            className="mb-1"
                            controlId="formStorageClass"
                          >
                            <Form.Label className="fw-bold fs-5 text-dark">
                              Namespace
                            </Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>nextid</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>
                        )}
                        {indexRule >= 1 && (
                          <div>
                            <div className="border rounded p-1 mb-1">
                              {serviceInputs.map((serviceInputs, index) => (
                                <Form.Group key={index}>
                                  <Row>
                                    {index === 1 && (
                                      <Row className="pb-1">
                                        <Col sm={5}>
                                          <Form.Label className="fw-bold fs-5 text-dark">
                                            Path
                                          </Form.Label>
                                        </Col>
                                        <Col sm={3}>
                                          <Form.Label className="fw-bold fs-5 text-dark">
                                            Target
                                          </Form.Label>
                                        </Col>
                                        <Col sm={3}>
                                          <Form.Label className="fw-bold fs-5 text-dark">
                                            Port
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
                                            placeholder={`Placehorder ${index}`}
                                            type="text"
                                            value={serviceInputs}
                                            onChange={(e) => handleServiceInputs(
                                              index,
                                              e.target.value
                                            )} />
                                        </Col>
                                        <Col sm={3}>
                                          <Form.Select
                                            value={serviceInputs}
                                            onChange={(e) => handleServiceInputs(
                                              index,
                                              e.target.value
                                            )}
                                          >
                                            <option>nextid</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </Form.Select>
                                        </Col>
                                        <Col sm={3}>
                                          <Form.Select
                                            value={serviceInputs}
                                            onChange={(e) => handleServiceInputs(
                                              index,
                                              e.target.value
                                            )}
                                          >
                                            <option>no</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </Form.Select>
                                        </Col>
                                        <Col sm={1}>
                                          <Button
                                            variant="outline-danger"
                                            onClick={() => removeServiceInput(index)}
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
                                      onClick={addServiceInput}
                                    >
                                      <div className="d-flex align-items-center">
                                        <Plus size={12} />
                                        <p className="m-0 ps-1">Service</p>
                                      </div>
                                    </Button>
                                  </div>
                                  <div>
                                    <Button
                                      disabled={serviceInputs.length <= 1}
                                      size="sm"
                                      variant={
                                        serviceInputs.length <= 1
                                          ? 'outline-secondary'
                                          : 'outline-danger'
                                      }
                                      onClick={removeAllServiceInputs}
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
                            <div className="border rounded p-1">
                              {workloadInputs.map((workloadInputs, index) => (
                                <Form.Group key={index}>
                                  <Row>
                                    {index === 1 && (
                                      <Row className="pb-1">
                                        <Col sm={5}>
                                          <Form.Label className="fw-bold fs-5 text-dark">
                                            Path
                                          </Form.Label>
                                        </Col>
                                        <Col sm={3}>
                                          <Form.Label className="fw-bold fs-5 text-dark">
                                            Target
                                          </Form.Label>
                                        </Col>
                                        <Col sm={3}>
                                          <Form.Label className="fw-bold fs-5 text-dark">
                                            Port
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
                                            placeholder={`Placehorder ${index}`}
                                            type="text"
                                            value={workloadInputs}
                                            onChange={(e) => handleWorkloadInputs(
                                              index,
                                              e.target.value
                                            )} />
                                        </Col>
                                        <Col sm={3}>
                                          <Form.Select
                                            value={workloadInputs}
                                            onChange={(e) => handleWorkloadInputs(
                                              index,
                                              e.target.value
                                            )}
                                          >
                                            <option>nextid</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </Form.Select>
                                        </Col>
                                        <Col sm={3}>
                                          <Form.Select
                                            value={workloadInputs}
                                            onChange={(e) => handleWorkloadInputs(
                                              index,
                                              e.target.value
                                            )}
                                          >
                                            <option>no</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </Form.Select>
                                        </Col>
                                        <Col sm={1}>
                                          <Button
                                            variant="outline-danger"
                                            onClick={() => removeWorkloadInput(index)}
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
                                      onClick={addWorkloadInput}
                                    >
                                      <div className="d-flex align-items-center">
                                        <Plus size={12} />
                                        <p className="m-0 ps-1">Workload</p>
                                      </div>
                                    </Button>
                                  </div>
                                  <div>
                                    <Button
                                      disabled={workloadInputs.length <= 1}
                                      size="sm"
                                      variant={
                                        workloadInputs.length <= 1
                                          ? 'outline-secondary'
                                          : 'outline-danger'
                                      }
                                      onClick={removeAllWorkloadInputs}
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
                                onClick={() => removeInputRule(indexRule)}
                              >
                                <div className="d-flex align-items-center">
                                  <Trash2 size={14} />
                                  <p className="m-0 ps-1">Remove Rule </p>
                                </div>
                              </Button>
                            </div>
                          </div>
                        )}
                      </Form.Group>
                    ))}
                    {inputsRule.length >= 2 && (
                      <div className="d-flex justify-content-end pt-1">
                        <Row>
                          <Col className="pe-1 d-flex">
                            <div className="pe-1">
                              <Button
                                disabled={inputsRule.length <= 1}
                                size="sm"
                                variant={
                                  inputsRule.length <= 1
                                    ? 'outline-secondary'
                                    : 'outline-danger'
                                }
                                onClick={removeAllRule}
                              >
                                <div className="d-flex align-items-center">
                                  <Trash2 size={14} />
                                  <p className="m-0 ps-1">Remove All Rules</p>
                                </div>
                              </Button>
                            </div>
                            <div>
                              <Button
                                size="sm"
                                variant="outline-info"
                                onClick={addInputRule}
                              >
                                <div className="d-flex align-items-center">
                                  <Plus size={12} />
                                  <p className="m-0 ps-1">Rule</p>
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
          </Row>

          <Row>
            <Accordion className="mt-1" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="border-primary rounded-top">
                  Certificate
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
                              <option>nextid</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>
                        )}
                        {indexCerti >= 1 && (
                          <div>
                            <div className="border rounded p-1">
                              {hostInputs.map((hostInputs, index) => (
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
                                            placeholder={`Placehorder ${index}`}
                                            type="text"
                                            value={hostInputs}
                                            onChange={(e) => handleHostInputs(
                                              index,
                                              e.target.value
                                            )} />
                                        </Col>
                                        <Col sm={1}>
                                          <Button
                                            variant="outline-danger"
                                            onClick={() => removeHostInput(index)}
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
                                      onClick={addHostInput}
                                    >
                                      <div className="d-flex align-items-center">
                                        <Plus size={12} />
                                        <p className="m-0 ps-1">Host</p>
                                      </div>
                                    </Button>
                                  </div>
                                  <div>
                                    <Button
                                      disabled={hostInputs.length <= 1}
                                      size="sm"
                                      variant={
                                        hostInputs.length <= 1
                                          ? 'outline-secondary'
                                          : 'outline-danger'
                                      }
                                      onClick={removeAllHostInputs}
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
                                  <p className="m-0 ps-1">
                                    Remove Certificate{' '}
                                  </p>
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
                                    Remove All Certificates{' '}
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
          </Row>

          <Row>
            <Accordion className="mt-1" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="border-primary rounded-top">
                  Labels
                </Accordion.Header>
                <Accordion.Body>
                  <div className="border rounded p-1">
                    {labelInputs.map((input, index) => (
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
                                  onChange={(e) => handleLabelInputs(index, e.target.value)} />
                              </Col>
                              <Col sm={1}>
                                <h5 className="text-center">=</h5>
                              </Col>
                              <Col sm={5}>
                                <Form.Control
                                  placeholder={`Value ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleLabelInputs(index, e.target.value)} />
                              </Col>
                              <Col sm={1}>
                                <Button
                                  variant="outline-danger"
                                  onClick={() => removeLabelInputs(index)}
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
                              onClick={addLabelInputs}
                            >
                              <div className="d-flex align-items-center">
                                <Plus size={12} />
                                <p className="m-0 ps-1">Label</p>
                              </div>
                            </Button>
                          </div>
                          <div>
                            {labelInputs.length > 1 && (
                              <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={removeAllLabelInputs}
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
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>

          <Row>
            <Accordion className="mt-1" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="border-primary rounded-top">
                  Annotations
                </Accordion.Header>
                <Accordion.Body>
                  <div className="border rounded p-1">
                    {annoInputs.map((input, index) => (
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
                                  onChange={(e) => handleAnnoInputs(index, e.target.value)} />
                              </Col>
                              <Col sm={1}>
                                <h5 className="text-center">=</h5>
                              </Col>
                              <Col sm={5}>
                                <Form.Control
                                  placeholder={`Value ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleAnnoInputs(index, e.target.value)} />
                              </Col>
                              <Col sm={1}>
                                <Button
                                  variant="outline-danger"
                                  onClick={() => removeAnnoInputs(index)}
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
                              onClick={addAnnoInputs}
                            >
                              <div className="d-flex align-items-center">
                                <Plus size={12} />
                                <p className="m-0 ps-1">Annotation</p>
                              </div>
                            </Button>
                          </div>
                          <div>
                            {annoInputs.length > 1 && (
                              <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={removeAllAnnoInputs}
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
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Form>
      </div>
    </div>
  );
};

IngressAddMain.displayName = 'IngressAddMain';
export { IngressAddMain };
