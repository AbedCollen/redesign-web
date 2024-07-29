import { useState } from 'react';
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap';

import {
  Check2,
  CheckCircleFill,
  HeartFill,
  Plus,
  Trash3
} from '@nxweb/icons/bootstrap';
import { Edit2, Trash2 } from '@nxweb/icons/feather';

import { NxFormControl } from '@components/custom';

const titleStyle = 'fw-bold fs-5 text-dark form-label';
const buttonStyle = 'd-flex gap-50 align-items-center';
const borderHeaderStyle = 'border-primary-header rounded-top';
const fieldRoundedPadding = 'px-1 py-50 rounded';

const ApplicationsSummary = () => {
  const [infoInputs, setInfoInputs] = useState<string[]>(['']);
  const handleInfoInputs = (index: number, value: string) => {
    const updatedInputs = [...infoInputs];

    updatedInputs[index] = value;
    setInfoInputs(updatedInputs);
  };
  const addInfoInputs = () => {
    setInfoInputs([...infoInputs, '']);
  };
  const removeInfoInputs = (index: number) => {
    const updatedInputs = [...infoInputs];

    updatedInputs.splice(index, 1);
    setInfoInputs(updatedInputs);
  };
  const removeAllInfoInputs = () => {
    setInfoInputs(['']);
  };

  return (
    <div>
      <Accordion className="mb-2" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className={borderHeaderStyle}>
            guestbook
          </Accordion.Header>
          <Accordion.Body className="d-block">
            <Row className="mb-1">
              <Col>
                <NxFormControl label="Project" placeholder="Placeholder" />
              </Col>
              <Col>
                <NxFormControl label="Form Labels" placeholder="Placeholder" />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col>
                <NxFormControl label="Annotations" placeholder="Placeholder" />
              </Col>
              <Col>
                <NxFormControl label="Cluster" placeholder="Placeholder" />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col>
                <NxFormControl label="Namespace" placeholder="Placeholder" />
              </Col>
              <Col>
                <NxFormControl label="Created at" placeholder="Placeholder" />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col>
                <NxFormControl label="Repo URL" placeholder="Placeholder" />
              </Col>
              <Col>
                <NxFormControl
                  label="Target Revision"
                  placeholder="Placeholder" />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col>
                <NxFormControl label="Path" placeholder="Placeholder" />
              </Col>
              <Col>
                <NxFormControl
                  label="Revision History Limit"
                  placeholder="Placeholder" />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col>
                <NxFormControl label="Sync Options" placeholder="Placeholder" />
              </Col>
              <Col>
                <NxFormControl
                  label="Retry Options"
                  placeholder="Placeholder" />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col>
                <div className={titleStyle}>Status</div>
                <div className={`${fieldRoundedPadding} border-success bg-light-success small`}>
                  <CheckCircleFill size={14} /> Synced To
                  <a href="#"> Head (5595157)</a>
                </div>
              </Col>
              <Col>
                <div className={titleStyle}>Health</div>
                <div className={`${fieldRoundedPadding} border-success bg-light-success small`}>
                  <HeartFill size={14} /> Healthy
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className={titleStyle}>Images</div>
                <div className="d-flex gap-1">
                  <div className={`${fieldRoundedPadding} border-info bg-light-primary text-info small`}>
                    registry.gitlab.com/nxweb/studio-ui:latest
                  </div>
                  <div className={`${fieldRoundedPadding} border-info bg-light-primary text-info small`}>
                    registry.gitlab.com/nxweb/studio:latest
                  </div>
                </div>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className="mb-2">
        <Accordion.Item eventKey="0">
          <Accordion.Header className={borderHeaderStyle}>
            Sync Policy
          </Accordion.Header>
          <Accordion.Body className="d-block">
            <Row>
              <Col>
                <div className={titleStyle}>Automated</div>
                <div className={`${fieldRoundedPadding} border-danger bg-light-danger`}>
                  Disable Auto Sync
                </div>
              </Col>
              <Col>
                <div className={titleStyle}>Prune Resources</div>
                <div className={`${fieldRoundedPadding} border-info bg-light-primary text-info`}>
                  Enable
                </div>
              </Col>
              <Col>
                <div className={titleStyle}>Self Heal</div>
                <div className={`${fieldRoundedPadding} border-info bg-light-primary text-info`}>
                  Enable
                </div>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className="mb-2">
        <Accordion.Item eventKey="0">
          <Accordion.Header className={borderHeaderStyle}>
            Info
          </Accordion.Header>
          <Accordion.Body className="d-block">
            <div className="border rounded p-1">
              {infoInputs.map((input, index) => (
                <Form.Group key={index}>
                  {index === 1 && (
                    <Row className="pb-1">
                      <Col sm={5}>
                        <Form.Label className="fw-bold fs-5 text-dark">
                          Name
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
                        <NxFormControl
                          label={null}
                          placeholder="Placeholder"
                          type="text"
                          value={input}
                          onChange={(e) => handleInfoInputs(index, e.target.value)} />
                      </Col>
                      <Col sm={1}>
                        <h5 className="text-center">=</h5>
                      </Col>
                      <Col sm={5}>
                        <NxFormControl
                          label={null}
                          placeholder="Placeholder"
                          type="text"
                          value={input}
                          onChange={(e) => handleInfoInputs(index, e.target.value)} />
                      </Col>
                      <Col className="d-flex justify-content-end" sm={1}>
                        <Button
                          variant="outline-danger"
                          onClick={() => removeInfoInputs(index)}
                        >
                          <Trash3 className="text-danger" size={18} />
                        </Button>
                      </Col>
                    </Row>
                  )}
                </Form.Group>
              ))}
              <Row>
                <Col className="pe-1 d-flex justify-content-between">
                  {infoInputs.length > 1
                    ? (
                    <>
                      <div className="d-flex">
                        <Button
                          className={`${buttonStyle} me-1`}
                          size="sm"
                          variant="flat-danger"
                          onClick={removeAllInfoInputs}
                        >
                          <Trash2 size={16} />
                          Remove All
                        </Button>
                        <Button
                          className={buttonStyle}
                          size="sm"
                          variant="outline-info"
                          onClick={addInfoInputs}
                        >
                          <Plus size={16} />
                          Info
                        </Button>
                      </div>
                      <div>
                        <Button
                          className={buttonStyle}
                          size="sm"
                          variant="primary"
                          onClick={addInfoInputs}
                        >
                          <Check2 size={24} />
                          Save
                        </Button>
                      </div>
                    </>
                    )
                    : (
                    <Button
                      className={buttonStyle}
                      size="sm"
                      variant="primary"
                      onClick={addInfoInputs}
                    >
                      <Edit2 size={16} />
                      Edit Info
                    </Button>
                    )}
                </Col>
              </Row>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

ApplicationsSummary.displayName = 'ApplicationsSummary';

export default ApplicationsSummary;
