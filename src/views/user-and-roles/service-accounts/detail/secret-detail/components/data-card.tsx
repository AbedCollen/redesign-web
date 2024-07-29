/* eslint-disable react/hook-use-state */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import { Edit2, Eye } from '@nxweb/icons/feather';

import { StoreCommand, useStore } from '@models/store';

import { ServiceAccountModal } from './modal';

const DataCard = () => {
  const [showModal, setShowModal] = useState<{
    data: {
      action: 'Edit' | 'View'
      type: 'Namespace' | 'Yaml'
    }
    open: boolean
  }>({ data: { action: 'Edit', type: 'Yaml' }, open: false });

  const toggleModal = (data?: {
    action: 'Edit' | 'View'
    type: 'Namespace' | 'Yaml'
  }) => setShowModal({
    data: data || { action: 'View', type: 'Yaml' },
    open: !showModal.open
  });

  const [store, dispatch] = useStore(
    (state) => state?.app?.userAndRoles?.serviceAccounts?.detail
  );

  useEffect(() => {
    dispatch(StoreCommand.app.userAndRoles.serviceAccounts.GetDetailData());
  }, [dispatch]);

  return (
    <Card className="shadow-none">
      <Card.Header className="border border-5 border-primary-header rounded-top text-primary-header fw-bold">
        Data
      </Card.Header>
      <div className="d-flex flex-row py-1 border rounded-bottom">
        <Container>
          <Row>
            <Col sm={4}>
              <div className="d-flex align-items-center gap-75">
                <p className="fw-bold text-dark my-0 fs-5">ca.crt</p>
                <Button
                  className="px-50 py-25"
                  variant="outline-primary"
                  onClick={() => toggleModal({ action: 'View', type: 'Yaml' })}
                >
                  <Eye size={18} />
                </Button>
                <Button
                  className="px-50 py-25"
                  variant="primary"
                  onClick={() => toggleModal({ action: 'Edit', type: 'Yaml' })}
                >
                  <Edit2 size={18} />
                </Button>
              </div>
              <p>{store?.detail.secrets[0].detail.dataSecret.crt}</p>
            </Col>
            <Col sm={4}>
              <div className="d-flex align-items-center gap-75">
                <p className="fw-bold text-dark my-0 fs-5">Namespace</p>
                <Button
                  className="px-50 py-25"
                  variant="outline-primary"
                  onClick={() => toggleModal({ action: 'View', type: 'Namespace' })}
                >
                  <Eye size={18} />
                </Button>
                <Button
                  className="px-50 py-25"
                  variant="primary"
                  onClick={() => toggleModal({ action: 'Edit', type: 'Namespace' })}
                >
                  <Edit2 size={18} />
                </Button>
              </div>
              <p>7 bytes</p>
            </Col>
            <Col sm={4}>
              <div className="d-flex align-items-center gap-75">
                <p className="fw-bold text-dark my-0 fs-5">Token</p>
                <Button
                  className="px-50 py-25"
                  variant="outline-primary"
                  onClick={() => toggleModal({ action: 'View', type: 'Yaml' })}
                >
                  <Eye size={18} />
                </Button>
                <Button
                  className="px-50 py-25"
                  variant="primary"
                  onClick={() => toggleModal({ action: 'Edit', type: 'Yaml' })}
                >
                  <Edit2 size={18} />
                </Button>
              </div>
              <p>{store?.detail.secrets[0].detail.dataSecret.token}</p>
            </Col>
          </Row>
        </Container>
        <ServiceAccountModal
          action={showModal.data.action}
          open={showModal.open}
          toggleModal={toggleModal}
          type={showModal.data.type} />
      </div>
    </Card>
  );
};

DataCard.displayName = 'DataCard';
export { DataCard };
