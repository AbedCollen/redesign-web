/* eslint-disable react/jsx-filename-extension */
import { Button } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { Eye } from '@nxweb/icons/feather';

import type { ProjectsDataModel } from '@models/app/app-management/projects/types';

const columns = (
  projectsDetail: (id: number) => void
): TableColumn<ProjectsDataModel>[] => [
  {
    grow: 1,
    name: 'Name',
    selector: (row) => row.name
  },
  {
    grow: 1,
    name: 'Description',
    selector: (row) => row.description
  },
  {
    cell: (row) => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="px-50 py-25"
            variant="outline-primary"
            onClick={() => projectsDetail(row.id)}
          >
            <Eye size={16} />
          </Button>
        </div>
      );
    },
    grow: 1,
    name: 'Action'
  }
];

const columnsDetail: TableColumn<ProjectsDataModel>[] = [
  {
    grow: 1,
    name: 'Name',
    selector: (row) => row.name
  },
  {
    grow: 1,
    name: 'Description',
    selector: (row) => row.description
  }
];

export { columns, columnsDetail };
