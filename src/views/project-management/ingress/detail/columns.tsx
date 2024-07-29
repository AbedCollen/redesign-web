/* eslint-disable react/jsx-filename-extension */
import type { TableColumn } from 'react-data-table-component';

import type { IngressAnnotationDataModel, IngressHostDataModel, IngressLabelDataModel } from '@models/app/project-management/ingress/types';

const hostColumns: TableColumn<IngressHostDataModel>[] = [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    grow: 1,
    name: 'Path',
    selector: (row) => row.path
  },
  {
    grow: 1,
    name: 'Target',
    selector: (row) => row.target
  },
  {
    grow: 1,
    name: 'Port',
    selector: (row) => row.port
  }
];

const labelColumns: TableColumn<IngressLabelDataModel>[] = [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    grow: 1,
    name: 'Key',
    selector: (row) => row.key
  },
  {
    grow: 1,
    name: 'Value',
    selector: (row) => row.value
  }
];

const annotationColumns: TableColumn<IngressAnnotationDataModel>[] = [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    grow: 1,
    name: 'Key',
    selector: (row) => row.key
  },
  {
    grow: 1,
    name: 'Value',
    selector: (row) => row.value
  }
];

export { hostColumns, labelColumns, annotationColumns };
