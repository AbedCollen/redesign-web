/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { Button, Dropdown, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Plus } from '@nxweb/icons/bootstrap';
import { AlignJustify, Grid, RefreshCcw } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';
import { ThumbnailView } from './components/thumbnail-view';

const ApplicationsMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.appManagement?.application?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.appManagement.application.GetMainData());
  }, [dispatch]);

  const [selectedTable, setSelectedTable] = useState<string>('Thumbnail View');

  const handleTableViews = (eventKey: string | null) => {
    if (eventKey !== null) {
      setSelectedTable(eventKey);
    }
  };

  const navigate = useNavigate();
  const handleSyncApp = (idx: number) => {
    navigate(`./sync-app/${idx}`);
  };

  const mapApp = (index: number) => {
    navigate(`./${index}`);
  };

  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mt-1 text-black">Application</h4>

      <div className="rounded border p-1 mt-3">
        <div className="mb-1 d-flex justify-content-between">
          <div className="d-flex gap-1 align-items-center">
            <SearchFilter onSearchChange={handleSearchChange} />
            <Dropdown onSelect={(e) => handleTableViews(e || '')}>
              <Dropdown.Toggle
                className="d-flex align-items-center border-neutral-50"
                variant="outline-dark"
              >
                {selectedTable === 'List View' &&
                  <AlignJustify className="me-1" size={16} />}
                {selectedTable === 'Thumbnail View' &&
                  <Grid className="me-1" size={16} />}
                {selectedTable}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="List View">List View</Dropdown.Item>
                <Dropdown.Item eventKey="Thumbnail View">
                  Thumbnail View
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-flex gap-1 align-items-center">
            <Button
              className="d-flex gap-50 align-items-center"
              href={allRoutes.appManagement.applicationsSyncAll}
              variant="outline-primary"
            >
              <RefreshCcw size={16} /> Sync All
            </Button>
            <Button
              as="a"
              className="d-flex gap-50 align-items-center"
              href={allRoutes.appManagement.applicationsAddApplication}
            >
              <Plus size={16} /> Application
            </Button>
          </div>
        </div>

        <div>
          {selectedTable === 'List View' && (
            <CustomDataTable
              columns={columns(mapApp)}
              data={filteredData || []}
              totalRows={store?.total} />
          )}
          {selectedTable === 'Thumbnail View' && (
            <Row>
              {filteredData?.map((data) => <ThumbnailView {...data} handleSyncApp={handleSyncApp} />)}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
};

ApplicationsMain.displayName = 'ApplicationsMain';

export { ApplicationsMain };
