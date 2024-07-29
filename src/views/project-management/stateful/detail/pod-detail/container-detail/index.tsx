import { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { ChevronRight } from '@nxweb/icons/bootstrap';

import { CustomDataTable, NxFormControl } from '@components/custom';
import { StoreCommand, useStore } from '@models/store';

import { columnsAnnotation, columnsLabel, columnsVolume } from './columns';

const ContainerDetailMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.deployment?.detail
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.deployment.GetDetailData());
  }, [dispatch]);

  const containersDetail =
    store?.detail.podsTable[0].detail.containersTable[0].detail;

  return (
    <div className="p-2 mx-2 element-wrapper">
      <h5 className="fw-bold text-black mb-2">Container Detail</h5>
      <Row>
        <Col>
          <Row className="p-1">
            <Col>
              <Row className="mb-1">
                <Col className="d-flex justify-content-end pe-0">
                  <Button>Back</Button>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col className="border rounded-top d-flex justify-content-between p-1 align-items-center">
                  <div className="fs-4 fw-bold text-primary-header">
                    Container Metrics
                  </div>
                  <Button
                    className="fs-4 fw-bold d-flex align-items-center gap-50"
                    variant="flat-primary"
                  >
                    View Live Metrics
                    <ChevronRight size={16} />
                  </Button>
                </Col>
              </Row>
              <Row>
                {/*  */}
                <Col className="border rounded-bottom p-1 me-50">
                  <Row className="mx-25 mb-1 bg-light-secondary">
                    <Col className="p-1 fs-6 fw-bold text-primary-header">
                      Containers: {store?.detail?.podsTable[0].name}
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col>
                      <NxFormControl
                        label="Namespace"
                        readOnly={true}
                        value={containersDetail?.namespace} />
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col>
                      <NxFormControl
                        label="Image"
                        readOnly={true}
                        value={containersDetail?.image} />
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col>
                      <NxFormControl
                        label="Pod"
                        readOnly={true}
                        value={containersDetail?.workloadType} />
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col>
                      <NxFormControl
                        label="initContainer"
                        readOnly={true}
                        value={containersDetail?.created} />
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col>
                      <NxFormControl
                        label="Restarts"
                        readOnly={true}
                        value={containersDetail?.restarts} />
                    </Col>
                  </Row>
                </Col>
                {/*  */}
                <Col className="border rounded-bottom p-1 ms-50">
                  <Row className="mx-25 mb-1 bg-light-secondary">
                    <Col className="p-1 fs-6 fw-bold text-primary-header">Ports</Col>
                  </Row>
                  <Row className="mb-1">
                    <Col>
                      <NxFormControl
                        label="Publish the container port"
                        readOnly={true}
                        value={containersDetail?.requireAll} />
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col>
                      <NxFormControl
                        label="Protocol"
                        readOnly={true}
                        value={containersDetail?.requireAny} />
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col>
                      <NxFormControl
                        label="As a"
                        readOnly={true}
                        value={containersDetail?.preferAny} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mx-1">
            <Col>
              <Row className="my-2">
                  <Col>
                    <Row className="border rounded-top p-1 bg-light-secondary text-primary-header fw-bold">
                      Volumes
                    </Row>
                    <Row className="my-1">
                      <div className="p-0">
                        <CustomDataTable
                          columns={columnsVolume}
                          data={containersDetail?.volumesTable || []}
                          pagination={false} />
                      </div>
                    </Row>
                  </Col>
              </Row>
              <Row className="my-2">
                <Col>
                  <Row className="border rounded-top p-1 bg-light-secondary text-primary-header fw-bold">
                    Labels
                  </Row>
                  <Row className="my-1">
                    <div className="p-0">
                      <CustomDataTable
                        columns={columnsLabel}
                        data={containersDetail?.labelsTable || []}
                        pagination={false} />
                    </div>
                  </Row>
                </Col>
              </Row>
              <Row className="my-2">
                <Col>
                  <Row className="border rounded-top p-1 bg-light-secondary text-primary-header fw-bold">
                    Annotations
                  </Row>
                  <Row className="my-1">
                    <div className="p-0">
                      <CustomDataTable
                        columns={columnsAnnotation}
                        data={containersDetail?.annotationsTable || []}
                        pagination={false} />
                    </div>
                  </Row>
                </Col>
              </Row>
              <Row className="my-2">
                <Col>
                  <Row className="border rounded-top p-1 bg-light-secondary text-primary-header fw-bold">
                    Environment Variables
                  </Row>
                  <Row className="my-1">
                    <div className="p-0">
                      <CustomDataTable
                        columns={columnsAnnotation}
                        data={containersDetail?.environmentTable || []}
                        pagination={false} />
                    </div>
                  </Row>
                </Col>
              </Row>
              <Row className="border rounded my-2">
                <Col>
                  <Row className="border p-1 bg-light-secondary text-primary-header fw-bold">
                    Security and Host Config
                  </Row>
                  <Row className="my-1">
                    <Col>
                      <NxFormControl
                        label="Pull Image"
                        readOnly={true}
                        value="Placeholder" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

ContainerDetailMain.displayName = 'ContainerDetailMain';
export { ContainerDetailMain };
