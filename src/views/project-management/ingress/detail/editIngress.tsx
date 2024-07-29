import { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

import { Check, Download, Edit2 } from '@nxweb/icons/feather';

import { CustomDataTable, MonacoEditor } from '@components/custom';
import { StoreCommand, useStore } from '@models/store';

import { annotationColumns, hostColumns, labelColumns } from './columns';

const IngressEditMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.ingress
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.ingress.GetDetailData());
  }, [dispatch]);

  const [showMonaco, setShowMonaco] = useState(false);
  const handleCloseMonaco = () => setShowMonaco(false);
  const handleShowMonaco = () => setShowMonaco(true);

  return (
    <div className="element-wrapper">
      <Row className="shadow-sm p-2">
        <Col xs={5}>
          <h4 className="fw-bold text-black">Edit Ingress</h4>
        </Col>
        <Col className="text-end">
          <Button onClick={handleShowMonaco}>
            <Edit2 className="me-75" fill="currentColor" size={16} /> Update
            YAML
          </Button>
        </Col>
      </Row>
      <div className="m-2 border rounded">
        <Form className="rounded shadow-sm p-1">
          <Row>
            <Col>
              <Form.Group className="mb-1" controlId="formName">
                <Form.Label className="fw-bold fs-4 text-dark">
                  Host Name
                </Form.Label>
                <Form.Control
                  defaultValue={store?.detail.name}
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
                totalRows={store?.main.total} />
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

      {/* Edit YAML */}
      <Modal
        centered={true}
        className="confirmation-modal"
        show={showMonaco}
        size="lg"
      >
        <Modal.Header className="p-1">
          <div className="d-flex align-items-center">
            <p className="fw-bold me-25 m-0">Edit Yaml: </p>
            {store?.detail.name}
          </div>
        </Modal.Header>

        <Modal.Body className="p-1">
          <MonacoEditor language="yaml" />
        </Modal.Body>

        <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
          <Button
            className="justify-content-center text-danger"
            variant="flat-primary"
            onClick={handleCloseMonaco}
          >
            Cancel
          </Button>
          <Button
            className="d-flex align-items-center justify-content-center gap-50"
            variant="outline-primary"
            onClick={handleCloseMonaco}
          >
            <Download size={20} /> Download YAML
          </Button>
          <Button
            className="d-flex align-items-center justify-content-center gap-50"
            onClick={handleCloseMonaco}
          >
            <Check size={20} /> Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

IngressEditMain.displayName = 'IngressEditMain';
export { IngressEditMain };
