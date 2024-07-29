/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

import { Check, HelpCircle, X } from '@nxweb/icons/feather';
import { Notifications } from '@nxweb/icons/ionicons';

import { allRoutes } from '@config/constants';

import { AlertModal } from './components/alert-modal';
import RulesChart from './components/rules-chart';
import StepOne from './components/step-1';
import StepTwo from './components/step-2';
import StepThree from './components/step-3';
import { RULES_CHART_DATA } from '../constant';

const AlertingAddMain = () => {
  const [showModal, setShowModal] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setTooltipVisible(false);
  };

  return (
    <div className="nx-form-control element-wrapper">
      <Row className="d-flex justify-content-between p-2 shadow-sm mb-2">
        <Col xs={5}>
          <h4 className="m-0 fw-bold text-black">Create Rules</h4>
        </Col>
        <Col className="d-flex align-items-center justify-content-end gap-75">
          <Button
            as="a"
            className="d-flex align-items-center justify-content-center gap-50 text-danger"
            href={allRoutes.monitoringAlerting.alertingRulesChooseType}
            variant="flat-danger"
          >
            <X size={20} /> Cancel
          </Button>
          <Button
            className="d-flex align-items-center justify-content-center gap-50"
            variant="outline-primary"
          >
            <Notifications size={20} /> Test Notification
          </Button>
          <Button className="d-flex align-items-center justify-content-center gap-50">
            <Check size={20} /> Save Rule
          </Button>
        </Col>
      </Row>

      <div className="rounded shadow-sm d-flex flex-column gap-2 p-2 m-2">
        <div className="d-flex gap-1 align-items-center">
          <div>Plotting Using</div>
          <div className="border-primary rounded-5 px-1 bg-light-primary">
            <p className="text-primary m-0">Using Builder</p>
          </div>
          <div>
            <OverlayTrigger
              overlay={
                <Tooltip>
                  More details on how to create alerts
                  <a onClick={toggleModal}>
                    {' '}
                    <u>here</u>{' '}
                  </a>
                </Tooltip>
              }
              placement="top"
              trigger={tooltipVisible ? 'click' : 'hover'}
            >
              <div
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
              >
                <HelpCircle color="white" fill="currentColor" size={30} />
              </div>
            </OverlayTrigger>
          </div>
        </div>
        <div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: '400px', width: '100%' }}
          >
            {RULES_CHART_DATA.length === 0 && <div>No data</div>}
            {RULES_CHART_DATA.length > 0 &&
              <RulesChart data={RULES_CHART_DATA} />}
          </div>
        </div>
        <AlertModal showModal={showModal} toggleModal={toggleModal} />
      </div>

      <div className="rounded shadow-sm d-flex flex-column gap-2 p-2 m-2">
        <StepOne />
      </div>

      <div className="rounded shadow-sm d-flex flex-column gap-2 p-2 m-2">
        <StepTwo />
      </div>
      <div className="rounded shadow-sm d-flex flex-column gap-2 p-2 m-2">
        <StepThree />
      </div>
    </div>
  );
};

AlertingAddMain.displayName = 'AlertingAddMain';
export { AlertingAddMain };
