import { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import { Check, Download, Edit2 } from '@nxweb/icons/feather';

import { CustomDataTable, MonacoEditor } from '@components/custom';
import type { VolumeDataModel } from '@models/app/project-management/volume/types';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const VolumeDetailMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.volume?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.volume.GetMainData());
  }, [dispatch]);

  const [showMonaco, setShowMonaco] = useState(false);
  const handleCloseMonaco = () => setShowMonaco(false);
  const handleShowMonaco = () => setShowMonaco(true);

  const location = useLocation();
  const data = location.state;
  const tableData: VolumeDataModel[] = [data];

  return (
    <div className="element-wrapper">
      <Row className="shadow-sm p-2">
        <Col xs={5}>
          <h4 className="fw-bold text-black">Volume Detail</h4>
        </Col>
        <Col className="text-end">
          <Button onClick={handleShowMonaco}>
            <Edit2 className="me-75" fill="currentColor" size={16} /> Update
            YAML
          </Button>
        </Col>
      </Row>
      <div className="p-2 m-2 border rounded">
        <Row>
          <Col>
            <Form.Group className="mb-1" controlId="formName">
              <Form.Label className="fw-bold fs-4 text-dark">
                Namespace
              </Form.Label>
              <Form.Control
                defaultValue={data?.namespace}
                placeholder="Placeholder"
                type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-1" controlId="formName">
              <Form.Label className="fw-bold fs-4 text-dark">
                Persistent Volume
              </Form.Label>
              <Form.Control
                defaultValue={data?.persistentVolume}
                placeholder="Placeholder"
                type="text" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-1">
          <Col xs={5}>
            <p className="fw-bold fs-4 text-dark">Status</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomDataTable
              columns={columns}
              data={tableData}
              totalRows={store?.total} />
          </Col>
        </Row>
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
            {data?.claimName}
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

VolumeDetailMain.displayName = 'VolumeDetailMain';
export { VolumeDetailMain };
