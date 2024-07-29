/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row, Tab, Tabs } from 'react-bootstrap';

import { Check, Plus, Trash2, Upload } from '@nxweb/icons/feather';

import { CustomDataTable, MonacoEditor } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const StorageClassesMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.clusterManagement?.storageClasses?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.clusterManagement.storageClasess.GetMainData());
  }, [dispatch]);

  // Parameter
  const [parametersInputs, setParametersInputs] = useState<string[]>(['']);
  const handleParametersInputChange = (index: number, value: string) => {
    const updatedInputs = [...parametersInputs];

    updatedInputs[index] = value;
    setParametersInputs(updatedInputs);
  };
  const addParametersInput = () => {
    setParametersInputs([...parametersInputs, '']);
  };
  const removeParametersInput = (index: number) => {
    const updatedInputs = [...parametersInputs];

    updatedInputs.splice(index, 1);
    setParametersInputs(updatedInputs);
  };
  const removeAllParameters = () => {
    setParametersInputs(['']);
  };

  // Mount Options
  const [mountOptionsInputs, setMountOptionsInputs] = useState<string[]>(['']);
  const handleMountOptionsInputChange = (index: number, value: string) => {
    const updatedInputs = [...mountOptionsInputs];

    updatedInputs[index] = value;
    setMountOptionsInputs(updatedInputs);
  };
  const addMountOptionsInput = () => {
    setMountOptionsInputs([...mountOptionsInputs, '']);
  };
  const removeMountOptionsInput = (index: number) => {
    const updatedInputs = [...mountOptionsInputs];

    updatedInputs.splice(index, 1);
    setMountOptionsInputs(updatedInputs);
  };
  const removeAllMountOptions = () => {
    setMountOptionsInputs(['']);
  };

  // Storage
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showMonaco, setShowMonaco] = useState(false);
  const handleCloseMonaco = () => setShowMonaco(false);
  const handleShowMonaco = () => setShowMonaco(true);

  // Edit

  // Parameter
  const [parametersInputsEdit, setParametersInputsEdit] = useState<string[]>(['']);
  const handleParametersInputChangeEdit = (index: number, value: string) => {
    const updatedInputs = [...parametersInputsEdit];

    updatedInputs[index] = value;
    setParametersInputsEdit(updatedInputs);
  };
  const addParametersInputEdit = () => {
    setParametersInputsEdit([...parametersInputsEdit, '']);
  };
  const removeParametersInputEdit = (index: number) => {
    const updatedInputs = [...parametersInputsEdit];

    updatedInputs.splice(index, 1);
    setParametersInputsEdit(updatedInputs);
  };
  const removeAllParametersEdit = () => {
    setParametersInputsEdit(['']);
  };

  // Mount Options
  const [mountOptionsInputsEdit, setMountOptionsInputsEdit] = useState<
  string[]
  >(['']);
  const handleMountOptionsInputChangeEdit = (index: number, value: string) => {
    const updatedInputs = [...mountOptionsInputsEdit];

    updatedInputs[index] = value;
    setMountOptionsInputsEdit(updatedInputs);
  };
  const addMountOptionsInputEdit = () => {
    setMountOptionsInputsEdit([...mountOptionsInputsEdit, '']);
  };
  const removeMountOptionsInputEdit = (index: number) => {
    const updatedInputs = [...mountOptionsInputsEdit];

    updatedInputs.splice(index, 1);
    setMountOptionsInputsEdit(updatedInputs);
  };
  const removeAllMountOptionsEdit = () => {
    setMountOptionsInputsEdit(['']);
  };

  // Storage
  const [showEdit, setShowEdit] = useState<boolean[]>(new Array<boolean>(store?.total || 0));
  const handleCloseEdit  = (index: number) => {
    const expandStatus = [...showEdit];

    expandStatus[index] = false;
    setShowEdit(expandStatus);
  };
  const handleShowEdit  = (index: number) => {
    const expandStatus = [...showEdit];

    expandStatus[index] = true;
    setShowEdit(expandStatus);
  };

  const [openConfirm, setOpenConfirm] = useState(false);
  const toggleModal = () => setOpenConfirm(!openConfirm);

  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mb-2 text-black">Storage Classes</h4>
      <div className="rounded border p-1">
      <Row className="mb-1 w-100">
        <Col xs={5}>
          <SearchFilter onSearchChange={handleSearchChange} />
        </Col>
        <Col className="text-end">
          <Button variant="outline-primary" onClick={handleShowMonaco}>
            <Upload className="me-75" size={16} />
            YAML
          </Button>
          <Button className="ms-2" onClick={handleShow}>
            <Plus className="me-75" size={16} />
            Storage Classes
          </Button>

          <Modal
            centered={true}
            className="confirmation-modal"
            show={showMonaco}
            size="lg"
          >
            <Modal.Body className="p-1">
              <MonacoEditor language="yaml" />
            </Modal.Body>

            <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
              <Button
                className="justify-content-center"
                variant="flat-primary"
                onClick={handleCloseMonaco}
              >
                Cancel
              </Button>
              <Button
                className="d-flex align-items-center justify-content-center gap-50"
                onClick={handleCloseMonaco}
              >
                <Check size={20} />
                Save
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Modal */}
          <Modal
            centered={true}
            className="confirmation-modal"
            show={show}
            size="lg"
          >
            <h5 className="p-2 pb-1 border-bottom">Add Storage Class</h5>
            <Modal.Body className="p-1">
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-1" controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control placeholder="Placeholder" type="text" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-1" controlId="formProvisioner">
                      <Form.Label>Provisioner</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Output Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-1" controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Placeholder"
                    style={{ height: '150px' }} />
                </Form.Group>

                <Tabs
                  className="mb-1 border-bottom"
                  defaultActiveKey="parameters"
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey="parameters" title="Parameters">
                    <p className="fw-bold">Parameters</p>
                    <div className="border rounded p-1">
                      {parametersInputs.map((input, index) => (
                        <Form.Group key={index}>
                          <Row className="pb-1 align-items-center">
                            <Col sm={5}>
                              {index === 1 && <Form.Label>Key</Form.Label>}

                              {index >= 1 && (
                                <Form.Control
                                  placeholder={`Key ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => {
                                    return handleParametersInputChange(
                                      index,
                                      e.target.value
                                    );
                                  }} />
                              )}
                            </Col>
                            <Col sm={1}>
                              {index === 1 && <Form.Label />}
                              {index >= 1 && <div className="fw-bold">=</div>}
                            </Col>
                            <Col sm={5}>
                              {index === 1 && <Form.Label>Value</Form.Label>}
                              {index >= 1 && (
                                <Form.Control
                                  placeholder={`Value ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => {
                                    return handleParametersInputChange(
                                      index,
                                      e.target.value
                                    );
                                  }} />
                              )}
                            </Col>
                            <Col sm={1}>
                              {index === 1 && <Form.Label />}
                              {index !== 0 && (
                                <Button
                                  variant="outline-danger"
                                  onClick={() => removeParametersInput(index)}
                                >
                                  <Trash2 size={14} />
                                </Button>
                              )}
                            </Col>
                          </Row>
                        </Form.Group>
                      ))}

                      <div className="d-flex align-items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline-info"
                          onClick={addParametersInput}
                        >
                          <Plus size={12} />
                          Parameter
                        </Button>
                        <Button
                          disabled={parametersInputs.length <= 1}
                          size="sm"
                          variant={
                            parametersInputs.length <= 1
                              ? 'outline-secondary'
                              : 'outline-danger'
                          }
                          onClick={removeAllParameters}
                        >
                          <Trash2 size={14} />
                          Remove All
                        </Button>
                      </div>
                    </div>
                  </Tab>

                  <Tab eventKey="customize" title="Customize">
                    <Form.Group>
                      <Form.Label className="fs-5 mb-1">
                        Reclaim Policy
                      </Form.Label>
                      <Form.Check
                        className="mb-1"
                        id="reclaim-policy-delete"
                        label="Delete volumes and underlying device when volume claim is deleted"
                        name="reclaimPolicy"
                        type="radio" />
                      <Form.Check
                        className="mb-1"
                        id="reclaim-policy-retain"
                        label="Retain the volume for manual cleanup"
                        name="reclaimPolicy"
                        type="radio" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="fs-5 mb-1">
                        Allow users to expand volume
                      </Form.Label>
                      <Form.Check
                        className="mb-1"
                        id="allow-expand-yes"
                        label="Yes"
                        name="allowExpand"
                        type="radio" />
                      <Form.Check
                        className="mb-1"
                        id="allow-expand-no"
                        label="No"
                        name="allowExpand"
                        type="radio" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="fs-5 mb-1">
                        Volume binding mode
                      </Form.Label>
                      <Form.Check
                        className="mb-1"
                        id="binding-mode-once-created"
                        label="Bind and provision a persistent volume once the PersistentVolumeClaim is created"
                        name="bindingMode"
                        type="radio" />
                      <Form.Check
                        className="mb-1"
                        id="binding-mode-once-pod-created"
                        label="Bind and provision a persistent volume once a Pod using the PersistentVolumeClaim is created"
                        name="bindingMode"
                        type="radio" />
                    </Form.Group>
                  </Tab>

                  <Tab eventKey="mountOptions" title="Mount Options">
                    <p className="ps-1 fw-bold">Mount Options</p>
                    <div className="border rounded p-1">
                      <p className="fw-bold">Value</p>
                      {mountOptionsInputs.map((input, index) => (
                        <Form.Group key={index}>
                          <Row className="pb-1 align-items-center">
                            <Col sm={10}>
                              {index >= 1 && (
                                <Form.Control
                                  placeholder={`Input ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleMountOptionsInputChange(
                                    index,
                                    e.target.value
                                  )} />
                              )}
                            </Col>
                            <Col sm={2}>
                              {index !== 0 && (
                                <Button
                                  variant="outline-danger"
                                  onClick={() => removeMountOptionsInput(index)}
                                >
                                  <Trash2 size={12} />
                                </Button>
                              )}
                            </Col>
                          </Row>
                        </Form.Group>
                      ))}
                      <div className="d-flex align-items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline-info"
                          onClick={addMountOptionsInput}
                        >
                          <Plus size={14} />
                          Option
                        </Button>

                        <Button
                          disabled={mountOptionsInputs.length <= 1}
                          size="sm"
                          variant={
                            mountOptionsInputs.length <= 1
                              ? 'outline-secondary'
                              : 'outline-danger'
                          }
                          onClick={removeAllMountOptions}
                        >
                          <Trash2 size={14} />
                          Remove All
                        </Button>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
                {/* Label */}
              </Form>
            </Modal.Body>
            <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
              <Button
                className="justify-content-center"
                variant="flat-primary"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                className="d-flex align-items-center justify-content-center gap-50"
                onClick={handleClose}
              >
                <Check size={20} />
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
      <Row>
        <Col>
          <CustomDataTable
            columns={columns(
              parametersInputsEdit,
              showEdit,
              mountOptionsInputsEdit,
              handleCloseEdit,
              handleShowEdit,
              handleMountOptionsInputChangeEdit,
              addMountOptionsInputEdit,
              removeMountOptionsInputEdit,
              removeAllMountOptionsEdit,
              handleParametersInputChangeEdit,
              addParametersInputEdit,
              removeParametersInputEdit,
              removeAllParametersEdit,
              openConfirm,
              toggleModal
            )}
            data={filteredData || []}
            totalRows={store?.total} />
        </Col>
      </Row>
    </div>
    </div>
  );
};

StorageClassesMain.displayName = 'StorageClassesMain';
export { StorageClassesMain };
