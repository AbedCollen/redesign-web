import { useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import { CustomDataTable } from '@components/custom/custom-data-table';
import { NxSearch } from '@components/custom/nx-search';
import { StoreCommand, useStore } from '@models/store';

import { labelColumns, publishedColumns } from './columns';

const ServiceDiscoveryDetailMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.servicediscovery
  );

  useEffect(() => {
    dispatch(
      StoreCommand.app.projectManagement.servicediscovery.GetDetailData()
    );
  }, [dispatch]);

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mb-2 text-black">{store?.detail?.name}</h4>
      <div>
        <div className="border rounded p-2">
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-1" controlId="name">
                  <Form.Label className="fw-bold fs-4 text-dark">
                    Name
                  </Form.Label>
                  <Form.Control placeholder="Placeholder" type="text" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-1" controlId="namespaces">
                  <Form.Label className="fw-bold fs-4 text-dark">
                    Namespaces
                  </Form.Label>
                  <Form.Control placeholder="Placeholder" type="text" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="pt-1">
              <Form.Label className="fw-bold fs-2 text-dark">Label</Form.Label>
              <Col xs={5}>
                <NxSearch />
              </Col>
            </Row>
            <Row className="pt-1">
              <CustomDataTable
                columns={labelColumns}
                data={store?.detail.labelTable || []}
                pagination={false} />
            </Row>
            <Row className="pt-2">
              <Form.Label className="fw-bold fs-2 text-dark">
                Published IP Addresses
              </Form.Label>
              <Col xs={5}>
                <NxSearch />
              </Col>
            </Row>
            <Row className="pt-1">
              <CustomDataTable
                columns={publishedColumns}
                data={store?.detail.publishedTable || []}
                pagination={false} />
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

ServiceDiscoveryDetailMain.displayName = 'ServiceDiscoveryDetailMain';
export { ServiceDiscoveryDetailMain };
