/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable sort-keys */
import { Button } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { TerminalFill } from '@nxweb/icons/bootstrap';
import { Eye } from '@nxweb/icons/feather';

import type {
  AnnotationsTable,
  ContainersTable,
  EventsTable,
  LabelsTable,
  StatusTable
} from '@models/app/project-management/deployment/types';

const columnsContainer = (
  onClick: (index: number) => void,
  toggleModal: (type: 'Log Detail' | 'Shell') => void
): TableColumn<ContainersTable>[] => [
  {
    name: 'Status',
    cell: (row) => {
      return (
        <div className="border-success rounded bg-light-success py-25 px-50">
          <div className="text-dark">{row.state}</div>
        </div>
      );
    },
    width: '200px'
  },
  {
    name: 'Name',
    grow: 1,
    allowOverflow: true,
    cell: (row) => (
      <a className="text-info" onClick={() => onClick(row.id)}>
        {row.name}
      </a>
    )
  },
  {
    name: 'Image',
    grow: 0,
    minWidth: '400px',
    selector: (row) => row.image
  },
  {
    name: 'Restart',
    minWidth: '100px',
    allowOverflow: true,
    grow: 1,
    selector: (row) => row.restart
  },
  {
    name: 'Action',
    cell: () => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="d-flex align-items-center p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="View Terminal"
            variant="primary"
            onClick={() => toggleModal('Shell')}
          >
            <TerminalFill size={16} />
          </Button>

          <Button
            className="d-flex align-items-center p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="View Container"
            variant="primary"
            onClick={() => toggleModal('Log Detail')}
          >
            <Eye size={16} />
          </Button>
        </div>
      );
    },
    width: '125px'
  }
];

const columnsEvents: TableColumn<EventsTable>[] = [
  {
    name: 'Type',
    grow: 1
    // Selector: (row) => row.type
  },
  {
    name: 'Reason',
    grow: 1
    // Selector: (row) => row.reason
  },
  {
    name: 'Message',
    grow: 1
    // Selector: (row) => row.message
  },
  {
    name: 'Last Seen',
    grow: 1
    // Selector: (row) => row.lastSeen
  }
];

const columnsStatus: TableColumn<StatusTable>[] = [
  {
    name: 'Type',
    grow: 1,
    selector: (row) => row.type
  },
  {
    name: 'Status',
    grow: 1,
    cell: (row) => <div className="text-info">{row.status}</div>
  },
  {
    name: 'Last Update',
    grow: 1,
    selector: (row) => row.lastUpdate
  }
];

const columnsLabel: TableColumn<LabelsTable>[] = [
  {
    name: 'Key',
    grow: 1,
    selector: (row) => row.key
  },
  {
    name: 'Value',
    grow: 1,
    cell: (row) => <div className="text-info">{row.value}</div>
  }
];

const columnsAnnotation: TableColumn<AnnotationsTable>[] = [
  {
    name: 'Key',
    grow: 1
    // Selector: (row) => row.key
  },
  {
    name: 'Value',
    grow: 1
    // Cell: (row) => <div className="text-info">{row.value}</div>
  }
];

export { columnsContainer, columnsEvents, columnsStatus, columnsLabel, columnsAnnotation };
