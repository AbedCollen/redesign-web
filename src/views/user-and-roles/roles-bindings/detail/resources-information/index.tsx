import { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Edit2, Trash2 } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { StoreCommand, useStore } from '@models/store';

import { DeletionModal } from '@src/views/user-and-roles/components/deletion-modal';
import { MetadataCard } from '@src/views/user-and-roles/components/metadata-card';

import { Columns } from './columns';

const RolesBindingsResourceInformation = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.userAndRoles?.rolesBindings
  );

  useEffect(() => {
    dispatch(StoreCommand.app.userAndRoles.rolesBindings.GetDetailData());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleEditResource = () => {
    navigate(`./edit`);
  };

  const [openConfirm, setOpenConfirm] = useState(false);
  const toggleModal = () => setOpenConfirm(!openConfirm);

  const [search, setSearch] = useState('');
  const handleSearchChange = (text: string) => {
    setSearch(text);
  };
  const filteredData = store?.detail.detailTable.filter((item) => item.resources.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="element-wrapper">
      <div className="p-2 shadow-sm d-flex">
        <Col xs={5}>
          <span className="fw-bold mb-2 text-black fs-1">
            {store?.detail.name}
          </span>
        </Col>
        <Col className="text-end">
          <div className="d-flex align-items-center justify-content-end gap-75">
            <Button
              className="d-flex align-items-center justify-content-center gap-50"
              variant="outline-danger"
              onClick={toggleModal}
            >
              <Trash2 size={20} />
            </Button>
            <DeletionModal
              content={store?.detail.name || ''}
              openConfirm={openConfirm}
              toggleModal={toggleModal} />
            <Button
              className="d-flex align-items-center justify-content-center gap-50"
              onClick={handleEditResource}
            >
              <Edit2 fill="currentColor" size={20} /> Resources
            </Button>
          </div>
        </Col>
      </div>

      <div className="m-2 border rounded p-2">
        <MetadataCard
          age={store?.detail.created || ''}
          created={store?.detail.detailTable[0].createdDetail || ''}
          name={store?.detail.name || ''}
          namespace={store?.detail.detailTable[0].metadataNamespace || ''}
          uid={store?.detail.detailTable[0].uid || ''} />
        <Card className="shadow-none">
          <Card.Header className="border border-5 border-primary-header rounded-top text-primary-header fw-bold">
            Rules
          </Card.Header>
          <Card.Body className="d-flex flex-column gap-2 pt-1 border rounded-bottom">
            <Col xs={5}>
              <SearchFilter onSearchChange={handleSearchChange} />
            </Col>
            <div>
              <Col>
                <CustomDataTable
                  columns={Columns}
                  data={filteredData || []}
                  totalRows={store?.main.total} />
              </Col>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

RolesBindingsResourceInformation.displayName =
  'RolesBindingsResourceInformation';
export { RolesBindingsResourceInformation };
