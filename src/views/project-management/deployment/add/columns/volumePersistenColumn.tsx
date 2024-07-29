/* eslint-disable react/jsx-filename-extension */
import type { TableColumn } from 'react-data-table-component';

interface volumePersistentdataModel {
  name: string
  persistentVolume: string
  mountPoint: string
  subPaths: string
  readonlyVolumeMounts: boolean
}

const volumePersistentColumn: TableColumn<volumePersistentdataModel>[] = [
  {
    name: 'Name',
    cell: (row) => row.name,
    width: '115px'
  },
  {
    name: 'Persisten Volume',
    grow: 1,
    cell: (row) => row.persistentVolume
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

export { volumePersistentColumn };
