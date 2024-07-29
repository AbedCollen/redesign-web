import { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Edit2, Trash2 } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';
import { DeletionModal } from '../../components/deletion-modal';
import { MetadataCard } from '../../components/metadata-card';

const ClusterRolesBindingsDetail = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.userAndRoles?.clusterRolesBindings?.detail
  );

  useEffect(() => {
    dispatch(
      StoreCommand.app.userAndRoles.clusterRolesBindings.GetDetailData()
    );
  }, [dispatch]);

  const navigate = useNavigate();

  const editClusterRolesBindingsDetail = (id: number) => {
    navigate(`./edit/${id}`);
  };

  const detailResourcesInformation = () => {
    navigate(`./resource-information`);
  };

  const [openConfirm, setOpenConfirm] = useState(false);
  const toggleModal = () => setOpenConfirm(!openConfirm);

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
          <DeletionModal
            content={store?.name || ''}
            openConfirm={openConfirm}
            toggleModal={toggleModal} />
          <Button
            className="d-flex align-items-center justify-content-center gap-50"
            onClick={() => editClusterRolesBindingsDetail(store?.id as number)}
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
            Resources Information
          </Card.Header>
          <Card.Body className="pt-1 border rounded-bottom">
            <div className="d-flex flex-column gap-1">
              Role References
              <a
                className="link-info text-decoration-underline"
                onClick={detailResourcesInformation}
              >
                {store?.detail.resourceInformation}
              </a>
            </div>
          </Card.Body>
        </Card>

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

ClusterRolesBindingsDetail.displayName = 'ClusterRolesBindingsDetail';

export { ClusterRolesBindingsDetail };
