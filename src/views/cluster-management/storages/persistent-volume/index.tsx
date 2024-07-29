/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Form,
  InputGroup,
  Modal,
  Row,
  Tab,
  Tabs
} from 'react-bootstrap';

import { Check, Plus, Trash2, Upload } from '@nxweb/icons/feather';

import { CustomDataTable, MonacoEditor } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const PersistentVolumeMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.clusterManagement?.persistentVolume?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.clusterManagement.persistentVolume.GetMainData());
  }, [dispatch]);

  // Create Storage
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showRule, setShowRule] = useState(false);
  const handleShowRule = () => setShowRule(!showRule);

  const [showMonaco, setShowMonaco] = useState(false);
  const handleCloseMonaco = () => setShowMonaco(false);
  const handleShowMonaco = () => setShowMonaco(true);

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

  // Node Affinity
  const [nodeAffinityInputs, setNodeAffinityInputs] = useState<string[]>(['']);
  const handleNodeAffinityInputChange = (index: number, value: string) => {
    const updatedInputs = [...nodeAffinityInputs];

    updatedInputs[index] = value;
    setNodeAffinityInputs(updatedInputs);
  };
  const addNodeAffinityInput = () => {
    setNodeAffinityInputs([...nodeAffinityInputs, '']);
  };
  const removeNodeAffinityInput = (index: number) => {
    const updatedInputs = [...nodeAffinityInputs];

    updatedInputs.splice(index, 1);
    setNodeAffinityInputs(updatedInputs);
  };
  const removeAllNodeAffinity = () => {
    setNodeAffinityInputs(['']);
  };

  // Edit
  const [showEdit, setShowEdit] = useState<boolean[]>(
    new Array<boolean>(store?.total || 0)
  );

  const handleCloseEdit = (index: number) => {
    const expandStatus = [...showEdit];

    expandStatus[index] = false;
    setShowEdit(expandStatus);
  };

  const handleShowEdit = (index: number) => {
    const expandStatus = [...showEdit];

    expandStatus[index] = true;
    setShowEdit(expandStatus);
  };

  const [showRuleEdit, setShowRuleEdit] = useState<boolean[]>(
    new Array<boolean>(store?.total || 0)
  );
  const handleShowRuleEdit = (index: number) => {
    const expandStatus = [...showEdit];

    expandStatus[index] = true;
    setShowRuleEdit(expandStatus);
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

  // Node Affinity
  const [nodeAffinityInputsEdit, setNodeAffinityInputsEdit] = useState<
  string[]
  >(['']);
  const handleNodeAffinityInputChangeEdit = (index: number, value: string) => {
    const updatedInputs = [...nodeAffinityInputsEdit];

    updatedInputs[index] = value;
    setNodeAffinityInputsEdit(updatedInputs);
  };
  const addNodeAffinityInputEdit = () => {
    setNodeAffinityInputsEdit([...nodeAffinityInputsEdit, '']);
  };
  const removeNodeAffinityInputEdit = (index: number) => {
    const updatedInputs = [...nodeAffinityInputsEdit];

    updatedInputs.splice(index, 1);
    setNodeAffinityInputsEdit(updatedInputs);
  };
  const removeAllNodeAffinityEdit = () => {
    setNodeAffinityInputsEdit(['']);
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
      <h4 className="fw-bold mb-2 text-black">Persistent Volume</h4>
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
              Persistent Volume
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
              <h5 className="p-2 pb-1 border-bottom">Create Volume</h5>
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
                      <Form.Group className="mb-1" controlId="formVolumePlugin">
                        <Form.Label>Volume Plugin</Form.Label>
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
                  <Row>
                    <Col>
                      <Form.Group className="mb-1" controlId="formCapacity">
                        <Form.Label>Capacity</Form.Label>

                        <div className="d-flex">
                          <Form.Control
                            aria-label="Insert tag"
                            className="w-100"
                            placeholder="Select a Tag" />
                          <InputGroup.Text>GiB</InputGroup.Text>
                        </div>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-1" controlId="formStorageClass">
                        <Form.Label>Assign to Storage Class</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select Output Type</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Tabs
                    className="mb-1 border-bottom"
                    defaultActiveKey="nodeAffinity"
                    id="uncontrolled-tab-example"
                  >
                    <Tab eventKey="accessModes" title="Access Modes">
                      <Form.Group>
                        <Form.Check
                          id="radio-1"
                          label="Single Node Read-Write"
                          name="accessModes"
                          type="radio" />
                        <Form.Check
                          id="radio-2"
                          label="Many Nodes Read-Only"
                          name="accessModes"
                          type="radio" />
                        <Form.Check
                          id="radio-3"
                          label="Many Nodes Read-Write"
                          name="accessModes"
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

                    {/* Node Affinity */}
                    <Tab eventKey="nodeAffinity" title="Node Affinity">
                      <div className="border rounded p-1">
                        {nodeAffinityInputs.map((input, index) => (
                          <Form.Group key={index}>
                            <Row className="pb-1 align-items-center">
                              <Col sm={4}>
                                {index === 1 && <Form.Label>Key</Form.Label>}

                                {index >= 1 && (
                                  <Form.Control
                                    placeholder={`Key ${index}`}
                                    type="text"
                                    value={input}
                                    onChange={(e) => handleNodeAffinityInputChange(
                                      index,
                                      e.target.value
                                    )} />
                                )}
                              </Col>
                              <Col sm={3}>
                                {index === 1 &&
                                  <Form.Label>Operator</Form.Label>}

                                {index >= 1 && (
                                  <Form.Group controlId="formOperatorPlugin">
                                    <Form.Select aria-label="Default select example">
                                      <option>Output</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </Form.Select>
                                  </Form.Group>
                                )}
                              </Col>
                              <Col sm={4}>
                                {index === 1 && <Form.Label>Value</Form.Label>}
                                {index >= 1 && (
                                  <Form.Control
                                    placeholder={`Value ${index}`}
                                    type="text"
                                    value={input}
                                    onChange={(e) => handleNodeAffinityInputChange(
                                      index,
                                      e.target.value
                                    )} />
                                )}
                              </Col>
                              <Col sm={1}>
                                {index === 1 && <Form.Label />}
                                {index !== 0 && (
                                  <Button
                                    variant="outline-danger"
                                    onClick={() => removeNodeAffinityInput(index)}
                                  >
                                    <Trash2 size={14} />
                                  </Button>
                                )}
                              </Col>
                            </Row>
                          </Form.Group>
                        ))}

                        {!showRule && (
                          <Button
                            size="sm"
                            variant="outline-info"
                            onClick={handleShowRule}
                          >
                            <Plus size={12} />
                            Node Selector
                          </Button>
                        )}

                        {showRule
                          ? (
                          <div className="d-flex align-items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline-info"
                              onClick={addNodeAffinityInput}
                            >
                              <Plus size={12} />
                              Rule
                            </Button>
                            <Button
                              disabled={nodeAffinityInputs.length <= 1}
                              size="sm"
                              variant={
                                nodeAffinityInputs.length <= 1
                                  ? 'outline-secondary'
                                  : 'outline-danger'
                              }
                              onClick={removeAllNodeAffinity}
                            >
                              <Trash2 size={14} />
                              Remove All
                            </Button>
                          </div>
                          )
                          : null}
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
                showEdit,
                showRuleEdit,
                mountOptionsInputsEdit,
                nodeAffinityInputsEdit,
                handleCloseEdit,
                handleShowEdit,
                handleShowRuleEdit,
                handleMountOptionsInputChangeEdit,
                addMountOptionsInputEdit,
                removeMountOptionsInputEdit,
                removeAllMountOptionsEdit,
                handleNodeAffinityInputChangeEdit,
                addNodeAffinityInputEdit,
                removeNodeAffinityInputEdit,
                removeAllNodeAffinityEdit,
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

PersistentVolumeMain.displayName = 'PersistentVolumeMain';
export { PersistentVolumeMain };
