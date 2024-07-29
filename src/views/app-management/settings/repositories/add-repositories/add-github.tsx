import { Button, Col, Dropdown, Row } from 'react-bootstrap';

import { ChevronDown, X } from '@nxweb/icons/feather';

import { NxFormCheckGroup, NxFormControl } from '@components/custom';
import { allRoutes } from '@config/constants';

const layoutStyle = {
  form: 'fs-4 text-dark',
  style: 'd-flex align-items-center'
};

const nxStyle = { container: `mb-1`, label: layoutStyle.form };

const GithubAddMain = () => {
  return (
    <div className="element-wrapper">
      <div className="shadow-sm d-flex justify-content-between p-2">
        <h5 className="fw-bold m-0 text-black">Repository GITHUB</h5>
        <div className={`${layoutStyle.style} gap-1`}>
          <Button
            as="a"
            className={`${layoutStyle.style} justify-content-center gap-50`}
            href={allRoutes.appManagement.settingRepositories}
            variant="outline-danger"
          >
            <X size={20} /> Cancel
          </Button>
          <Dropdown className="no-arrow">
            <Dropdown.Toggle
              className="d-flex gap-50 align-items-center"
              variant="primary"
            >
              <ChevronDown
                className="text-neutral-90 breadcrumb-chevron"
                color="white"
                size={18} />
              Save
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Save Repository</Dropdown.Item>
              <Dropdown.Item href="#">Save as Template</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
              label="Github App ID"
              placeholder="Placeholder"
              type="text" />
          </Col>
        </Row>

        <Row>
          <Col>
            <NxFormControl
              className={nxStyle}
              label="Github App Installation ID"
              placeholder="Placeholder"
              type="text" />
          </Col>
        </Row>

        <Row>
          <Col>
            <NxFormControl
              className={nxStyle}
              label="Github App Private Key"
              placeholder="Placeholder"
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
      </div>
    </div>
  );
};

GithubAddMain.displayName = 'GithubAddMain';
export { GithubAddMain };
