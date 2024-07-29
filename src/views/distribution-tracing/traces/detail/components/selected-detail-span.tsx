import type { FC } from 'react';
import { Button, FormLabel, Row, Tab, Tabs } from 'react-bootstrap';

import type { TracesDataModel } from '@models/app/distribution-tracing/traces/types';

import { CollectorModal } from './modal';

interface SelectedDetailSpanProps {
  readonly modalStatus: boolean
  readonly store: TracesDataModel | undefined
  readonly detailTime: (index: number) => void
  readonly toggleModal: () => void
}

const SelectedDetailSpan: FC<SelectedDetailSpanProps> = ({
  modalStatus,
  store,
  detailTime,
  toggleModal
}) => {
  return (
    <Row className="border border-dark rounded-2 p-1 nx-form-control gap-2">
      <FormLabel className="form-label">Detail for Selected Span</FormLabel>
      <div>
        <FormLabel className="form-label">Services</FormLabel>
        <p className="ms-1 text-info">{store?.service}</p>
      </div>
      <div>
        <FormLabel className="form-label">Operation</FormLabel>
        <p className="ms-1 text-info">{store?.operation}</p>
      </div>
      <div className="d-flex">
        <Button onClick={() => detailTime(1)}>Go To Related Logs</Button>
      </div>
      <div>
        <Tabs
          className="mb-1 border-bottom"
          defaultActiveKey="tags"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="tags" title="Tags">
            <div className="d-flex row gap-2">
              <div>
                <FormLabel className="form-label">service.name</FormLabel>
                <div className="border rounded-2 p-1 fs-5">
                  {store?.service}
                </div>
              </div>
              <div>
                <FormLabel className="form-label">otel.collector.id</FormLabel>
                <div className="border rounded-2 p-1 fs-5 w-100 d-inline-block">
                  <p className="text-truncate">
                    {store?.detail.otelCollectorId}
                  </p>
                  <a className="text-primary" href="#" onClick={toggleModal}>
                    View full value
                  </a>
                </div>
                <CollectorModal
                  show={modalStatus}
                  store={store?.detail?.otelCollectorId}
                  onHide={toggleModal} />
              </div>
              <div>
                <FormLabel className="form-label">
                  telementry.sdk.language
                </FormLabel>
                <div className="border rounded-2 p-1 fs-5">
                  {store?.detail.telemetrySdkLanguage}
                </div>
              </div>
              <div>
                <FormLabel className="form-label">
                  telementry.sdk.name
                </FormLabel>
                <div className="border rounded-2 p-1 fs-5">
                  {store?.detail.telemetrySdkName}
                </div>
              </div>
              <div>
                <FormLabel className="form-label">
                  telementry.sdk.version
                </FormLabel>
                <div className="border rounded-2 p-1 fs-5">
                  {store?.detail.telemetrySdkVersion}
                </div>
              </div>
            </div>
          </Tab>

          <Tab eventKey="events" title="Events">
            No events data in selected span
          </Tab>
        </Tabs>
      </div>
    </Row>
  );
};

SelectedDetailSpan.displayName = 'SelectedDetailSpan';
export { SelectedDetailSpan };
