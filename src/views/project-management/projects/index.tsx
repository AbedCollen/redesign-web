import { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row, Tab, Tabs } from 'react-bootstrap';

import { Check, Plus, Trash2 } from '@nxweb/icons/feather';

import { CustomDataTable, NxFormControl } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const ProjectsMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.projects?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.projects.GetMainData());
  }, [dispatch]);

  const [showAddModal, setShowAddModal] = useState(false);

  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  const [labels, setLabels] = useState<string[]>(['']);
  const [annotations, setAnnotations] = useState<string[]>(['']);

  const handleLabelChange = (index: number, value: string) => {
    const updatedLabels = [...labels];

    labels[index] = value;
    setLabels(updatedLabels);
  };

  const handleAnnotationChange = (index: number, value: string) => {
    const updatedAnnotations = [...annotations];

    annotations[index] = value;
    setAnnotations(updatedAnnotations);
  };

  const addLabel = () => {
    setLabels([...labels, '']);
  };

  const addAnnotation = () => {
    setAnnotations([...annotations, '']);
  };

  const removeLabel = (index: number) => {
    const updatedLabels = [...labels];

    updatedLabels.splice(index, 1);
    setLabels(updatedLabels);
  };

  const removeAnnotation = (index: number) => {
    const updatedAnnotations = [...annotations];

    updatedAnnotations.splice(index, 1);
    setAnnotations(updatedAnnotations);
  };

  const removeAllLabels = () => {
    setLabels(['']);
  };

  const removeAllAnnotations = () => {
    setAnnotations(['']);
  };

  const [modalConfirmation, setModalConfirmation] = useState(false);
  const toggleModalConfirmation = () => {
    setModalConfirmation(!modalConfirmation);
  };
  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  const formControlClassName = { label: 'd-none' };

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mb-2 text-black">Projects</h4>
      <div className="rounded border p-1">
        <Row className="d-flex align-items-center mb-1">
          <Col xs={5}>
            <SearchFilter onSearchChange={handleSearchChange} />
          </Col>
          <Col className="d-flex justify-content-end">
            <Button className="d-flex align-items-center gap-50" onClick={handleShowAddModal}>
              <Plus size={16} />
              Project
            </Button>
          </Col>

          <Modal
            centered={true}
            className="confirmation-modal"
            show={showAddModal}
            size="lg"
          >
            <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
              <h5 className="pt-1">Create Project</h5>
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
                onClick={handleCloseAddModal}
              >
                Cancel
              </Button>
              <Button
                className="d-flex align-items-center justify-content-center gap-50"
                onClick={handleCloseAddModal}
              >
                <Check size={20} />
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
        <Row>
          <Col>
            <CustomDataTable
              columns={columns(
                modalConfirmation,
                toggleModalConfirmation,
                showEditModal,
                handleShowEditModal,
                handleCloseEditModal,
                labels,
                annotations,
                handleLabelChange,
                handleAnnotationChange,
                addLabel,
                addAnnotation,
                removeLabel,
                removeAnnotation,
                removeAllLabels,
                removeAllAnnotations
              )}
              data={filteredData || []}
              totalRows={store?.total} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

ProjectsMain.displayName = 'ProjectsMain';
export { ProjectsMain };
