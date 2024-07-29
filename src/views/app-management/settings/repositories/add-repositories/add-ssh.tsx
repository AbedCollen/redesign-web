import { Button, Col, Row } from 'react-bootstrap';

import { Plus, X } from '@nxweb/icons/feather';

import { NxFormCheckGroup, NxFormControl } from '@components/custom';
import { allRoutes } from '@config/constants';

const layoutStyle = {
  form: 'fs-4 text-dark',
  style: 'd-flex align-items-center justify-content-center gap-50'
};

const nxStyle = { container: `mb-1`, label: layoutStyle.form };

const SSHAddMain = () => {
  return (
    <div className="element-wrapper">
      <div className="shadow-sm d-flex justify-content-between p-2">
        <h5 className="fw-bold m-0 text-black">Repository SSH</h5>
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
              label="Name"
              placeholder="Placeholder" />
          </Col>
        </Row>

        <Row>
          <Col>
            <NxFormControl
              className={nxStyle}
              label="Repository URL"
              placeholder="Placeholder" />
          </Col>
        </Row>

        <Row>
          <Col>
            <NxFormControl
              as="textarea"
              className={nxStyle}
              label="SSH Private Key Data"
              placeholder="Placeholder"
              style={{ height: '150px' }} />
          </Col>
        </Row>

        <Row>
          <Col>
            <NxFormControl
              className={nxStyle}
              label="Proxy (Optional)"
              placeholder="Placeholder" />
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
      </div>
    </div>
  );
};

SSHAddMain.displayName = 'SSHAddMain';
export { SSHAddMain };
