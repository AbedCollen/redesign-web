/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import noSyncWindows from 'assets/app-management/no-sync-windows.png';

import { RefreshCcw } from '@nxweb/icons/feather';

import { SearchFilter } from '@components/custom/search-filter';

const ProjectsWindows = () => {
  // BLM ADA DATA
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [search, setSearch] = useState('');
  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  return (
    <div className="p-2">
      <Row className="mb-2 d-flex">
        <Col xs={5}>
          <SearchFilter onSearchChange={handleSearchChange} />
        </Col>
        <Col className="d-flex justify-content-end gap-50">
          <Button
            className="d-flex gap-50 align-items-center"
            variant="primary"
          >
            <RefreshCcw size={16} /> Sync Windows
          </Button>
        </Col>
      </Row>
      <div className="mb-2 d-flex justify-content-center">
        <img alt="No Sync Windows" className="w-25" src={noSyncWindows} />
      </div>
      <div className="mb-2 text-center fw-bold">
        Project has no sync windows{' '}
      </div>
      <div className="mb-2 text-center">
        Try to input your data and it will show up here
      </div>
    </div>
  );
};

ProjectsWindows.displayName = 'ProjectsWindows';

export default ProjectsWindows;
