/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { StoreCommand, useStore } from '@models/store';

import { SelectedDetailSpan } from './components/selected-detail-span';
import TundraTraceChart from './components/tundra-traces-chart';

const TracesDetailMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.distributionTracing?.traces?.detail
  );

  const navigate = useNavigate();
  const detailTime = (index: number) => {
    navigate(`../distribution-tracing/traces/detail/time/${index}`);
  };

  useEffect(() => {
    dispatch(StoreCommand.app.distributionTracing.traces.GetDetailData());
  }, [dispatch]);

  const [modalStatus, setModalStatus] = useState(false);

  const toggleModal = () => setModalStatus(!modalStatus);

  return (
    <div className="p-3 d-flex row gap-5">
      <div>
        <h5 className="text-black m-0">{store?.idNumber}</h5>
      </div>
      <Row>
        <Col className="element-wrapper" sm={9}>
          <div className="border rounded-2 p-1 mb-2">
            <div className="w-100 p-0">
              <TundraTraceChart />
            </div>
          </div>
        </Col>
        <Col className="element-wrapper" sm={3}>
          <SelectedDetailSpan
            detailTime={detailTime}
            modalStatus={modalStatus}
            store={store}
            toggleModal={toggleModal} />
        </Col>
      </Row>
    </div>
  );
};

TracesDetailMain.displayName = 'TracesDetailMain';
export { TracesDetailMain };
