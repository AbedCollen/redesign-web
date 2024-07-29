/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { Accordion, Button, Col, Form } from 'react-bootstrap';

import { Plus, Trash2 } from '@nxweb/icons/feather';

const NodeScheduling: React.FC = () => {
  const [selectedOptionNode, setSelectedOptionNode] =
    useState<string>('option1');

  const handleDropdownChangeNode = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOptionNode(event.target.value);
  };

  const [inputsRule, setInputsRule] = useState<string[]>([]);
  const [inputsCusRule, setInputsCusRule] = useState<string[]>([]);

  const addInputRule = () => {
    setInputsRule([...inputsRule, '']);
  };

  const removeAllRule = () => {
    setInputsRule([]);
    setInputsCusRule([]);
  };
  const removeInputRule = (index: number) => {
    const updatedInputs = [...inputsRule];

    updatedInputs.splice(index, 1);
    setInputsRule(updatedInputs);
  };

  const addInputCusRule = () => {
    setInputsCusRule([...inputsCusRule, '']);
  };

  const removeInputCusRule = (index: number) => {
    const updatedInputs = [...inputsCusRule];

    updatedInputs.splice(index, 1);
    setInputsCusRule(updatedInputs);
  };

  return (
    <Accordion className="mb-2" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="border border-primary-header rounded-top">
          <span className="text-primary-header">
            Node Scheduling
          </span>
        </Accordion.Header>
        <Accordion.Body className="container nx-form-control">
          <div>
            <Form.Group className="mb-1" controlId="formStorageClass">
              <Form.Select
                aria-label="Default select example"
                id="dropdown"
                value={selectedOptionNode}
                onChange={handleDropdownChangeNode}
              >
                <option value="option1">
                  Automatically pick nodes for each pod matching scheduling
                  rules
                </option>
                <option value="option2">
                  Run all pods for this workload on a specific node
                </option>
              </Form.Select>
            </Form.Group>
            {selectedOptionNode === 'option1' && (
              <div className="mb-1">
                <div className="bg-white rounded border border-1 p-2">
                  {inputsRule.map((_input, index) => (
                    <Form.Group className="mb-1" key={index}>
                      <div className="d-flex gap-2 mb-1">
                        <Col className="d-flex flex-column justify-content-end ">
                          {index === 0 &&
                            <Form.Label>Label Key</Form.Label>}

                          {index >= 0 && (
                            <Form.Control
                              id="variable"
                              placeholder={`Keys ${index}`}
                              type="text" />
                          )}
                        </Col>
                        <Col className="d-flex flex-column justify-content-end " sm={2}>
                          {index === 0 &&
                            <Form.Label>Operator</Form.Label>}

                          {index >= 0 && (
                            <select
                              className="form-select "
                              id="source"
                              name=""
                              placeholder="Placeholder"
                            >
                              <option hidden={true} value="Placeholder">
                                placeholder
                              </option>
                              <option value="item1">Item 1</option>
                              <option value="item2">Item 2</option>
                              <option value="item3">Item 3</option>
                              <option value="item4">Item 4</option>
                            </select>
                          )}
                        </Col>
                        <Col className="d-flex flex-column justify-content-end ">
                          {index === 0 &&
                            <Form.Label>Value</Form.Label>}

                          {index >= 0 && (
                            <Form.Control
                              id="value"
                              placeholder={`Key ${index}`}
                              type="text" />
                          )}
                        </Col>

                        <div className="d-flex flex-column justify-content-end">
                            <Button
                              className="lh-1"
                              variant="outline-danger"
                              onClick={() => removeInputRule(index)}
                            >
                              <Trash2 className="text-danger" size={18} />
                            </Button>
                        </div>
                      </div>
                    </Form.Group>
                  ))}
                  {inputsCusRule.map((_input, index) => (
                    <Form.Group className="d-block mb-1" key={index}>
                      <div className="d-flex gap-2">
                        <Col className="d-flex justify-content-end ">
                            <Form.Control
                              id="variable"
                              placeholder={`Key bot ${index}`}
                              type="text" />
                        </Col>
                        <div className=" d-flex justify-content-end">
                            <Button
                              variant="outline-danger"
                              onClick={() => removeInputCusRule(index)}
                            >
                              <Trash2 className="text-danger" size={18} />
                            </Button>
                        </div>
                      </div>
                    </Form.Group>
                  ))}
                  <Col className="d-flex gap-2">
                    <Button
                      className="d-flex align-items-center gap-50"
                      size="sm"
                      variant="outline-info"
                      onClick={addInputRule}
                    >
                      <Plus size={12} />
                      Add Rule
                    </Button>
                    <Button
                      className="d-flex align-items-center gap-50"
                      size="sm"
                      variant="outline-info"
                      onClick={addInputCusRule}
                    >
                      <Plus size={12} />
                      Add Custom Rule
                    </Button>
                    {inputsRule.length !== 0 || inputsCusRule.length !== 0
                      ? (
                      <Button
                        className="d-flex gap-50 align-items-center"
                        size="sm"
                        variant="outline-danger"
                        onClick={removeAllRule}
                      >
                        <Trash2 size={14} />
                        Remove All
                      </Button>
                      )
                      : (
                      <Button className="d-flex gap-50 align-items-center" disabled={true} size="sm" variant="">
                        <Trash2 size={14} />
                        Remove All
                      </Button>
                      )}
                  </Col>
                </div>
              </div>
            )}
            {selectedOptionNode === 'option2' && (
              <div className="mb-1">
                <Form.Select
                  aria-label="Default select example"
                  id="dropdown"
                  value={selectedOptionNode}
                  onChange={handleDropdownChangeNode}
                >
                  <option value="option1">Item inside</option>
                </Form.Select>
              </div>
            )}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

NodeScheduling.displayName = 'NodeScheduling';

export { NodeScheduling };
