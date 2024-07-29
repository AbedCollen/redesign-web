import { useEffect } from 'react';
import { Col } from 'react-bootstrap';

import { CustomDataTable, NxSearch } from '@components/custom';
import { StoreCommand, useStore } from '@models/store';

import { Columns } from './columns';

const TriggeredAlertMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.monitoringAlerting?.triggeredAlert?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.ingress.GetMainData());
  }, [dispatch]);

  return (
    <div>
      <h4 className="py-3 px-2 m-0 fw-bold text-black">Triggered Alert</h4>
      <div className="px-2 element-wrapper">
        <div className="rounded border p-1">
          <div className="mb-1">
            <Col xs={5}>
              <NxSearch />
            </Col>
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

TriggeredAlertMain.displayName = 'TriggeredAlertMain';
export { TriggeredAlertMain };
