import type { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';

interface ConfirmModalProps {
  readonly confirmText?: string
  readonly content?: React.ReactNode
  readonly footer?: React.ReactNode
  readonly icon?: React.ReactNode
  readonly onConfirm?: () => void
  readonly show: boolean
  readonly size?: 'lg' | 'sm'
  readonly title?: React.ReactNode
  readonly toggleModal: () => void
  readonly variant?: 'danger' | 'primary' | 'warning'
}

const DEFAULT_FUNC = () => {};

const ConfirmModal: FC<ConfirmModalProps> = ({
  confirmText = 'OK',
  icon = '',
  content = 'Are you sure?',
  title = 'Confirm',
  show,
  size = 'sm',
  footer = null,
  toggleModal,
  variant = 'primary',
  onConfirm = DEFAULT_FUNC
}) => {
  return (
    <Modal
      centered={true}
      className="confirmation-modal"
      show={show}
      size={size}
      onHide={toggleModal}
    >
      <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
        {icon
          ? <div className={`header-icon bg-${variant}`}>{icon}</div>

          : null}
        <div className="text-body-1 fw-medium">{title}</div>
      </Modal.Header>
      <Modal.Body>
        <div className="text-body-2 fw-medium text-black">{content}</div>
      </Modal.Body>
      <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
        {footer
          ? <>{footer}</>
          : (
          <>
            <Button
              className="w-100 justify-content-center"
              variant="flat-primary"
              onClick={toggleModal}
            >
              Cancel
            </Button>
            <Button
              className="d-flex align-items-center justify-content-center gap-50 w-100"
              variant={variant}
              onClick={onConfirm}
            >
              {icon || null}
              {confirmText}
            </Button>
          </>
          )}
      </Modal.Footer>
    </Modal>
  );
};

ConfirmModal.displayName = 'ConfirmModal';

export { ConfirmModal };
