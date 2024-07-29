import { useEffect } from 'react';
import type { FC } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import { Check } from '@nxweb/icons/feather';

import { MonacoEditor, NxFormControl } from '@components/custom';
import { StoreCommand, useStore } from '@models/store';

interface ServiceAccountModalProps {
  readonly action: 'Edit' | 'View'
  readonly type: 'Namespace' | 'Yaml'
  readonly open: boolean
  readonly toggleModal: () => void
}

const ServiceAccountModal: FC<ServiceAccountModalProps> = ({
  action,
  type,
  open,
  toggleModal
}) => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.userAndRoles?.serviceAccounts?.detail
  );

  useEffect(() => {
    dispatch(StoreCommand.app.userAndRoles.serviceAccounts.GetDetailData());
  }, [dispatch]);

  return (
    <Modal centered={true} className="confirmation-modal" show={open} size="lg">
      <Modal.Header className="d-flex align-items-center justify-content-start gap-75">
        <h5 className="pt-2">{type === 'Namespace' ? 'Data' : action}</h5>
      </Modal.Header>
      <Modal.Body className="p-1">
        {type === 'Namespace'
          ? (
          <Form>
            <NxFormControl
              className={{ container: 'mb-1' }}
              defaultValue={
                store?.detail.secrets[0].detail.dataSecret.namespace
              }
              disabled={action !== 'Edit'}
              label="Namespace"
              type="text" />
          </Form>
          )
          : <MonacoEditor language="json" />}
      </Modal.Body>
      <Modal.Footer className="d-flex align-items-center gap-1 flex-nowrap">
        {action === 'Edit' && (
          <>
            <Button
              className="d-flex align-items-center gap-50"
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
              <Check size={20} />
              Save
            </Button>
          </>
        )}
        {action === 'View' && (
          <Button
            className="justify-content-center"
            variant="flat-primary"
            onClick={toggleModal}
          >
            Close
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

ServiceAccountModal.displayName = 'ServiceAccountModal';
export { ServiceAccountModal };
