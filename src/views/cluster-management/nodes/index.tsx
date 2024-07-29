import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { Plus } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';
import { AddModalNodes } from './components/AddModal';

const NodesMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.clusterManagement?.nodes?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.clusterManagement.nodes.GetMainData());
  }, [dispatch]);

  const [addModal, setAddModal] = useState(false);
  const toggleAddModal = () => setAddModal(!addModal);

  const [editModal, setEditModal] = useState(false);
  const toggleEditModal = () => setEditModal(!editModal);

  const [cordonModal, setCordonModal] = useState(false);
  const toggleCordonModal = () => setCordonModal(!cordonModal);

  const [drainModal, setDrainModal] = useState(false);
  const toggleDrainModal = () => setDrainModal(!drainModal);

  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mb-2 text-black">Nodes</h4>
      <div className="rounded border p-1">
        <Row className="mb-1">
          <Col xs={5}>
            <SearchFilter onSearchChange={handleSearchChange} />
          </Col>
          <Col className="text-end">
            <Button
              className="d-flex align-items-center ms-auto gap-50"
              onClick={toggleAddModal}
            >
              <Plus size={16} />
              Nodes
            </Button>

            <AddModalNodes show={addModal} toggleModal={toggleAddModal} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomDataTable
              columns={columns(
                editModal,
                cordonModal,
                drainModal,
                toggleEditModal,
                toggleCordonModal,
                toggleDrainModal
              )}
              data={filteredData || []}
              totalRows={store?.total} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

NodesMain.displayName = 'NodesMain';
export { NodesMain };
