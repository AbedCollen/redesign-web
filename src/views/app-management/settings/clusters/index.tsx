import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { CustomDataTable } from '@components/custom';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const ClustersMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.appManagement?.clusters?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.appManagement.clusters.GetMainData());
  }, [dispatch]);

  const navigate = useNavigate();
  const detailClusters = (id: number) => {
    navigate(`./detail-clusters/${id}`);
  };

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold text-black mt-1">Clusters</h4>
      <div className="border rounded p-2 mt-3">
        <Row>
          <Col>
            <CustomDataTable
              columns={columns(detailClusters)}
              data={store?.data || []}
              totalRows={store?.total} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

ClustersMain.displayName = 'ClustersMain';

export { ClustersMain };
