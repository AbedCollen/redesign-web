import { useEffect, useRef } from 'react';
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap';

import { Check, Upload, X } from '@nxweb/icons/feather';

import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

const EditCertificateMain = () => {
  const [store, dispatch] = useStore((state) => state?.app?.projectManagement?.certificate?.detail);

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.certificate.GetDetailData());
  }, [dispatch]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };

  return (
    <div className="element-wrapper">
      <Row className="p-2 shadow-sm">
        <Col>
          <h5 className="fw-bold text-black">Edit Certificate</h5>
        </Col>
        <Col>
          <div className="d-flex align-items-center justify-content-end gap-75">
            <Button
              as="a"
              className="d-flex align-items-center justify-content-center gap-50"
              href={allRoutes.projectManagement.certificate}
              variant="outline-danger"
            >
              <X size={20} />
              Cancel
            </Button>
            <Button
              as="a"
              className="d-flex align-items-center justify-content-center gap-50"
              href={allRoutes.projectManagement.certificate}
            >
              <Check size={20} />
              Save
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="px-1 py-2 m-2 border rounded">
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-1" controlId="formName">
                <Form.Label className="fw-bold fs-4 text-dark">Name</Form.Label>
                <Form.Control defaultValue={store?.name} placeholder="Placeholder" type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-1" controlId="description">
              <Form.Label className="fw-bold fs-4 text-dark">
                Description
              </Form.Label>
              <Form.Control
                as="textarea"
                defaultValue={store?.description}
                placeholder="Placeholder"
                style={{ height: '150px' }} />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Row>
                <Form.Group className="mb-1" controlId="formScope">
                  <Form.Label className="fw-bold fs-4 text-dark">
                    Scope
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option defaultValue={store?.scope}>{store?.scope}</option>
                    <option value="1">Scope 1</option>
                    <option value="2">Scope 2</option>
                    <option value="3">Scope 3</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row>
                <Form.Check
                  checked={true}
                  className="mb-2 ms-2"
                  id="certificate-manager"
                  label="Allow Certificate Manager"
                  name="Certificate Manager"
                  type="checkbox" />
              </Row>
            </Col>
            <Col>
              <Form.Group className="mb-1" controlId="formNamespace">
                <Form.Label className="fw-bold fs-4 text-dark">
                  Namespace
                </Form.Label>
                <Form.Control defaultValue={store?.namespace} placeholder="Placeholder" type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Accordion alwaysOpen={true} defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                          <Accordion.Header className="border-primary rounded">
                              <Row className="w-100">
                                  <Col className="d-flex align-items-center text-info" xs={5}>
                                      Private Key
                                  </Col>
                                  <Col className="d-flex justify-content-end">
                                  <input className="d-none" ref={inputRef} type="file" />
                                  <Button
                                    className="d-flex align-items-center justify-content-center gap-50"
                                    variant="outline-primary"
                                    onClick={handleUpload}
                                  >
                                      <Upload size={20} />
                                      Private Key
                                  </Button>
                                  </Col>
                              </Row>
                          </Accordion.Header>
                          <Accordion.Body>
                              <Form.Group className="mb-1" controlId="privateKey">
                                  <Form.Control
                                    as="textarea"
                                    style={{ height: '500px' }} />
                              </Form.Group>
                          </Accordion.Body>
                      </Accordion.Item>
            </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <Accordion alwaysOpen={true} className="mt-1" defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                          <Accordion.Header className="border-primary rounded-top">
                              <Row className="w-100">
                                      <Col className="d-flex align-items-center text-info" xs={5}>
                                          CA Certificate
                                      </Col>
                                      <Col className="d-flex justify-content-end">
                                      <input className="d-none" ref={inputRef} type="file" />
                                      <Button
                                        className="d-flex align-items-center justify-content-center gap-50"
                                        variant="outline-primary"
                                        onClick={handleUpload}
                                      >
                                          <Upload size={20} />
                                          Certificate
                                      </Button>
                                      </Col>
                              </Row>
                          </Accordion.Header>
                          <Accordion.Body>
                              <Form.Group className="mb-1" controlId="caCertificate">
                                  <Form.Control
                                    as="textarea"
                                    style={{ height: '500px' }} />
                              </Form.Group>
                          </Accordion.Body>
                      </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Form>
      </Row>
    </div>
  );
};

EditCertificateMain.displayName = 'EditCertificateMain';
export { EditCertificateMain };
