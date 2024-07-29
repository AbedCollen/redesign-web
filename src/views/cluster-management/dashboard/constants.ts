const DATA_CLUSTER_CAPACITY = [
  {
    label: 'requested',
    title: 'Memory',
    value: 150
  },
  {
    label: 'capacity',
    title: 'Memory',
    value: 500
  }
];
const DATA_CLUSTER_CAPACITY_2 = [
  {
    label: 'requested',
    title: 'CPU',
    value: 450
  },
  {
    label: 'capacity',
    title: 'CPU',
    value: 500
  }
];

const DATA_CLUSTER_INVENTORY_1 = {
  healthy: 4,
  title: 'Nodes',
  unhealthy: 2
};

const DATA_CLUSTER_INVENTORY_2 = {
  healthy: 2,
  title: 'Pods',
  unhealthy: 4
};
const DATA_CLUSTER_INVENTORY_3 = {
  healthy: 3,
  title: 'Storage Classes',
  unhealthy: 3
};
const DATA_CLUSTER_INVENTORY_4 = {
  healthy: 4,
  title: 'Presistent Volume',
  unhealthy: 2
};
const DATA_CLUSTER_INVENTORY_5 = {
  healthy: 4,
  title: 'Presistent Volume Claim',
  unhealthy: 2
};
const DATA_CLUSTER_INVENTORY_6 = {
  healthy: 5,
  title: 'Namespaces',
  unhealthy: 1
};

const DATA_LINE = [
  {
    color: 'linear-gradient(264.86deg, #E3A5F9 0%, #5B8AB0 100%)',
    id: 'Healthy',
    label: 'Healthy',
    title: 'Deployments',
    value: 2
  },
  {
    color: 'hsla(207, 92%, 90%, 1)',
    id: 'Unhealty',
    label: 'Unhealthy',
    title: 'Deployments',
    value: 4
  }
];

const DATA_LINE_2 = [
  {
    color: 'linear-gradient(264.86deg, #E3A5F9 0%, #5B8AB0 100%)',
    id: 'Healthy',
    label: 'Healthy',
    title: 'Statefulsets',
    value: 4
  },
  {
    color: 'hsla(207, 92%, 90%, 1)',
    id: 'Unhealty',
    label: 'Unhealthy',
    title: 'Statefulsets',
    value: 2
  }
];

const DATA_LINE_3 = [
  {
    color: 'linear-gradient(264.86deg, #E3A5F9 0%, #5B8AB0 100%)',
    id: 'Healthy',
    label: 'Healthy',
    title: 'Daemonsets',
    value: 4
  },
  {
    color: 'hsla(207, 92%, 90%, 1)',
    id: 'Unhealty',
    label: 'Unhealthy',
    title: 'Daemonsets',
    value: 2
  }
];

const DATA_BUMP = [
  {
    color: 'hsla(357, 95%, 75%, 1)',
    data: [
      { x: 2000, y: 3 },
      { x: 2001, y: 4 },
      { x: 2002, y: 5 },
      { x: 2003, y: 4 },
      { x: 2004, y: 3 },
      { x: 2005, y: 4 }
    ],
    id: 'Ended',
    title: 'CPU Utilization'
  },
  {
    color: 'hsla(173, 68%, 67%, 1)',
    data: [
      { x: 2000, y: 4 },
      { x: 2001, y: 3 },
      { x: 2002, y: 2 },
      { x: 2003, y: 3 },
      { x: 2004, y: 4 },
      { x: 2005, y: 3 }
    ],
    id: 'Evaluated',
    title: 'CPU Utilization'
  }
];

const DATA_BUMP_2 = [
  {
    color: 'hsla(357, 95%, 75%, 1)',
    data: [
      { x: 2000, y: 3 },
      { x: 2001, y: 4 },
      { x: 2002, y: 5 },
      { x: 2003, y: 4 },
      { x: 2004, y: 3 },
      { x: 2005, y: 4 }
    ],
    id: 'Ended',
    title: 'Memory Utilization'
  },
  {
    color: 'hsla(173, 68%, 67%, 1)',
    data: [
      { x: 2000, y: 4 },
      { x: 2001, y: 3 },
      { x: 2002, y: 2 },
      { x: 2003, y: 3 },
      { x: 2004, y: 4 },
      { x: 2005, y: 3 }
    ],
    id: 'Evaluated',
    title: 'Memory Utilization'
  }
];

