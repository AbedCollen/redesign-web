import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Plus } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';
import { JSONModal } from './components/JSON-modal';

const MonitoringGraphMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.monitoringAlerting?.monitoringGraph?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.monitoringAlerting.monitoringGraph.GetMainData());
  }, [dispatch]);

  const navigate = useNavigate();
  const detailGraph = (index: number) => {
    navigate(`./detail/${index}`);
  };

  const [openConfirm, setOpenConfirm] = useState(false);
  const toggleModal = () => setOpenConfirm(!openConfirm);

  const [shareModal, setShareModal] = useState(false);
  const toggleShareModal = () => setShareModal(!shareModal);

  const [editModal, setEditModal] = useState(false);
  const toggleEditModal = () => setEditModal(!editModal);

  const [jsonModal, setJsonModal] = useState(false);
  const toggleJsonModal = () => setJsonModal(!jsonModal);

  const [search, setSearch] = useState('');
  const handleSearchChange = (text: string) => {
    setSearch(text);
  };
  const filteredData = store?.data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h4 className="py-3 px-2 m-0 fw-bold text-black">Graph Metric</h4>
      <div className="px-2 element-wrapper">
        <div className="p-2 border rounded">
          <div className="d-flex justify-content-between">
            <div className="w-50">
              <SearchFilter onSearchChange={handleSearchChange} />
            </div>
            <Dropdown className="no-arrow">
              <Dropdown.Toggle
                className="d-flex align-items-center gap-50"
                id="dropdown-basic"
                variant="primary"
              >
                <Plus size={16} />
                Graph
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href={allRoutes.monitoringAlerting.createGraph}>
                  Create Graph
                </Dropdown.Item>
                <Dropdown.Item onClick={toggleJsonModal}>
                  Import JSON
                </Dropdown.Item>
                <Dropdown.Item onClick={toggleJsonModal}>
                  Import Grafana JSON
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <JSONModal show={jsonModal} toggleModal={toggleJsonModal} />
          </div>
          <div className="mt-1">
            <CustomDataTable
              columns={columns(
                detailGraph,
                shareModal,
                toggleShareModal,
                openConfirm,
                toggleModal,
                editModal,
                toggleEditModal
              )}
              data={filteredData || []}
              totalRows={store?.total} />
          </div>
        </div>
      </div>
    </div>
  );
};

MonitoringGraphMain.displayName = 'MonitoringGraphMain';
export { MonitoringGraphMain };
