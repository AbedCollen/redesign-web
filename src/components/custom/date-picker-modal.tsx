/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-key */
import type { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { DatePicker, Space } from 'antd';

import { X } from '@nxweb/icons/feather';

interface DatePickerModalProps {
  readonly openConfirm: boolean
  readonly toggleModal: () => void
}

const { RangePicker } = DatePicker;

const DatePickerModal: FC<DatePickerModalProps> = ({
  toggleModal,
  openConfirm
}) => {
  return (
    <Modal
      centered={true}
      className="confirmation-modal"
      show={openConfirm}
      size="sm"
    >
      <Modal.Header className="d-flex align-items-center justify-content-between py-1">
        <div className="text-body-1 fw-medium">Choose date and time range</div>
        <X color="red" size={16} onClick={toggleModal} />
      </Modal.Header>
      <Modal.Body>
        <Space direction="vertical" size={12}>
          <RangePicker
            getPopupContainer={(trigger) => trigger.parentElement as HTMLElement}
            showTime={true} />
        </Space>
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
          variant="info"
          onClick={toggleModal}
        >
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

DatePickerModal.displayName = 'DatePickerModal';
export { DatePickerModal };
