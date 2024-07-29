import { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

import { Eye, EyeOff } from '@nxweb/icons/feather';

const Webhook = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <>
      <Row className="mb-1">
        <Col>
          <Form.Group controlId="formName">
            <Form.Label className="fs-4 text-dark">Webhook URL</Form.Label>
            <Form.Control placeholder="Placeholder" type="text" />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-1">
        <Col>
          <Form.Group controlId="formName">
            <Form.Label className="fs-4 text-dark">
              User Name (optional)
            </Form.Label>
            <Form.Control placeholder="Placeholder" type="text" />
            <Form.Label className="fs-7">
              Leave empty for bearer auth or when authentication is not
              necessary.
            </Form.Label>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-1">
        <Col>
          <Form.Group controlId="formName">
            <Form.Label className="fs-4 text-dark">
              Password (optional)
            </Form.Label>
            <InputGroup>
              <Form.Control
                className="border-end-0"
                placeholder="Placeholder"
                type={passwordVisibility ? 'text' : 'password'} />
              <InputGroup.Text className="border-start-0">
                <Button
                  className="border-0 rounded-circle p-25"
                  variant="flat-primary"
                  onClick={handlePasswordVisibility}
                >
                  {passwordVisibility
                    ? <Eye size={16} />

                    : <EyeOff size={16} />}
                </Button>
              </InputGroup.Text>
            </InputGroup>
            <Form.Label className="fs-7">
              Specify a password or bearer token
            </Form.Label>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

Webhook.displayName = 'Webhook';

export default Webhook;
