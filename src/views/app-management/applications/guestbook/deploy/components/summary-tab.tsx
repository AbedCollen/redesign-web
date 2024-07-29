/* eslint-disable react/jsx-key */
import { useState } from 'react';
import type { MouseEvent } from 'react';
import { Accordion, Button, Col, Row } from 'react-bootstrap';

import { DiffEditor } from '@monaco-editor/react';

import { Check, CheckCircleFill, HeartFill } from '@nxweb/icons/bootstrap';
import { Edit2 } from '@nxweb/icons/feather';

import { MonacoEditor, NxFormControl } from '@components/custom';

const statusHealth = 'border-success px-1 py-50 rounded bg-light-success small';

const SummaryTab = () => {
  const code1 =
    'apiVersion: v1 \n \t kind: PersistentVolumeClaim \n \t \t metadata: \n \t \t \t annotations \n \t control-plane.alpha.kubernetes.io/leader: >- \n \t {"holderIdentity":"b3fb4d79-1215-11ed-93c3- \n e2cae57e938","leaseDurationSeconds":15,"acquire Time":"2022-1 \n 0-20T04:37:32Z","renewTime":"2022-10-20T04:37:34Z", "leaderT \n ransitions":0} \n';
  const code2 =
    'apiVersion: v1 \n \t kind: PersistentVolumeClaim \n \t \t metadata: \n \t \t \t annotations \n \n \n \t control-plane.alpha.kubernetes.io/leader: >- \n \t {"holderIdentity":"b3fb4d79-1215-11ed-93c3- \n e2cae57e938","leaseDurationSeconds":15,"acquire Time":"2022-1 \n 0-20T04:37:32Z","renewTime":"2022-10-20T04:37:34Z", "leaderT \n ransitions":0} \n';
  const [edit, setEdit] = useState(true);

  const toggleButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setEdit(!edit);
  };

  return (
    <>
      <div className="mb-3">
        <Row className="mb-1">
          <Col>
            <NxFormControl label="Kind" placeholder="Placeholder" />
          </Col>
          <Col>
            <NxFormControl label="Name" placeholder="Placeholder" />
          </Col>
        </Row>
        <Row className="mb-1">
          <Col>
            <NxFormControl label="Namespace" placeholder="Placeholder" />
          </Col>
          <Col>
            <NxFormControl label="Created At" placeholder="Placeholder" />
          </Col>
        </Row>
        <Row className="mb-1">
          <Col>
            <NxFormControl label="Type" placeholder="Placeholder" />
          </Col>
          <Col>
            <NxFormControl label="Hostnames" placeholder="Placeholder" />
          </Col>
        </Row>
        <Row className="mb-1">
          <Col className="nx-form-control">
            <div className="form-label">Status</div>
            <div className={statusHealth}>
              <CheckCircleFill size={14} /> Sync
            </div>
          </Col>
          <Col className="nx-form-control">
            <div className="form-label">Health</div>
            <div className={statusHealth}>
              <HeartFill size={14} /> Healthy
            </div>
          </Col>
        </Row>
      </div>

      <div className="mb-3">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary rounded-top">
              <Col>Live Manifest</Col>
              <Col className="me-1">
                <div className="d-flex justify-content-end">
                  {edit
                    ? (
                    <Button
                      className="d-flex gap-50 align-items-center"
                      variant="outline-primary"
                      onClick={toggleButton}
                    >
                      <Edit2 size={16} />
                      Edit
                    </Button>
                    )
                    : (
                    <div className="d-flex justify-content-end">
                      <div className="d-flex gap-75">
                        <Button
                          className="d-flex gap-50 align-items-center"
                          variant="flat-primary"
                          onClick={toggleButton}
                        >
                          Cancel
                        </Button>
                        <Button
                          className="d-flex gap-50 align-items-center"
                          variant="outline-primary"
                        >
                          <Check size={16} />
                          Save
                        </Button>
                      </div>
                    </div>
                    )}
                </div>
              </Col>
            </Accordion.Header>
            <Accordion.Body>
              <MonacoEditor language="Yaml" />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="mb-3">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border border-primary rounded-top">
              Diff
            </Accordion.Header>
            <Accordion.Body>
              <DiffEditor height={500} modified={code2} original={code1} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="mb-3">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="border-primary rounded-top">
              Desired Manifest
            </Accordion.Header>
            <Accordion.Body>
              <MonacoEditor language="Yaml" />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

SummaryTab.displayName = 'SummaryTab';

export { SummaryTab };
