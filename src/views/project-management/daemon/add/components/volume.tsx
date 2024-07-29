import { useState } from 'react';
import type { FC } from 'react';
import { Accordion, Button, Col, Modal } from 'react-bootstrap';

import { Plus } from '@nxweb/icons/bootstrap';

import { CustomDataTable } from '@components/custom/custom-data-table';

import { BindMount } from './modal/volume-bind-mount-modal';
import { Others } from './modal/volume-others-modal';
import { PersistentVolume } from './modal/volume-persistent-modal';
import { bindMountColumn } from '../columns/bindMountColumn';
import { OtherColumn } from '../columns/otherColumn';
import { volumePersistentColumn } from '../columns/volumePersistenColumn';

const Volume: FC = () => {
  const [showModal, setShowModal] = useState<{
    open: boolean
    type: 'Bind Mount' | 'Other Mount' | 'Volume Persistent'
  }>({ open: false, type: 'Volume Persistent' });

  const toggleShowModal = (
    type?: 'Bind Mount' | 'Other Mount' | 'Volume Persistent'
  ) => setShowModal({ open: !showModal.open, type: type || 'Bind Mount' });

  return (
    <Accordion className="mb-2" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="border border-primary-header rounded-top">
          <span className="text-primary-header">Volume</span>
        </Accordion.Header>

        <Accordion.Body className="container nx-form-control">
          <div>
            <div>
              <Col className="text-end">
                <div className="d-flex align-items-center justify-content-end gap-75">
                  <Button
                    className="d-flex gap-50 align-items-center"
                    variant="outline-primary"
                    onClick={() => toggleShowModal('Volume Persistent')}
                  >
                    <Plus size={16} />
                    Add volume use volume persistent
                  </Button>
                </div>
              </Col>
              <CustomDataTable
                columns={volumePersistentColumn}
                data={[]}
                pagination={false}
                totalRows={1} />
            </div>
            <div>
              <Col className="text-end">
                <div className="d-flex align-items-center justify-content-end gap-75">
                  <Button
                    className="d-flex gap-50 align-items-center"
                    variant="outline-primary"
                    onClick={() => toggleShowModal('Bind Mount')}
                  >
                    <Plus size={16} />
                    Add volume use bind mount
                  </Button>
                </div>
              </Col>
              <CustomDataTable
                columns={bindMountColumn}
                data={[]}
                pagination={false}
                totalRows={1} />
            </div>
            <div>
              <Col className="text-end">
                <div className="d-flex align-items-center justify-content-end gap-75">
                  <Button
                    className="d-flex gap-50 align-items-center"
                    variant="outline-primary"
                    onClick={() => toggleShowModal('Other Mount')}
                  >
                    <Plus size={16} />
                    Add volume use other
                  </Button>
                </div>
              </Col>
              <CustomDataTable
                columns={OtherColumn}
                data={[]}
                pagination={false}
                totalRows={1} />
            </div>
            <Modal
              centered={true}
              className="confirmation-modal modal-lg"
              show={showModal.open}
            >
              {showModal.type === 'Volume Persistent' &&
                <PersistentVolume modalToggle={toggleShowModal} />}
              {showModal.type === 'Bind Mount' &&
                <BindMount modalToggle={toggleShowModal} />}
              {showModal.type === 'Other Mount' &&
                <Others modalToggle={toggleShowModal} />}
            </Modal>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

Volume.displayName = 'Volume';

export { Volume };
