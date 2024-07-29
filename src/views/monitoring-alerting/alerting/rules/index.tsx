import { useEffect } from 'react';
import { Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Plus } from '@nxweb/icons/bootstrap';

import { CustomDataTable } from '@components/custom/custom-data-table';
import { NxSearch } from '@components/custom/nx-search';
import { StoreCommand, useStore } from '@models/store';

import { Columns } from './columns';

const AlertingRulesMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.monitoringAlerting?.alertingRules?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.ingress.GetMainData());
  }, [dispatch]);
  const navigate = useNavigate();
  const typePageOnClick = () => {
    navigate('./type');
  };

  return (
    <div>
      <h4 className="py-3 px-2 m-0 fw-bold text-black">Alerting Rules</h4>
      <div className="px-2 element-wrapper">
        <div className="rounded border p-1">
          <div className="d-flex justify-content-between pb-1">
            <Col xs={5}>
              <NxSearch />
            </Col>
            <div>
              <Button
                as="a"
                className="d-flex flex-row gap-50 align-items-center btn-lg"
                onClick={() => typePageOnClick()}
              >
                <Plus size={25} /> Alert
              </Button>
            </div>
          </div>

          <div>
            <Col>
              <CustomDataTable
                columns={Columns}
                data={store?.data || []}
                totalRows={store?.total} />
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
};

AlertingRulesMain.displayName = 'AlertingRulesMain';
export { AlertingRulesMain };
