// eslint-disable-next-line react/jsx-filename-extension
import type { TableColumn } from 'react-data-table-component';

import type { SearchingDetailModel } from '@models/app/logs/searching/types';

const columns: TableColumn<SearchingDetailModel>[] = [
  {
    grow: 0,
    name: 'Field',
    selector: (row) => row.field,
    width: '275px'
  },
  {
    grow: 1,
    name: 'Value',
    selector: (row) => row.value,
    wrap: true
  }
];

export { columns };
