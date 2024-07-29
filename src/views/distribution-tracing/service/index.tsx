/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomDataTable } from '@components/custom/custom-data-table';
import { SearchFilter } from '@components/custom/search-filter';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';
import { DistributionTracingHeader } from '../components/distribution-tracing-header';

const ServiceMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.distributionTracing?.service?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.distributionTracing.service.GetMainData());
  }, [dispatch]);

  const navigate = useNavigate();
  const detailService = (index: number) => {
    navigate(`./detail/${index}`);
  };

  const [selectedFilter, setSelectedFilter] = useState<string>('Last 5 min');
  const [openConfirm, setOpenConfirm] = useState(false);
  const toggleModal = () => setOpenConfirm(!openConfirm);

  const handleFilterViews = (eventKey: string | null) => {
    if (eventKey === 'Custom') {
      setOpenConfirm(true);
    } else if (eventKey !== null) {
      setSelectedFilter(eventKey);
    }
  };

  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.application.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="element-wrapper">
      <div className=" shadow-sm p-2 d-flex justify-content-between">
        <DistributionTracingHeader
          handleFilterViews={handleFilterViews}
          openConfirm={openConfirm}
          selectedFilter={selectedFilter}
          title="Service"
          toggleModal={toggleModal} />
      </div>

      <div className="element-wrapper m-1 p-2 border rounded">
        <div className="w-100">
          <SearchFilter onSearchChange={handleSearchChange} />
        </div>
        <div className="mt-2">
          <CustomDataTable
            columns={columns(detailService)}
            data={filteredData || []}
            pagination={false} />
        </div>
      </div>
    </div>
  );
};

ServiceMain.displayName = 'ServiceMain';
export { ServiceMain };
