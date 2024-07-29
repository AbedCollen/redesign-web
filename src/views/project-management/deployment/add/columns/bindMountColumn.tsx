/* eslint-disable react/jsx-filename-extension */
import type { TableColumn } from 'react-data-table-component';

interface bindMounthdataModel {
  name: string
  path: string
  pathNode: string
  mountPoint: string
  subPaths: string
  readonlyVolumeMounts: boolean
}

const bindMountColumn: TableColumn<bindMounthdataModel>[] = [
  {
    name: 'Name',
    cell: (row) => row.name,
    width: '115px'
  },
  {
    name: 'path',
    grow: 1,
    cell: (row) => row.path
  },
  {
    name: 'pathNode',
    grow: 0,
    minWidth: '150px',
    selector: (row) => row.pathNode
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

export { bindMountColumn };
