/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap';

import { Check, Plus, Trash2, X } from '@nxweb/icons/feather';

import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

const EditSecretFormMain = () => {
  const [store, dispatch] = useStore((state) => state?.app?.projectManagement?.secret?.detail);

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.secret.GetDetailData());
  }, [dispatch]);

  // Secret Value
  const [secretInputs, setSecretInputs] = useState<string[]>(['']);

  const handleSecretInputs = (index: number, value: string) => {
    const updatedInputs = [...secretInputs];

    updatedInputs[index] = value;
    setSecretInputs(updatedInputs);
  };

  const addSecretInputs = () => {
    setSecretInputs([...secretInputs, '']);
  };
  const removeSecretInputs = (index: number) => {
    const updatedInputs = [...secretInputs];

    updatedInputs.splice(index, 1);
    setSecretInputs(updatedInputs);
  };
  const removeAllSecretInputs = () => {
    setSecretInputs(['']);
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
      <Row className="p-2 shadow-sm">
        <Col>
          <h5 className="fw-bold text-black">Edit Secret Form</h5>
        </Col>
        <Col>
          <div className="d-flex align-items-center justify-content-end gap-75">
            <Button
              as="a"
              className="d-flex align-items-center justify-content-center gap-50"
              href={allRoutes.projectManagement.secret}
              variant="outline-danger"
            >
              <X size={20} />
              Cancel
            </Button>
            <Button
              as="a"
              className="d-flex align-items-center justify-content-center gap-50"
              href={allRoutes.projectManagement.secret}
            >
              <Check size={20} />
              Save
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="px-1 py-2 m-2 border rounded">
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-1" controlId="formName">
                <Form.Label className="fw-bold fs-4 text-dark">Name</Form.Label>
                <Form.Control defaultValue={store?.name} placeholder="Placeholder" type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-1" controlId="formName">
                <Form.Label className="fw-bold fs-4 text-dark">
                  Scope
                </Form.Label>
                <Form.Control defaultValue={store?.scope} placeholder="Placeholder" type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-1" controlId="comment">
              <Form.Label className="fw-bold fs-4 text-dark">
                Description
              </Form.Label>
              <Form.Control as="textarea" defaultValue={store?.description} placeholder="Placeholder" />
            </Form.Group>
          </Row>
          <Row>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="border-primary rounded-top">
                  Secret Value
                </Accordion.Header>
                <Accordion.Body>
                  <div className="border rounded p-1">
                    {secretInputs.map((input, index) => (
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
                                  onChange={(e) => handleSecretInputs(index, e.target.value)} />
                              </Col>
                              <Col sm={1}>
                                <h5 className="text-center">=</h5>
                              </Col>
                              <Col sm={5}>
                                <Form.Control
                                  placeholder={`Value ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleSecretInputs(index, e.target.value)} />
                              </Col>
                              <Col sm={1}>
                                <Button
                                  variant="outline-danger"
                                  onClick={() => removeSecretInputs(index)}
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
                              onClick={addSecretInputs}
                            >
                              <div className="d-flex align-items-center">
                                <Plus size={12} />
                                <p className="m-0 ps-1">Secret Value</p>
                              </div>
                            </Button>
                          </div>
                          <div>
                            {secretInputs.length > 1 && (
                              <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={removeAllSecretInputs}
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
      </Row>
    </div>
  );
};

EditSecretFormMain.displayName = 'EditSecretFormMain';
export { EditSecretFormMain };
