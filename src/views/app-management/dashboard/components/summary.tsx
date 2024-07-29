import { Col, Row } from 'react-bootstrap';

import { Edit2, Heart } from '@nxweb/icons/feather';

import { IconApplications, IconClusters, IconSynced } from '@components/icon';

const summaryStyle = 'd-flex align-items-center justify-content-between fs-4 text-black fw-bold';
const divFlex = 'd-flex gap-1';

const SummaryIcon = () => {
  return (
    <Col>
      <div className="border rounded p-2">
        <div className="fw-bold text-black fs-2 mb-3">Summary</div>
        <Row>
          <Col className="mb-2" md={4} xl={4}>
            <div className={summaryStyle}>
              <div className={divFlex}>
                <IconApplications />
                Applications
              </div>
              <div>20</div>
            </div>
          </Col>
          <Col className="mb-2" md={4} xl={4}>
            <div className={summaryStyle}>
              <div className={divFlex}>
                <IconSynced />
                Synced
              </div>
              <div>20</div>
            </div>
          </Col>
          <Col className="mb-2" md={4} xl={4}>
            <div className={summaryStyle}>
              <div className={divFlex}>
                <Heart fill="black" size={24} strokeWidth={0} />
                Healthy
              </div>
              <div>20</div>
            </div>
          </Col>
          <Col className="mb-2" md={4} xl={4}>
            <div className={summaryStyle}>
              <div className={divFlex}>
                <IconClusters />
                Clusters
              </div>
              <div>20</div>
            </div>
          </Col>
          <Col className="mb-2" md={4} xl={4}>
            <div className={summaryStyle}>
              <div className={divFlex}>
                <Edit2 fill="black" size={24} strokeWidth={0} />
                Namespaces
              </div>
              <div>20</div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

SummaryIcon.displayName = 'SummaryIcon';

export default SummaryIcon;
