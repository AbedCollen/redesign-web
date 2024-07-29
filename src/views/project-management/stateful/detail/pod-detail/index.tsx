import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

import { ChevronRight } from '@nxweb/icons/bootstrap';

import { CustomDataTable, NxFormControl } from '@components/custom';
import { StoreCommand, useStore } from '@models/store';

import { TerminalModal } from '@src/views/project-management/components/terminal-modal';

import {
  columnsAnnotation,
  columnsContainer,
  columnsEvents,
  columnsLabel,
  columnsStatus
} from './columns';

const PodDetailMain = () => {
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
    navigate(`./container/${id}`);
  };

  const podsDetail = store?.detail.podsTable[0].detail;

  const [showModal, setShowModal] = useState<{
    open: boolean
    type: 'Log Detail' | 'Shell'
  }>({ open: false, type: 'Log Detail' });

  const toggleShowModal = (type?: 'Log Detail' | 'Shell') => setShowModal({ open: !showModal.open, type: type || 'Log Detail' });

  return (
    <div className="p-2 mx-2 element-wrapper">
      <h5 className="fw-bold text-black mb-2">Pod Detail</h5>
      <Row>
        <Col className="border rounded-top d-flex justify-content-between p-1 align-items-center">
          <div className="fs-4 fw-bold text-primary-header">Pod Metrics</div>
          <Button
            className="fs-4 fw-bold d-flex align-items-center gap-50"
            variant="flat-primary"
          >
            View Live Metrics
            <ChevronRight size={16} />
          </Button>
        </Col>
      </Row>
      <Row className="bg-light-secondary py-1">
        <Col className="fs-6 fw-bold text-primary-header">
          Pod: nextcluster-{store?.detail.podsTable[0].name}
        </Col>
      </Row>
      <Row>
        <Col className="border rounded-bottom p-1 me-50">
          <Row className="mb-1">
            <Col>
              <NxFormControl
                label="Namespace"
                readOnly={true}
                value={podsDetail?.namespace} />
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <NxFormControl
                label="Workload"
                readOnly={true}
                value={podsDetail?.workload} />
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <NxFormControl
                label="Pod IP"
                readOnly={true}
                value={podsDetail?.podIp} />
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <NxFormControl
                label="Node"
                readOnly={true}
                value={podsDetail?.node} />
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <NxFormControl
                label="Created"
                readOnly={true}
                value={podsDetail?.created} />
            </Col>
          </Row>
        </Col>
        <Col className="border rounded-bottom p-1 ms-50">
          <Row className="mb-1">
            <Col>
              <NxFormControl
                label="Require All"
                readOnly={true}
                value={podsDetail?.requireAll} />
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <NxFormControl
                label="Require Any"
                readOnly={true}
                value={podsDetail?.requireAny} />
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <NxFormControl
                label="Prefer Any"
                readOnly={true}
                value={podsDetail?.preferAny} />
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <NxFormControl
                label="Scheduler"
                readOnly={true}
                value={podsDetail?.scheduler} />
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <NxFormControl
                label="Priority"
                readOnly={true}
                value={podsDetail?.priority} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="p-1 mt-2 border rounded">
        <Col>
          <Row className="mb-2">
            <Col className="border rounded">
              <Row className="p-1 mb-1 bg-light-secondary text-primary-header">
                Networking
              </Row>
              <Row className="mb-1">
                <NxFormControl
                  label="DNS Policy"
                  readOnly={true}
                  value={podsDetail?.dnsPolicy} />
              </Row>
              <Row className="mb-1">
                <NxFormControl
                  label="Use Host's Network Namespace"
                  readOnly={true}
                  value={podsDetail?.useHost} />
              </Row>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <Row className="border rounded-top p-1 bg-light-secondary text-primary-header">
                Containers
              </Row>
              <Row className="my-1">
                <div className="p-0">
                  <CustomDataTable
                    columns={columnsContainer(onClick, toggleShowModal)}
                    data={podsDetail?.containersTable || []}
                    pagination={false} />
                </div>
              </Row>
            </Col>
          </Row>
          <TerminalModal open={showModal.open} toggleShowModal={() => toggleShowModal(showModal.type)} type={showModal.type} />
          <Row>
            <Col>
              <Row className="border rounded-top p-1 bg-light-secondary text-primary-header">
                Events
              </Row>
              <Row className="my-1">
                <div className="p-0">
                  <CustomDataTable
                    columns={columnsEvents}
                    data={podsDetail?.eventsTable || []}
                    pagination={false} />
                </div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className="border rounded-top p-1 bg-light-secondary text-primary-header">
                Status
              </Row>
              <Row className="my-1">
                <div className="p-0">
                  <CustomDataTable
                    columns={columnsStatus}
                    data={podsDetail?.statusTable || []}
                    pagination={false} />
                </div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className="border rounded-top p-1 bg-light-secondary text-primary-header">
                Labels
              </Row>
              <Row className="my-1">
                <div className="p-0">
                  <CustomDataTable
                    columns={columnsLabel}
                    data={podsDetail?.labelsTable || []}
                    pagination={false} />
                </div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className="border rounded-top p-1 bg-light-secondary text-primary-header">
                Annotations
              </Row>
              <Row className="my-1">
                <div className="p-0">
                  <CustomDataTable
                    columns={columnsAnnotation}
                    data={podsDetail?.annotationsTable || []}
                    pagination={false} />
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

PodDetailMain.displayName = 'PodDetailMain';
export { PodDetailMain };
