/* eslint-disable react/jsx-key */
import type { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { Info, Trash2 } from '@nxweb/icons/feather';

interface DeletionModalProps {
  readonly content: string
  readonly openConfirm: boolean
  readonly toggleModal: () => void
}

const DeletionModal: FC<DeletionModalProps> = ({
  toggleModal,
  content,
  openConfirm
}) => {
  return (
    <Modal
      centered={true}
      className="confirmation-modal"
      show={openConfirm}
      size="lg"
      onHide={toggleModal}
    >
      <Modal.Header className="d-flex align-items-center justify-content-start gap-75 py-1">
        <div className="header-icon bg-danger">
          <Trash2 size={16} />
        </div>
        <div className="text-body-1 fw-medium">Delete Confirmation</div>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column gap-1">
        <div className="text-body-2 fw-medium text-black">
          Are you sure you want to delete Role{' '}
          <span className="fst-italic">{content}</span> in namespace default?
        </div>
        <div className="d-flex align-items-center alert-warning shadow-none p-1 gap-25 text-dark border-0 rounded">
          <div className="">
            <Info
              className="no-border"
              color="white"
              fill="#FFB72B"
              size={30} />
          </div>
          This action is equivalent to: kubectl delete -n default role{' '}
          <span className="fst-italic">{content}</span>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex gap-2">
        <Button
          className="justify-content-center"
          variant="flat-primary"
          onClick={toggleModal}
        >
          Cancel
        </Button>
        <Button
          className="d-flex align-items-center justify-content-center gap-50"
          variant="danger"
          onClick={toggleModal}
        >
          <Trash2 size={16} /> Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

DeletionModal.displayName = 'DeletionModal';
export { DeletionModal };
