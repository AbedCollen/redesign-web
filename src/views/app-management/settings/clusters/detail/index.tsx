/* eslint-disable react/hook-use-state */
import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import { Check, CheckCircle, Edit2 } from '@nxweb/icons/feather';

import { NxFormControl } from '@components/custom';
import type { ClustersDataModel } from '@models/app/app-management/clusters/types';
import { StoreCommand, useStore } from '@models/store';

const headerStyle = 'border rounded-top border-secondary p-1 fw-bold';
const lowerContainerBorderStyle = 'border rounded-bottom border-top-0 p-1';
const layoutStyle = 'd-flex align-items-center gap-50';

const ClustersDetailMain = () => {
  const [editValue, setEditValue] = useState(true);

  const classNameForm = { container: 'mb-1' };

  const toggleButton = () => {
    setEditValue(!editValue);
  };

  const [store, dispatch] = useStore(
    (state) => state?.app?.appManagement?.clusters?.detail
  );

  useEffect(() => {
    dispatch(StoreCommand.app.appManagement.clusters.GetMainData());
  }, [dispatch]);

  const [stateData, setStateData] = useState<
  Partial<ClustersDataModel> | undefined
  >(store);
  const handleChange = (value: string, prop: string) => setStateData((prev) => ({ ...prev, [prop]: value }));

  useEffect(() => {
    setStateData(store);
  }, [store]);

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold text-black mt-1">Clusters</h4>
      <div className="p-2 mt-3 border">
        <Row>
          <Col>
            <div>
              <div
                className={`${headerStyle} d-flex justify-content-between align-items-center`}
              >
                <div>General</div>
                <div className="d-flex justify-content-end">
                  {editValue
                    ? (
                    <Button
                      className={`${layoutStyle}`}
                      variant="outline-primary"
                      onClick={toggleButton}
                    >
                      <Edit2 size={16} />
                      Edit
                    </Button>
                    )
                    : (
                    <div>
                      <div className="d-flex gap-75">
                        <Button variant="flat-primary" onClick={toggleButton}>
                          Cancel
                        </Button>
                        <Button
                          className={`${layoutStyle}`}
                          variant="outline-primary"
                        >
                          <Check size={16} />
                          Save
                        </Button>
                      </div>
                    </div>
                    )}
                </div>
              </div>
              <div className={lowerContainerBorderStyle}>
                <Row>
                  <Col>
                    <NxFormControl
                      className={classNameForm}
                      disabled={editValue}
                      label="Server"
                      placeholder="Placeholder"
                      type="text" />
                  </Col>
                  <Col>
                    <NxFormControl
                      className={classNameForm}
                      disabled={editValue}
                      label="Credentials Type"
                      placeholder="Placeholder"
                      type="text" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <NxFormControl
                      className={classNameForm}
                      disabled={editValue}
                      label="Name"
                      placeholder="Placeholder"
                      type="text"
                      value={stateData?.name || ''}
                      onChange={(e) => handleChange(e.target.value, 'name')} />
                  </Col>
                  <Col>
                    <NxFormControl
                      className={classNameForm}
                      disabled={editValue}
                      label="Default"
                      placeholder="Placeholder"
                      type="text"
                      value={stateData?.default || ''}
                      onChange={(e) => handleChange(e.target.value, 'default')} />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-1">
          <Col>
            <div>
              <div className={headerStyle}>Cache Info</div>
              <div className={lowerContainerBorderStyle}>
                <Row>
                  <Col>
                    <Form.Group
                      className="nx-form-control mb-1"
                      controlId="formName"
                    >
                      <Form.Label className="form-label fw-bold fs-6 text-dark">
                        Server
                      </Form.Label>
                      <div>
                        <span className="text-success border-success bg-light-success badge rounded-pill">
                          <div className={`${layoutStyle} p-25`}>
                            <CheckCircle className="ms-25" size={12} />
                            <div className="text-body-3 text-dark-success fw-medium">
                              Chips Status
                            </div>
                          </div>
                        </span>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <NxFormControl
                      className={classNameForm}
                      disabled={true}
                      label="Version"
                      placeholder="Placeholder"
                      type="text"
                      value={store?.version || ''} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <NxFormControl
                      className={classNameForm}
                      disabled={true}
                      label="Details"
                      placeholder="Placeholder"
                      type="text"
                      value={store?.details || ''} />
                  </Col>
                  <Col>
                    <NxFormControl
                      className={classNameForm}
                      disabled={true}
                      label="Modified at"
                      placeholder="Placeholder"
                      type="text"
                      value={store?.modified || ''} />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-1">
          <Col>
            <div>
              <div className={headerStyle}>Cache Info</div>
              <div className={lowerContainerBorderStyle}>
                <Row>
                  <Col>
                    <NxFormControl
                      className={classNameForm}
                      disabled={true}
                      label="Re-Synchronized"
                      placeholder="Placeholder"
                      type="text"
                      value={store?.resync || ''} />
                  </Col>
                  <Col>
                    <NxFormControl
                      className={classNameForm}
                      disabled={true}
                      label="APIs Count"
                      placeholder="Placeholder"
                      type="text"
                      value={store?.apiCount || ''} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <NxFormControl
                      className={classNameForm}
                      disabled={true}
                      label="Resource Count"
                      placeholder="Placeholder"
                      type="text"
                      value={store?.resourceCount || ''} />
                  </Col>
                  <Col>
                    <NxFormControl
                      className={classNameForm}
                      disabled={true}
                      label="Application Count"
                      placeholder="Placeholder"
                      type="text"
                      value={store?.applicationCount || ''} />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

ClustersDetailMain.displayName = 'ClustersDetailMain';
export { ClustersDetailMain };
