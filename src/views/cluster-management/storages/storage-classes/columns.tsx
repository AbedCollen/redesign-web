/* eslint-disable react/no-array-index-key */
import { Button, Col, Dropdown, Form, Modal, Row, Tab, Tabs } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { Check, Edit2, MoreVertical, Plus, Trash2 } from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom/confirm-modal';
import type { StorageClassesDataModel } from '@models/app/cluster-management/storages/storage-classes/types';

const columns = (
  parametersInputsEdit: string[],
  showEdit: boolean[],
  mountOptionsInputsEdit: string[],
  handleCloseEdit: (index: number) => void,
  handleShowEdit: (index: number) => void,
  handleMountOptionsInputChangeEdit: (index: number, value: string) => void,
  addMountOptionsInputEdit: () => void,
  removeMountOptionsInputEdit: (index: number) => void,
  removeAllMountOptionsEdit: () => void,
  handleParametersInputChangeEdit: (index: number, value: string) => void,
  addParametersInputEdit: () => void,
  removeParametersInputEdit: (index: number) => void,
  removeAllParametersEdit: () => void,
  openConfirm: boolean,
  toggleModal: () => void
): TableColumn<StorageClassesDataModel>[] => [
  {
    cell: (row) => row.num,
    grow: 0,
    name: 'Number'
  },
  {
    cell: (row) => row.name,
    grow: 1,
    name: 'Name'
  },
  {
    cell: (row) => row.provisioner,
    grow: 1,
    name: 'Provisioner'
  },
  {
    cell: (row) => row.reclaimPolicy,
    grow: 1,
    name: 'Reclaim Policy'
  },
  {
    cell: (row) => row.volumeBindingMode,
    grow: 1,
    name: 'Volume Binding Mode'
  },
  {
    cell: (row) => row.created,
    grow: 1,
    name: 'Created'
  },
  {
    cell: (row) => row.default,
    grow: 1,
    name: 'Default'
  },
  {
    cell: (_row, rowIndex) => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button className="d-flex align-items-center gap-50" variant="primary" onClick={() => handleShowEdit(rowIndex)}>
            <Edit2 fill="currentColor" size={16} />
            Storage
          </Button>

          {/* Modal */}
          <Modal
            centered={true}
            className="confirmation-modal"
            show={showEdit[rowIndex]}
            size="lg"
          >
            <h5 className="p-2 pb-1 border-bottom">Edit Storage Class</h5>
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
                      {parametersInputsEdit.map((input, index) => (
                        <Form.Group key={index}>
                          <Row className="pb-1 align-items-center">
                            <Col sm={5}>
                              {index === 1 && <Form.Label>Key</Form.Label>}

                              {index >= 1 && (
                                <Form.Control
                                  placeholder={`Key ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleParametersInputChangeEdit(
                                    index,
                                    e.target.value
                                  )} />
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
                                  onChange={(e) => handleParametersInputChangeEdit(
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
                                  onClick={() => removeParametersInputEdit(index)}
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
                          onClick={addParametersInputEdit}
                        >
                          <Plus size={12} />
                          Parameter
                        </Button>
                        <Button
                          disabled={parametersInputsEdit.length <= 1}
                          size="sm"
                          variant={
                            parametersInputsEdit.length <= 1
                              ? 'outline-secondary'
                              : 'outline-danger'
                          }
                          onClick={removeAllParametersEdit}
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
                      {mountOptionsInputsEdit.map((input, index) => (
                        <Form.Group key={index}>
                          <Row className="pb-1 align-items-center">
                            <Col sm={10}>
                              {index >= 1 && (
                                <Form.Control
                                  placeholder={`Input ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleMountOptionsInputChangeEdit(
                                    index,
                                    e.target.value
                                  )} />
                              )}
                            </Col>
                            <Col sm={2}>
                              {index !== 0 && (
                                <Button
                                  variant="outline-danger"
                                  onClick={() => removeMountOptionsInputEdit(index)}
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
                          onClick={addMountOptionsInputEdit}
                        >
                          <Plus size={14} />
                          Option
                        </Button>

                        <Button
                          disabled={mountOptionsInputsEdit.length <= 1}
                          size="sm"
                          variant={
                            mountOptionsInputsEdit.length <= 1
                              ? 'outline-secondary'
                              : 'outline-danger'
                          }
                          onClick={removeAllMountOptionsEdit}
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
                onClick={() => handleCloseEdit(rowIndex)}
              >
                Cancel
              </Button>
              <Button
                className="d-flex align-items-center justify-content-center gap-50"
                onClick={() => handleCloseEdit(rowIndex)}
              >
                <Check size={20} />
                Save
              </Button>
            </Modal.Footer>
          </Modal>

          <Dropdown className="no-arrow">
            <Dropdown.Toggle className="px-50 py-25" variant="outline-primary">
              <MoreVertical size={16} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Set as Default</Dropdown.Item>
              <Dropdown.Item onClick={toggleModal}>Delete Storage Classes</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <ConfirmModal
            content="Are you sure to delete?"
            show={openConfirm}
            title="Delete Items"
            toggleModal={toggleModal}
            variant="primary" />
        </div>
      );
    },
    name: 'Action',
    width: '220px'
  }
];

export { columns };
