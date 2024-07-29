import { Button } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { Copy, Maximize2 } from '@nxweb/icons/feather';

import type {
  SearchingDataModel
} from '@models/app/logs/searching/types';

const rawColumns = (
  detailLogs: (index: number) => void
): TableColumn<SearchingDataModel>[] => [
  {
    cell: (row) => {
      return (
        <div className="d-flex py-1 align-items-center">
          <div>
            <Button
              className="me-1 px-50 py-25"
              variant="flat-primary"
              onClick={() => detailLogs(row.index)}
            >
              <Maximize2 size={16} />
            </Button>
          </div>
          <div className="w-75">{JSON.stringify(row.body)}</div>
        </div>
      );
    },
    grow: 1,
    name: 'Event'
  }
];

const tableColumns = (
  detailLogs: (index: number) => void
): TableColumn<SearchingDataModel>[] => [
  {
    cell: (row) => {
      return (
        <Button
          className="me-1 px-50 py-25"
          variant="flat-primary"
          onClick={() => detailLogs(row.index)}
        >
          <Maximize2 size={16} />
        </Button>
      );
    },
    center: true,
    name: '',
    width: '75px'
  },
  {
    grow: 1,
    name: 'Timestamp',
    selector: (row) => row.timestamp,
    width: '200px'
  },
  {
    grow: 0,
    name: 'Tenant',
    selector: (row) => row.tenant
  },
  {
    cell: (row) => {
      return (
        <div className="w-75 py-1">{JSON.stringify(row.body)}</div>
      );
    },
    grow: 1,
    name: 'Body'
  }
];

const listColumns = (
  detailLogs: (index: number) => void
): TableColumn<SearchingDataModel>[] => [
  {
    cell: (row) => {
      return (
        <div className="d-flex py-1 align-items-center">
          <div className="border rounded p-1">
            <div>
              <p>log:</p>
              <p>{JSON.stringify(row.body)}</p>
            </div>
            <div className="border-top pt-1">
              <Button
                className="px-50 py-25 me-1"
                variant="flat-primary"
                onClick={() => detailLogs(row.index)}
              >
                <Maximize2 size={16} /> View Details
              </Button>
              <Button
                className="px-50 py-25"
                variant="flat-light"
              >
                <Copy size={16} /> Copy Json
              </Button>
            </div>
          </div>
        </div>
      );
    },
    name: 'Event'
  }
];

export { rawColumns, tableColumns, listColumns };
