import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Plus, Upload } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';
import { AddModalYAML } from '../components/add-yaml';

const ServiceAccountsMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.userAndRoles?.serviceAccounts?.main
  );

  const [showAllItems, setShowAllItems] = useState<boolean[]>(
    new Array<boolean>(store?.total || 0).fill(false)
  );

  const handleToggleItems = (index: number, show: boolean) => {
    const expandStatus = [...showAllItems];

    expandStatus[index] = show;
    setShowAllItems(expandStatus);
  };

  useEffect(() => {
    dispatch(StoreCommand.app.userAndRoles.serviceAccounts.GetMainData());
  }, [dispatch]);

  const navigate = useNavigate();
  const detailServiceAccounts = (index: number) => {
    navigate(`./detail/${index}`, { state: { detailId: index } });
  };

  const editServiceAccounts = (index: number) => {
    navigate(`./edit/${index}`, { state: { detailId: index } });
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
      <h4 className="py-3 px-2 fw-bold m-0 text-black">Service Accounts</h4>
      <div className="px-2 element-wrapper">
        <div className="border rounded p-2">
          <Row className="mb-1">
            <Col xs={5}>
              <SearchFilter onSearchChange={handleSearchChange} />
            </Col>
            <Col className="d-flex justify-content-end">
              <div className="d-flex gap-1 align-items-center">
                <Button
                  className="d-flex gap-50 align-items-center"
                  variant="outline-primary"
                  onClick={toggleMonaco}
                >
                  <Upload size={16} /> YAML
                </Button>
                <Button
                  as="a"
                  className="d-flex gap-50 align-items-center"
                  href={allRoutes.userAndRoles.addServiceAccounts}
                >
                  <Plus size={16} /> Service Account
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomDataTable
                columns={columns(
                  detailServiceAccounts,
                  editServiceAccounts,
                  showAllItems,
                  handleToggleItems
                )}
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

ServiceAccountsMain.displayName = 'ServiceAccountsMain';
export { ServiceAccountsMain };
