/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-filename-extension */
import { Button } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { Trash2 } from '@nxweb/icons/feather';

import type { CertificatesDataModel } from '@models/app/app-management/certificates/types';

const layoutStyle = 'rounded px-75 py-25 rounded-5';

const columns = (
  toggleDeleteModal: () => void
): TableColumn<CertificatesDataModel>[] => [
  {
    grow: 1,
    name: 'Server',
    selector: (row) => row.server
  },
  {
    cell: (row) => {
      return (
        <div className="d-flex gap-50">
          <div className={`${layoutStyle} border-primary bg-light-primary`}>
            {row.type[0]}
          </div>
          <div className={`${layoutStyle} border-secondary bg-light-secondary`}>
            <span className="text-dark">{row.type[1]}</span>
          </div>
        </div>
      );
    },
    grow: 1,
    name: 'Type'
  },
  {
    grow: 1,
    name: 'Info',
    selector: (row) => row.info
  },
  {
    cell: () => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="px-50 py-25"
            variant="outline-danger"
            onClick={() => toggleDeleteModal()}
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
