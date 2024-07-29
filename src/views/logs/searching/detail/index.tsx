import { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Form,
  InputGroup,
  Nav,
  Row
} from 'react-bootstrap';

import { Search } from '@nxweb/icons/bootstrap';
import { Copy } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom/custom-data-table';
import { MonacoEditor } from '@components/custom/monaco-editor';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const SearchingDetailMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.logs?.searching?.detail
  );

  useEffect(() => {
    dispatch(StoreCommand.app.logs.searching.GetDetailData());
  }, [dispatch]);

  const [activeTabs, setActiveTabs] = useState<string>('table');

  const handleTabs = (tabs: string) => {
    setActiveTabs(tabs);
  };

  return (
    <div className="p-2">
      <Row className="shadow-sm mb-2">
        <Col className="d-flex align-items-center">
          <h5 className="fw-bold text-black mb-2">Log Details</h5>
        </Col>
      </Row>
      <div className="p-1 border rounded">
        <Row>
          <Col>
            <Nav defaultActiveKey="/home" variant="tabs">
              <Nav.Item>
                <Nav.Link
                  active={activeTabs === 'table'}
                  onClick={() => handleTabs('table')}
                >
                  Table
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTabs === 'JSON'}
                  onClick={() => handleTabs('JSON')}
                >
                  JSON
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        {activeTabs === 'table' && (
          <>
            <Row>
              <Col>
                <InputGroup className="w-50">
                  <Form.Control
                    className="w-25 border-end-0"
                    placeholder="Search field names" />
                  <InputGroup.Text className="border-start-0">
                    <Search className="text-neutral-50" size={24} />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col className="mt-1">
              <CustomDataTable
                columns={columns}
                data={store?.detail || []}
                pagination={false} />
              </Col>
            </Row>
          </>
        )}
        {activeTabs === 'JSON' && (
          <>
            <Row>
              <Col className="d-flex justify-content-end">
                <Button className="px-50 py-25" variant="flat-secondary">
                  <Copy className="me-1" size={16} />
                  Copy to Clipboard
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <MonacoEditor language="javascript" />
              </Col>
            </Row>
          </>
        )}
      </div>
    </div>
  );
};

SearchingDetailMain.displayName = 'SearchingDetailMain';
export { SearchingDetailMain };
