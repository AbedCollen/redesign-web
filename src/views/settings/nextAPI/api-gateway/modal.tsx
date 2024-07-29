import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { AddEditModal } from './components/AddEditModal';
import { UpdateModalAPIGateway } from './components/UpdateModal';
import { XDSModalAPIGateway } from './components/XDSModal';

interface ApiGatewayModalProps {
  readonly open: boolean
  readonly type: 'Add' | 'Edit' | 'Update' | 'XDS'
  readonly toggleModal: () => void
  readonly toggleConfirmationModal: () => void
}

const ApiGatewayModal: FC<ApiGatewayModalProps> = ({
  open,
  type,
  toggleModal,
  toggleConfirmationModal
}) => {
  return (
    <Modal
      centered={true}
      className="confirmation-modal modal-lg"
      show={open}
      onHide={toggleModal}
    >
      {(type === 'Edit' || type === 'Add') &&
        <AddEditModal toggleModal={toggleModal} type={type} />}
      {type === 'Update' && <UpdateModalAPIGateway toggleModal={toggleModal} />}
      {type === 'XDS' && (
        <XDSModalAPIGateway
          toggleConfirmationModal={toggleConfirmationModal}
          toggleModal={toggleModal} />
      )}
    </Modal>
  );
};

ApiGatewayModal.displayName = 'APIGatewayModal';
export { ApiGatewayModal };
