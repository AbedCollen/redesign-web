import { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Edit2, Info, Trash2 } from '@nxweb/icons/feather';

import { ConfirmModal, CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';
import { MetadataCard } from '../../components/metadata-card';

const ClusterRolesDetail = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.userAndRoles?.clusterRoles?.detail
  );

  useEffect(() => {
    dispatch(StoreCommand.app.userAndRoles.clusterRoles.GetDetailData());
  }, [dispatch]);

  const navigate = useNavigate();

  const editClusterRolesDetail = (id: number) => {
    navigate(`./edit/${id}`);
  };

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const [search, setSearch] = useState('');
  const handleSearchChange = (text: string) => {
    setSearch(text);
  };
  const filteredData = store?.detail.rulesTable.filter((item) => item.resources.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="element-wrapper">
      <div className="p-2 shadow-sm d-flex justify-content-between align-items-center">
        <h5 className="fw-bold text-black m-0">{store?.name}</h5>
        <div className="d-flex align-items-center gap-2">
          <Button
            className="d-flex align-items-center justify-content-center gap-50"
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
                  <span className="fst-italic">{store?.name}</span> in namespace
                  default?
                </div>
                <div className="d-flex align-items-center alert-warning shadow-none p-1 gap-25 text-dark border-0 rounded">
                  <div className="">
                    <Info
                      className="no-border"
                      color="white"
                      fill="#FFB72B"
                      size={30} />
                  </div>
                  This action is equivalent to: kubectl delete -n default role{' '}
                  <span className="fst-italic">{store?.name}</span>
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
                <div className="text-body-1 fw-medium">Delete Confirmation</div>
              </div>
            }
            toggleModal={toggleModal} />

          <Button
            className="d-flex align-items-center justify-content-center gap-50"
            onClick={() => editClusterRolesDetail(store?.id as number)}
          >
            <Edit2 fill="white" size={20} /> Resources
          </Button>
        </div>
      </div>
      <div className="border rounded m-2 p-2 d-flex flex-column gap-2">
        <Col>
          <MetadataCard
            age={store?.detail.metadataAge || ''}
            created={store?.detail.metadataCreated || ''}
            name={store?.detail.metadataName || ''}
            uid={store?.detail.metadataUID || ''} />
        </Col>

        <Card className="shadow-none">
          <Card.Header className="border border-5 border-primary-header rounded-top text-primary-header fw-bold">
            Rules
          </Card.Header>
          <Card.Body className="pt-1 border rounded-bottom">
            <div className="d-flex flex-column gap-2">
              <Col xs={5}>
                <SearchFilter onSearchChange={handleSearchChange} />
              </Col>
              <Col>
                <CustomDataTable columns={columns} data={filteredData || []} />
              </Col>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

ClusterRolesDetail.displayName = 'ClusterRolesDetail';

export { ClusterRolesDetail };
