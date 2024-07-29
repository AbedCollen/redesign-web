import { useEffect } from 'react';
import { Accordion, Button, Col, Row } from 'react-bootstrap';

import { Check, X } from '@nxweb/icons/bootstrap';

import { CustomDataTable, NxFormControl } from '@components/custom';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const EditStateful = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.deployment?.detail
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.deployment.GetDetailData());
  }, [dispatch]);

  return (
    <div className="element-wrapper">
      <div className="p-2 border shadow-sm d-flex justify-content-between">
          <h5 className="fw-bold m-0 text-black">Edit StatefulSet</h5>
          <div className="d-flex align-items-center justify-content-end gap-75 pe-1">
            <Button
              as="a"
              className="d-flex align-items-center gap-50"
              href={allRoutes.projectManagement.stateful}
              variant="outline-danger"
            >
              <X size={20} />
              Cancel
            </Button>
            <Button
              as="a"
              className="d-flex align-items-center gap-50"
              href={allRoutes.projectManagement.stateful}
            >
              <Check size={20} />
              Save
            </Button>
          </div>
      </div>
      <div className="border rounded m-2 p-2">
        <Accordion className="mb-1" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary-header rounded-top">
              <span className="text-primary-header">
                Deployment: {store?.name}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.namespace}
                    disabled={true}
                    label="Namespace" />
                </Col>
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.image}
                    label="Image" />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.workloadType}
                    label="Workload Type" />
                </Col>
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.created}
                    label="Created" />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <NxFormControl
                    defaultValue={store?.detail.restart}
                    label="Restart" />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="mb-1" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary-header rounded-top">
              <span className="text-primary-header">Scheduling</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.requireAll}
                    label="Require All" />
                </Col>
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.requireAny}
                    label="Require Any" />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.preferAny}
                    label="Prefer Any" />
                </Col>
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.scheduler}
                    label="Scheduler" />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <NxFormControl
                    defaultValue={store?.detail.priority}
                    label="Priority" />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="mb-1" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary-header rounded-top">
              <span className="text-primary-header">Ports</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.portName}
                    label="Port Name" />
                </Col>
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.publish}
                    label="Publish the container port" />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.protocol}
                    label="Protocol" />
                </Col>
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.asA}
                    label="As a" />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <NxFormControl
                    defaultValue={store?.detail.onListening}
                    label="On Listening Port" />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="mb-1" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary-header rounded-top">
              <span className="text-primary-header">
                Scaling/Upgrade Policy
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.maxSurge}
                    label="Max Surge" />
                </Col>
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.maxUnavailable}
                    label="Max Unavailable" />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.minimumReady}
                    label="Minimum Ready Time" />
                </Col>
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.progressDeadline}
                    label="Progress Deadline" />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion className="mb-1" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary-header rounded-top">
              <span className="text-primary-header">Pods</span>
            </Accordion.Header>
            <Accordion.Body>
              <CustomDataTable
                columns={columns}
                data={store?.detail.podsTable || []}
                pagination={false} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion className="mb-1" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary-header rounded-top">
              <span className="text-primary-header">Command</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.maxSurge}
                    label="Max Surge" />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="mb-1" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary-header rounded-top">
              <span className="text-primary-header">Networking</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.maxSurge}
                    label="Max Surge" />
                </Col>
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.maxUnavailable}
                    label="Max Unavailable" />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="mb-1" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary-header rounded-top">
              <span className="text-primary-header">
                Security & Host Config
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    defaultValue={store?.detail.pullImage}
                    label="Pull Image" />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

EditStateful.displayName = 'EditStateful';
export { EditStateful };
