import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { Plus } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { StoreCommand, useStore } from '@models/store';

import { columnsDetail } from '../../columns';

const ProjectsRoles = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.appManagement?.projects?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.appManagement.projects.GetMainData());
  }, [dispatch]);

  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-2 ">
      <Row className="d-flex mb-2">
        <Col xs={5}>
          <SearchFilter onSearchChange={handleSearchChange} />
        </Col>
        <Col className="d-flex justify-content-end gap-50">
          <Button className="d-flex align-items-center justify-content-center gap-50">
            <Plus size={20} /> Add Roles
          </Button>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <CustomDataTable
            columns={columnsDetail}
            data={filteredData || []}
            totalRows={store?.total} />
        </Col>
      </Row>
    </div>
  );
};

ProjectsRoles.displayName = 'ProjectsRoles';

export default ProjectsRoles;
