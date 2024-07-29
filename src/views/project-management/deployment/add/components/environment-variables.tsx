import { useState } from 'react';
import { Accordion, Button, Col, Form } from 'react-bootstrap';

import { Plus, Trash2 } from '@nxweb/icons/feather';

const EnvironmentVar: React.FC = () => {
  const [inputsEnv, setInputsEnv] = useState<string[]>([]);
  const addInputEnv = () => {
    setInputsEnv([...inputsEnv, '']);
  };

  const removeAllEnv = () => {
    setInputsEnv([]);
  };

  const removeInputEnv = (index: number) => {
    const updatedInputs = [...inputsEnv];

    updatedInputs.splice(index, 1);
    setInputsEnv(updatedInputs);
  };

  const [inputsSrc, setInputsSrc] = useState<string[]>([]);
  const addInputSrc = () => {
    setInputsSrc([...inputsSrc, '']);
  };

  const removeAllSrc = () => {
    setInputsSrc([]);
  };

  const removeInputSrc = (index: number) => {
    const updatedInputs = [...inputsSrc];

    updatedInputs.splice(index, 1);
    setInputsSrc(updatedInputs);
  };

  return (
    <Accordion className="mb-2" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="border border-primary-header rounded-top">
          <span className="text-primary-header">
            Environment Variables
          </span>
        </Accordion.Header>
        <Accordion.Body className="nx-form-control">
          <div className="bg-white rounded border border-1 p-2 mb-1">
            {inputsEnv.map((_input, index) => (
              <div className="mb-1" key={index}>
                <div className="d-flex gap-2">
                  <Col className="d-flex flex-column justify-content-end ">
                    {index === 0 &&
                      <Form.Label>Variable</Form.Label>}

                    {index >= 0 && (
                      <Form.Control
                        id="variable"
                        placeholder="Placeholder"
                        type="text" />
                    )}
                  </Col>
                  <Col className="d-flex flex-column justify-content-end ">
                    {index === 0 &&
                      <Form.Label>Value</Form.Label>}

                    {index >= 0 && (
                      <Form.Control
                        id="value"
                        placeholder="Placeholder"
                        type="text" />
                    )}
                  </Col>

                  <div className="d-flex flex-column justify-content-end">
                      <Button
                        className="lh-1"
                        variant="outline-danger"
                        onClick={() => removeInputEnv(index)}
                      >
                        <Trash2 className="text-danger" size={18} />
                      </Button>
                  </div>
                </div>
              </div>
            ))}
            <Col className="d-flex gap-2">
              <Button
                className="d-flex gap-50 align-items-center"
                size="sm"
                variant="outline-info"
                onClick={addInputEnv}
              >
                <Plus size={12} />
                Add Environment
              </Button>
              {inputsEnv.length === 0 && (
                <Button
                  className="d-flex gap-50 align-items-center"
                  disabled={true}
                  size="sm"
                  variant=""
                  onClick={removeAllEnv}
                >
                  <Trash2 size={14} />
                  Remove All
                </Button>
              )}
              {inputsEnv.length > 0 && (
                <Button
                  className="d-flex gap-50 align-items-center"
                  size="sm"
                  variant="outline-danger"
                  onClick={removeAllEnv}
                >
                  <Trash2 size={14} />
                  Remove All
                </Button>
              )}
            </Col>
          </div>
          <div className="bg-white rounded border border-1 p-2 mb-1">
            {inputsSrc.map((_input, index) => (
              <div className="mb-1" key={index}>
                <div className="d-flex gap-2">
                  <Col className="d-flex flex-column justify-content-end ">
                    {index === 0 &&
                      <Form.Label>Type</Form.Label>}
                    {index >= 0 && (
                      <select
                        className="form-select "
                        id="type"
                        name=""
                        placeholder="Placeholder"
                      >
                        <option hidden={true} value="placeholder">
                          Type
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
                      <Form.Label>Source</Form.Label>}

                    {index >= 0 && (
                      <select
                        className="form-select "
                        id="source"
                        name=""
                        placeholder="configMap"
                      >
                        <option value="configMap">
                          Config Map
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
                      <Form.Label>key</Form.Label>}

                    {index >= 0 && (
                      <select
                        className="form-select "
                        id="key"
                        name=""
                        placeholder="Placeholder"
                      >
                        <option hidden={true} value="placeholder">
                          key
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
                      <Form.Label>Prefix Or Alias</Form.Label>}

                    {index >= 0 && (
                      <Form.Control
                        id="prefOrAlias"
                        placeholder={`Key ${index}`}
                        type="text" />
                    )}
                  </Col>
                  <div className="d-flex flex-column justify-content-end">
                      <Button
                        className="lh-1"
                        variant="outline-danger"
                        onClick={() => removeInputSrc(index)}
                      >
                        <Trash2 className="text-danger" size={18} />
                      </Button>
                  </div>
                </div>
              </div>
            ))}
            <Col className="d-flex gap-2">
              <Button
                className="d-flex gap-50 align-items-center"
                size="sm"
                variant="outline-info"
                onClick={addInputSrc}
              >
                <Plus size={12} />
                Add From Source
              </Button>
              {inputsSrc.length === 0 && (
                <Button
                  className="d-flex gap-50 align-items-center"
                  disabled={true}
                  size="sm"
                  variant=""
                  onClick={removeAllSrc}
                >
                  <Trash2 size={14} />
                  Remove All
                </Button>
              )}
              {inputsSrc.length > 0 && (
                <Button
                  className="d-flex gap-50 align-items-center"
                  size="sm"
                  variant="outline-danger"
                  onClick={removeAllSrc}
                >
                  <Trash2 size={14} />
                  Remove All
                </Button>
              )}
            </Col>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

EnvironmentVar.displayName = 'EnvironmentVar';

export { EnvironmentVar };
