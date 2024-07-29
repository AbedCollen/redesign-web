import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Plus } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const HpaMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.hpa?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.hpa.GetMainData());
  }, [dispatch]);

  const [openConfirm, setOpenConfirm] = useState(false);
  const toggleModal = () => setOpenConfirm(!openConfirm);

  const navigate = useNavigate();
  const editHpa = (id: number) => {
    navigate(`./edit-hpa/${id}`);
  };

  const detailHpa = (id: number) => {
    navigate(`./detail-hpa/${id}`);
  };

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

  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mb-2 text-black">HPA</h4>
      <div className="rounded border p-1">
        <Row className="mb-1">
          <Col xs={5}>
            <SearchFilter onSearchChange={handleSearchChange} />
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              className="d-flex align-items-center gap-50"
              href={allRoutes.projectManagement.addHpa}
            >
              <Plus size={16} />
              HPA
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomDataTable
              columns={columns(
                openConfirm,
                toggleModal,
                editHpa,
                detailHpa,
                showMonaco,
                handleCloseMonaco,
                handleShowMonaco
              )}
              data={filteredData || []}
              totalRows={store?.total} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

HpaMain.displayName = 'HpaMain';
export { HpaMain };
