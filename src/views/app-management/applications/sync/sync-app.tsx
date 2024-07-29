import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import { CheckCircleFill } from '@nxweb/icons/bootstrap';
import { RefreshCcw, X } from '@nxweb/icons/feather';

import {
  ConfirmModal,
  NxFormCheckGroup,
  NxFormControl,
  NxFormSelect
} from '@components/custom';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { headerStyle, lowerContainerBorderStyle } from './constants';
import {
  SELECT_OPTIONS,
  SYNC_ALL_PLACEHOLDER_OPTIONS,
  SYNC_ALL_PRUNE_PROPAGATION_POLICY_OPTIONS,
  SYNC_APP_OPTIONS
} from '../constants';

const SyncAppMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.appManagement?.application
  );

  useEffect(() => {
    dispatch(StoreCommand.app.appManagement.application.GetDetailData());
  }, [dispatch]);

  const [syncConfirm, setSyncConfirm] = useState(false);
  const toggleSyncModal = () => setSyncConfirm(!syncConfirm);

  return (
    <div className="element-wrapper">
      <div className="shadow-sm d-flex justify-content-between p-2">
        <h5 className="fw-bold m-0 text-black">Sync Application</h5>
        <div className="d-flex gap-1 align-items-center">
          <Button
            as="a"
            className="d-flex gap-50 align-items-center"
            href={allRoutes.appManagement.applications}
            variant="outline-danger"
          >
            <X size={20} /> Cancel
          </Button>
          <Button
            className="d-flex gap-50 align-items-center"
            onClick={toggleSyncModal}
          >
            <RefreshCcw size={16} /> Sync
          </Button>
          <ConfirmModal
            content="Are you sure want to Sync Application?"
            show={syncConfirm}
            title="Sync Application"
            toggleModal={toggleSyncModal}
            variant="primary" />
        </div>
      </div>

      <div className="border rounded p-2 m-2">
        <Row>
          <Col>
            <div className={headerStyle}>
              Synchronizing application manifests from
            </div>

            <div className={`${lowerContainerBorderStyle} text-dark`}>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    className={{ input: 'text-info' }}
                    disabled={true}
                    label=""
                    value={store?.detail.repository} />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <NxFormControl
                    label="Revision"
                    value={store?.detail.targetRevisionPath} />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <NxFormCheckGroup
                    items={SYNC_ALL_PLACEHOLDER_OPTIONS}
                    label="" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="mt-1">
          <Col>
            <div className={headerStyle}>Sync Options</div>
            <div className={lowerContainerBorderStyle}>
              <Row>
                <Col>
                  <NxFormCheckGroup items={SYNC_APP_OPTIONS} label="" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="mt-1">
          <Col>
            <div className={headerStyle}>Prune Propagration Policy</div>
            <div className={lowerContainerBorderStyle}>
              <Row className="mb-1">
                <Col>
                  <NxFormSelect
                    label=""
                    options={SELECT_OPTIONS}
                    placeholder="Placeholder" />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <NxFormCheckGroup
                    items={SYNC_ALL_PRUNE_PROPAGATION_POLICY_OPTIONS}
                    label="" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="mt-1">
          <Col>
            <div className={`d-flex justify-content-between ${headerStyle}`}>
              <div>Synchronize Resources</div>
              <div className="fs-small text-info">all / out of sync / none</div>
            </div>
            <div className={lowerContainerBorderStyle}>
              <Form.Group className="d-flex my-75 align-items-center gap-50">
                <Form.Check
                  defaultChecked={true}
                  id="service"
                  label="/Service/Default/Guestbook-UI"
                  type="checkbox" />
                <CheckCircleFill color="green" size={14} />
              </Form.Group>
              <Form.Group className="d-flex my-75 align-items-center gap-50">
                <Form.Check
                  defaultChecked={true}
                  id="deployment"
                  label="Apps/Deployment/Default/Guestbook-UI"
                  type="checkbox" />
                <CheckCircleFill color="green" size={14} />
              </Form.Group>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

SyncAppMain.displayName = 'SyncAppMain';

export { SyncAppMain };
