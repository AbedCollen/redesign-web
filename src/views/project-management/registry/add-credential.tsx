import { Button, Col, Form, Row } from 'react-bootstrap';

import { Check, X } from '@nxweb/icons/feather';

import { allRoutes } from '@config/constants';

const AddCredentialMain = () => (
  <div className="element-wrapper">
    <Row className="p-2">
      <Col>
        <h5 className="fw-bold text-black">Add Credential</h5>
      </Col>
      <Col>
        <div className="d-flex align-items-center justify-content-end gap-75">
          <Button
            as="a"
            className="d-flex align-items-center justify-content-center gap-50"
            href={allRoutes.projectManagement.registry}
            variant="outline-danger"
          >
            <X size={20} />
            Cancel
          </Button>
          <Button
            as="a"
            className="d-flex align-items-center justify-content-center gap-50"
            href={allRoutes.projectManagement.registry}
          >
            <Check size={20} />
            Save
          </Button>
        </div>
      </Col>
    </Row>
    <Row className="p-2 mx-1 my-2 border rounded">
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-1" controlId="formName">
              <Form.Label className="fw-bold fs-4 text-dark">Name</Form.Label>
              <Form.Control placeholder="Placeholder" type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-1" controlId="comment">
            <Form.Label className="fw-bold fs-4 text-dark">
              Description
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Placeholder"
              style={{ height: '150px' }} />
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-1" controlId="formScope">
              <Form.Label className="fw-bold fs-4 text-dark">Scope</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Placeholder</option>
                <option value="1">Scope 1</option>
                <option value="2">Scope 2</option>
                <option value="3">Scope 3</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-1" controlId="formAddress">
              <Form.Label className="fw-bold fs-4 text-dark">Address</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Placeholder</option>
                <option value="1">Address 1</option>
                <option value="2">Address 2</option>
                <option value="3">Address 3</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-1" controlId="formUsername">
              <Form.Label className="fw-bold fs-4 text-dark">Username</Form.Label>
              <Form.Control placeholder="Placeholder" type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-1" controlId="formPassword">
              <Form.Label className="fw-bold fs-4 text-dark">Password</Form.Label>
              <Form.Control placeholder="Placeholder" type="text" />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Row>
  </div>
);

AddCredentialMain.displayName = 'AddCredentialMain';
export { AddCredentialMain };
