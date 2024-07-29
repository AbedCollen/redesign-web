/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import type { FC } from 'react';
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

import {
  CheckCircleFill,
  ExclamationTriangleFill,
  HeartFill,
  QuestionCircleFill
} from '@nxweb/icons/bootstrap';
import { Eye, MoreVertical, RefreshCcw, Trash2 } from '@nxweb/icons/feather';
import { Reload } from '@nxweb/icons/ionicons';

import { IconDeploy, IconSVC } from '@components/icon';

interface CustomNodesProps {
  readonly health: boolean
  readonly sync: boolean
  readonly title: string
  readonly type: string
}

const CustomNodes: FC<CustomNodesProps> = ({ health, sync, title, type }) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const SVCApp = () => {
    navigate(`./guestbook/SVC`);
  };

  const deployApp = () => {
    navigate(`./guestbook/deploy`);
  };

  const handleSyncApp = () => {
    navigate(`/app-management/applications/sync-app/${id}`);
  };

  return (
    <div>
      <Row>
        <Col className="d-flex align-items-center justify-content-end" sm={3}>
          <div>
            <div className="bg-primary-header p-2 rounded-circle">
              {type === 'Deploy' && <IconDeploy />}
              {type === 'SVC' && <IconSVC />}
            </div>
            <div className="border-warning bg-light-warning rounded-pill p-25">
              <span className="text-black">{type}</span>
            </div>
          </div>
        </Col>
        <Col sm={9}>
          <Card
            className="shadow-none border"
            onClick={type === 'SVC' ? SVCApp : deployApp}
          >
            <Card.Header className="bg-primary-header d-flex justify-content-center">
              {title}
            </Card.Header>
            <Card.Body className="p-0">
              <Row>
                <Col className="border-end" sm={5}>
                  <Row>
                    <Col>
                      <span
                        className={`d-flex align-items-center gap-50 px-75 py-25 ${
                          health ? 'text-success' : 'text-secondary'
                        }`}
                      >
                        {health
                          ? <HeartFill size={12} />

                          : <QuestionCircleFill size={12} />}
                        {health
                          ? (
                          <div className="text-body-3 text-dark fw-medium">
                            Healthy
                          </div>
                          )
                          : (
                          <div className="text-body-3 text-danger fw-medium">
                            Missing
                          </div>
                          )}
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span
                        className={`d-flex align-items-center gap-50 px-75 py-25 ${
                          sync ? 'text-success' : 'text-warning'
                        }`}
                      >
                        {sync
                          ? <CheckCircleFill size={12} />

                          : <ExclamationTriangleFill size={12} />}
                        {sync
                          ? (
                          <div className="text-body-3 text-dark fw-medium">
                            Synced
                          </div>
                          )
                          : (
                          <div className="text-body-3 text-dark fw-medium">
                            Out of Synced
                          </div>
                          )}
                      </span>
                    </Col>
                  </Row>
                </Col>
                <Col className="text-start" sm={7}>
                  <Row>
                    <Col>
                      <p className="px-75 py-25 m-0">Revision : 2</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="px-75 py-25 m-0">Created : 5 months ago</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex gap-50 justify-content-end align-items-center">
          <Dropdown className="no-arrow">
            <Dropdown.Toggle
              className="d-flex gap-50 align-items-center justify-content-center w-100"
              variant="outline-primary"
            >
              <MoreVertical size={18} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={type === 'SVC' ? SVCApp : deployApp}>
                <div className="d-flex gap-50 align-items-center">
                  <Eye />
                  App Detail
                </div>
              </Dropdown.Item>
              <Dropdown.Item onClick={handleSyncApp}>
                <div className="d-flex gap-50 align-items-center">
                  <RefreshCcw />
                  Sync
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div className="d-flex gap-50 align-items-center text-danger">
                  <Trash2 color="red" />
                  Delete
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button
            className="d-flex gap-50 align-items-center"
            variant="primary"
          >
            <Reload size={20} /> Refresh
          </Button>
        </Col>
      </Row>
    </div>
  );
};

CustomNodes.displayName = 'CustomNodes';
export { CustomNodes };
