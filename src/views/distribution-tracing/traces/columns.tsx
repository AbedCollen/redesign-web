/* eslint-disable react/jsx-filename-extension */
import type { TableColumn } from 'react-data-table-component';

import type { TracesDataModel } from '@models/app/distribution-tracing/traces/types';

const Columns = (
  detailTraces: (index: number) => void,
  detailTracesTime: (index: number) => void
): TableColumn<TracesDataModel>[] => [
  {
    grow: 1,
    name: 'Date',
    cell: (row) => <a onClick={() => detailTraces(row.id)}>{row.date}</a>
  },
  {
    grow: 1,
    name: 'Service',
    cell: (row) => <a onClick={() => detailTracesTime(row.id)}>{row.service}</a>

  },
  {
    grow: 1,
    name: 'Operation',
    selector: (row) => row.operation
  },
  {
    grow: 1,
    name: 'Duration',
    selector: (row) => row.duration
  },
  {
    grow: 1,
    name: 'Method',
    cell: (row) => {
      return (
        <div
          className={`round d-flex align-items-center gap-25 px-75 py-25 ${
            row.method === '-'
              ? ''
              : 'bg-light-danger text-danger border-danger'
          }`}
        >
          {row.method}
        </div>
      );
    }
  },
  {
    grow: 1,
    name: 'Status Code',
    cell: (row) => {
      return (
        <div
          className={`round d-flex align-items-center gap-25 px-75 py-25 ${
            row.statusCode === '-'
              ? ''
              : 'bg-light-danger text-danger border-danger'
          }`}
        >
          {row.statusCode}
        </div>
      );
    }
  }
];

export { Columns };
