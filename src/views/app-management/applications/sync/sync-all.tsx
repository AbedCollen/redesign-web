import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import { RefreshCcw, X } from '@nxweb/icons/feather';

import {
  ConfirmModal,
  NxFormCheckGroup,
  NxFormSelect
} from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { allRoutes } from '@config/constants';

import { headerStyle, lowerContainerBorderStyle } from './constants';
import {
  SELECT_OPTIONS,
  SYNC_ALL_APPLICATIONS_OPTIONS,
  SYNC_ALL_PLACEHOLDER_OPTIONS,
  SYNC_ALL_PRUNE_PROPAGATION_POLICY_OPTIONS,
  SYNC_OPTIONS
} from '../constants';

const SyncAllMain = () => {
  const [syncConfirm, setSyncConfirm] = useState(false);
  const toggleSyncModal = () => setSyncConfirm(!syncConfirm);

  const [appCount, setAppCount] = useState<number>(0);

  const handleCheckboxChange = (id: string) => {
    const checkbox = document.getElementById(id) as HTMLInputElement;
    if (checkbox.checked) {
      setAppCount((prevCount) => prevCount + 1);
    } else {
      setAppCount((prevCount) => prevCount - 1);
    }
  };

  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = SYNC_ALL_APPLICATIONS_OPTIONS.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="element-wrapper">
      <div className="shadow-sm d-flex justify-content-between p-2">
        <h5 className="fw-bold m-0 text-black">Sync Application(s)</h5>
        <div className="d-flex gap-1 align-items-center">
          <Button
            as="a"
            className="d-flex gap-50 align-items-center"
            href={allRoutes.appManagement.applications}
            variant="outline-danger"
          >
            <X size={20} /> Cancel
          </Button>
          <Button
            className="d-flex gap-50 align-items-center"
            onClick={toggleSyncModal}
          >
            <RefreshCcw size={16} /> Sync
          </Button>
          <ConfirmModal
            content="Are you sure want to Sync Application?"
            show={syncConfirm}
            title="Sync Application"
            toggleModal={toggleSyncModal}
            variant="primary" />
        </div>
      </div>

      <div className="border rounded p-2 m-2">
        <Row className="mb-2">
          <Col>
            <div className={headerStyle}>
              Placeholder
            </div>
            <div className={`${lowerContainerBorderStyle} text-dark`}>
              <Row>
                <Col>
                  <NxFormCheckGroup
                    className={{ container: 'my-1' }}
                    items={SYNC_ALL_PLACEHOLDER_OPTIONS}
                    label="" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col>
            <div className={headerStyle}>
              Prune Propagration Policy
            </div>
            <div className={lowerContainerBorderStyle}>
              <Row className="mb-1">
                <Col>
                  <NxFormSelect
                    label=""
                    options={SELECT_OPTIONS}
                    placeholder="Placeholder" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <NxFormCheckGroup
                    items={SYNC_ALL_PRUNE_PROPAGATION_POLICY_OPTIONS}
                    label="" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col>
            <div className={headerStyle}>
              Sync Options
            </div>
            <div className={lowerContainerBorderStyle}>
              <Row>
                <Col>
                  <NxFormCheckGroup
                    items={SYNC_OPTIONS}
                    label=""
                    onChange={() => handleCheckboxChange('bapenda')} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col>
            <div className="border rounded-top border-secondary p-1 ">
              <p className="m-0 fw-bold">Choose Applications ({appCount}/5)</p>
              <p className="m-0 small text-dark">
                Choosing over 5 application will slowing down the synchronize
                process.
              </p>
            </div>
            <div className={lowerContainerBorderStyle}>
              <div className="my-75">
                <SearchFilter onSearchChange={handleSearchChange} />
              </div>
              <Row>
                {filteredData.map((o) => (
                  <Col key={o.value} xl={6}>
                    <Form.Group className="my-75">
                      <Form.Check
                        className="text-body-2 fw-medium text-neutral-90"
                        id={o.value}
                        label={o.label}
                        type="checkbox"
                        onChange={() => handleCheckboxChange(`${o.value}`)} />
                    </Form.Group>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

SyncAllMain.displayName = 'SyncAllMain';

export { SyncAllMain };
