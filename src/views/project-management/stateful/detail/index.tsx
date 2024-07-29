import { useEffect } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

import { CustomDataTable, NxFormControl } from '@components/custom';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const StatefulDetailMain = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams();

  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.deployment?.detail
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.deployment.GetDetailData());
  }, [dispatch]);

  const navigate = useNavigate();

  const onClick = (id: number) => {
    navigate(`./pod/${id}`);
  };

  return (
    <div className="p-2 mx-2 element-wrapper">
      <h5 className="fw-bold text-black mb-2">Stateful Detail</h5>
      <div className="border rounded p-2">
        <Accordion className="mb-2" defaultActiveKey="0">
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
                    label="Namespace"
                    readOnly={true}
                    value={store?.namespace} />
                </Col>
                <Col>
                  <NxFormControl
                    label="Image"
                    readOnly={true}
                    value={store?.detail?.image} />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    label="Workload Type"
                    readOnly={true}
                    value={store?.detail?.workloadType} />
                </Col>
                <Col>
                  <NxFormControl
                    label="Created"
                    readOnly={true}
                    value={store?.detail?.created} />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <NxFormControl
                    label="Restart"
                    readOnly={true}
                    value={store?.detail?.restart} />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="mb-2" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary-header rounded-top">
              <span className="text-primary-header">Scheduling</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    label="Require All"
                    readOnly={true}
                    value={store?.detail?.requireAll} />
                </Col>
                <Col>
                  <NxFormControl
                    label="Require Any"
                    readOnly={true}
                    value={store?.detail?.requireAny} />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    label="Prefer Any"
                    readOnly={true}
                    value={store?.detail?.preferAny} />
                </Col>
                <Col>
                  <NxFormControl
                    label="Scheduler"
                    readOnly={true}
                    value={store?.detail?.scheduler} />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <NxFormControl
                    label="Priority"
                    readOnly={true}
                    value={store?.detail?.priority} />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="mb-2" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary-header rounded-top">
              <span className="text-primary-header">Ports</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    label="Port Name"
                    readOnly={true}
                    value={store?.detail?.portName} />
                </Col>
                <Col>
                  <NxFormControl
                    label="Publish the container port"
                    readOnly={true}
                    value={store?.detail?.publish} />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    label="Protocol"
                    readOnly={true}
                    value={store?.detail?.protocol} />
                </Col>
                <Col>
                  <NxFormControl
                    label="As a"
                    readOnly={true}
                    value={store?.detail?.asA} />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <NxFormControl
                    label="On Listening Port"
                    readOnly={true}
                    value={store?.detail?.onListening} />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="mb-2" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary-header rounded-top">
              <span className="text-primary-header">Scaling/Upgrade Policy</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    label="Max Surge"
                    readOnly={true}
                    value={store?.detail?.maxSurge} />
                </Col>
                <Col>
                  <NxFormControl
                    label="Max Unavailable"
                    readOnly={true}
                    value={store?.detail?.maxUnavailable} />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    label="Minimum Ready Time"
                    readOnly={true}
                    value={store?.detail?.minimumReady} />
                </Col>
                <Col>
                  <NxFormControl
                    label="Progress Deadline"
                    readOnly={true}
                    value={store?.detail?.progressDeadline} />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion className="mb-2" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary-header rounded-top">
              <span className="text-primary-header">Pods</span>
            </Accordion.Header>
            <Accordion.Body>
            <CustomDataTable
              columns={columns(onClick)}
              data={store?.detail.podsTable || []}
              pagination={false} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion className="mb-2" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary-header rounded-top">
              <span className="text-primary-header">Command</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    label="Auto Restart"
                    readOnly={true}
                    value={store?.detail?.autoRestart} />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="mb-2" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary-header rounded-top">
              <span className="text-primary-header">Networking</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    label="DNS Policy"
                    readOnly={true}
                    value={store?.detail?.dnsPolicy} />
                </Col>
                <Col>
                  <NxFormControl
                    label="Use Host's Network Namespace"
                    readOnly={true}
                    value={store?.detail?.useHost} />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="mb-2" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary-header rounded-top">
              <span className="text-primary-header">Security & Host Config</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    label="Pull Image"
                    readOnly={true}
                    value={store?.detail?.pullImage} />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

StatefulDetailMain.displayName = 'StatefulDetailMain';
export { StatefulDetailMain };
