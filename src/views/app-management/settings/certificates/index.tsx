import { useEffect, useState } from 'react';
import { Button, Col, Dropdown, Row } from 'react-bootstrap';

import { ChevronDown, Plus, RefreshCcw, Trash2 } from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom';
import { CustomDataTable } from '@components/custom/custom-data-table';
import { SearchFilter } from '@components/custom/search-filter';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const layoutStyle = 'd-flex gap-50 align-items-center';

const CertificatesMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.appManagement?.certificates?.main
  );

  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const toggleDeleteModal = () => setDeleteConfirm(!deleteConfirm);

  useEffect(() => {
    dispatch(StoreCommand.app.appManagement.certificates.GetMainData());
  }, [dispatch]);

  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.server.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold text-black mt-1">Certificates</h4>
      <div className="border rounded p-2 mt-3">
        <Row className="mb-2">
          <Col xs={5}>
            <SearchFilter onSearchChange={handleSearchChange} />
          </Col>
          <Col className="d-flex justify-content-end gap-50">
            <Button className={`${layoutStyle}`} variant="outline-primary">
              <RefreshCcw size={16} />
            </Button>
            <Dropdown className="no-arrow">
              <Dropdown.Toggle
                className={`${layoutStyle} py-75`}
                variant="primary"
              >
                <ChevronDown
                  className="text-neutral-90 breadcrumb-chevron"
                  color="white"
                  size={18} />
                Certificates
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href={allRoutes.appManagement.settingCertificatesAddSSH}
                >
                  <div className={`${layoutStyle}`}>
                    <Plus />
                    SSH Known Hosts
                  </div>
                </Dropdown.Item>
                <Dropdown.Item
                  href={allRoutes.appManagement.settingCertificatesAddTLS}
                >
                  <div className={`${layoutStyle}`}>
                    <Plus />
                    TLS Certificates
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row>
          <Col>
            <CustomDataTable
              columns={columns(toggleDeleteModal)}
              data={filteredData || []}
              totalRows={store?.total} />
            <ConfirmModal
              confirmText="Delete"
              content="Are you sure want to delete this Connection?"
              icon={<Trash2 />}
              show={deleteConfirm}
              title="Modals Danger"
              toggleModal={toggleDeleteModal}
              variant="danger" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

CertificatesMain.displayName = 'CertificatesMain';

export { CertificatesMain };
