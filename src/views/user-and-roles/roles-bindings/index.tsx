import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Plus } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';
import { AddModalYAML } from '../components/add-yaml';

const RolesBindingsMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.userAndRoles?.rolesBindings?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.userAndRoles.rolesBindings.GetMainData());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleRolesDetail = (id: number) => {
    navigate(`./detail/${id}`);
  };

  const [search, setSearch] = useState('');
  const handleSearchChange = (text: string) => {
    setSearch(text);
  };
  const filteredData = store?.data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  const [showMonaco, setShowMonaco] = useState(false);
  const toggleMonaco = () => {
    setShowMonaco(!showMonaco);
  };

  return (
    <div>
      <h4 className="py-3 px-2 fw-bold m-0 text-black">Roles Binding</h4>
      <div className="px-2 element-wrapper">
        <div className="border rounded p-2">
          <Row className="mb-1">
            <Col xs={5}>
              <SearchFilter onSearchChange={handleSearchChange} />
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
              <Button
                className="d-flex gap-50 align-items-center"
                onClick={toggleMonaco}
              >
                <Plus size={16} /> Roles Binding
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomDataTable
                columns={columns(handleRolesDetail)}
                data={filteredData || []}
                totalRows={store?.total} />
            </Col>
          </Row>
          <AddModalYAML showMonaco={showMonaco} toggleMonaco={toggleMonaco} />
        </div>
      </div>
    </div>
  );
};

RolesBindingsMain.displayName = 'RolesBindingsMain';
export { RolesBindingsMain };
