import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Plus } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const CertificateMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.certificate?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.certificate.GetMainData());
  }, [dispatch]);

  const navigate = useNavigate();
  const editCertificate = (id: number) => {
    navigate(`./edit-certificate/${id}`);
  };

  const [showMonaco, setShowMonaco] = useState<boolean[]>(
    new Array<boolean>(store?.total || 0)
  );
  const handleCloseMonaco = (index: number) => {
    const expandStatus = [...showMonaco];

    expandStatus[index] = false;
    setShowMonaco(expandStatus);
  };
  const handleShowMonaco = (index: number) => {
    const expandStatus = [...showMonaco];

    expandStatus[index] = true;
    setShowMonaco(expandStatus);
  };

  const [showDetail, setShowDetail] = useState<boolean[]>(
    new Array<boolean>(store?.total || 0)
  );
  const handleCloseDetail = (index: number) => {
    const expandStatus = [...showDetail];

    expandStatus[index] = false;
    setShowDetail(expandStatus);
  };
  const handleShowDetail = (index: number) => {
    const expandStatus = [...showDetail];

    expandStatus[index] = true;
    setShowDetail(expandStatus);
  };

  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);

  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mb-2 text-black">Certificate</h4>
      <div className="rounded border p-1">
        <Row className="mb-1">
          <Col xs={5}>
            <SearchFilter onSearchChange={handleSearchChange} />
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              className="d-flex align-items-center gap-50"
              href={allRoutes.projectManagement.addCertificate}
            >
              <Plus size={16} />
              Certificate
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomDataTable
              columns={columns(
                open,
                toggleModal,
                editCertificate,
                showMonaco,
                handleCloseMonaco,
                handleShowMonaco,
                showDetail,
                handleCloseDetail,
                handleShowDetail
              )}
              data={filteredData || []}
              totalRows={store?.total} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

CertificateMain.displayName = 'CertificateMain';
export { CertificateMain };
