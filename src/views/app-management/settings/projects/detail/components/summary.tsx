/* eslint-disable react/no-array-index-key */
/* eslint-disable react/hook-use-state */
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import { Check, Edit2, Plus, Trash2 } from '@nxweb/icons/feather';

import { NxFormControl } from '@components/custom';

const layoutStyle = {
  accordion: 'border rounded-bottom border-top-0 p-1',
  button: 'd-flex align-items-center gap-50',
  container:
    'd-flex justify-content-between align-items-center border rounded-top border-secondary p-1 fw-bold',
  containerButton: 'd-flex justify-content-end'
};

const ProjectsSummary = () => {
  const [sourceRepositoryInput, setSourceRepositoryInput] = useState<string[]>([
    ''
  ]);
  const handleSourceRepoInputChange = (index: number, value: string) => {
    const updatedSourceRepositoryInput = [...sourceRepositoryInput];

    updatedSourceRepositoryInput[index] = value;
    setSourceRepositoryInput(updatedSourceRepositoryInput);
  };
  const removeSourceRepoInput = (index: number) => {
    const updatedSourceRepositoryInput = [...sourceRepositoryInput];

    updatedSourceRepositoryInput.splice(index, 1);
    setSourceRepositoryInput(updatedSourceRepositoryInput);
  };
  const removeAllSourceRepoInput = () => {
    setSourceRepositoryInput(['']);
  };
  const addSourceRepoInput = () => {
    setSourceRepositoryInput([...sourceRepositoryInput, '']);
  };

  const [gpgKeyInput, setGPGKeyInput] = useState<string[]>(['']);
  const handleGPGKeyInputChange = (index: number, value: string) => {
    const updatedGPGKeyInput = [...gpgKeyInput];

    updatedGPGKeyInput[index] = value;
    setGPGKeyInput(updatedGPGKeyInput);
  };
  const removeGPGKeyInput = (index: number) => {
    const updatedGPGKeyInput = [...gpgKeyInput];

    updatedGPGKeyInput.splice(index, 1);
    setGPGKeyInput(updatedGPGKeyInput);
  };
  const removeAllGPGKeyInput = () => {
    setGPGKeyInput(['']);
  };
  const addGPGKeyInput = () => {
    setGPGKeyInput([...gpgKeyInput, '']);
  };

  const [editGeneral, setEditGeneral] = useState(true);

  const toggleButtonGeneral = () => {
    setEditGeneral(!editGeneral);
  };

  const [editRepository, setEditRepository] = useState(true);

  const toggleButtonSourceRepository = () => {
    setEditRepository(!editRepository);
  };

  const [editDestinations, setEditDestinations] = useState(true);

  const toggleButtonDestinations = () => {
    setEditDestinations(!editDestinations);
  };

  const [editClusterNamespaces, setEditClusterNamespaces] = useState(true);

  const toggleButtonClusterNamespace = () => {
    setEditClusterNamespaces(!editClusterNamespaces);
  };

  const [editResourcesMonitoring, setEditResourcesMonitoring] = useState(true);

  const toggleButtonResourceMonitoring = () => {
    setEditResourcesMonitoring(!editResourcesMonitoring);
  };

  const [editGPG, setEditGPG] = useState(true);

  const toggleButtonGPG = () => {
    setEditGPG(!editGPG);
  };

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  const [isChecked2, setIsChecked2] = useState<boolean>(false);

  const handleSwitchChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  return (
    <div className="py-2">
      <Row className="mb-2">
        <Col>
          <div className={layoutStyle.container}>
            <span>General</span>
            <div>
              {editGeneral
                ? (
                <Button
                  className={layoutStyle.button}
                  variant="outline-primary"
                  onClick={toggleButtonGeneral}
                >
                  <Edit2 size={16} />
                  Edit
                </Button>
                )
                : (
                <div className={layoutStyle.containerButton}>
                  <div className="d-flex gap-75">
                    <Button
                      variant="flat-primary"
                      onClick={toggleButtonGeneral}
                    >
                      Cancel
                    </Button>
                    <Button
                      className={layoutStyle.button}
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
          <div className={layoutStyle.accordion}>
            <Row className="mb-1">
              <Col>
                <NxFormControl
                  disabled={editGeneral}
                  label="Name"
                  placeholder="Default" />
              </Col>
              <Col>
                <NxFormControl
                  disabled={editGeneral}
                  label="Description"
                  placeholder="Placeholder" />
              </Col>
            </Row>
            <Row className="mb-1">
              <Col>
                <NxFormControl
                  disabled={editGeneral}
                  label="Annotations"
                  placeholder="Placeholder" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col>
          <div className={layoutStyle.container}>
            <span>Source Repository</span>
            <div>
              {editRepository
                ? (
                <Button
                  className={layoutStyle.button}
                  variant="outline-primary"
                  onClick={toggleButtonSourceRepository}
                >
                  <Edit2 size={16} />
                  Edit
                </Button>
                )
                : (
                <div className={layoutStyle.containerButton}>
                  <div className="d-flex gap-75">
                    <Button
                      variant="flat-primary"
                      onClick={toggleButtonSourceRepository}
                    >
                      Cancel
                    </Button>
                    <Button
                      className={layoutStyle.button}
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
          <div className={layoutStyle.accordion}>
            {sourceRepositoryInput.map((input, index) => (
              <Form.Group key={index}>
                <Row className="pb-1 d-flex">
                  <Col>
                    {index >= 1 && (
                      <Form.Control
                        placeholder={`Key ${index}`}
                        type="text"
                        value={input}
                        onChange={(e) => handleSourceRepoInputChange(index, e.target.value)} />
                    )}
                  </Col>
                  {!editRepository
                    ? (
                    <Col className="ps-0 d-flex justify-content-center" sm={1}>
                      {index !== 0 && (
                        <Button
                          variant="outline-danger"
                          onClick={() => removeSourceRepoInput(index)}
                        >
                          <Trash2 className="text-danger" size={18} />
                        </Button>
                      )}
                    </Col>
                    )
                    : null}
                </Row>
              </Form.Group>
            ))}
            {!editRepository
              ? (
              <div className="d-flex">
                <div className="me-2">
                  <Button
                    className="d-flex justify-content-between align-items-center gap-50"
                    size="sm"
                    variant="outline-info"
                    onClick={addSourceRepoInput}
                  >
                    <Plus size={12} />
                    Source
                  </Button>
                </div>
                <div>
                  {sourceRepositoryInput.length > 1 && (
                    <Button
                      className="d-flex justify-content-between align-items-center gap-50"
                      size="sm"
                      variant="outline-danger"
                      onClick={removeAllSourceRepoInput}
                    >
                      <Trash2 size={14} />
                      Remove All
                    </Button>
                  )}
                </div>
              </div>
              )
              : null}
          </div>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col>
          <div className={layoutStyle.container}>
            <span>Destinations</span>
            <div>
              {editDestinations
                ? (
                <Button
                  className={layoutStyle.button}
                  variant="outline-primary"
                  onClick={toggleButtonDestinations}
                >
                  <Edit2 size={16} />
                  Edit
                </Button>
                )
                : (
                <div className={layoutStyle.containerButton}>
                  <div className="d-flex gap-75">
                    <Button
                      variant="flat-primary"
                      onClick={toggleButtonDestinations}
                    >
                      Cancel
                    </Button>
                    <Button
                      className={layoutStyle.button}
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
          <div className={layoutStyle.accordion}>
            <Row className="mb-1">
              <Col>
                <NxFormControl
                  disabled={editDestinations}
                  label="Server"
                  placeholder="Default" />
              </Col>
              <Col>
                <NxFormControl
                  disabled={editDestinations}
                  label="Name"
                  placeholder="Placeholder" />
              </Col>
            </Row>
            <Row className="mb-1">
              <Col>
                <NxFormControl
                  disabled={editDestinations}
                  label="Namespace"
                  placeholder="Placeholder" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <div className={layoutStyle.container}>
            <span>Scoped Cluster</span>
          </div>
          <div className={layoutStyle.accordion}>
            <div className="d-flex border border-info border-dashed rounded p-1 bg-light-info align-items-center">
              <p className="d-flex align-items-center justify-content-center m-0 fs-3">
                <div className="me-1 bg-info text-center d-flex align-items-center justify-content-center rounded-circle alert-circle">
                  i
                </div>
              </p>
              <div className="fs-5 d-flex align-items-center text-dark">
                Project has no destination
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <div className={layoutStyle.container}>
            <span>Cluster & Namespace</span>
            <div>
              {editClusterNamespaces
                ? (
                <Button
                  className={layoutStyle.button}
                  variant="outline-primary"
                  onClick={toggleButtonClusterNamespace}
                >
                  <Edit2 size={16} />
                  Edit
                </Button>
                )
                : (
                <div className={layoutStyle.containerButton}>
                  <div className="d-flex gap-75">
                    <Button
                      variant="flat-primary"
                      onClick={toggleButtonClusterNamespace}
                    >
                      Cancel
                    </Button>
                    <Button
                      className={layoutStyle.button}
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
          <div className={layoutStyle.accordion}>
            <Row className="mb-1">
              <Col>
                <p className="fw-bold fs-5 text-dark">
                  Cluster Resource Allow List
                </p>
              </Col>
              <Row>
                <Col>
                  <NxFormControl
                    disabled={editClusterNamespaces}
                    label="Kind"
                    placeholder="Default" />
                </Col>
                <Col>
                  <NxFormControl
                    disabled={editClusterNamespaces}
                    label="Group"
                    placeholder="Placeholder" />
                </Col>
              </Row>
            </Row>
            <Row className="mb-1">
              <Col>
                <p className="fw-bold fs-5 text-dark">
                  Cluster Resource Deny List
                </p>
              </Col>
              <Row>
                <Col>
                  <NxFormControl
                    disabled={editClusterNamespaces}
                    label="Kind"
                    placeholder="Default" />
                </Col>
                <Col>
                  <NxFormControl
                    disabled={editClusterNamespaces}
                    label="Group"
                    placeholder="Placeholder" />
                </Col>
              </Row>
            </Row>
            <Row className="mb-1">
              <Col>
                <p className="fw-bold fs-5 text-dark">
                  Namespace Resource Allow List
                </p>
              </Col>
              <Row>
                <Col>
                  <NxFormControl
                    disabled={editClusterNamespaces}
                    label="Kind"
                    placeholder="Default" />
                </Col>
                <Col>
                  <NxFormControl
                    disabled={editClusterNamespaces}
                    label="Group"
                    placeholder="Placeholder" />
                </Col>
              </Row>
            </Row>
            <Row className="mb-1">
              <Col>
                <p className="fw-bold fs-5 text-dark">
                  Namespace Resource Deny List
                </p>
              </Col>
              <Row>
                <Col>
                  <NxFormControl
                    disabled={editClusterNamespaces}
                    label="Kind"
                    placeholder="Default" />
                </Col>
                <Col>
                  <NxFormControl
                    disabled={editClusterNamespaces}
                    label="Group"
                    placeholder="Placeholder" />
                </Col>
              </Row>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <div className={layoutStyle.container}>
            <span>Resource Monitoring</span>
            <div>
              {editResourcesMonitoring
                ? (
                <Button
                  className={layoutStyle.button}
                  variant="outline-primary"
                  onClick={toggleButtonResourceMonitoring}
                >
                  <Edit2 size={16} />
                  Edit
                </Button>
                )
                : (
                <div className={layoutStyle.containerButton}>
                  <div className="d-flex gap-75">
                    <Button
                      variant="flat-primary"
                      onClick={toggleButtonResourceMonitoring}
                    >
                      Cancel
                    </Button>
                    <Button
                      className={layoutStyle.button}
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
          <div className={layoutStyle.accordion}>
            <div className="mb-1">
              <div className="mb-1">
                <label
                  className="form-check-label fw-bold fs-5 mb-75 text-dark"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enabled
                </label>
                <div className="form-check form-switch">
                  <input
                    checked={isChecked}
                    className="form-check-input"
                    disabled={editResourcesMonitoring}
                    id="flexSwitchCheckDefault"
                    role="switch"
                    type="checkbox"
                    onChange={handleSwitchChange} />
                </div>
              </div>
              <div className="mb-1">
                <label
                  className="form-check-label fw-bold fs-5 mb-75 text-dark"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Application warning conditions are enabled
                </label>
                <div className="form-check form-switch">
                  <input
                    checked={isChecked2}
                    className="form-check-input"
                    disabled={editResourcesMonitoring}
                    id="flexSwitchCheckDefault"
                    role="switch"
                    type="checkbox"
                    onChange={handleSwitchChange2} />
                </div>
              </div>
            </div>
            <Row className="mb-1">
              <Col>
                <NxFormControl
                  disabled={editResourcesMonitoring}
                  label="Name"
                  placeholder="Default" />
              </Col>
              <Col>
                <NxFormControl
                  disabled={editResourcesMonitoring}
                  label="Descript"
                  placeholder="Placeholder" />
              </Col>
            </Row>
            <Row className="mb-1">
              <Col>
                <NxFormControl
                  disabled={editResourcesMonitoring}
                  label="Annotations"
                  placeholder="Placeholder" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <div className={layoutStyle.container}>
            <span>GPG Signature Keys</span>
            <div>
              {editGPG
                ? (
                <Button
                  className={layoutStyle.button}
                  variant="outline-primary"
                  onClick={toggleButtonGPG}
                >
                  <Edit2 size={16} />
                  Edit
                </Button>
                )
                : (
                <div className={layoutStyle.containerButton}>
                  <div className="d-flex gap-75">
                    <Button variant="flat-primary" onClick={toggleButtonGPG}>
                      Cancel
                    </Button>
                    <Button
                      className={layoutStyle.button}
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
          <div className={layoutStyle.accordion}>
            {gpgKeyInput.map((input, index) => (
              <Form.Group key={index}>
                <Row className="pb-1 d-flex">
                  <Col>
                    {index >= 1 && (
                      <Form.Control
                        placeholder={`Key ${index}`}
                        type="text"
                        value={input}
                        onChange={(e) => handleGPGKeyInputChange(index, e.target.value)} />
                    )}
                  </Col>
                  {!editGPG
                    ? (
                    <Col className="ps-0 d-flex justify-content-center" sm={1}>
                      {index !== 0 && (
                        <Button
                          variant="outline-danger"
                          onClick={() => removeGPGKeyInput(index)}
                        >
                          <Trash2 className="text-danger" size={18} />
                        </Button>
                      )}
                    </Col>
                    )
                    : null}
                </Row>
              </Form.Group>
            ))}
            {!editGPG
              ? (
              <div className="d-flex">
                <div className="me-2">
                  <Button
                    className="d-flex justify-content-between align-items-center gap-50"
                    size="sm"
                    variant="outline-info"
                    onClick={addGPGKeyInput}
                  >
                    <Plus size={12} />
                    Key
                  </Button>
                </div>
                <div>
                  {gpgKeyInput.length > 1 && (
                    <Button
                      className="d-flex justify-content-between align-items-center gap-50"
                      size="sm"
                      variant="outline-danger"
                      onClick={removeAllGPGKeyInput}
                    >
                      <Trash2 size={14} />
                      Remove All
                    </Button>
                  )}
                </div>
              </div>
              )
              : null}
          </div>
        </Col>
      </Row>
    </div>
  );
};

ProjectsSummary.displayName = 'ProjectsSummary';

export default ProjectsSummary;
