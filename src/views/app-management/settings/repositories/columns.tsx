/* eslint-disable react/jsx-filename-extension */
import { Button } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { CheckCircle, Trash2, XCircle } from '@nxweb/icons/feather';

import type { RepositoriesDataModel } from '@models/app/app-management/repositories/types';

const textStyle = 'text-body-3 fw-medium';

const columns = (
  toggleDeleteModal: () => void
): TableColumn<RepositoriesDataModel>[] => [
  {
    grow: 1,
    name: 'URL',
    selector: (row) => row.URL
  },
  {
    grow: 1,
    name: 'Repository',
    selector: (row) => row.repository
  },
  {
    grow: 1,
    name: 'Username',
    selector: (row) => row.username
  },
  {
    cell: (row) => {
      return (
        <div
          className={`round d-flex align-items-center gap-25 px-75 py-25 ${
            row.status
              ? 'text-success border-success bg-light-success'
              : 'text-danger border-danger bg-light-danger'
          }`}
        >
          {row.status ? <CheckCircle size={12} /> : <XCircle size={12} />}
          {row.status
            ? <div className={`${textStyle} text-success`}>Successful</div>

            : <div className={`${textStyle} text-danger`}>Failed</div>}
        </div>
      );
    },
    grow: 1,
    name: 'Status'
  },
  {
    cell: () => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="px-50 py-25"
            variant="outline-danger"
            onClick={toggleDeleteModal}
          >
            <Trash2 className="text-danger" size={16} />
          </Button>
        </div>
      );
    },
    grow: 1,
    name: 'Action'
  }
];

export { columns };
