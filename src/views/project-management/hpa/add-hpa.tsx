/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import {
  Accordion,
  Button,
  Col,
  Form,
  InputGroup,
  Modal,
  Row
} from 'react-bootstrap';

import {
  Check,
  Download,
  Plus,
  RefreshCW,
  Trash2,
  X
} from '@nxweb/icons/feather';

import { MonacoEditor } from '@components/custom/monaco-editor';
import { allRoutes } from '@config/constants';

interface MetricInput {
  metricType: string
  metricName: string
  targetType: string
  quantity: string
}

const AddHpaMain = () => {
  // Update YAML
  const [showMonaco, setShowMonaco] = useState(false);
  const handleCloseMonaco = () => setShowMonaco(false);
  const handleShowMonaco = () => setShowMonaco(true);

  // Metrics
  const [metricInputs, setMetricInputs] = useState<MetricInput[]>([
    { metricType: '', metricName: '', targetType: '', quantity: '' }
  ]);

  const handleMetricInputChange = (
    index: number,
    field: keyof MetricInput,
    value: string
  ) => {
    const updatedMetrics = [...metricInputs];

    updatedMetrics[index][field] = value;
    setMetricInputs(updatedMetrics);
  };

  const addMetricInput = () => {
    setMetricInputs([
      ...metricInputs,
      { metricType: '', metricName: '', targetType: '', quantity: '' }
    ]);
  };

  const removeMetricInput = (index: number) => {
    const updatedMetrics = [...metricInputs];

    updatedMetrics.splice(index, 1);
    setMetricInputs(updatedMetrics);
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
        <Col>
          <h5 className="fw-bold text-black">Add HPA</h5>
        </Col>
        <Col>
          <div className="d-flex align-items-center justify-content-end gap-75">
            <Button
              as="a"
              className="d-flex align-items-center justify-content-center gap-50"
              href={allRoutes.projectManagement.hpa}
              variant="flat-danger"
            >
              <X size={20} />
              Cancel
            </Button>
            <Button
              className="d-flex align-items-center justify-content-center gap-50"
              variant="outline-primary"
              onClick={handleShowMonaco}
            >
              <RefreshCW size={20} />
              Update YAML
            </Button>
            <Modal
              centered={true}
              className="confirmation-modal"
              show={showMonaco}
              size="lg"
            >
              <Modal.Header className="p-1">
                <div className="d-flex align-items-center">
                  <p className="fw-bold me-25 m-0">
                    Edit Yaml: demo:ingress-bamengine
                  </p>
                </div>
              </Modal.Header>

              <Modal.Body className="p-1">
                <MonacoEditor language="yaml" />
              </Modal.Body>

              <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
                <Button
                  className="justify-content-center text-danger"
                  variant="flat-primary"
                  onClick={handleCloseMonaco}
                >
                  Cancel
                </Button>
                <Button
                  className="d-flex align-items-center justify-content-center gap-50"
                  variant="outline-primary"
                  onClick={handleCloseMonaco}
                >
                  <Download size={20} /> Download YAML
                </Button>
                <Button
                  className="d-flex align-items-center justify-content-center gap-50"
                  onClick={handleCloseMonaco}
                >
                  <Check size={20} /> Save
                </Button>
              </Modal.Footer>
            </Modal>
            <Button
              as="a"
              className="d-flex align-items-center justify-content-center gap-50"
              href={allRoutes.projectManagement.hpa}
            >
              <Check size={20} />
              Save
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="border rounded px-1 py-2 m-2">
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-1" controlId="formName">
                <Form.Label className="fw-bold fs-5 text-dark">Name</Form.Label>
                <Form.Control placeholder="Placeholder" type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-1" controlId="description">
              <Form.Label className="fw-bold fs-5 text-dark">
                Description
              </Form.Label>
              <Form.Control as="textarea" placeholder="Placeholder" />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-1" controlId="namespaces">
                <Form.Label className=" fw-bold fs-5 text-dark">
                  Namespaces
                </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Placeholder</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-1" controlId="workload">
                <Form.Label className="fw-bold fs-5 text-dark">
                  Workload
                </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Placeholder</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-1" controlId="minReplicas">
                <Form.Label className="fw-bold fs-5 text-dark">
                  Min. Replicas
                </Form.Label>
                <Form.Control placeholder="Placeholder" type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-1" controlId="minReplicas">
                <Form.Label className="fw-bold fs-5 text-dark">
                  Max. Replicas
                </Form.Label>
                <Form.Control placeholder="Placeholder" type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="border-primary rounded-top">
                  Metrics
                </Accordion.Header>
                <Accordion.Body>
                  <div className="border rounded p-1">
                    {metricInputs.map((input, index) => (
                      <div key={index}>
                        {index >= 1 && (
                          <div>
                            <Row>
                              <Col>
                                <Form.Group
                                  className="mb-1"
                                  controlId={`metricType-${index}`}
                                >
                                  <Form.Label className="fw-bold fs-5 text-dark">
                                    Metric Type
                                  </Form.Label>
                                  <Form.Select
                                    aria-label={`Metric Type ${index}`}
                                    value={input.metricType}
                                    onChange={(e) => handleMetricInputChange(
                                      index,
                                      'metricType',
                                      e.target.value
                                    )}
                                  >
                                    <option>Placeholder</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col>
                                <Form.Group
                                  className="mb-1"
                                  controlId={`metricName-${index}`}
                                >
                                  <Form.Label className="fw-bold fs-5 text-dark">
                                    Metric Name
                                  </Form.Label>
                                  <Form.Select
                                    aria-label={`Metric Name ${index}`}
                                    value={input.metricName}
                                    onChange={(e) => handleMetricInputChange(
                                      index,
                                      'metricName',
                                      e.target.value
                                    )}
                                  >
                                    <option>Placeholder</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <Form.Group
                                  className="mb-1"
                                  controlId={`targetType-${index}`}
                                >
                                  <Form.Label className="fw-bold fs-5 text-dark">
                                    Target Type
                                  </Form.Label>
                                  <Form.Select
                                    aria-label={`Target Type ${index}`}
                                    value={input.targetType}
                                    onChange={(e) => handleMetricInputChange(
                                      index,
                                      'targetType',
                                      e.target.value
                                    )}
                                  >
                                    <option>Placeholder</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col>
                                <Form.Group
                                  className="mb-1"
                                  controlId={`quantity-${index}`}
                                >
                                  <Form.Label className="fw-bold fs-5 text-dark">
                                    Quantity
                                  </Form.Label>
                                  <div className="d-flex">
                                    <Form.Control
                                      placeholder="Placeholder"
                                      type="text"
                                      onChange={(e) => handleMetricInputChange(
                                        index,
                                        'quantity',
                                        e.target.value
                                      )} />
                                    <InputGroup.Text id="basic-addon">
                                      %
                                    </InputGroup.Text>
                                  </div>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col className="pe-1 d-flex justify-content-end">
                                <div className="pe-1">
                                  <Button
                                    size="sm"
                                    variant="outline-danger"
                                    onClick={() => removeMetricInput(index)}
                                  >
                                    <div className="d-flex align-items-center">
                                      <Trash2
                                        className="text-danger"
                                        size={14} />
                                      <p className="m-0 ps-1">Remove Metric</p>
                                    </div>
                                  </Button>
                                </div>
                                {(index === metricInputs.length - 1 ||
                                  index < 0) && (
                                  <div className="pe-1">
                                    <Button
                                      size="sm"
                                      variant="outline-info"
                                      onClick={addMetricInput}
                                    >
                                      <div className="d-flex align-items-center">
                                        <Plus size={12} />
                                        <p className="m-0 ps-1">Metric</p>
                                      </div>
                                    </Button>
                                  </div>
                                )}
                              </Col>
                            </Row>
                          </div>
                        )}
                      </div>
                    ))}
                    {metricInputs.length <= 1 && (
                      <Row>
                        <Col className="pe-1 d-flex">
                          <div className="pe-1">
                            <Button
                              size="sm"
                              variant="outline-info"
                              onClick={addMetricInput}
                            >
                              <div className="d-flex align-items-center">
                                <Plus size={12} />
                                <p className="m-0 ps-1">Metric</p>
                              </div>
                            </Button>
                          </div>
                        </Col>
                      </Row>
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
      </Row>
    </div>
  );
};

AddHpaMain.displayName = 'AddHpaMain';
export { AddHpaMain };
