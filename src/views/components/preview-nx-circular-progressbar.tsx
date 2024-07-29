import { useState } from 'react';
import { Alert, Col, Form, Row } from 'react-bootstrap';

import { NxCircularProgressbar } from '@components/custom';

const DEFAULT_VALUE = 10;
const DOCS_URL = 'https://github.com/kevinsqi/react-circular-progressbar';

const PreviewNxCircularProgressbar = () => {
  const [value, setValue] = useState(DEFAULT_VALUE);
  const [backgroundColor, setBackgroundColor] = useState({ active: false, color: '#d6d6d6' });
  const [trailColor, setTrailColor] = useState('#d6d6d6');
  const [pathColor, setPathColor] = useState('#3e98c7');

  return (
    <div>
      <Alert>
        For more in-depth documentation, please refer to:
        <br />
        <a className="text-info" href={DOCS_URL} rel="noreferrer" target="_blank">kevinsqi/react-circular-progressbar</a>
      </Alert>
      <Row className="mb-2">
        <Col xs={3}>
          <Form.Group>
            <Form.Label>Value</Form.Label>
            <Form.Control type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
          </Form.Group>
        </Col>
        <Col xs={3}>
          <Form.Group>
            <Form.Label>Background</Form.Label>
            <div className="d-flex align-items-center gap-1">
              <Form.Switch checked={backgroundColor.active} onChange={(e) => setBackgroundColor({ ...backgroundColor, active: e.target.checked })} />
              <Form.Control className="w-100" type="color" value={backgroundColor.color} onChange={(e) => setBackgroundColor({ ...backgroundColor, color: e.target.value })} />
            </div>
          </Form.Group>
        </Col>
        <Col xs={3}>
          <Form.Group>
            <Form.Label>Trail</Form.Label>
            <Form.Control className="w-100" type="color" value={trailColor} onChange={(e) => setTrailColor(e.target.value)} />
          </Form.Group>
        </Col>
        <Col xs={3}>
          <Form.Group>
            <Form.Label>Path</Form.Label>
            <Form.Control className="w-100" type="color" value={pathColor} onChange={(e) => setPathColor(e.target.value)} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <pre className="p-2">
            {`
<NxCircularProgressbar
  text={${value}%}
  value={${value}}

  <---- OPTIONAL STYLING PROPS ---->
  background={${backgroundColor.active}}
  styles={{
    background: {
      fill: ${backgroundColor.color}
    },
    path: {
      stroke: ${pathColor}
    },
    trail: {
      stroke: ${trailColor}
    }
  }}
  <---- OPTIONAL STYLING PROPS ---->
/>
`}
          </pre>
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={8}>
          <div style={{ height: 200, width: 200 }}>
            <NxCircularProgressbar
              background={backgroundColor.active}
              styles={{
                background: {
                  fill: backgroundColor.color
                },
                path: {
                  stroke: pathColor
                },
                trail: {
                  stroke: trailColor
                }
              }}
              text={`${value}%`}
              value={value} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

PreviewNxCircularProgressbar.displayName = 'PreviewNxCircularProgressbar';
export { PreviewNxCircularProgressbar };
