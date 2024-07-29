import { useEffect } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

import { Check, X } from '@nxweb/icons/feather';

import { StoreCommand, useStore } from '@models/store';

const VolumeAddMain = () => {
  const [, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.volume?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.volume.GetMainData());
  }, [dispatch]);

  return (
    <div className="element-wrapper">
      <Row className="shadow-sm p-2">
        <Col xs={5}>
          <h4 className="fw-bold text-black">Add Volume</h4>
        </Col>
        <Col className="text-end">
          <div className="d-flex align-items-center justify-content-end gap-75">
            <Button
              as="a"
              className="d-flex align-items-center justify-content-center gap-50 btn-outline-primary border-danger text-danger"
              href="/project-management/volume"
            >
              <X size={20} /> Cancel
            </Button>
            <Button className="d-flex align-items-center justify-content-center gap-50">
              <Check size={20} /> Save
            </Button>
          </div>
        </Col>
      </Row>
      <div className="m-2 p-2 border rounded">
        <Row>
          <Col>
            <Form.Group className="mb-1" controlId="formName">
              <Form.Label className="fs-4 text-dark">Name</Form.Label>
              <Form.Control placeholder="Placeholder" type="text" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-1" controlId="formDescription">
              <Form.Label className="fs-4 text-dark">Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Placeholder"
                style={{ height: '150px' }} />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-1" controlId="formStorageClass">
              <Form.Label className="fs-4 text-dark">Namespace</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Output Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-1" controlId="formStorageClass">
              <Form.Label className="fs-4 text-dark">Capacity</Form.Label>
              <div className="d-flex">
                <Form.Control
                  aria-label="Insert tag"
                  placeholder="Select a Tag" />
                <InputGroup.Text id="basic-addon2">GiB</InputGroup.Text>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-1" controlId="formName">
              <Form.Label className="fs-4 text-dark">Source</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>
                  Use a Storage Class to provision a new persistent volume
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-1" controlId="formName">
              <Form.Label className="fs-4 text-dark">Storage Class</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Output Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label className="fs-4 text-dark">Access Modes</Form.Label>
              <Form.Check
                id="radio-1"
                label="Single Node Read-Write"
                name="accessModes"
                type="radio" />
              <Form.Check
                id="radio-2"
                label="Many Nodes Read-Only"
                name="accessModes"
                type="radio" />
              <Form.Check
                id="radio-3"
                label="Many Nodes Read-Write"
                name="accessModes"
                type="radio" />
            </Form.Group>
          </Col>
        </Row>
      </div>
    </div>
  );
};

VolumeAddMain.displayName = 'VolumeAddMain';
export { VolumeAddMain };
