import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Plus } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const StatefulMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.deployment?.main
  );

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.deployment.GetMainData());
  }, [dispatch]);

  const onClick = (id: number) => {
    navigate(`./detail/${id}`);
  };
  const onClickEdit = (id: number) => {
    navigate(`./edit/${id}`);
  };

  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mb-2 text-black">StatefulSet</h4>
      <div className="rounded border p-1">
        <Row className="mb-1">
          <Col xs={5}>
            <SearchFilter onSearchChange={handleSearchChange} />
          </Col>
          <Col className="d-flex justify-content-end">
            <Button className="d-flex align-items-center gap-50" href={allRoutes.projectManagement.statefulAdd}>
              <Plus size={16} />
              StatefulSet
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomDataTable
              columns={columns(onClick, onClickEdit)}
              data={filteredData || []}
              totalRows={store?.total} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

StatefulMain.displayName = 'StatefulMain';
export { StatefulMain };
