import { useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import { CustomDataTable } from '@components/custom';
import { StoreCommand, useStore } from '@models/store';

import { annotationColumns, hostColumns, labelColumns } from './columns';

const IngressDetailMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.ingress
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.ingress.GetDetailData());
  }, [dispatch]);

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mb-2 text-black">Ingress Detail</h4>
      <div className="border rounded">
        <Form className="rounded shadow-sm p-1">
          <Row>
            <Col>
              <Form.Group className="mb-1" controlId="formName">
                <Form.Label className="fw-bold fs-4 text-dark">
                  Host Name
                </Form.Label>
                <Form.Control
                  defaultValue={store?.detail.name}
                  disabled={true}
                  placeholder="Placeholder"
                  type="text" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <CustomDataTable
                columns={hostColumns}
                data={store?.detail.hostTable || []}
                pagination={false}
                totalRows={3} />
            </Col>
          </Row>

          <Row className="mt-1">
            <Col xs={5}>
              <p className="fw-bold fs-4 text-dark">Labels</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomDataTable
                columns={labelColumns}
                data={store?.detail.labelTable || []}
                pagination={false}
                totalRows={store?.main.total} />
            </Col>
          </Row>

          <Row className="mt-1">
            <Col xs={5}>
              <p className="fw-bold fs-4 text-dark">Annotations</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomDataTable
                columns={annotationColumns}
                data={store?.detail.annotationTable || []}
                pagination={false}
                totalRows={store?.main.total} />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

IngressDetailMain.displayName = 'IngressDetailMain';
export { IngressDetailMain };
