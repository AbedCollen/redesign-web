/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import {
  CheckCircleFill,
  ExclamationTriangleFill
} from '@nxweb/icons/bootstrap';

import { NxFormControl } from '@components/custom';
import { StoreCommand, useStore } from '@models/store';

const statusIcon = 'text-body-3 fw-medium';
const statusStyle = {
  style: 'round d-inline-flex align-items-center mt-50 gap-50 p-25',
  warning: 'text-warning border-warning bg-light',
  success: 'text-success border-success bg-light-success'
};

const ApplicationsSyncStatus = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.appManagement?.application
  );

  useEffect(() => {
    dispatch(StoreCommand.app.appManagement.application.GetDetailData());
  }, [dispatch]);

  return (
    <div>
      <div className="p-1 border rounded mb-1">
        <Row className="mb-2 align-items-center">
          <Col className="border-end" md={6} xl={3}>
            <div>
              <p className="fw-bold text-dark m-0">CURRENT SYNC STATUS</p>
              <span
                className={` ${statusStyle.style} ${
                  store?.detail.sync
                    ? `${statusStyle.success}`
                    : `${statusStyle.warning}`
                }`}
              >
                {store?.detail.sync
                  ? <CheckCircleFill size={12} />

                  : <ExclamationTriangleFill size={12} />}
                {store?.detail.sync
                  ? <span className={`text-success ${statusIcon}`}>Synced</span>

                  : (
                  <span className={`text-warning ${statusIcon}`}>
                    Out of Synced
                  </span>
                  )}
              </span>
            </div>
          </Col>

          <Col>From: (53e28ff)</Col>
        </Row>

        <Row className="align-items-center">
          <Col className="border-end" md={6} xl={3}>
            <div>
              <p className="fw-bold text-dark m-0">LAST SYNC STATUS</p>
              <span
                className={` ${statusStyle.style} ${
                  store?.detail.sync
                    ? `${statusStyle.warning}`
                    : `${statusStyle.success}`
                }`}
              >
                {store?.detail.sync
                  ? <ExclamationTriangleFill size={12} />

                  : <CheckCircleFill size={12} />}
                {store?.detail.sync
                  ? (
                  <span className={`text-warning ${statusIcon}`}>
                    Out of Synced
                  </span>
                  )
                  : <span className={`text-success ${statusIcon}`}>Synced</span>}
              </span>
            </div>
          </Col>

          <Col>From: (53e28ff)</Col>
        </Row>
      </div>

      <Row className="mb-1">
        <Col>
          <NxFormControl
            defaultValue="Sync"
            disabled={true}
            label="Operation"
            placeholder="Placeholder" />
        </Col>
        <Col>
          <NxFormControl
            defaultValue="Succeeded"
            disabled={true}
            label="Phase"
            placeholder="Placeholder" />
        </Col>
      </Row>

      <Row className="mb-1">
        <Col>
          <NxFormControl
            defaultValue="Successfully synced (all tasks run)"
            disabled={true}
            label="Message"
            placeholder="Placeholder" />
        </Col>
        <Col>
          <NxFormControl
            defaultValue="6 days ago (12/02/2022 14:34:02) few seconds"
            disabled={true}
            label="Started at"
            placeholder="Placeholder" />
        </Col>
      </Row>

      <Row className="mb-1">
        <Col xl={6}>
          <NxFormControl
            defaultValue="a few seconds"
            disabled={true}
            label="Duration"
            placeholder="Placeholder" />
        </Col>
      </Row>
    </div>
  );
};

ApplicationsSyncStatus.displayName = 'ApplicationsSyncStatus';

export default ApplicationsSyncStatus;
