/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';

import { Github, Globe2, TerminalFill } from '@nxweb/icons/bootstrap';
import { ChevronDown, Plus, Trash2 } from '@nxweb/icons/feather';

import { ConfirmModal, CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const className = 'd-flex gap-50 align-items-center';

const RepositoriesMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.appManagement?.repositories?.main
  );

  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const toggleDeleteModal = () => setDeleteConfirm(!deleteConfirm);

  useEffect(() => {
    dispatch(StoreCommand.app.appManagement.repositories.GetMainData());
  }, [dispatch]);

  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.repository.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold text-black mt-1">Repositories</h4>
      <div className="border rounded p-2 mt-3">
        <Row className="mb-2">
          <Col xs={5}>
            <SearchFilter onSearchChange={handleSearchChange} />
          </Col>
          <Col className="d-flex justify-content-end gap-50">
            <Dropdown className="no-arrow">
              <Dropdown.Toggle
                className="d-flex gap-50 align-items-center py-75"
                variant="primary"
              >
                <ChevronDown
                  className="text-neutral-90 breadcrumb-chevron"
                  color="white"
                  size={18} />
                Repository
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href={allRoutes.appManagement.settingRepositoriesAddSSH}
                >
                  <div className={className}>
                    <Plus className="me-25" />
                    <TerminalFill />
                    SSH
                  </div>
                </Dropdown.Item>
                <Dropdown.Item
                  href={allRoutes.appManagement.settingRepositoriesAddHTTPS}
                >
                  <div className={className}>
                    <Plus className="me-25" />
                    <Globe2 />
                    HTTPS
                  </div>
                </Dropdown.Item>
                <Dropdown.Item
                  href={allRoutes.appManagement.settingRepositoriesAddGithub}
                >
                  <div className={className}>
                    <Plus className="me-25" />
                    <Github />
                    GitHub
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

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
      </div>
    </div>
  );
};

RepositoriesMain.displayName = 'RepositoriesMain';

export { RepositoriesMain };
