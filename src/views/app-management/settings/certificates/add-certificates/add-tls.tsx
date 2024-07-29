/* eslint-disable react/no-array-index-key */
import { Button, Col, Row } from 'react-bootstrap';

import { Plus, X } from '@nxweb/icons/feather';

import { NxFormControl } from '@components/custom';
import { allRoutes } from '@config/constants';

const layoutStyle = {
  nxStyle: { container: 'mb-1' },
  style: 'd-flex align-items-center justify-content-center gap-50'
};

const CertificatesAddTLS = () => {
  return (
    <div className="element-wrapper">
      <div className="shadow-sm d-flex justify-content-between p-2">
        <h5 className="fw-bold m-0 text-black">TLS Certificates</h5>
        <div className="d-flex align-items-center gap-1">
          <Button
            as="a"
            className={layoutStyle.style}
            href={allRoutes.appManagement.settingCertificates}
            variant="outline-danger"
          >
            <X size={20} /> Cancel
          </Button>
          <Button className={layoutStyle.style}>
            <Plus size={20} /> Create
          </Button>
        </div>
      </div>
      <div className="m-2 p-2 border rounded">
        <form>
          <Row>
            <Col>
              <NxFormControl
                className={layoutStyle.nxStyle}
                label="Repository Server"
                placeholder="Placeholder"
                type="text" />
            </Col>
          </Row>

          <Row>
            <Col>
              <NxFormControl
                className={layoutStyle.nxStyle}
                label="TLS Certificate (PEM Format)"
                placeholder="Placeholder"
                type="text" />
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

CertificatesAddTLS.displayName = 'CertificatesAddTLS';
export { CertificatesAddTLS };
