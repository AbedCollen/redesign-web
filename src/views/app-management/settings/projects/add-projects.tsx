/* eslint-disable react/no-array-index-key */
import { Button, Col, Form, Row } from 'react-bootstrap';

import { Plus, X } from '@nxweb/icons/feather';

import { NxFormControl } from '@components/custom';
import { allRoutes } from '@config/constants';

const layoutStyle = {
  container: { container: 'mb-1' },
  layout: 'd-flex align-items-center justify-content-center gap-50'
};

const AddProjects = () => {
  return (
    <div className="element-wrapper">
      <div className="shadow-sm d-flex justify-content-between p-2">
        <h5 className="fw-bold m-0 text-black">Add Projects</h5>
        <div className="d-flex align-items-center gap-1">
          <Button
            as="a"
            className={layoutStyle.layout}
            href={allRoutes.appManagement.settingProjects}
            variant="outline-danger"
          >
            <X size={20} /> Cancel
          </Button>
          <Button className={layoutStyle.layout}>
            <Plus size={20} /> Create
          </Button>
        </div>
      </div>
      <div className="m-2 p-2 border rounded">
        <Form>
          <Row>
            <Col>
              <NxFormControl
                className={layoutStyle.container}
                label="Project Name"
                placeholder="Placeholder"
                type="text" />
            </Col>
          </Row>

          <Row>
            <Col>
              <NxFormControl
                className={layoutStyle.container}
                label="Project Description"
                placeholder="Placeholder"
                type="text" />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

AddProjects.displayName = 'AddProjects';
export { AddProjects };
