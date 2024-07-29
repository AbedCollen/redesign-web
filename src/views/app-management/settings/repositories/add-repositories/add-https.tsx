import { Button, Col, Row } from 'react-bootstrap';

import { StarFill } from '@nxweb/icons/bootstrap';
import { Plus, X } from '@nxweb/icons/feather';

import { NxFormCheckGroup, NxFormControl } from '@components/custom';
import { allRoutes } from '@config/constants';

const layoutStyle = {
  form: 'fs-4 text-dark',
  style: 'd-flex align-items-center justify-content-center gap-50'
};

const nxStyle = { container: `mb-1`, label: layoutStyle.form };

const HTTPSAddMain = () => {
  return (
    <div className="element-wrapper">
      <div className="shadow-sm d-flex justify-content-between p-2">
        <h5 className="fw-bold m-0 text-black">Repository HTTPS</h5>
        <div className="d-flex align-items-center gap-1">
          <Button
            as="a"
            className={layoutStyle.style}
            href={allRoutes.appManagement.settingRepositories}
            variant="outline-danger"
          >
            <X size={20} /> Cancel
          </Button>
          <Button className={layoutStyle.style}>
            <Plus size={20} /> Create
          </Button>
        </div>
      </div>
      <div className="m-2 p-2 border rounded">
        <Row>
          <Col>
            <NxFormControl
              className={nxStyle}
              label="Type"
              placeholder="Placeholder"
              type="text" />
          </Col>
        </Row>

        <Row>
          <Col>
            <NxFormControl
              className={nxStyle}
              label="Repository URL"
              placeholder="Placeholder"
              type="text" />
          </Col>
        </Row>

        <Row>
          <Col>
            <NxFormControl
              className={nxStyle}
              label="Username (Optional)"
              placeholder="Placeholder"
              type="text" />
          </Col>
        </Row>

        <Row>
          <Col>
            <NxFormControl
              className={nxStyle}
              label="Password (Optional)"
              placeholder="Placeholder"
              type="text" />
          </Col>
        </Row>

        <Row>
          <Col>
            <NxFormControl
              as="textarea"
              className={nxStyle}
              label="TLS Client Certificate (Optional)"
              placeholder="Placeholder"
              style={{ height: '150px' }}
              type="text" />
          </Col>
        </Row>

        <Row>
          <Col>
            <NxFormControl
              as="textarea"
              className={nxStyle}
              label="TLS Client Certificate Key (Optional)"
              placeholder="Placeholder"
              style={{ height: '150px' }}
              type="text" />
          </Col>
        </Row>

        <Row>
          <Col>
            <NxFormControl
              className={nxStyle}
              label="Proxy (Optional)"
              placeholder="Placeholder"
              type="text" />
          </Col>
        </Row>

        <Row>
          <Col>
            <NxFormCheckGroup
              className={{ container: `mb-1` }}
              items={[{ label: 'Skip Server Verification', value: 'item1' }]}
              label="" />
            <NxFormCheckGroup
              items={[
                { label: 'Enable LFS Support (Git Only)', value: 'item2' }
              ]}
              label="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-end">
              <Button className={layoutStyle.style} variant="outline-primary">
                <StarFill color="yellow" size={16} /> Save As Credentials
                Template
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

HTTPSAddMain.displayName = 'HTTPSAddMain';
export { HTTPSAddMain };
