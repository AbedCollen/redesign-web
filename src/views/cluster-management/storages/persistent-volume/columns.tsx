/* eslint-disable react/no-array-index-key */
import {
  Button,
  Col,
  Dropdown,
  Form,
  InputGroup,
  Modal,
  Row,
  Tab,
  Tabs
} from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { classNames } from '@modules/@nxweb/core/cjs/strings';

import { Check, Edit2, Minus, MoreVertical, Plus, Trash2 } from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom/confirm-modal';
import type { PersistentVolumeDataModel } from '@models/app/cluster-management/storages/persistent-volume/types';

const columns = (
  showEdit: boolean[],
  showRuleEdit: boolean[],
  mountOptionsInputsEdit: string[],
  nodeAffinityInputsEdit: string[],
  handleCloseEdit: (index: number) => void,
  handleShowEdit: (index: number) => void,
  handleShowRuleEdit: (index: number) => void,
  handleMountOptionsInputChangeEdit: (index: number, value: string) => void,
  addMountOptionsInputEdit: () => void,
  removeMountOptionsInputEdit: (index: number) => void,
  removeAllMountOptionsEdit: () => void,
  handleNodeAffinityInputChangeEdit: (index: number, value: string) => void,
  addNodeAffinityInputEdit: () => void,
  removeNodeAffinityInputEdit: (index: number) => void,
  removeAllNodeAffinityEdit: () => void,
  openConfirm: boolean,
  toggleModal: () => void
): TableColumn<PersistentVolumeDataModel>[] => [
  {
    cell: (row) => {
      return (
        <div
          className={classNames(
            'round d-flex align-items-center gap-25 px-50 py-25',
            {
              'text-danger border-danger': !row.isState,
              'text-success border-success': row.isState
            }
          )}
        >
          <div className="text-body-3 fw-medium text-neutral-90">
            {row.isState
              ? (
              <div className="d-flex align-items-center text-success">
                <Plus className="me-25" size={10} />
                Bound
              </div>
              )
              : (
              <div className="d-flex align-items-center text-danger">
                <Minus className="me-25" size={10} />
                Unbound
              </div>
              )}
          </div>
        </div>
      );
    },
    name: 'State',
    width: '115px'
  },
  {
    cell: (row) => row.name,
    grow: 1,
    name: 'Name'
  },
  {
    cell: (row) => row.persistentClaim,
    grow: 1,
    name: 'Persistent Volume Claim'
  },
  {
    cell: (row) => row.source,
    grow: 1,
    name: 'Source'
  },
  {
    cell: (_row, rowIndex) => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button className="d-flex align-items-center gap-50" variant="primary" onClick={() => handleShowEdit(rowIndex)} >
            <Edit2 fill="currentColor" size={16} />
            Volume
          </Button>

          {/* Modal */}
          <Modal
            centered={true}
            className="confirmation-modal"
            show={showEdit[rowIndex]}
            size="lg"
          >
            <h5 className="p-2 pb-1 border-bottom">Edit Volume</h5>
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
                          className="w-75"
                          placeholder="Select a Tag" />
                        <InputGroup.Text className=" w-25" id="basic-addon2">
                          GiB
                        </InputGroup.Text>
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

                  {/* Node Affinity */}
                  <Tab eventKey="nodeAffinity" title="Node Affinity">
                    <div className="border rounded p-1">
                      {nodeAffinityInputsEdit.map((input, index) => (
                        <Form.Group key={index}>
                          <Row className="pb-1 align-items-center">
                            <Col sm={4}>
                              {index === 1 && <Form.Label>Key</Form.Label>}

                              {index >= 1 && (
                                <Form.Control
                                  placeholder={`Key ${index}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleNodeAffinityInputChangeEdit(
                                    index,
                                    e.target.value
                                  )} />
                              )}
                            </Col>
                            <Col sm={3}>
                              {index === 1 && <Form.Label>Operator</Form.Label>}

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
                                  onChange={(e) => handleNodeAffinityInputChangeEdit(
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
                                  onClick={() => removeNodeAffinityInputEdit(index)}
                                >
                                  <Trash2 size={14} />
                                </Button>
                              )}
                            </Col>
                          </Row>
                        </Form.Group>
                      ))}

                      {!showRuleEdit && (
                        <Button
                          size="sm"
                          variant="outline-info"
                          onClick={() => handleShowRuleEdit(rowIndex)}
                        >
                          <Plus size={12} />
                          Node Selector
                        </Button>
                      )}

                      {showRuleEdit
                        ? (
                        <div className="d-flex align-items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline-info"
                            onClick={addNodeAffinityInputEdit}
                          >
                            <Plus size={12} />
                            Rule
                          </Button>
                          <Button
                            disabled={nodeAffinityInputsEdit.length <= 1}
                            size="sm"
                            variant={
                              nodeAffinityInputsEdit.length <= 1
                                ? 'outline-secondary'
                                : 'outline-danger'
                            }
                            onClick={removeAllNodeAffinityEdit}
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
              <Dropdown.Item onClick={toggleModal}>Delete Persistent Volume</Dropdown.Item>
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
