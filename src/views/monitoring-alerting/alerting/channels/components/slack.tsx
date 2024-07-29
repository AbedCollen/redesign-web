import { Col, Form, Row } from 'react-bootstrap';

const Slack = () => {
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
            <Form.Label className="fs-4 text-dark">Recipient</Form.Label>
            <Form.Control placeholder="Placeholder" type="text" />
            <Form.Label className="fs-7">
              Specify channel or user, use #channel-name,@username(has to be all
              lowercase, no whitespace)
            </Form.Label>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-1">
        <Col>
          <Form.Group controlId="formDescription">
            <Form.Label className="fs-4 text-dark">Title</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Placeholder"
              style={{ height: '150px' }} />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-1">
        <Col>
          <Form.Group controlId="formDescription">
            <Form.Label className="fs-4 text-dark">Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Placeholder"
              style={{ height: '150px' }} />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

Slack.displayName = 'Slack';

export default Slack;
