import { FormLabel, Modal } from 'react-bootstrap';

interface ModalProp {
  onHide: () => void
  show: boolean
  store?: string
}

const CollectorModal: React.FC<ModalProp> = ({ show, onHide, store }) => {
  return (
    <Modal
      centered={true}
      className="confirmation-modal modal-lg"
      show={show}
      onHide={onHide}
    >
      <Modal.Body className="p-1 nx-form-control">
        <FormLabel className="form-label">otel.collector.id</FormLabel>
        <div className="border rounded-2 p-1 fs-5">
          <span className="d-inline-block text-truncate">{store}</span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

CollectorModal.displayName = 'CollectorModal';

export { CollectorModal };
