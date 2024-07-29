/* eslint-disable react/no-array-index-key */

import { Button, Col, Form, Modal, Row, Tab, Tabs } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { classNames } from '@modules/@nxweb/core/cjs/strings';

import { Check, Edit2, Eye, Plus, Trash2 } from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom/confirm-modal';
import { MonacoEditor } from '@components/custom/monaco-editor';
import type { NamespacesDataModel } from '@models/app/cluster-management/namespaces/types';

const columns = (
  showEdit: boolean[],
  handleCloseEdit: (index: number) => void,
  handleShowEdit: (index: number) => void,
  inputsEdit: string[],
  inputsanoEdit: string[],
  handleInputChangeEdit: (index: number, value: string) => void,
  handleInputanoChangeEdit: (index: number, value: string) => void,
  addInputEdit: () => void,
  addInputanoEdit: () => void,
  removeInputEdit: (index: number) => void,
  removeInputanoEdit: (indexAno: number) => void,
  removeAllLabelEdit: () => void,
  removeAllanoEdit: () => void,
  showPreview: boolean,
  handleClosePreview: () => void,
  showAllItems: boolean[],
  handleShowAllItems: (index: number) => void,
  handleCloseAllItems: (index: number) => void,
  openConfirm: boolean,
  toggleModal: () => void,
  showMonaco: boolean,
  handleCloseMonaco: () => void,
  handleShowMonaco: () => void
): TableColumn<NamespacesDataModel>[] => [
  {
    center: true,
    name: '#',
    selector: () => '#',
    width: '75px'
  },
  {
    cell: (row) => row.name,
    grow: 1,
    name: 'Name'
  },
  {
    cell: (row) => {
      return (
        <div
          className={classNames(
            'round d-flex align-items-center gap-25 px-75 py-25',
            {
              'text-danger border-danger': !row.isActive,
              'text-success border-success': row.isActive
            }
          )}
        >
          <div className="text-body-3 fw-medium text-neutral-90">
            {row.isActive ? 'Active' : 'Inactive'}
          </div>
        </div>
      );
    },
    name: 'Status',
    width: '115px'
  },
  {
    cell: (row) => row.project,
    grow: 1,
    name: 'Project'
  },
  {
    cell: (row, rowIndex) => {
      const MAX_ITEMS = 1;
      const MAX_LETTERS = 20;

      let listItems = row.label.map((item, index) => (
        <div className="form-group" key={item + index}>
          <div className="round d-flex align-items-center gap-25 px-75 py-25 mt-50 bg-magnolia">
            {showAllItems || item.length <= MAX_LETTERS
              ? item
              : `${item.slice(0, MAX_LETTERS)}...`}
          </div>
        </div>
      ));

      const shouldTruncate =
        listItems.length > MAX_ITEMS && !showAllItems[rowIndex];

      if (shouldTruncate) {
        listItems = listItems.slice(0, MAX_ITEMS);
        listItems.push(
          <div className="form-group" style={{ cursor: 'pointer' }}>
            <button
              className="btn round d-flex align-items-center gap-25 px-75 py-25 mt-50 bg-magnolia"
              type="button"
              onClick={() => handleShowAllItems(rowIndex)}
            >
              ...
            </button>
          </div>
        );
      }

      if (showAllItems[rowIndex]) {
        listItems.push(
          <div className="form-group" key="closeButton">
            <button
              className="btn btn-link"
              type="button"
              onClick={() => handleCloseAllItems(rowIndex)}
            >
              Close
            </button>
          </div>
        );
      }

      const isExpanded = showAllItems || listItems.length <= MAX_ITEMS;

      return (
        <div
          className={isExpanded ? 'd-flex flex-column ' : 'd-flex flex-wrap'}
        >
          {listItems.map((item, index) => {
            return (
              <div
                className="form-group"
                key={index}
                style={{ color: 'rgba(10, 75, 114, 255)' }}
              >
                {item}
              </div>
            );
          })}
        </div>
      );
    },
    grow: 2,
    name: 'Label'
  },
  {
    cell: (row) => row.create,
    grow: 1,
    name: 'Created'
  },
  {
    cell: (_row, rowIndex) => {
      return (
        <div className="d-flex align-items-center gap-75">
          {/* Edit */}
          <Button className="px-50 py-25" onClick={() => handleShowEdit(rowIndex)}>
            <Edit2 className="" data-placement="top" data-toggle="tooltip" fill="currentColor" size={16} title="Edit Namespace" />
          </Button>
          <Modal
            centered={true}
            className="confirmation-modal"
            show={showEdit[rowIndex]}
            size="lg"
          >
            <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
              <h5 className="pt-1">Edit Namespace</h5>
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
                        {inputsEdit.map((input, index) => (
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
                                    onChange={(e) => handleInputChangeEdit(index, e.target.value)} />
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
                                    onChange={(e) => handleInputChangeEdit(index, e.target.value)} />
                                )}
                              </Col>
                              <Col className="ps-0" sm={1}>
                                {index === 1 && <Form.Label />}
                                {index !== 0 && (
                                  <Button
                                    variant="outline-danger"
                                    onClick={() => removeInputEdit(index)}
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
                                onClick={addInputEdit}
                              >
                                <Plus size={12} />
                                Label
                              </Button>
                            </Col>
                            <Col className="ms-2" sm={3}>
                              {inputsEdit.length > 1 && (
                                <Button
                                  size="sm"
                                  variant="outline-danger"
                                  onClick={removeAllLabelEdit}
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
                      {inputsanoEdit.map((input, indexAno) => (
                        <Form.Group key={indexAno}>
                          <Row className="pb-1">
                            <Col sm={5}>
                              {indexAno >= 1 && <Form.Label>Key</Form.Label>}

                              {indexAno >= 1 && (
                                <Form.Control
                                  placeholder={`Key ${indexAno}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleInputanoChangeEdit(
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
                              {indexAno >= 1 && <Form.Label>Value</Form.Label>}
                              {indexAno >= 1 && (
                                <Form.Control
                                  placeholder={`Value ${indexAno}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleInputanoChangeEdit(
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
                                  onClick={() => removeInputanoEdit(indexAno)}
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
                              onClick={addInputanoEdit}
                            >
                              <Plus size={12} />
                              Annotation
                            </Button>
                          </Col>
                          <Col sm={3}>
                            {inputsanoEdit.length > 1 && (
                              <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={removeAllanoEdit}
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

          {/* Preview */}
          <Button
            className="px-50 py-25 btn btn-outline-primary"
            onClick={handleShowMonaco}
          >
            <Eye className="" data-placement="top" data-toggle="tooltip" title="Edit Yaml" size={16} />
          </Button>

          <Modal
            centered={true}
            className="confirmation-modal"
            show={showMonaco}
            size="lg"
          >
            <Modal.Header>
              <h5 className="pt-1">View/Edit Yaml</h5>
            </Modal.Header>
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

          <Modal
            centered={true}
            className="confirmation-modal"
            show={showPreview}
            size="lg"
          >
            <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
              <h5 className="pt-1">Preview</h5>
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
                        {inputsEdit.map((input, index) => (
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
                                    onChange={(e) => handleInputChangeEdit(index, e.target.value)} />
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
                                    onChange={(e) => handleInputChangeEdit(index, e.target.value)} />
                                )}
                              </Col>
                            </Row>
                          </Form.Group>
                        ))}
                    </div>
                  </Tab>
                  <Tab eventKey="annotation" title="Annotation">
                  <div className="border rounded p-1 pt-0">
                      {inputsanoEdit.map((input, indexAno) => (
                        <Form.Group key={indexAno}>
                          <Row className="pb-1">
                            <Col sm={5}>
                              {indexAno >= 1 && <Form.Label>Key</Form.Label>}

                              {indexAno >= 1 && (
                                <Form.Control
                                  placeholder={`Key ${indexAno}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleInputanoChangeEdit(
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
                              {indexAno >= 1 && <Form.Label>Value</Form.Label>}
                              {indexAno >= 1 && (
                                <Form.Control
                                  placeholder={`Value ${indexAno}`}
                                  type="text"
                                  value={input}
                                  onChange={(e) => handleInputanoChangeEdit(
                                    indexAno,
                                    e.target.value
                                  )} />
                              )}
                            </Col>
                          </Row>
                        </Form.Group>
                      ))}
                  </div>
                  </Tab>
                </Tabs>
              </Form>
            </Modal.Body>
            <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
              <Button
                className="justify-content-center"
                variant="flat-primary"
                onClick={handleClosePreview}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Remove */}
          <button
            className="px-50 py-25 btn  border-danger btn-outline-primary"
            type="button"
            onClick={toggleModal}
          >
            <Trash2 className="text-danger" size={16} data-placement="top" data-toggle="tooltip" title="Delete Namespace"/>
          </button>
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
    width: '160px'
  }
];

export { columns };
