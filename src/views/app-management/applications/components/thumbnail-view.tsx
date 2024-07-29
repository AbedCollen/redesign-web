/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { FC } from 'react';
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import {
  CheckCircleFill,
  ExclamationTriangleFill,
  HeartFill,
  QuestionCircleFill
} from '@nxweb/icons/bootstrap';
import { Eye, MoreHorizontal, RefreshCcw, Trash2 } from '@nxweb/icons/feather';

const cardStyle = 'fw-semibold mb-50';
const statusIcon = 'text-body-3 fw-medium';
const buttonStyle = 'd-flex gap-50 align-items-center';
const statusStyle = {
  style: 'round d-inline-flex align-items-center mt-50 gap-50 px-75 py-25',
  warning: 'text-warning border-warning bg-light',
  success: 'text-success border-success bg-light-success',
  secondary: 'text-secondary border-secondary bg-light-secondary'
};

interface ThumbnailViewCardProps {
  readonly destination: string
  readonly handleSyncApp: (idx: number) => void
  readonly health: boolean
  readonly id: number
  readonly labels: string
  readonly namespace: string
  readonly path: string
  readonly project: string
  readonly repository: string
  readonly sync: boolean
  readonly targetRevisionPath: string
  readonly title: string
}

const ThumbnailView: FC<ThumbnailViewCardProps> = ({
  id,
  title,
  project,
  sync,
  health,
  repository,
  namespace,
  labels,
  destination,
  targetRevisionPath,
  path,
  handleSyncApp
}) => {
  function maxLetter(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }

    return text;
  }

  const navigate = useNavigate();

  const mapApp = (index: number) => {
    navigate(`./${index}`);
  };

  return (
    <Col key={title} xl={4}>
      <Card>
        <Card.Header className="border-primary-header rounded-top py-2 mb-2">
          <a
            className="m-0 fs-6 text-primary-header"
            onClick={() => mapApp(id)}
          >
            {title}
          </a>
        </Card.Header>

        <Card.Body>
          <Row className="mb-1">
            <Col>
              <div className="fw-semibold mb-50">Sync Status:</div>
              <span
                className={` ${statusStyle.style} ${
                  sync ? `${statusStyle.success}` : `${statusStyle.warning}`
                }`}
              >
                {sync
                  ? <CheckCircleFill size={12} />

                  : <ExclamationTriangleFill size={12} />}
                {sync
                  ? <span className={`text-success ${statusIcon}`}>Synced</span>

                  : (
                  <span className={`text-warning ${statusIcon}`}>
                    Out of Synced
                  </span>
                  )}
              </span>
            </Col>
            <Col>
              <div className="fw-semibold mb-50">Health Status:</div>
              <span
                className={` ${statusStyle.style} ${
                  health ? `${statusStyle.success}` : `${statusStyle.secondary}`
                }`}
              >
                {health
                  ? <HeartFill size={12} />

                  : <QuestionCircleFill size={12} />}
                {health
                  ? <div className={`text-success ${statusIcon}`}>Healthy</div>

                  : <div className={`text-danger ${statusIcon}`}>Missing</div>}
              </span>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <div className={cardStyle}>Project</div>
              <div>{project}</div>
            </Col>
            <Col>
              <div className={cardStyle}>Name Space</div>
              <div>{namespace}</div>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <div className={cardStyle}>Labels</div>
              <div>{labels}</div>
            </Col>
            <Col>
              <div className={cardStyle}>Destination</div>
              <div>{destination}</div>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <div className={cardStyle}>Target Revision Path</div>
              <div>{targetRevisionPath}</div>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col xl={6}>
              <div className={cardStyle}>Path</div>
              <div>{maxLetter(path, 28)}</div>
            </Col>
            <Col xl={6}>
              <div className={cardStyle}>Repository</div>
              <div>{maxLetter(repository, 28)}</div>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <Dropdown className="no-arrow">
                <Dropdown.Toggle
                  className={`${buttonStyle} justify-content-center w-100`}
                  variant="outline-primary"
                >
                  <MoreHorizontal size={16} /> More
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => mapApp(id)}>
                    <div className={buttonStyle}>
                      <Eye />
                      App Detail
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <div className={buttonStyle}>
                      <RefreshCcw />
                      Refresh
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <div className={`${buttonStyle} text-danger`}>
                      <Trash2 />
                      Delete
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Button
                className={`${buttonStyle} justify-content-center w-100`}
                onClick={() => handleSyncApp(id)}
              >
                <RefreshCcw size={16} /> Sync
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

ThumbnailView.displayName = 'ThumbnailView';
export { ThumbnailView };
