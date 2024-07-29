import { useState } from 'react';
import { Accordion, Button, Col, Form } from 'react-bootstrap';

import { Plus, Trash2 } from '@nxweb/icons/feather';

const PortMapping: React.FC = () => {
  const [inputs, setInputs] = useState<string[]>([]);
  const addInput = () => {
    setInputs([...inputs, '']);
  };

  const removeAll = () => {
    setInputs([]);
  };

  const removeInput = (index: number) => {
    const updatedInputs = [...inputs];

    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };

  return (
    <Accordion className="mb-2" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="border border-primary-header rounded-top">
         <span className="text-primary-header">Port Mapping</span>
        </Accordion.Header>
        <Accordion.Body className="container nx-form-control">
          <div className="bg-white rounded border border-1 p-2">
            {inputs.map((_input, index) => (
              <Form.Group className="mb-1" key={index}>
                <div className="d-flex gap-2">
                    <Col>
                      {index === 0 &&
                        <Form.Label>Protocol</Form.Label>}

                      {index >= 0 && (

                        <Form.Control
                          id="Protocol"
                          placeholder="placeholder"
                          type="text" />
                      )}
                    </Col>
                    <Col>
                      {index === 0 && (
                          <Form.Label>
                            Publish the Container Port
                          </Form.Label>
                      )}

                      {index >= 0 && (
                          <Form.Select
                            className="form-select "
                            id="Publisher"
                            name=""
                            placeholder="Placeholder"
                          >
                            <option hidden={true} value="headless">
                              headless
                            </option>
                            <option value="item1">Item 1</option>
                            <option value="item2">Item 2</option>
                            <option value="item3">Item 3</option>
                            <option value="item4">Item 4</option>
                          </Form.Select>
                      )}
                    </Col>
                    <Col>

                      {index === 0 &&
                          <Form.Label>As a</Form.Label>}

                      {index >= 0 && (

                          <Form.Control
                            id="as"
                            placeholder="placeholder"
                            type="text" />
                      )}
                    </Col>
                    <Col>

                      {index === 0 && (
                          <Form.Label>
                            On Listening protocol
                          </Form.Label>
                      )}

                      {index >= 0 && (
                          <Form.Select
                            className="form-select "
                            id="OLP"
                            name=""
                            placeholder="Headless"
                          >
                            <option hidden={true} value="placeholder">
                              Headless
                            </option>
                            <option value="item1">Item 1</option>
                            <option value="item2">Item 2</option>
                            <option value="item3">Item 3</option>
                            <option value="item4">Item 4</option>
                          </Form.Select>
                      )}
                    </Col>
                    <Col>
                      {index === 0 &&
                          <Form.Label>Port Name</Form.Label>}

                      {index >= 0 && (
                          <Form.Control
                            id="portName"
                            placeholder="placeholder"
                            type="text" />
                      )}
                    </Col>
                    <div className="d-flex flex-column justify-content-end">
                      <Button
                        className="lh-1"
                        variant="outline-danger"
                        onClick={() => removeInput(index)}
                      >
                        <Trash2 className="text-danger" size={18} />
                      </Button>
                    </div>

                </div>
              </Form.Group>
            ))}
            <div className="d-flex gap-2">
              <Button
                className="d-flex gap-50 align-items-center"
                size="sm"
                variant="outline-info"
                onClick={addInput}
              >
                <Plus size={12} />
                Port
              </Button>
              {inputs.length === 0 && (
                <Button
                  className="d-flex gap-50 align-items-center"
                  disabled={true}
                  size="sm"
                  variant=""
                  onClick={removeAll}
                >
                  <Trash2 size={14} />
                  Remove All
                </Button>
              )}
              {inputs.length > 0 && (
                <Button className="d-flex gap-50 align-items-center" size="sm" variant="outline-danger" onClick={removeAll}>
                  <Trash2 size={14} />
                  Remove All
                </Button>
              )}
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

PortMapping.displayName = 'PortMapping';

export { PortMapping };
