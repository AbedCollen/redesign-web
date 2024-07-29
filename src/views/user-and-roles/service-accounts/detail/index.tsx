/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */

import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Edit2, Info, Trash2 } from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom';
import { StoreCommand, useStore } from '@models/store';

import { SecretCard } from './secret-detail/components/secret-card';
import { MetadataCard } from '../../components/metadata-card';

const ServiceAccountsDetailMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.userAndRoles?.serviceAccounts?.detail
  );

  useEffect(() => {
    dispatch(StoreCommand.app.userAndRoles.serviceAccounts.GetDetailData());
  }, [dispatch]);

  const navigate = useNavigate();

  const editservicesAccountsDetail = (index: number) => {
    navigate(`./edit/${index}`);
  };

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="element-wrapper">
      <div className="shadow-sm p-2 d-flex justify-content-between">
        <h5 className="fw-bold text-black m-0">{store?.name}</h5>
        <div>
          <div className="d-flex justify-content-end">
            <div className="d-flex me-1">
              <Button
                className="d-flex align-items-center me-1 justify-content-center gap-50"
                variant="outline-danger"
                onClick={toggleModal}
              >
                <Trash2 size={20} />
              </Button>
              <ConfirmModal
                content={
                  <div>
                    <div className="text-body-2 fw-medium text-black mb-1">
                      Are you sure you want to delete Role{' '}
                      <span className="fst-italic">{store?.name}</span> in
                      namespace default?
                    </div>
                    <div className="d-flex align-items-center alert-warning shadow-none p-1 gap-25 text-dark border-0 rounded">
                      <div className="">
                        <Info
                          className="no-border"
                          color="white"
                          fill="#FFB72B"
                          size={30} />
                      </div>
                      This action is equivalent to: kubectl delete -n default
                      role <span className="fst-italic">{store?.name}</span>
                    </div>
                  </div>
                }
                footer={
                  <div className="d-flex gap-2">
                    <Button
                      className="justify-content-center"
                      variant="flat-primary"
                      onClick={toggleModal}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="d-flex align-items-center justify-content-center gap-50"
                      variant="danger"
                      onClick={toggleModal}
                    >
                      <Trash2 size={16} /> Delete
                    </Button>
                  </div>
                }
                show={showModal}
                size="lg"
                title={
                  <div className="d-flex align-items-center gap-50 p-50">
                    <div className="header-icon bg-danger">
                      <Trash2 size={16} />
                    </div>
                    <div className="text-body-1 fw-medium">
                      Delete Confirmation
                    </div>
                  </div>
                }
                toggleModal={toggleModal} />
              <Button
                className="d-flex align-items-center justify-content-center gap-50"
                onClick={() => editservicesAccountsDetail(store?.id as number)}
              >
                <Edit2 size={20} /> Resources
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 m-2 border rounded">
        <MetadataCard
          age={store?.detail.metadata.age || ''}
          annotation={store?.detail.metadata.annotation || []}
          created={store?.detail.metadata.created || ''}
          labels={store?.detail.metadata.labels || []}
          name={store?.detail.metadata.name || ''}
          namespace={store?.detail.metadata.namespace || ''}
          uid={store?.detail.metadata.uid || ''} />
        <SecretCard data={store?.detail || null} />
        <Card className="shadow-none">
          <Card.Header className="border border-5 border-primary-header rounded-top text-primary-header fw-bold">
            Image Pull Secrets
          </Card.Header>
          <Card.Body className="pt-1 border rounded-bottom">
            <p className="fw-bold text-center fs-3 mt-2">No Data Available</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export { ServiceAccountsDetailMain };
