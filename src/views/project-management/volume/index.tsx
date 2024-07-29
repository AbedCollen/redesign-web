import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Plus } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const VolumeMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.volume?.main
  );

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.volume.GetMainData());
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

  const [openConfirm, setOpenConfirm] = useState(false);
  const toggleModal = () => setOpenConfirm(!openConfirm);

  const handleShowDetail = (idx: number) => {
    navigate(allRoutes.projectManagement.volumeDetail, {
      state: store?.data[idx]
    });
  };
  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.namespace.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mb-2 text-black">Volume</h4>
      <div className="rounded border p-1">
        <Row className="mb-1">
          <Col xs={5}>
            <SearchFilter onSearchChange={handleSearchChange} />
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              className="d-flex align-items-center gap-50"
              href="/project-management/volume/add"
            >
              <Plus size={16} />
              Volume
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
                handleShowDetail,
                openConfirm,
                toggleModal
              )}
              data={filteredData || []}
              totalRows={store?.total} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

VolumeMain.displayName = 'VolumeMain';
export { VolumeMain };
