import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Plus } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const IngressMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.ingress?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.ingress.GetMainData());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleIngressEdit = (id: number) => {
    navigate(`./edit/${id}`);
  };
  const handleIngressDetail = (id: number) => {
    navigate(`./detail/${id}`);
  };

  const [openConfirm, setOpenConfirm] = useState(false);
  const toggleModal = () => setOpenConfirm(!openConfirm);

  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = store?.data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mb-2 text-black">Ingress</h4>
      <div className="rounded border p-1">
        <Form>
          <Row className="mb-1">
            <Col xs={5}>
              <SearchFilter onSearchChange={handleSearchChange} />
            </Col>
            <Col className="d-flex justify-content-end">
              <Button className="d-flex align-items-center gap-50" href={allRoutes.projectManagement.ingressAdd}>
                <Plus size={16} />
                Ingress
              </Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <CustomDataTable
                columns={columns(
                  handleIngressEdit,
                  handleIngressDetail,
                  openConfirm,
                  toggleModal
                )}
                data={filteredData || []}
                totalRows={store?.total} />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

IngressMain.displayName = 'IngressMain';
export { IngressMain };
