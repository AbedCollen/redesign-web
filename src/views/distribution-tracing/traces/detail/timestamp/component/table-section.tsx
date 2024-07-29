import { useEffect, useState } from 'react';
import { Col, Dropdown, Form, InputGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import {
  AlignJustify,
  DownloadCloud,
  List,
  Search,
  Table
} from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { StoreCommand, useStore } from '@models/store';

import { INTERESTING_FIELDS } from '@src/views/distribution-tracing/traces/constants';
import {
  listColumns,
  rawColumns,
  tableColumns
} from '@src/views/distribution-tracing/traces/detail/timestamp/columns';

import { SearchFilter } from './search-filter';

const TableSection = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.logs?.searching?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.logs.searching.GetMainData());
  }, [dispatch]);

  const navigate = useNavigate();
  const detailLogs = (index: number) => {
    navigate(`../logs/searching/detail/${index}`);
  };

  const [selectedTable, setSelectedTable] = useState<string>('Raw');

  const handleTableViews = (eventKey: string | null) => {
    if (eventKey !== null) {
      setSelectedTable(eventKey);
    }
  };

  return (
    <>
      <Row className="d-flex align-items-center py-1">
        <Col sm={5}>
          <InputGroup>
            <Form.Control
              className="w-25 border-end-0"
              placeholder="Filter Value" />
            <InputGroup.Text className="border-start-0">
              <Search className="text-neutral-50" size={24} />
            </InputGroup.Text>
            <SearchFilter items={INTERESTING_FIELDS} />
          </InputGroup>
        </Col>
        <Col sm={3}>
          <Dropdown onSelect={(e) => handleTableViews(e || '')}>
            <Dropdown.Toggle
              className="d-flex align-items-center border-neutral-50"
              variant="outline-dark"
            >
              {selectedTable === 'Raw' &&
                <AlignJustify className="me-1" size={16} />}
              {selectedTable === 'Table' &&
                <Table className="me-1" size={16} />}
              {selectedTable === 'List' && <List className="me-1" size={16} />}
              {selectedTable}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Raw">Raw</Dropdown.Item>
              <Dropdown.Item eventKey="Table">Table</Dropdown.Item>
              <Dropdown.Item eventKey="List">List</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <div className="d-flex justify-content-end">
            <Dropdown className="no-arrow">
              <Dropdown.Toggle variant="outline-none text-primary">
                <div className="d-flex align-items-center justify-content-center gap-50">
                  <DownloadCloud size={16} />
                  Download
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Excel</Dropdown.Item>
                <Dropdown.Item>CSV</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {selectedTable === 'Raw' && (
            <CustomDataTable
              columns={rawColumns(detailLogs)}
              data={store?.data || []}
              totalRows={store?.total} />
          )}

          {selectedTable === 'Table' && (
            <CustomDataTable
              columns={tableColumns(detailLogs)}
              data={store?.data || []}
              totalRows={store?.total} />
          )}

          {selectedTable === 'List' && (
            <CustomDataTable
              columns={listColumns(detailLogs)}
              data={store?.data || []}
              totalRows={store?.total} />
          )}
        </Col>
      </Row>
    </>
  );
};

TableSection.displayName = 'TableSection';
export { TableSection };
