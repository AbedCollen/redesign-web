import { Button, Col, Form, Row, Tab, Tabs } from 'react-bootstrap';

import { Check, Repeat, Upload, X } from '@nxweb/icons/feather';

import { MonacoEditor } from '@components/custom/monaco-editor';
import { allRoutes } from '@config/constants';

import { Command } from './components/command';
import { EnvironmentVar } from './components/environment-variables';
import { HealthCheck } from './components/health-check';
import { Networking } from './components/networking';
import { NodeScheduling } from './components/node-scheduling';
import { PortMapping } from './components/port-mapping';
import { ScalingUpgradingPolicy } from './components/scaling-upgrading-policy';
import { SecurityAndHostConfig } from './components/security-and-host-config';
import { Volume } from './components/volume';

const DeploymentAddMain = () => {
  return (
    <div>
      <Row className="p-2 mb-2 d-flex shadow-sm bg-white rounded">
        <Col>
        <h5 className="fw-bold text-black">Add Deployment</h5>
        </Col>
        <Col className="text-end">
          <div className="d-flex align-items-center justify-content-end gap-75">
            <Button
              className="d-flex align-items-center gap-50"
              href={allRoutes.projectManagement.deployment}
              variant="outline-danger"
            >
              <X size={20} /> Cancel
            </Button>

            <Button className="d-flex align-items-center gap-50" href="#">
              <Check className="me-75" size={16} />
              Save
            </Button>
          </div>
        </Col>
      </Row>
      <div className="bg-white rounded shadow-sm m-2 p-2">
        <Tabs
          className=" border-bottom"
          defaultActiveKey="usingForm"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="usingForm" title="Using Form">
            <form>
              <div className="bg-white rounded shadow-sm mb-2 p-2  ">
                <div className="nx-form-control">
                  <div className="d-flex gap-2 mb-1">
                    <Col>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        className="border rounded-2 ps-1"
                        placeholder="Placeholder" />
                    </Col>
                    <Col>
                      <Form.Label>Namespaces</Form.Label>
                      <Form.Select
                        className="border rounded-2"
                        id="cars"
                        name="cars"
                        placeholder="Placeholder"
                      >
                        <option hidden={true} value="placeholder">
                          placeholder
                        </option>
                        <option value="item1">Item 1</option>
                        <option value="item2">Item 2</option>
                        <option value="item3">Item 3</option>
                        <option value="item4">Item 4</option>
                      </Form.Select>
                    </Col>
                  </div>
                  <div className="mb-1">
                    <Col>
                      <Form.Label>Docker Image</Form.Label>
                      <Form.Control
                        className="border rounded-2"
                        placeholder="ubuntu:xenial" />
                    </Col>
                  </div>
                  <div className="mb-1">
                    <Form.Label>Workload Type</Form.Label>
                    <div className="fs-3 d-flex row gap-50">
                      <div className="d-flex gap-50">
                        <input
                          id="scale"
                          name="workload"
                          type="radio"
                          value="scale" />
                        <label className="fs-5" htmlFor="scale">
                          Scalable deployment{' '}
                          <input
                            className="w-25 w-25 border-1 rounded-2"
                            id="scaleVal"
                            type="text" />{' '}
                          of pods
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <PortMapping />
              <EnvironmentVar />
              <NodeScheduling />
              <HealthCheck />
              <Volume />
              <ScalingUpgradingPolicy />
              <Command />
              <Networking />
              <SecurityAndHostConfig />
            </form>
          </Tab>

          <Tab eventKey="usingYaml" title="Using Yaml">
            <div>
              <div className="mb-2">
                <MonacoEditor language="yaml" />
              </div>
              <div className="mb-2">
                <Col>
                  <div className="justify-content-end col d-flex gap-2">
                    <Button className="d-flex gap-50 align-items-center" variant="flat-primary">
                      <Repeat size={20} /> Reset
                    </Button>
                    <Button className="d-flex gap-50 align-items-center">
                      <Upload size={16} />
                      Import
                    </Button>
                  </div>
                </Col>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

DeploymentAddMain.displayName = 'DeploymentAddMain';
export { DeploymentAddMain };
