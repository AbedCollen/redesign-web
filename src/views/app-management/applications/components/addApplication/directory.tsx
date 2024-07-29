/* eslint-disable react/no-array-index-key */
import type { FC } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import { Plus, Trash2 } from '@nxweb/icons/bootstrap';

import {
  NxFormCheckGroup,
  NxFormControl,
  NxFormSelect
} from '@components/custom';

import { SELECT_OPTIONS } from '../../constants';

interface DirectoryProps {
  readonly argumentsInputs: string[]
  readonly handleArgumentsInputs: (index: number, value: string) => void
  readonly addArgumentsInputs: () => void
  readonly removeArgumentsInputs: (index: number) => void
  readonly removeAllArgumentsInputs: () => void
  readonly variablesInputs: string[]
  readonly handleVariablesInputs: (index: number, value: string) => void
  readonly addVariablesInputs: () => void
  readonly removeVariablesInputs: (index: number) => void
  readonly removeAllVariablesInputs: () => void
}

const Directory: FC<DirectoryProps> = ({
  argumentsInputs,
  handleArgumentsInputs,
  addArgumentsInputs,
  removeArgumentsInputs,
  removeAllArgumentsInputs,
  variablesInputs,
  handleVariablesInputs,
  addVariablesInputs,
  removeVariablesInputs,
  removeAllVariablesInputs
}) => {
  return (
    <Row>
      <Col>
        <div className="border rounded-top border-secondary p-1 fw-bold">
          Directory
        </div>
        <div className="border rounded-bottom border-top-0 p-1">
          <Row className="mb-1">
            <Col>
              <NxFormSelect
                label=""
                options={SELECT_OPTIONS}
                placeholder="GIT" />
            </Col>
          </Row>

          <Row className="mb-1">
            <Col>
              <NxFormControl label="Namespace" placeholder="Placeholder" />
            </Col>
          </Row>

          <Row className="mb-1">
            <Col>
              <NxFormCheckGroup
                items={[{ label: 'DIRECTORY CAUSE', value: 'DIRECTORY CAUSE' }]}
                label="" />
            </Col>
          </Row>

          <Form.Group className="mb-1">
            <Form.Label className="fs-5 text-dark">
              Top-Level Arguments
            </Form.Label>

            <div className="border rounded p-1">
              {argumentsInputs.map((input, index) => (
                <Form.Group key={index}>
                  <Row>
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
                          <Form.Control
                            placeholder={`Key ${index}`}
                            type="text"
                            value={input}
                            onChange={(e) => handleArgumentsInputs(index, e.target.value)} />
                        </Col>
                        <Col sm={1}>
                          <h5 className="text-center">=</h5>
                        </Col>
                        <Col sm={5}>
                          <Form.Control
                            placeholder={`Value ${index}`}
                            type="text"
                            value={input}
                            onChange={(e) => handleArgumentsInputs(index, e.target.value)} />
                        </Col>
                        <Col sm={1}>
                          <Button
                            variant="outline-danger"
                            onClick={() => removeArgumentsInputs(index)}
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
                  <Col className="d-flex">
                    {argumentsInputs.length > 1 && (
                      <div className="me-1">
                        <Button
                          className="text-danger"
                          size="sm"
                          variant="outline-none"
                          onClick={removeAllArgumentsInputs}
                        >
                          <div className="d-flex gap-50 align-items-center">
                            <Trash2 size={14} />
                            Remove All
                          </div>
                        </Button>
                      </div>
                    )}
                    <div>
                      <Button
                        size="sm"
                        variant="outline-info"
                        onClick={addArgumentsInputs}
                      >
                        <div className="d-flex gap-50 align-items-center">
                          <Plus size={12} /> Argument
                        </div>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label className="fs-5 text-dark">
              External Variables
            </Form.Label>

            <div className="border rounded p-1">
              {variablesInputs.map((input, index) => (
                <Form.Group key={index}>
                  <Row>
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
                          <Form.Control
                            placeholder={`Key ${index}`}
                            type="text"
                            value={input}
                            onChange={(e) => handleVariablesInputs(index, e.target.value)} />
                        </Col>
                        <Col sm={1}>
                          <h5 className="text-center">=</h5>
                        </Col>
                        <Col sm={5}>
                          <Form.Control
                            placeholder={`Value ${index}`}
                            type="text"
                            value={input}
                            onChange={(e) => handleVariablesInputs(index, e.target.value)} />
                        </Col>
                        <Col sm={1}>
                          <Button
                            variant="outline-danger"
                            onClick={() => removeVariablesInputs(index)}
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
                  <Col className="d-flex">
                    {variablesInputs.length > 1 && (
                      <div className="me-1">
                        <Button
                          className="text-danger"
                          size="sm"
                          variant="outline-none"
                          onClick={removeAllVariablesInputs}
                        >
                          <div className="d-flex gap-50 align-items-center">
                            <Trash2 size={14} />
                            Remove All
                          </div>
                        </Button>
                      </div>
                    )}
                    <div>
                      <Button
                        size="sm"
                        variant="outline-info"
                        onClick={addVariablesInputs}
                      >
                        <div className="d-flex gap-50 align-items-center">
                          <Plus size={12} />
                          Variable
                        </div>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Form.Group>
        </div>
      </Col>
    </Row>
  );
};

Directory.displayName = 'Directory';

export { Directory };
