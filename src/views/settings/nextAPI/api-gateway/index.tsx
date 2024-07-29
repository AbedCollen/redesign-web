import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { Plus } from '@nxweb/icons/feather';

import { ConfirmModal, CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';
import { ApiGatewayModal } from './modal';

const APIGateway = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.settings?.apiGateway?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.settings.apiGateway.GetMainData());
  }, [dispatch]);

  const [showModal, setShowModal] = useState<{
    open: boolean
    type: 'Add' | 'Edit' | 'Update' | 'XDS'
  }>({ open: false, type: 'Update' });

  const toggleModal = (type?: 'Add' | 'Edit' | 'Update' | 'XDS') => setShowModal({ open: !showModal.open, type: type || 'Add' });

  const [openConfirm, setOpenConfirm] = useState(false);
  const toggleConfirmationModal = () => setOpenConfirm(!openConfirm);

  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h4 className="py-3 px-2 fw-bold m-0 text-black">API Gateway</h4>
      <div className="px-2 element-wrapper">
        <div className="border rounded p-2">
          <Row className="mb-1">
            <Col xs={5}>
              <SearchFilter onSearchChange={handleSearchChange} />
            </Col>
            <Col>
              <Button
                className="d-flex align-items-center ms-auto gap-50"
                onClick={() => toggleModal('Add')}
              >
                <Plus size={16} />
                API Gateway
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomDataTable
                columns={columns(toggleModal)}
                data={filteredData || []}
                totalRows={store?.total} />
            </Col>
          </Row>

          <ApiGatewayModal
            open={showModal.open}
            toggleConfirmationModal={toggleConfirmationModal}
            toggleModal={() => toggleModal(showModal.type)}
            type={showModal.type} />

          <ConfirmModal
            content="Are you sure to delete?"
            show={openConfirm}
            title="Delete"
            toggleModal={toggleConfirmationModal}
            variant="primary" />
        </div>
      </div>
    </div>
  );
};

APIGateway.displayName = 'APIGateway';
export { APIGateway };
