/* eslint-disable react/jsx-filename-extension */
import type { TableColumn } from 'react-data-table-component';

interface volumePersistentdataModel {
  volumeName: string
  Type: string
  DefaultMode: string
  optional: string
  use: string
  item: string
  mountPoint: string
  subPaths: string
  readonlyVolumeMounts: boolean
}

const OtherColumn: TableColumn<volumePersistentdataModel>[] = [
  {
    name: 'volume Name',
    cell: (row) => row.volumeName,
    width: '115px'
  },
  {
    name: 'Type',
    grow: 1,
    cell: (row) => row.Type
  },
  {
    name: 'Default Mode',
    grow: 1,
    cell: (row) => row.DefaultMode
  },
  {
    name: 'use',
    grow: 1,
    cell: (row) => row.use
  },
  {
    name: 'Item',
    grow: 1,
    cell: (row) => row.item
  },
  {
    name: 'Mount Point',
    grow: 0,
    minWidth: '150px',
    selector: (row) => row.mountPoint
  },
  {
    name: 'Sub Paths',
    grow: 1,
    cell: (row) => row.subPaths
  },
  {
    name: 'Read Onlu Volume Mounts',
    cell: (row) => row.readonlyVolumeMounts,
    width: '125px'
  }
];

export { OtherColumn };
