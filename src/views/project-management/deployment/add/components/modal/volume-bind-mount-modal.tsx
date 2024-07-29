import { useState } from 'react';
import type { FC } from 'react';
import { Button, Col, Form, Modal } from 'react-bootstrap';

import { Plus, Save, Trash2 } from '@nxweb/icons/feather';

interface ModalProps {
  readonly modalToggle: () => void
}

const BindMount: FC<ModalProps> = ({ modalToggle }) => {
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
      <Modal.Header className="d-flex align-items-center justify-content-start ">
        <h5>Add Volume Use Bind Mount</h5>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-1 nx-form-control" controlId="volumeName">
            <Form.Label>Volume Name</Form.Label>
            <Form.Group>
              <Form.Control placeholder="e.g. voll" />
            </Form.Group>
          </Form.Group>

          <Form.Group className="mb-1 nx-form-control" controlId="path">
            <Form.Label>Path on the Node</Form.Label>
            <Form.Control placeholder="e.g. /mnt/disks/ssdl" type="text" />
          </Form.Group>
          <Form.Group className="mb-1 nx-form-control" controlId="pathOption">
            <Form.Label>The Path on the node must be</Form.Label>
            <Form.Select id="test" name="test" placeholder="Placeholder">
              <option hidden={true} value="placeholder">
                Anything: do no check target path
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
                  <Col>
                    {index === 0 && <Form.Label>Mount Point</Form.Label>}
                    <Form.Control
                      id="variable"
                      placeholder="Mount Point"
                      type="text" />
                  </Col>
                  <Col>
                    {index === 0 && <Form.Label>Sub Path in Volume</Form.Label>}
                    <Form.Control
                      id="value"
                      placeholder="Path in volume"
                      type="text" />
                  </Col>
                  <Col>
                    {index === 0 && (
                      <Form.Label className="d-flex justify-content-center ">
                        Read-Only
                      </Form.Label>
                    )}
                    <Form.Check
                      className="d-flex justify-content-center"
                      id="value"
                      placeholder="Path in volume"
                      type="checkbox" />
                  </Col>

                  <div className="d-flex align-items-sm-end">
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
            <Col className="d-flex gap-2 d-flex">
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

BindMount.displayName = 'BindMount';

export { BindMount };
