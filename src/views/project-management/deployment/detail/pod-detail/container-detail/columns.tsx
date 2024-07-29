/* eslint-disable sort-keys */
import { Button } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { ChevronDown, TerminalFill } from '@nxweb/icons/bootstrap';
import { ChevronUP, Eye } from '@nxweb/icons/feather';

import type {
  AnnotationsTable,
  EnvironmentVariablesTable,
  LabelsTable,
  PodsContainerTable,
  ScaleTable,
  StatusTable,
  VolumesTable
} from '@models/app/project-management/deployment/types';

const columnsPods: TableColumn<PodsContainerTable>[] = [
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
      <div className="text-info">
        {row.name}
      </div>
    )
  },
  {
    name: 'Image',
    grow: 0,
    minWidth: '400px',
    selector: (row) => row.image
  },
  {
    name: 'Nodes',
    minWidth: '100px',
    allowOverflow: true,
    grow: 1,
    selector: (row) => row.nodes
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
          >
            <TerminalFill size={16} />
          </Button>

          <Button
            className="d-flex align-items-center p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="View Container"
            variant="primary"
          >
            <Eye size={16} />
          </Button>
        </div>
      );
    },
    width: '125px'
  }
];

const columnsScale: TableColumn<ScaleTable>[] = [
  {
    name: 'Scale',
    grow: 1,
    selector: (row) => row.scale
  },
  {
    name: 'Name',
    grow: 1,
    cell: (row) => <div className="text-info">{row.name}</div>,
    minWidth: '400px'
  },
  {
    cell: () => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="d-flex align-items-center p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="View Terminal"
            variant="primary"
          >
            <ChevronUP size={16} />
          </Button>

          <Button
            className="d-flex align-items-center p-50"
            data-placement="top"
            data-toggle="tooltip"
            title="View Container"
            variant="primary"
          >
            <ChevronDown size={16} />
          </Button>
        </div>
      );
    },
    width: '150px'
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

const columnsEnvTable: TableColumn<EnvironmentVariablesTable>[] = [
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

const columnsVolume: TableColumn<VolumesTable>[] = [
  {
    name: 'Name',
    grow: 1,
    selector: (row) => row.name
  },
  {
    name: 'Type',
    grow: 1,
    cell: (row) => <div className="text-info">{row.type}</div>
  },
  {
    name: 'Mount Point',
    grow: 1,
    selector: (row) => row.mountPoint
  },
  {
    name: 'Read-Only',
    grow: 1,
    selector: (row) => row.readonly
  }
];

export { columnsPods, columnsScale, columnsStatus, columnsLabel, columnsAnnotation, columnsEnvTable, columnsVolume };
