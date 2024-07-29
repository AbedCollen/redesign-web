/* eslint-disable react/no-array-index-key */
import { Button, Col, Row } from 'react-bootstrap';

import { Plus, X } from '@nxweb/icons/feather';

import { NxFormControl } from '@components/custom';
import { allRoutes } from '@config/constants';

const layoutStyle = {
  paragraph: 'fs-5 d-flex align-items-center text-dark pe-3',
  style: 'd-flex align-items-center',
  styleCenter: 'd-flex align-items-center justify-content-center',
  text: 'text-dark pe-3'
};

const CertificatesAddSSH = () => {
  return (
    <div className="element-wrapper">
      <div className="shadow-sm d-flex justify-content-between p-2">
        <h5 className="fw-bold m-0 text-black">SSH Known Hosts</h5>
        <div className={`${layoutStyle.styleCenter} gap-1`}>
          <Button
            as="a"
            className={`${layoutStyle.style} gap-50`}
            href={allRoutes.appManagement.settingCertificates}
            variant="outline-danger"
          >
            <X size={20} /> Cancel
          </Button>
          <Button className={`${layoutStyle.styleCenter} gap-50`}>
            <Plus size={20} /> Create
          </Button>
        </div>
      </div>
      <div className="m-2 p-2 border rounded">
        <form>
          <Row className="mb-1">
            <Col>
              <div className="d-flex border border-info border-dashed rounded p-1 bg-light-info align-items-center">
                <p className={`${layoutStyle.styleCenter} m-0 fs-3`}>
                  <div
                    className={`me-1 bg-info text-center rounded-circle alert-circle ${layoutStyle.styleCenter}`}
                  >
                    i
                  </div>
                </p>
                <div>
                  <div className={`${layoutStyle.paragraph}`}>
                    <p className="m-0">
                      Paste SSH known hosts data in the text area below, one
                      entry per line.You can use output from ssh-keyscan or the
                      contents on an ssh_known_hosts file verbatim.Lines
                      starting with # will be treated as comments and ignored.{' '}
                    </p>
                  </div>
                  <div className={`${layoutStyle.paragraph}`}>
                    <p className="m-0">
                      Make sure there are no linebreaks in the keys.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <NxFormControl
                className={{ container: 'mb-1' }}
                label="SSH Known Hosts Data"
                placeholder="Placeholder"
                type="text" />
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

CertificatesAddSSH.displayName = 'CertificatesAddSSH';
export { CertificatesAddSSH };
