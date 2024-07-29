/* eslint-disable react/hook-use-state */
import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { Check, Plus } from '@nxweb/icons/feather';

import { CustomDataTable, NxFormControl } from '@components/custom';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const UserManagementDetailMain = () => {
  const [newValue, setNewValue] = useState(true);

  const [store, dispatch] = useStore(
    (state) => state?.app?.appManagement?.userManagement?.detail
  );

  const toggleButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setNewValue(!newValue);
  };

  useEffect(() => {
    dispatch(StoreCommand.app.appManagement.userManagement.GetDetailData());
  }, [dispatch]);

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold text-black mt-1">User Management</h4>

      <div className="border rounded p-2 mt-3">
        <Row className="mb-1">
          <Col>
            <NxFormControl
              label="Name"
              placeholder="placeholder"
              value={store?.name} />
          </Col>
          <Col>
            <NxFormControl
              label="Enabled"
              placeholder="placeholder"
              value={store?.enabled} />
          </Col>
          <Col>
            <NxFormControl
              label="Capabilities"
              placeholder="placeholder"
              value={store?.capabilities} />
          </Col>
        </Row>
        <Row className="mb-1">
          <Col>
            <div>
              <div className="d-flex justify-content-between align-items-center border rounded-top border-secondary p-1 fw-bold">
                <div>Token</div>
                <div className="d-flex justify-content-end">
                  {newValue
                    ? (
                    <Button variant="outline-primary" onClick={toggleButton}>
                      <Plus className="me-25" size={16} />
                      New
                    </Button>
                    )
                    : (
                    <div className="d-flex justify-content-end">
                      <div className="d-flex flex-row gap-75">
                        <Button variant="flat-primary" onClick={toggleButton}>
                          New
                        </Button>
                        <Button variant="outline-primary">
                          <Check className="me-25" size={16} />
                          Save
                        </Button>
                      </div>
                    </div>
                    )}
                </div>
              </div>
              <div className="border rounded-bottom border-top-0 p-1">
                <Row>
                  <Col>
                    <NxFormControl label="Token ID" placeholder="Placeholder" />
                  </Col>
                  <Col>
                    <NxFormControl
                      label="Expires In"
                      placeholder="Placeholder" />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomDataTable columns={columns} data={store?.detail || []} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

UserManagementDetailMain.displayName = 'UserManagementDetailMain';

export { UserManagementDetailMain };
