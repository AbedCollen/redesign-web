import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import { StoreCommand, useStore } from '@models/store';

import RetentionPeriodForm from '../../../components/custom/retention-period-form';

const RetentionMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.settings?.retention?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.settings.retention.GetMainData());
  }, [dispatch]);

  return (
    <div>
      <h4 className="py-3 px-2 fw-bold m-0 text-black">Retention</h4>

      <Row className="px-2">
        <Col className="element-wrapper" sm={6}>
          <div className="border rounded p-2 mb-3">
            <h5 className="pb-1 fw-bold">Metrics</h5>
            <RetentionPeriodForm
              data={store?.metrics || { value: 0, timeUnit: '' }} />
          </div>
        </Col>
        <Col className="element-wrapper" sm={6}>
          <div className="border rounded p-2 mb-3">
            <h5 className="pb-1 fw-bold">Traces</h5>
            <RetentionPeriodForm
              data={store?.traces || { value: 0, timeUnit: '' }} />
          </div>
        </Col>
      </Row>
      <Row className="px-2">
        <Col className="element-wrapper" sm={6}>
          <div className="border rounded p-2 mb-3">
            <h5 className="pb-1 fw-bold">Logs</h5>
            <RetentionPeriodForm
              data={store?.logs || { value: 0, timeUnit: '' }} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

RetentionMain.displayName = 'RetentionMain';
export { RetentionMain };
