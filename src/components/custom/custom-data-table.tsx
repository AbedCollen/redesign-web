import type { FC } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Form } from 'react-bootstrap';
import type { TableColumn, TableStyles } from 'react-data-table-component';
import DataTable from 'react-data-table-component';
import ReactPaginate from 'react-paginate';

import { ChevronDown } from '@nxweb/icons/feather';

interface MainProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly columns: TableColumn<any>[]
  readonly customStyles?: TableStyles
  readonly data: unknown[]
  readonly tableCurrentPage?: number
  readonly totalRows?: number
  readonly tableRowsPerPage?: number
  readonly onSort?: (column: TableColumn<unknown>, sortDirection: string) => void
  readonly onPageChange?: (selectedItem: { selected: number }) => void
  readonly onRowsPerPageChange?: (data: number) => void
  readonly pagination?: boolean
  readonly selectableRows?: boolean
  readonly selectableRowsSingle?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly onSelectedRowsChange?: ({ allSelected, selectedCount, selectedRows }: { allSelected: boolean, selectedCount: number, selectedRows: any[] }) => void
}

const EMPTY_FUNC = () => { };
const EMPTY_STYLES: TableStyles = {
  headRow: {
    style: {
      borderRadius: '8px 8px 0px 0px',
      border: '1px solid #4F7899'
    }
  }
};

const CustomDataTable: FC<MainProps> = ({
  columns,
  customStyles = EMPTY_STYLES,
  data,
  tableCurrentPage = 1,
  tableRowsPerPage = 10,
  totalRows,
  onSort,
  onPageChange,
  onRowsPerPageChange,
  pagination = true,
  selectableRows = false,
  selectableRowsSingle = true,
  onSelectedRowsChange = EMPTY_FUNC
}) => {
  const [currentPage, setCurrentPage] = useState(tableCurrentPage),
    [rowsPerPage, setRowsPerPage] = useState(tableRowsPerPage);

  const currentTotalRows = useMemo(() => {
    const tempTotalRow = totalRows || 0;

    if (tempTotalRow) {
      return Math.ceil(tempTotalRow / rowsPerPage);
    }

    return 1;
  }, [totalRows]);

  useEffect(() => {
    setCurrentPage(tableCurrentPage);
  }, [tableCurrentPage]);

  useEffect(() => {
    setRowsPerPage(tableRowsPerPage);
  }, [tableRowsPerPage]);

  const handleSort = (column: TableColumn<unknown>, sortDirection: string) => {
    if (onSort) onSort(column, sortDirection);
  };

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected + 1);
    if (onPageChange) onPageChange(selectedItem);
  };

  const handleRowsPerPageChange = (data: number) => {
    setRowsPerPage(data);
    if (onRowsPerPageChange) onRowsPerPageChange(data);
  };

  return (
    <div className="custom-data-table">
      <DataTable
        className="react-dataTable"
        columns={columns}
        customStyles={customStyles}
        data={data}
        noHeader={true}
        responsive={true}
        selectableRows={selectableRows}
        selectableRowsHighlight={true}
        selectableRowsSingle={selectableRowsSingle}
        sortIcon={<ChevronDown />}
        sortServer={true}
        style={{ height: '70vh', overflowY: 'auto' }}
        onSelectedRowsChange={onSelectedRowsChange}
        onSort={handleSort} />
      {pagination
        ? <div className="d-flex align-items-center justify-content-between mt-2">
          <div className="d-flex align-items-center">
            <div className="text-body-2-medium text-neutral-90 me-1">
              Show
            </div>
            <Form.Select
              className="border-neutral-90"
              size="sm"
              style={{ width: '110px' }}
              value={rowsPerPage}
              onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}
            >
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </Form.Select>
          </div>

          <ReactPaginate
            activeClassName="active"
            breakClassName="page-item"
            breakLabel="..."
            breakLinkClassName="page-link"
            containerClassName="pagination react-paginate"
            forcePage={currentPage !== 0 ? currentPage - 1 : 0}
            nextClassName="page-item next"
            nextLabel=""
            nextLinkClassName="page-link"
            pageClassName="page-item"
            pageCount={currentTotalRows}
            pageLinkClassName="page-link"
            previousClassName="page-item prev"
            previousLabel=""
            previousLinkClassName="page-link"
            onPageChange={handlePageChange} />
          </div>
        : null}
    </div>
  );
};

CustomDataTable.displayName = 'CustomDataTable';

export { CustomDataTable };
