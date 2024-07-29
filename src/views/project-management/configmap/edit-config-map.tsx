/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap';

import { Check, Plus, Trash2, X } from '@nxweb/icons/feather';

import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

const EditConfigMap = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.configmap?.detail
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.configmap.GetDetailData);
  }, [dispatch]);

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

  return (
    <div className="element-wrapper">
      <Row className="shadow-sm p-2">
        <Col xs={5}>
          <h4 className="fw-bold text-black">Edit Config Map</h4>
        </Col>
        <Col className="text-end">
          <div className="d-flex align-items-center justify-content-end gap-75">
            <Button
              as="a"
              className="d-flex align-items-center justify-content-center gap-50 btn-outline-primary border-danger text-danger"
              href={allRoutes.projectManagement.configmap}
            >
              <X size={20} /> Cancel
            </Button>
            <Button className="d-flex align-items-center justify-content-center gap-50">
              <Check size={20} /> Save
            </Button>
          </div>
        </Col>
      </Row>

      <div className="p-2 m-2 border rounded">
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-1" controlId="name">
                <Form.Label className="fw-bold fs-4 text-dark">Name</Form.Label>
                <Form.Control
                  defaultValue={store?.name}
                  placeholder="Placeholder"
                  type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-1" controlId="namespaces">
                <Form.Label className="fw-bold fs-4 text-dark">
                  Namespaces
                </Form.Label>
                <Form.Control
                  defaultValue={store?.namespace}
                  placeholder="Placeholder"
                  type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Accordion className="pb-1" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="border-primary rounded-top">
                Config Map Values
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
                                <p className="m-0 ps-1">Config Map Value</p>
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
                                <p className="m-0 ps-1">Host</p>
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
        </Form>
      </div>
    </div>
  );
};

EditConfigMap.displayName = 'EditConfigMap';
export { EditConfigMap };
