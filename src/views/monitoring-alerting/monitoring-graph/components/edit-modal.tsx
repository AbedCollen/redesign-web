/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Button, Col, Form, Modal, Nav, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Check, Plus, X } from '@nxweb/icons/feather';

import { CustomDataTable, NxFormControl } from '@components/custom';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { variableColumns } from '../columns';

interface EditModalProps {
  readonly show: boolean
  readonly toggleModal: () => void
}

const EditModal: FC<EditModalProps> = ({ show, toggleModal }) => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.monitoringAlerting?.monitoringGraph?.detail
  );

  useEffect(() => {
    dispatch(
      StoreCommand.app.monitoringAlerting.monitoringGraph.GetDetailData()
    );
  }, [dispatch]);

  const [activeTabs, setActiveTabs] = useState<string>('general');

  const handleTabs = (tabs: string) => {
    setActiveTabs(tabs);
  };

  const navigate = useNavigate();
  const editVariable = (index: number) => {
    navigate(`./detail/${index}/edit-variable/${index}`);
  };

  const [openConfirm, setOpenConfirm] = useState(false);
  const toggleConfirmModal = () => setOpenConfirm(!openConfirm);

  return (
    <Modal centered={true} className="confirmation-modal" show={show} size="lg">
      <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
        <h5 className="pt-1">Configure</h5>
      </Modal.Header>
      <Modal.Body className="p-1">
        <Row>
          <Col>
            <Nav defaultActiveKey="/home" variant="tabs">
              <Nav.Item>
                <Nav.Link
                  active={activeTabs === 'general'}
                  onClick={() => handleTabs('general')}
                >
                  General
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTabs === 'variable'}
                  onClick={() => handleTabs('variable')}
                >
                  Variable
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          {activeTabs === 'general' && (
            <Form>
              <NxFormControl
                className={{ container: 'mb-1' }}
                defaultValue={store?.name}
                label="Name"
                type="text" />

              <NxFormControl
                as="textarea"
                className={{ container: 'mb-1' }}
                defaultValue={store?.description}
                rows={3} />
              <Form.Group>
                <Form.Label className="fw-bolder fs-6">Tags</Form.Label>
                <div className="d-flex align-items-center gap-25">
                  {store?.tags.map((tag) => (
                    <div className="border-secondary bg-light-secondary rounded-1 px-75 py-25 mx-25">
                      <div className="d-flex align-items-center gap-50">
                        {tag}
                        <X size={16} />
                      </div>
                    </div>
                  ))}
                </div>
              </Form.Group>
            </Form>
          )}
          {activeTabs === 'variable' && (
            <div>
              <div className="d-flex justify-content-end">
                <Button
                  as="a"
                  className="d-flex align-items-center gap-50"
                  href={allRoutes.monitoringAlerting.addNewVariable}
                  variant="outline-primary"
                >
                  <Plus size={16} />
                  Variable
                </Button>
              </div>
              <div className="mt-1 mb-1">
                <CustomDataTable
                  columns={variableColumns(
                    openConfirm,
                    toggleConfirmModal,
                    editVariable
                  )}
                  data={store?.variableDetail || []} />
              </div>
            </div>
          )}
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
        <Button
          className="justify-content-center"
          variant="flat-primary"
          onClick={toggleModal}
        >
          Cancel
        </Button>
        <Button
          className="d-flex align-items-center gap-50"
          variant="primary"
          onClick={toggleModal}
        >
          <Check size={16} />
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

EditModal.displayName = 'EditModal';
export { EditModal };
