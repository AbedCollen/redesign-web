import { useEffect } from 'react';
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Edit2 } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const HpaDetailMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.hpa
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.hpa.GetDetailData());
  }, [dispatch]);

  const navigate = useNavigate();
  const editHpa = (id: number) => {
    navigate(`/project-management/hpa/edit-hpa/${id}`);
  };

  return (
    <div className="element-wrapper">
      <Row className="p-2 shadow-sm">
        <Col>
          <h5 className="fw-bold text-black">HPA Detail</h5>
        </Col>
        <Col className="text-end">
          <Button onClick={() => editHpa(store?.detail.id as number)}>
            <Edit2 className="me-75" fill="currentColor" size={16} /> Update
            YAML
          </Button>
        </Col>
      </Row>
      <div className="p-2 m-2 border rounded">
        <Row>
          <Accordion className="mt-1" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="border-primary rounded-top">
                Horizontal Pod Autoscaler: ({store?.detail.name})
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    <Form.Group className="mb-1" controlId="formName">
                      <Form.Label className="fw-bold fs-5 text-dark">
                        Namespace
                      </Form.Label>
                      <Form.Control
                        defaultValue={store?.detail.namespace}
                        disabled={true}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-1" controlId="formName">
                      <Form.Label className="fw-bold fs-5 text-dark">
                        Workload
                      </Form.Label>
                      <Form.Control
                        defaultValue={store?.detail.targetWorkload}
                        disabled={true}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-1" controlId="formName">
                      <Form.Label className="fw-bold fs-5 text-dark">
                        Min Replicas
                      </Form.Label>
                      <Form.Control
                        defaultValue={store?.detail.minReplicas}
                        disabled={true}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-1" controlId="formName">
                      <Form.Label className="fw-bold fs-5 text-dark">
                        Max Replicas
                      </Form.Label>
                      <Form.Control
                        defaultValue={store?.detail.maxReplicas}
                        disabled={true}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-1" controlId="formName">
                      <Form.Label className="fw-bold fs-5 text-dark">
                        Current Replicas
                      </Form.Label>
                      <Form.Control
                        defaultValue={store?.detail.currentReplicas}
                        disabled={true}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-1" controlId="formName">
                      <Form.Label className="fw-bold fs-5 text-dark">
                        Desired Replicas
                      </Form.Label>
                      <Form.Control
                        defaultValue={store?.detail.desiredReplicas}
                        disabled={true}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Form.Group className="mb-1" controlId="formName">
                      <Form.Label className="fw-bold fs-5 text-dark">
                        Created
                      </Form.Label>
                      <Form.Control
                        defaultValue={store?.detail.created}
                        disabled={true}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
        <Row className="mt-1">
          <Accordion className="mt-1" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="border-primary rounded-top">
                Metrics
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    <Form.Group className="mb-1" controlId="formName">
                      <Form.Label className="fw-bold fs-5 text-dark">
                        Current Status
                      </Form.Label>
                      <Form.Control
                        defaultValue={store?.detail.currentStatus}
                        disabled={true}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-1" controlId="formName">
                      <Form.Label className="fw-bold fs-5 text-dark">
                        Metric Type
                      </Form.Label>
                      <Form.Control
                        defaultValue={store?.detail.metricType}
                        disabled={true}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-1" controlId="formName">
                      <Form.Label className="fw-bold fs-5 text-dark">
                        Metric Name
                      </Form.Label>
                      <Form.Control
                        defaultValue={store?.detail.metricName}
                        disabled={true}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-1" controlId="formName">
                      <Form.Label className="fw-bold fs-5 text-dark">
                        Target Type
                      </Form.Label>
                      <Form.Control
                        defaultValue={store?.detail.targetType}
                        disabled={true}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Form.Group className="mb-1" controlId="formName">
                      <Form.Label className="fw-bold fs-5 text-dark">
                        Quantity
                      </Form.Label>
                      <Form.Control
                        defaultValue={store?.detail.quantity}
                        disabled={true}
                        placeholder="Placeholder"
                        type="text" />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
        <Row className="mt-1">
          <Col xs={5}>
            <p className="fw-bold fs-5 text-dark">Status</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomDataTable
              columns={columns}
              data={store?.detail.statusTable || []}
              pagination={false} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

HpaDetailMain.displayName = 'HpaDetailMain';
export { HpaDetailMain };
