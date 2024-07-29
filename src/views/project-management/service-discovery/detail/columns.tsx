/* eslint-disable react/jsx-filename-extension */
import type { TableColumn } from 'react-data-table-component';

import type { ServiceDiscoveryAffinityDataModel, ServiceDiscoveryLabelDataModel, ServiceDiscoveryPortDataModel, ServiceDiscoveryPublishedDataModel } from '@models/app/project-management/service-discovery/types';

const labelColumns: TableColumn<ServiceDiscoveryLabelDataModel>[] = [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    name: 'Key',
    selector: (row) => row.key
  },
  {
    name: 'Value',
    selector: (row) => row.value
  }
];

const publishedColumns: TableColumn<ServiceDiscoveryPublishedDataModel>[] = [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    name: 'Published IP Addresses',
    selector: (row) => row.ipAddresses
  }
];

const portColumns: TableColumn<ServiceDiscoveryPortDataModel>[] = [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    name: 'Port Name',
    selector: (row) => row.portName
  },
  {
    name: 'Service Port',
    selector: (row) => row.servicePort
  },
  {
    name: 'Protocol',
    selector: (row) => row.protocol
  },
  {
    name: 'Target Port',
    selector: (row) => row.targetPort
  }
];

const affinityColumns: TableColumn<ServiceDiscoveryAffinityDataModel>[] = [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '75px'
  },
  {
    name: 'Session Affinity',
    selector: (row) => row.sessionAffinity
  }
];

export { labelColumns, publishedColumns, portColumns, affinityColumns };
