import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

interface AlertModalProps {
  readonly showModal: boolean
  readonly toggleModal: () => void
}

const AlertModal: FC<AlertModalProps> = ({ showModal, toggleModal }) => {
  return (
    <Modal centered={true} show={showModal} size="sm" onHide={toggleModal}>
      <Modal.Body>
        <div className="d-flex flex-column gap-75">
          <div className="my-50">Steps to create an Alert</div>
          <div>
            <b>Step 1 - Define the metric</b>
            <ul className="my-50">
              <li>Choose a metric which you want to create an alert on</li>
              <li>Filter it based on WHERE field or GROUPBY if needed</li>
              <li>
                Apply an aggregation function like COUNT, SUM, etc. or choose
                NOOP to plot the raw metric
              </li>
              <li>Create a formula based on Queries if needed</li>
            </ul>
          </div>
          <div>
            <b>Step 2 - Define Alert Conditions</b>
            <ul className="my-50">
              <li>
                Select the evaluation interval, threshold type and whether you
                want to alert above/below a value
              </li>
              <li>Enter the Alert threshold</li>
            </ul>
          </div>
          <div>
            <b>Step 3 - Define Alert Conditions</b>
            <ul className="my-50">
              <li>Set alert severity, name, and descriptions</li>
              <li>Add tags to the alert in the Label field if needed</li>
            </ul>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

AlertModal.displayName = 'AlertModal';
export { AlertModal };
