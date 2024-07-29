/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import type { TableColumn } from 'react-data-table-component';

import {
  CheckCircleFill,
  ExclamationTriangleFill,
  HeartFill,
  QuestionCircleFill
} from '@nxweb/icons/bootstrap';

import type { ApplicationDataModel } from '@models/app/app-management/application/types';

const statusIcon = 'text-body-3 fw-medium';
const statusStyle = {
  style: 'round d-flex align-items-center gap-50 px-75 py-25',
  warning: 'text-warning border-warning bg-light',
  success: 'text-success border-success bg-light-success',
  secondary: 'text-secondary border-secondary bg-light-secondary'
};

const columns = (
  mapApp: (id: number) => void
): TableColumn<ApplicationDataModel>[] => [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    style: {
      'align-items': 'start',
      paddingTop: '15px'
    },
    width: '75px'
  },
  {
    grow: 1,
    name: 'Title',
    cell: (row) => {
      return <a onClick={() => mapApp(row.id)}> {row.title}</a>;
    }
  },
  {
    grow: 1,
    name: 'Project',
    selector: (row) => row.project
  },
  {
    cell: (row) => {
      return (
        <div
          className={` ${statusStyle.style} ${
            row.sync ? `${statusStyle.success}` : `${statusStyle.warning}`
          }`}
        >
          {row.sync
            ? <CheckCircleFill size={12} />

            : <ExclamationTriangleFill size={12} />}
          {row.sync
            ? <div className={`${statusIcon} text-success`}>Synced</div>

            : <div className={`${statusIcon} text-warning`}>Out of Synced</div>}
        </div>
      );
    },
    grow: 1,
    name: 'Sync'
  },
  {
    cell: (row) => {
      return (
        <div
          className={` ${statusStyle.style} ${
            row.health ? `${statusStyle.success}` : `${statusStyle.secondary}`
          }`}
        >
          {row.health
            ? <HeartFill size={12} />

            : <QuestionCircleFill size={12} />}
          {row.health
            ? <div className={`${statusIcon} text-success`}>Healthy</div>

            : <div className={`${statusIcon} text-danger`}>Missing</div>}
        </div>
      );
    },
    grow: 1,
    name: 'Health'
  },
  {
    grow: 1,
    name: 'Repository',
    selector: () => 'Placeholder'
  }
];

export { columns };
