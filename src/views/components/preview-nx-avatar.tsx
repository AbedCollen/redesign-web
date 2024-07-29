import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import { NxAvatar } from '@components/custom';

const PreviewNxAvatar = () => {
  const [selectedImg, setSelectedImg] = useState();

  return (
    <div>
      <Row className="mb-2">
        <Col className="d-flex align-items-center gap-1" xs={6}>
          <NxAvatar src={selectedImg} />
          <div className="w-100">
            <div className="text-body-1 fw-medium mb-50">File Input</div>
            <Form.Control
              type="file"

              // @ts-expect-error : value
              onChange={(e) => setSelectedImg(e.target?.files?.[0])} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <pre className="p-2">
            <Row>
              <Col>
{`<NxAvatar
  src       ------>   // Accepts string (URL) | File data type (will be converted to object URL), defaults to User icon
  size      ------>   // Accepts number, defaults to 96
/>`}
              </Col>
            </Row>
          </pre>
        </Col>
      </Row>
    </div>
  );
};

PreviewNxAvatar.displayName = 'PreviewNxAvatar';

export { PreviewNxAvatar };
