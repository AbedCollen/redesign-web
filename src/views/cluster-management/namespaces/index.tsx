/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row, Tab, Tabs } from 'react-bootstrap';

import { Check, Plus, Trash2 } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const NamespacesMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.clusterManagement?.namespaces?.main
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputs, setInputs] = useState<string[]>(['']);
  const [inputsano, setInputsano] = useState<string[]>(['']);
  const handleInputChange = (index: number, value: string) => {
    const updatedInputs = [...inputs];

    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };
  const handleInputanoChange = (indexano: number, value: string) => {
    const updatedInputsAno = [...inputsano];

    updatedInputsAno[indexano] = value;
    setInputsano(updatedInputsAno);
  };
  const addInput = () => {
    setInputs([...inputs, '']);
  };
  const addInputano = () => {
    setInputsano([...inputsano, '']);
  };
  const removeInput = (index: number) => {
    const updatedInputs = [...inputs];

    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };
  const removeInputano = (indexAno: number) => {
    const updatedInputsAno = [...inputsano];

    updatedInputsAno.splice(indexAno, 1);
    setInputsano(updatedInputsAno);
  };

  const removeAllLabel = () => {
    setInputs(['']);
  };
  const removeAllano = () => {
    setInputsano(['']);
  };

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

  const [inputsEdit, setInputsEdit] = useState<string[]>(['']);
  const [inputsanoEdit, setInputsanoEdit] = useState<string[]>(['']);
  const handleInputChangeEdit = (index: number, value: string) => {
    const updatedInputsEdit = [...inputsEdit];

    updatedInputsEdit[index] = value;
    setInputsEdit(updatedInputsEdit);
  };
  const handleInputanoChangeEdit = (index: number, value: string) => {
    const updatedInputsAnoEdit = [...inputsanoEdit];

    updatedInputsAnoEdit[index] = value;
    setInputsanoEdit(updatedInputsAnoEdit);
  };
  const addInputEdit = () => {
    setInputsEdit([...inputsEdit, '']);
  };
  const addInputanoEdit = () => {
    setInputsanoEdit([...inputsanoEdit, '']);
  };
  const removeInputEdit = (index: number) => {
    const updatedInputsEdit = [...inputsEdit];

    updatedInputsEdit.splice(index, 1);
    setInputsEdit(updatedInputsEdit);
  };
  const removeInputanoEdit = (indexAno: number) => {
    const updatedInputsAnoEdit = [...inputsanoEdit];

    updatedInputsAnoEdit.splice(indexAno, 1);
    setInputsanoEdit(updatedInputsAnoEdit);
  };

  const removeAllLabelEdit = () => {
    setInputsEdit(['']);
  };
  const removeAllanoEdit = () => {
    setInputsanoEdit(['']);
  };

  const [showPreview, setShowPreview] = useState(false);
  const handleClosePreview = () => setShowPreview(false);
  const [showAllItems, setShowAllItems] = useState<boolean[]>(
    new Array<boolean>(store?.total || 0).fill(false)
  );
  const handleShowAllItems = (index: number) => {
    const expandStatus = [...showAllItems];

    expandStatus[index] = true;
    setShowAllItems(expandStatus);
  };

  const handleCloseAllItems = (index: number) => {
    const expandStatus = [...showAllItems];

    expandStatus[index] = false;
    setShowAllItems(expandStatus);
  };

  const [openConfirm, setOpenConfirm] = useState(false);
  const toggleModal = () => setOpenConfirm(!openConfirm);

  useEffect(() => {
    dispatch(StoreCommand.app.clusterManagement.namespaces.GetMainData());
  }, [dispatch]);

  const [showMonaco, setShowMonaco] = useState(false);
  const handleCloseMonaco = () => setShowMonaco(false);
  const handleShowMonaco = () => setShowMonaco(true);

  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mb-2 text-black">Namespaces</h4>
      <div className="rounded border p-1">
        <Row className="mb-1 w-100">
          <Col xs={5}>
            <SearchFilter onSearchChange={handleSearchChange} />
          </Col>
          <Col className="text-end">
            <Button onClick={handleShow}>
              <Plus className="me-75" size={16} />
              Namespace
            </Button>

            <Modal
              centered={true}
              className="confirmation-modal"
              show={show}
              size="lg"
            >
              <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
                <h5 className="pt-1">New Namespace</h5>
              </Modal.Header>
              <Modal.Body className="p-1">
                <Form>
                  <Row>
                    <Col>
                      <Form.Group className="mb-1" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Insert Name" type="text" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-1" controlId="project">
                        <Form.Label>Project</Form.Label>
                        <Form.Select>
                          <option>Select Project</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-1" controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Insert Comment"
                      style={{ height: '150px' }} />
                  </Form.Group>

                  <Tabs
                    className="mb-1 border-bottom"
                    defaultActiveKey="label"
                    id="uncontrolled-tab-example"
                  >
                    <Tab eventKey="label" title="Label">
                      <div className="border rounded p-1 pt-0">
                        {inputs.map((input, index) => (
                          <Form.Group key={index}>
                            <Row className="pb-1">
                              <Col sm={5}>
                                {index === 1 &&
                                  <Form.Label>Key Value</Form.Label>}

                                {index >= 1 && (
                                  <Form.Control
                                    placeholder={`Key ${index}`}
                                    type="text"
                                    value={input}
                                    onChange={(e) => handleInputChange(index, e.target.value)} />
                                )}
                              </Col>
                              <Col sm={1}>
                                {index === 1 && <Form.Label />}
                                {index !== 0 &&
                                  <h4 className="text-center">=</h4>}
                              </Col>
                              <Col sm={5}>
                                {index === 1 && <Form.Label>Value</Form.Label>}
                                {index >= 1 && (
                                  <Form.Control
                                    placeholder={`Value ${index}`}
                                    type="text"
                                    value={input}
                                    onChange={(e) => handleInputChange(index, e.target.value)} />
                                )}
                              </Col>
                              <Col className="ps-0" sm={1}>
                                {index === 1 && <Form.Label />}
                                {index !== 0 && (
                                  <Button
                                    variant="outline-danger"
                                    onClick={() => removeInput(index)}
                                  >
                                    <Trash2 className="text-danger" size={18} />
                                  </Button>
                                )}
                              </Col>
                            </Row>
                          </Form.Group>
                        ))}
                        <div>
                          <Row>
                            <Col className="pe-0" sm={1}>
                              <Button
                                size="sm"
                                variant="outline-info"
                                onClick={addInput}
                              >
                                <Plus size={12} />
                                Label
                              </Button>
                            </Col>
                            <Col className="ms-2" sm={3}>
                              {inputs.length > 1 && (
                                <Button
                                  size="sm"
                                  variant="outline-danger"
                                  onClick={removeAllLabel}
                                >
                                  <Trash2 size={14} />
                                  Remove All
                                </Button>
                              )}
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="annotation" title="Annotation">
                      <div className="border rounded p-1 pt-0">
                        {inputsano.map((input, indexAno) => (
                          <Form.Group key={indexAno}>
                            <Row className="pb-1">
                              <Col sm={5}>
                                {indexAno >= 1 && <Form.Label>Key</Form.Label>}

                                {indexAno >= 1 && (
                                  <Form.Control
                                    placeholder={`Key ${indexAno}`}
                                    type="text"
                                    value={input}
                                    onChange={(e) => handleInputanoChange(
                                      indexAno,
                                      e.target.value
                                    )} />
                                )}
                              </Col>
                              <Col sm={1}>
                                {indexAno === 1 && <Form.Label />}
                                {indexAno !== 0 &&
                                  <h4 className="text-center">=</h4>}
                              </Col>
                              <Col sm={5}>
                                {indexAno >= 1 &&
                                  <Form.Label>Value</Form.Label>}
                                {indexAno >= 1 && (
                                  <Form.Control
                                    placeholder={`Value ${indexAno}`}
                                    type="text"
                                    value={input}
                                    onChange={(e) => handleInputanoChange(
                                      indexAno,
                                      e.target.value
                                    )} />
                                )}
                              </Col>
                              <Col className="ps-0" sm={1}>
                                {indexAno >= 1 && <Form.Label />}
                                {indexAno !== 0 && (
                                  <Button
                                    variant="outline-danger"
                                    onClick={() => removeInputano(indexAno)}
                                  >
                                    <Trash2 className="text-danger" size={18} />
                                  </Button>
                                )}
                              </Col>
                            </Row>
                          </Form.Group>
                        ))}
                        <div className="">
                          <Row>
                            <Col sm={2}>
                              <Button
                                size="sm"
                                variant="outline-info"
                                onClick={addInputano}
                              >
                                <Plus size={12} />
                                Annotation
                              </Button>
                            </Col>
                            <Col sm={3}>
                              {inputsano.length > 1 && (
                                <Button
                                  size="sm"
                                  variant="outline-danger"
                                  onClick={removeAllano}
                                >
                                  <Trash2 size={14} />
                                  Remove All
                                </Button>
                              )}
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
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
                handleCloseEdit,
                handleShowEdit,
                inputsEdit,
                inputsanoEdit,
                handleInputChangeEdit,
                handleInputanoChangeEdit,
                addInputEdit,
                addInputanoEdit,
                removeInputEdit,
                removeInputanoEdit,
                removeAllLabelEdit,
                removeAllanoEdit,
                showPreview,
                handleClosePreview,
                showAllItems,
                handleShowAllItems,
                handleCloseAllItems,
                openConfirm,
                toggleModal,
                showMonaco,
                handleCloseMonaco,
                handleShowMonaco
              )}
              data={filteredData || []}
              totalRows={store?.total} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

NamespacesMain.displayName = 'NamespacesMain';
export { NamespacesMain };
