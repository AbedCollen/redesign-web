import { Button, Col, Form, Modal, Row, Tab, Tabs } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { classNames } from '@modules/@nxweb/core/cjs/strings';

import {
  ArrowUPRight,
  Check,
  CheckCircle,
  Edit2,
  Plus,
  Trash2,
  XCircle
} from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom/confirm-modal';
import { NxFormControl } from '@components/custom/nx-form-control';
import { allRoutes } from '@config/constants';
import type { ProjectsDataModel } from '@models/app/project-management/projects/types';

const formControlClassName = { label: 'd-none' };

const columns = (
  modalConfirmation: boolean,
  toggleModalConfirmation: () => void,
  showEditModal: boolean,
  handleShowEditModal: () => void,
  handleCloseEditModal: () => void,
  labels: string[],
  annotations: string[],
  handleLabelChange: (index: number, value: string) => void,
  handleAnnotationChange: (index: number, value: string) => void,
  addLabel: () => void,
  addAnnotation: () => void,
  removeLabel: (index: number) => void,
  removeAnnotation: (index: number) => void,
  removeAllLabels: () => void,
  removeAllAnnotations: () => void
): TableColumn<ProjectsDataModel>[] => [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    name: 'Name',
    grow: 1,
    cell: (row) => (
      <a className="text-info" href={allRoutes.projectManagement.deployment}>
        {row.name} <ArrowUPRight size={14} />{' '}
      </a>
    )
  },
  {
    name: 'Status',
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
          {row.isActive ? <CheckCircle size={12} /> : <XCircle size={12} />}
          <div className="text-body-3 fw-medium text-neutral-90">
            {row.isActive ? 'Active' : 'Inactive'}
          </div>
        </div>
      );
    }
  },
  {
    name: 'Created',
    grow: 0,
    width: '400px',
    selector: (row) => row.created
  },
  {
    name: 'Action',
    cell: () => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="d-flex align-items-center p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="Edit Project"
            variant="outline-primary"
            onClick={handleShowEditModal}
          >
            <Edit2 fill="currentColor" size={16} />
          </Button>
          <Modal
            centered={true}
            className="confirmation-modal"
            show={showEditModal}
            size="lg"
          >
            <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
              <h5 className="pt-1">Edit Project</h5>
            </Modal.Header>
            <Modal.Body className="p-1">
              <Form>
                <NxFormControl
                  className={{ container: 'mb-1' }}
                  label="Name"
                  placeholder="Insert name"
                  type="text" />

                <NxFormControl
                  as="textarea"
                  className={{ container: 'mb-1' }}
                  label="Description"
                  placeholder="Insert description"
                  rows={5} />

                <Tabs className="mb-1 border-bottom" defaultActiveKey="Label">
                  <Tab
                    className="border rounded-1 p-2"
                    eventKey="Label"
                    title="Label"
                  >
                    {labels.map((input, index) => (
                      <div key={input}>
                        {index === 1 && (
                          <Row>
                            <Col sm={6}>
                              <Form.Label>Key Value</Form.Label>
                            </Col>
                            <Col sm={6}>
                              <Form.Label>Value</Form.Label>
                            </Col>
                          </Row>
                        )}

                        {index >= 1 && (
                          <Row>
                            <Col sm={5}>
                              <NxFormControl
                                className={formControlClassName}
                                placeholder="Placeholder"
                                type="text"
                                onChange={(e) => handleLabelChange(index, e.target.value)} />
                            </Col>

                            <Col sm={1}>
                              <h4 className="text-center">=</h4>
                            </Col>

                            <Col sm={5}>
                              <NxFormControl
                                className={formControlClassName}
                                placeholder="Placeholder"
                                type="text"
                                onChange={(e) => handleLabelChange(index, e.target.value)} />
                            </Col>

                            <Col className="ps-0" sm={1}>
                              <Button
                                variant="outline-danger"
                                onClick={() => removeLabel(index)}
                              >
                                <Trash2 size={14} />
                              </Button>
                            </Col>
                          </Row>
                        )}
                      </div>
                    ))}
                    <div>
                      <Row>
                        <Col className="pe-0" sm={1}>
                          <Button
                            size="sm"
                            variant="outline-info"
                            onClick={addLabel}
                          >
                            <Plus size={12} />
                            Label
                          </Button>
                        </Col>
                        <Col className="ms-2" sm={3}>
                          {labels.length > 1 && (
                            <Button
                              size="sm"
                              variant="outline-danger"
                              onClick={removeAllLabels}
                            >
                              <Trash2 size={14} />
                              Remove All
                            </Button>
                          )}
                        </Col>
                      </Row>
                    </div>
                  </Tab>
                  <Tab
                    className="border rounded-1 p-2"
                    eventKey="Annotation"
                    title="Annotation"
                  >
                    {annotations.map((input, index) => (
                      <div key={input}>
                        {index === 1 && (
                          <Row>
                            <Col sm={6}>
                              <Form.Label>Key Value</Form.Label>
                            </Col>
                            <Col sm={6}>
                              <Form.Label>Value</Form.Label>
                            </Col>
                          </Row>
                        )}

                        {index >= 1 && (
                          <Row>
                            <Col sm={5}>
                              <NxFormControl
                                className={formControlClassName}
                                placeholder="Placeholder"
                                type="text"
                                onChange={(e) => handleAnnotationChange(index, e.target.value)} />
                            </Col>

                            <Col sm={1}>
                              <h4 className="text-center">=</h4>
                            </Col>

                            <Col sm={5}>
                              <NxFormControl
                                className={formControlClassName}
                                placeholder="Placeholder"
                                type="text"
                                onChange={(e) => handleAnnotationChange(index, e.target.value)} />
                            </Col>

                            <Col className="ps-0" sm={1}>
                              <Button
                                variant="outline-danger"
                                onClick={() => removeAnnotation(index)}
                              >
                                <Trash2 size={14} />
                              </Button>
                            </Col>
                          </Row>
                        )}
                      </div>
                    ))}
                    <div>
                      <Row>
                        <Col sm={2}>
                          <Button
                            size="sm"
                            variant="outline-info"
                            onClick={addAnnotation}
                          >
                            <Plus size={12} />
                            Annotation
                          </Button>
                        </Col>
                        <Col sm={3}>
                          {annotations.length > 1 && (
                            <Button
                              size="sm"
                              variant="outline-danger"
                              onClick={removeAllAnnotations}
                            >
                              <Trash2 size={14} />
                              Remove All
                            </Button>
                          )}
                        </Col>
                      </Row>
                    </div>
                  </Tab>
                </Tabs>
              </Form>
            </Modal.Body>
            <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
              <Button
                className="justify-content-center"
                variant="flat-primary"
                onClick={handleCloseEditModal}
              >
                Cancel
              </Button>
              <Button
                className="d-flex align-items-center justify-content-center gap-50"
                onClick={handleCloseEditModal}
              >
                <Check size={20} />
                Save
              </Button>
            </Modal.Footer>
          </Modal>
          <Button
            className="px-50 py-25"
            data-placement="top"
            data-toggle="tooltip"
            title="Delete Project"
            variant="outline-danger"
            onClick={toggleModalConfirmation}
          >
            <Trash2 size={16} />
          </Button>
          <ConfirmModal
            content="Are you sure to delete?"
            show={modalConfirmation}
            title="Delete Items"
            toggleModal={toggleModalConfirmation}
            variant="primary" />
        </div>
      );
    },
    width: '125px'
  }
];

export { columns };
