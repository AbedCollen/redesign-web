/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';

import { StoreCommand, useStore } from '@models/store';

import { DatabaseCalls } from './components/databaseCalls';
import { ExternalCalls } from './components/externalCalls';
import { OverviewMetrics } from './components/overviewMetrics';
import { DistributionTracingHeader } from '../../components/distribution-tracing-header';

const ServiceDetailMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.distributionTracing?.service?.detail
  );

  useEffect(() => {
    dispatch(StoreCommand.app.distributionTracing.service.GetDetailData());
  }, [dispatch]);

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

  const [activeTabs, setActiveTabs] = useState<string>('overviewMetrics');

  const handleTabs = (tabs: string) => {
    setActiveTabs(tabs);
  };

  return (
    <>
      <div className="shadow-sm p-2 d-flex justify-content-between">
        <DistributionTracingHeader
          handleFilterViews={handleFilterViews}
          openConfirm={openConfirm}
          selectedFilter={selectedFilter}
          title="Service"
          toggleModal={toggleModal} />
      </div>

      <div className="m-1 p-2 border rounded">
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link
              active={activeTabs === 'overviewMetrics'}
              onClick={() => handleTabs('overviewMetrics')}
            >
              Overview Metrics
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTabs === 'databaseCalls'}
              onClick={() => handleTabs('databaseCalls')}
            >
              Database Calls
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTabs === 'externalCalls'}
              onClick={() => handleTabs('externalCalls')}
            >
              External Calls
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {activeTabs === 'overviewMetrics' && <OverviewMetrics store={store} />}
        {activeTabs === 'databaseCalls' && <DatabaseCalls />}
        {activeTabs === 'externalCalls' && <ExternalCalls />}
      </div>
    </>
  );
};

ServiceDetailMain.displayName = 'ServiceDetailMain';
export { ServiceDetailMain };
