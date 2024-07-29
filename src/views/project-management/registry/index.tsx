import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { Plus } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const RegistryMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.registry?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.registry.GetMainData());
  }, [dispatch]);

  const [showMonaco, setShowMonaco] = useState<boolean[]>(
    new Array<boolean>(store?.total || 0)
  );
  const handleCloseMonaco = (index: number) => {
    const expandStatus = [...showMonaco];

    expandStatus[index] = false;
    setShowMonaco(expandStatus);
  };
  const handleShowMonaco = (index: number) => {
    const expandStatus = [...showMonaco];

    expandStatus[index] = true;
    setShowMonaco(expandStatus);
  };

  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);
  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mb-2 text-black">Registry</h4>
      <div className="rounded border p-1">
        <Row className="mb-1">
          <Col xs={5}>
            <SearchFilter onSearchChange={handleSearchChange} />
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              className="d-flex align-items-center gap-50"
              href={allRoutes.projectManagement.addCredential}
            >
              <Plus size={16} />
              Credential
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomDataTable
              columns={columns(
                showMonaco,
                handleCloseMonaco,
                handleShowMonaco,
                toggleModal,
                open
              )}
              data={filteredData || []}
              totalRows={store?.total} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

RegistryMain.displayName = 'RegistryMain';
export { RegistryMain };