const DATA_BUMP_3 = [
  {
    color: 'hsla(357, 95%, 75%, 1)',
    data: [
      { x: 2000, y: 3 },
      { x: 2001, y: 4 },
      { x: 2002, y: 5 },
      { x: 2003, y: 4 },
      { x: 2004, y: 3 },
      { x: 2005, y: 4 }
    ],
    id: 'Ended',
    title: 'Load Average'
  },
  {
    color: 'hsla(173, 68%, 67%, 1)',
    data: [
      { x: 2000, y: 4 },
      { x: 2001, y: 3 },
      { x: 2002, y: 2 },
      { x: 2003, y: 3 },
      { x: 2004, y: 4 },
      { x: 2005, y: 3 }
    ],
    id: 'Evaluated',
    title: 'Load Average'
  }
];

const DATA_BUMP_4 = [
  {
    color: 'hsla(357, 95%, 75%, 1)',
    data: [
      { x: 2000, y: 3 },
      { x: 2001, y: 4 },
      { x: 2002, y: 5 },
      { x: 2003, y: 4 },
      { x: 2004, y: 3 },
      { x: 2005, y: 4 }
    ],
    id: 'Ended',
    title: 'Disk Utilization'
  },
  {
    color: 'hsla(173, 68%, 67%, 1)',
    data: [
      { x: 2000, y: 4 },
      { x: 2001, y: 3 },
      { x: 2002, y: 2 },
      { x: 2003, y: 3 },
      { x: 2004, y: 4 },
      { x: 2005, y: 3 }
    ],
    id: 'Evaluated',
    title: 'Disk Utilization'
  }
];

const DATA_BUMP_5 = [
  {
    color: 'hsla(357, 95%, 75%, 1)',
    data: [
      { x: 2000, y: 3 },
      { x: 2001, y: 4 },
      { x: 2002, y: 5 },
      { x: 2003, y: 4 },
      { x: 2004, y: 3 },
      { x: 2005, y: 4 }
    ],
    id: 'Ended',
    title: 'Disk I/O'
  },
  {
    color: 'hsla(173, 68%, 67%, 1)',
    data: [
      { x: 2000, y: 4 },
      { x: 2001, y: 3 },
      { x: 2002, y: 2 },
      { x: 2003, y: 3 },
      { x: 2004, y: 4 },
      { x: 2005, y: 3 }
    ],
    id: 'Evaluated',
    title: 'Disk I/O'
  }
];

const DATA_BUMP_6 = [
  {
    color: 'hsla(357, 95%, 75%, 1)',
    data: [
      { x: 2000, y: 3 },
      { x: 2001, y: 4 },
      { x: 2002, y: 5 },
      { x: 2003, y: 4 },
      { x: 2004, y: 3 },
      { x: 2005, y: 4 }
    ],
    id: 'Ended',
    title: 'Network Traffic'
  },
  {
    color: 'hsla(173, 68%, 67%, 1)',
    data: [
      { x: 2000, y: 4 },
      { x: 2001, y: 3 },
      { x: 2002, y: 2 },
      { x: 2003, y: 3 },
      { x: 2004, y: 4 },
      { x: 2005, y: 3 }
    ],
    id: 'Evaluated',
    title: 'Network Traffic'
  }
];

export {
  DATA_BUMP,
  DATA_BUMP_2,
  DATA_BUMP_3,
  DATA_BUMP_4,
  DATA_BUMP_5,
  DATA_BUMP_6,
  DATA_CLUSTER_CAPACITY,
  DATA_CLUSTER_CAPACITY_2,
  DATA_CLUSTER_INVENTORY_1,
  DATA_CLUSTER_INVENTORY_2,
  DATA_CLUSTER_INVENTORY_3,
  DATA_CLUSTER_INVENTORY_4,
  DATA_CLUSTER_INVENTORY_5,
  DATA_CLUSTER_INVENTORY_6,
  DATA_LINE,
  DATA_LINE_2,
  DATA_LINE_3
};
