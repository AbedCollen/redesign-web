import { useState } from 'react';
import type { FC } from 'react';
import { Button, Col, Form, Modal } from 'react-bootstrap';

import { Plus, Save, Trash2 } from '@nxweb/icons/feather';

interface ModalProp {
  readonly modalToggle: () => void;
}

const Others: FC<ModalProp> = ({ modalToggle }) => {
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
    <>
      <Modal.Header className="d-flex align-items-center justify-content-start">
        <h5>Add Volume Use Certificate/Secret/ConfigMap</h5>
      </Modal.Header>
      <Modal.Body className="nx-form-control">
        <Form>
          <Form.Group className="mb-1 nx-form-control" controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Select id="test" name="test" placeholder="Placeholder">
              <option hidden={true} value="placeholder">
                Secret
              </option>
              <option value="item1">Item 1</option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
              <option value="item4">Item 4</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-1 nx-form-control" controlId="volumeName">
            <Form.Label>Volume Name</Form.Label>
            <Form.Control placeholder="e.g. voll" type="text" />
          </Form.Group>
          <Form.Group className="mb-1 nx-form-control" controlId="defaultMode">
            <Form.Label>Default Mode</Form.Label>
            <Form.Control placeholder="e.g. voll" type="text" />
          </Form.Group>
          <Form.Group className="mb-1 nx-form-control">
            <Form.Label>Optional</Form.Label>
            <div className="fs-5 d-flex gap-50 flex-column">
              <div className="d-flex gap-50 align-items-center">
                <input
                  id="optionalYes"
                  name="optional"
                  type="radio"
                  value="optionalYes"
                />
                <label htmlFor="optionalYes">Yes</label>
              </div>
              <div className="d-flex gap-50 align-items-center">
                <input
                  id="optionalNo"
                  name="optional"
                  type="radio"
                  value="optionalNo"
                />
                <label htmlFor="optionalNo">No</label>
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-1 nx-form-control" controlId="type">
            <Form.Label>Secret</Form.Label>
            <Form.Select id="test" name="test" placeholder="Placeholder">
              <option hidden={true} value="placeholder">
                Secret
              </option>
              <option value="item1">Item 1</option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
              <option value="item4">Item 4</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-1 nx-form-control" controlId="type">
            <Form.Label>Items</Form.Label>
            <Form.Select id="test" name="test" placeholder="Placeholder">
              <option hidden={true} value="placeholder">
                All Keys
              </option>
              <option value="item1">Item 1</option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
              <option value="item4">Item 4</option>
            </Form.Select>
          </Form.Group>
          <div className="mb-1">
            {inputs.map((_input, index) => (
              <Form.Group className="mb-1" key={index}>
                <div className="d-flex nx-form-control gap-2">
                  <Col className="d-flex flex-column">
                    {index === 0 && <Form.Label>Mount Point</Form.Label>}

                    {index >= 0 && (
                      <Form.Control
                        id="variable"
                        placeholder="Mount Point"
                        type="text"
                      />
                    )}
                  </Col>
                  <Col className="d-flex flex-column">
                    {index === 0 && <Form.Label>Sub Path in Volume</Form.Label>}

                    {index >= 0 && (
                      <Form.Control
                        id="value"
                        placeholder="Path in volume"
                        type="text"
                      />
                    )}
                  </Col>
                  <Col className="d-flex flex-column Justify-content-center">
                    {index === 0 && (
                      <Form.Label className="d-flex justify-content-center">
                        Read-Only
                      </Form.Label>
                    )}

                    {index >= 0 && (
                      <Form.Check
                        className="d-flex justify-content-center"
                        id="value"
                        placeholder="Path in volume"
                        type="checkbox"
                      />
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
            <Col className="col d-flex gap-2">
              <Button
                className="d-flex gap-50 align-items-center"
                size="sm"
                variant="outline-info"
                onClick={addInput}
              >
                <Plus size={12} />
                Add Mount
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
                <Button
                  className="d-flex gap-50 align-items-center"
                  size="sm"
                  variant="outline-danger"
                  onClick={removeAll}
                >
                  <Trash2 size={14} />
                  Remove All
                </Button>
              )}
            </Col>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
        <Button
          className="justify-content-center"
          variant="flat-primary"
          onClick={modalToggle}
        >
          Cancel
        </Button>
        <Button
          className="d-flex align-items-center justify-content-center gap-50"
          onClick={modalToggle}
        >
          <Save size={20} />
          Save
        </Button>
      </Modal.Footer>
    </>
  );
};

Others.displayName = 'Others';

export { Others };
