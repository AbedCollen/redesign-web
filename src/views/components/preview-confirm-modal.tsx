import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import { Check } from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom';

const PreviewConfirmModal = () => {
  const [open, setOpen] = useState(false),
    [selectedVariant, setSelectedVariant] = useState<'danger' | 'primary' | 'warning'>('primary'),
    [useIcon, setUseIcon] = useState(false);

  const toggleModal = () => setOpen(!open);

  return (
    <div>
      <Row className="mb-2">
        <Col className="d-flex align-items-center justify-content-center" xs={2}>
          <Button onClick={toggleModal}>
            Open Modal
          </Button>
        </Col>
        <Col xs={3}>
          <div className="text-body-1 fw-bold mb-50">Variants</div>
          <div className="d-flex align-items-center gap-1">
            <Form.Check checked={selectedVariant === 'primary'} label="Primary" type="radio" onChange={() => setSelectedVariant('primary')} />
            <Form.Check checked={selectedVariant === 'warning'} label="Warning" type="radio" onChange={() => setSelectedVariant('warning')} />
            <Form.Check checked={selectedVariant === 'danger'} label="danger" type="radio" onChange={() => setSelectedVariant('danger')} />
          </div>
        </Col>
        <Col xs={3}>
          <div className="text-body-1 fw-bold mb-50">Use Icons</div>
          <div className="d-flex align-items-center gap-1">
            <Form.Check checked={useIcon} type="checkbox" onChange={(e) => setUseIcon(e.target.checked)} />
          </div>
        </Col>
        <ConfirmModal
          icon={useIcon ? <Check size={20} /> : undefined}
          show={open}
          toggleModal={toggleModal}
          variant={selectedVariant} />
      </Row>
      <Row>
        <Col>
          <pre className="p-2">
            <Row>
              <Col>
{`<ConfirmModal
  confirmText       ------>        Accepts string, defaults to "OK"
  icon              ------>        Accepts React components | string | number, default empty
  content           ------>        Accepts React components | string | number, defaults to "Are you sure?"
  title             ------>        Accepts React components | string | number, defaults to "Confirm"
  show              ------>        Accepts boolean, defaults to false
  size              ------>        Accepts "lg" | "sm" | undefined, defaults to undefined
  toggleModal       ------>        Accepts function, used for toggling modal show, binded to "Cancel" button
  variant           ------>        Accepts "primary" | "warning" | "danger", defaults to primary
  onConfirm         ------>        Accepts function, used when "confirmText" button is clicked
/>`}
              </Col>
            </Row>
          </pre>
        </Col>
      </Row>
    </div>
  );
};

PreviewConfirmModal.displayName = 'ConfirmModal';

export { PreviewConfirmModal };
