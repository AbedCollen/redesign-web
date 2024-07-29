import { Button, Col, Row } from 'react-bootstrap';

import { RefreshCcw } from '@nxweb/icons/feather';

import { NxFormControl } from '@components/custom';

const textBoldDarkStyle = 'fw-bold text-dark';
const textBoldDarkStyleNoMargin = `${textBoldDarkStyle} m-0`;

/* eslint-disable react/jsx-no-undef */
const ApplicationsHistoryAndRollback = () => {
  return (
    <div>
      <div className="p-1 border rounded mb-2">
        <Row className="border-bottom mb-1">
          <Col xl={3}>
            <p className={textBoldDarkStyle}>Deployed At:</p>
            <div>
              <p className={textBoldDarkStyleNoMargin}>10 days ago</p>
              <p className="m-0">Fri Dec 02 2022</p>
              <p>14:34:02 GMT +0700</p>
            </div>
            <div>
              <p className={textBoldDarkStyleNoMargin}>Time to Deploy:</p>
              <p>00:00 min</p>
            </div>
            <div>
              <p className={textBoldDarkStyleNoMargin}>Active for:</p>
              <p>10 days 00:14 hours</p>
            </div>
          </Col>

          <Col xl={9}>
            <Row className="mb-1">
              <Col xl={3}>
                <NxFormControl
                  defaultValue="53e28ff"
                  disabled={true}
                  label="Revision"
                  placeholder="Placeholder" />
              </Col>
              <Col>
                <NxFormControl
                  defaultValue="-"
                  disabled={true}
                  label="GPS Signature"
                  placeholder="Placeholder" />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col>
                <NxFormControl
                  defaultValue="May Zhang<may_zhang@intuit.com>"
                  disabled={true}
                  label="Authored by"
                  placeholder="Placeholder" />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col xl={4}>
                <NxFormControl
                  defaultValue="Sync"
                  disabled={true}
                  label="Directory Recurse"
                  placeholder="Placeholder" />
              </Col>
              <Col xl={4}>
                <NxFormControl
                  defaultValue="Succeeded"
                  disabled={true}
                  label="Top-Level Arguments"
                  placeholder="Placeholder" />
              </Col>
              <Col xl={4}>
                <NxFormControl
                  defaultValue="Succeeded"
                  disabled={true}
                  label="External Variables"
                  placeholder="Placeholder" />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <Button className="d-flex gap-50 align-items-center">
            <RefreshCcw size={16} /> Sync
          </Button>
        </div>
      </div>

      <div className="p-1 border rounded mb-2">
        <Row className="border-bottom mb-1">
          <Col xl={3}>
            <p className={textBoldDarkStyle}>Deployed At:</p>
            <div>
              <p className={textBoldDarkStyleNoMargin}>10 days ago</p>
              <p className="m-0">Fri Dec 02 2022</p>
              <p>14:34:02 GMT +0700</p>
            </div>
            <div>
              <p className={textBoldDarkStyleNoMargin}>Time to Deploy:</p>
              <p>00:00 min</p>
            </div>
            <div>
              <p className={textBoldDarkStyleNoMargin}>Active for:</p>
              <p>10 days 00:14 hours</p>
            </div>
          </Col>
          <Col xl={9}>
            <Row className="mb-1">
              <Col>
                <NxFormControl
                  defaultValue="53e28ff"
                  disabled={true}
                  label="Revision"
                  placeholder="Placeholder" />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <Button className="d-flex gap-50 align-items-center">
            <RefreshCcw size={16} /> Rollback
          </Button>
        </div>
      </div>

      <div className="p-1 border rounded mb-2">
        <Row className="border-bottom mb-1">
          <Col xl={3}>
            <p className={textBoldDarkStyle}>Deployed At:</p>
            <div>
              <p className={textBoldDarkStyleNoMargin}>10 days ago</p>
              <p className="m-0">Fri Dec 02 2022</p>
              <p>14:34:02 GMT +0700</p>
            </div>
            <div>
              <p className={textBoldDarkStyleNoMargin}>Time to Deploy:</p>
              <p>00:00 min</p>
            </div>
            <div>
              <p className={textBoldDarkStyleNoMargin}>Active for:</p>
              <p>10 days 00:14 hours</p>
            </div>
          </Col>
          <Col xl={9}>
            <Row className="mb-1">
              <Col>
                <NxFormControl
                  defaultValue="53e28ff"
                  disabled={true}
                  label="Revision"
                  placeholder="Placeholder" />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <Button className="d-flex gap-50 align-items-center">
            <RefreshCcw size={16} /> Rollback
          </Button>
        </div>
      </div>
    </div>
  );
};

ApplicationsHistoryAndRollback.displayName = 'ApplicationsHistoryAndRollback';

export default ApplicationsHistoryAndRollback;
