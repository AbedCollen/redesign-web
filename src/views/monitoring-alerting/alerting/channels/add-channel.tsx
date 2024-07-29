/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import { Check, X } from '@nxweb/icons/feather';
import { Notifications } from '@nxweb/icons/ionicons';

import { allRoutes } from '@config/constants';

import Email from './components/email';
import Slack from './components/slack';
import Webhook from './components/webhook';
import { ALERTING_CHANNEL_TYPE } from './constant';

const AddChannelMain = () => {
  const [selectedType, setSelectedType] = useState('Slack');
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="element-wrapper">
      <Row className="shadow-sm p-2">
        <Col xs={5}>
          <h4 className="fw-bold m-0 text-black">New Notification Channels</h4>
        </Col>
        <Col className="text-end">
          <div className="d-flex align-items-center justify-content-end gap-75">
            <Button
              as="a"
              className="d-flex align-items-center justify-content-center gap-50 text-danger"
              href={allRoutes.monitoringAlerting.alertingChannels}
              variant="flat-danger"
            >
              <X size={20} /> Cancel
            </Button>
            <Button className="d-flex align-items-center justify-content-center gap-50">
              <Notifications size={20} /> Test Notification
            </Button>
            <Button className="d-flex align-items-center justify-content-center gap-50">
              <Check size={20} /> Save Rule
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="border rounded m-2">
        <Form className="p-1">
          <Row className="mb-1">
            <Col>
              <Form.Group controlId="formName">
                <Form.Label className="fs-4 text-dark">Name</Form.Label>
                <Form.Control placeholder="Placeholder" type="text" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-1">
            <Col>
              <Form.Group controlId="formStorageClass">
                <Form.Label className="fs-4 text-dark">Type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleSelectChange}
                >
                  {ALERTING_CHANNEL_TYPE.map((value) => <option value={value.label}>{value.label}</option>)}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          {selectedType === 'Slack' && <Slack />}
          {selectedType === 'Webhook' && <Webhook />}
          {selectedType === 'Email' && <Email />}
        </Form>
      </Row>
    </div>
  );
};

AddChannelMain.displayName = 'AddChannelMain';
export { AddChannelMain };
