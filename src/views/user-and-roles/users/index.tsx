import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const UsersMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.userAndRoles?.users?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.userAndRoles.users.GetMainData());
  }, [dispatch]);

  const [search, setSearch] = useState('');
  const handleSearchChange = (text: string) => {
    setSearch(text);
  };
  const filteredData = store?.data.filter((item) => item.userName.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h4 className="py-3 px-2 fw-bold m-0 text-black">Users</h4>
      <div className="px-2 element-wrapper">
        <div className="border rounded p-2">
          <Row className="mb-1">
            <Col xs={5}>
              <SearchFilter onSearchChange={handleSearchChange} />
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomDataTable
                columns={columns}
                data={filteredData || []}
                totalRows={store?.total} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

UsersMain.displayName = 'UsersMain';
export { UsersMain };
