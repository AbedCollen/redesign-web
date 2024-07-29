import { useEffect } from 'react';
import { Button, Col } from 'react-bootstrap';

import { Plus } from '@nxweb/icons/bootstrap';

import { CustomDataTable } from '@components/custom/custom-data-table';
import { NxSearch } from '@components/custom/nx-search';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { Columns } from './columns';

const AlertingChannelMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.monitoringAlerting?.triggeredAlert?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.ingress.GetMainData());
  }, [dispatch]);

  return (
    <div>
      <h4 className="py-3 px-2 m-0 fw-bold text-black">Alerting Channel</h4>
      <div className="px-2 element-wrapper">
        <div className="border rounded p-1">
          <div className="d-flex justify-content-between mb-1">
            <Col xs={5}>
              <NxSearch />
            </Col>
            <div className="d-flex gap-50 align-items-center">
              <Button
                as="a"
                href={allRoutes.monitoringAlerting.alertingChannelAdd}
              >
                <Plus size={25} /> Alert Channel
              </Button>
            </div>
          </div>

          <div>
            <CustomDataTable
              columns={Columns}
              data={store?.data || []}
              totalRows={store?.total} />
          </div>
        </div>
      </div>
    </div>
  );
};

AlertingChannelMain.displayName = 'AlertingChannelMain';
export { AlertingChannelMain };
