const TIME_FILTER_DROPDOWN = [
  { eventKey: 'Last 5 min' },
  { eventKey: 'Last 15 min' },
  { eventKey: 'Last 30 min' },
  { eventKey: 'Last 1 hour' }
];

const INTERESTING_FIELDS = [
  { key: 'tenant', label: 'tenant' },
  { key: 'method', label: 'method' },
  { key: 'log_file_path', label: 'log_file_path' }
];

const FORM_CHECK_LABEL = [
  { label: '5s' },
  { label: '10s' },
  { label: '30s' },
  { label: '1m' },
  { label: '5m' },
  { label: '10m' }
];

const DUMMY_DATA_BARCHART = [
  {
    date: '07/07 17:00',
    value: 5500,
    valueColor: 'hsla(112, 70%, 50%)'
  },
  {
    date: '07/07 22:00',
    value: 1000,
    valueColor: 'hsla(207, 32%, 45%, 1)'
  },
  {
    date: '07/08 03:00',
    value: 0,
    valueColor: 'hsla(112, 70%, 50%)'
  },
  {
    date: '07/08 08:00',
    value: 0,
    valueColor: 'hsla(112, 70%, 50%)'
  },
  {
    date: '07/08 13:00',
    value: 0,
    valueColor: 'hsla(112, 70%, 50%)'
  },
  {
    date: '07/08 18:00',
    value: 0,
    valueColor: 'hsla(112, 70%, 50%)'
  },
  {
    date: '07/08 23:00',
    value: 0,
    valueColor: 'hsla(112, 70%, 50%)'
  }
];

const DATA_RATE = [
  {
    id: 'p99 Latency',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '0',
        y: '0'
      },
      {
        x: '0',
        y: '0'
      },
      {
        x: '0',
        y: '0'
      },
      {
        x: '0',
        y: '0'
      },
      {
        x: '5',
        y: '5'
      }
    ]
  }
];

const DATA_NODE_CONDITION_READY = [
  {
    id: 'nxplatform-cloud-01',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:37',
        y: '50%'
      },
      {
        x: '17:38',
        y: '50%'
      },
      {
        x: '17:39',
        y: '50%'
      },
      {
        x: '17:40',
        y: '50%'
      },
      {
        x: '17:41',
        y: '50%'
      },
      {
        x: '17:42',
        y: '50%'
      },
      {
        x: '17:43',
        y: '50%'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-02',
    color: 'hsl(284, 59%, 64%)',
    data: [
      {
        x: '17:37',
        y: ''
      },
      {
        x: '17:38',
        y: ''
      },
      {
        x: '17:39',
        y: ''
      },
      {
        x: '17:40',
        y: ''
      },
      {
        x: '17:41',
        y: ''
      },
      {
        x: '17:42',
        y: ''
      },
      {
        x: '17:43',
        y: ''
      }
    ]
  }
];

const DATA_NODE_CONDITION_PRESSURE = [
  {
    id: 'nxplatform-cloud-01',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:37',
        y: '50%'
      },
      {
        x: '17:38',
        y: '50%'
      },
      {
        x: '17:39',
        y: '50%'
      },
      {
        x: '17:40',
        y: '50%'
      },
      {
        x: '17:41',
        y: '50%'
      },
      {
        x: '17:42',
        y: '50%'
      },
      {
        x: '17:43',
        y: '50%'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-02',
    color: 'hsl(284, 59%, 64%)',
    data: [
      {
        x: '17:37',
        y: ''
      },
      {
        x: '17:38',
        y: ''
      },
      {
        x: '17:39',
        y: ''
      },
      {
        x: '17:40',
        y: ''
      },
      {
        x: '17:41',
        y: ''
      },
      {
        x: '17:42',
        y: ''
      },
      {
        x: '17:43',
        y: ''
      }
    ]
  }
];

const DATA_NODE_MEMORY_USAGE = [
  {
    id: 'nxplatform-cloud-01',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:37',
        y: '70%'
      },
      {
        x: '17:38',
        y: '67%'
      },
      {
        x: '17:39',
        y: '65%'
      },
      {
        x: '17:40',
        y: '60%'
      },
      {
        x: '17:41',
        y: '60%'
      },
      {
        x: '17:42',
        y: '60%'
      },
      {
        x: '17:43',
        y: '60%'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-02',
    color: 'hsl(284, 59%, 64%)',
    data: [
      {
        x: '17:37',
        y: '60%'
      },
      {
        x: '17:38',
        y: '58%'
      },
      {
        x: '17:39',
        y: '56%'
      },
      {
        x: '17:40',
        y: '55%'
      },
      {
        x: '17:41',
        y: '55%'
      },
      {
        x: '17:42',
        y: '55%'
      },
      {
        x: '17:43',
        y: '55%'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-03',
    color: 'hsl(40, 71%, 49%)',
    data: [
      {
        x: '17:37',
        y: '49%'
      },
      {
        x: '17:38',
        y: '50%'
      },
      {
        x: '17:39',
        y: '52%'
      },
      {
        x: '17:40',
        y: '50%'
      },
      {
        x: '17:41',
        y: '50%'
      },
      {
        x: '17:42',
        y: '50%'
      },
      {
        x: '17:43',
        y: '50%'
      }
    ]
  }
];
const DATA_NODE_CPU_USAGE = [
  {
    id: 'nxplatform-cloud-01',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:37',
        y: '70%'
      },
      {
        x: '17:38',
        y: '67%'
      },
      {
        x: '17:39',
        y: '65%'
      },
      {
        x: '17:40',
        y: '60%'
      },
      {
        x: '17:41',
        y: '60%'
      },
      {
        x: '17:42',
        y: '60%'
      },
      {
        x: '17:43',
        y: '60%'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-02',
    color: 'hsl(284, 59%, 64%)',
    data: [
      {
        x: '17:37',
        y: '60%'
      },
      {
        x: '17:38',
        y: '58%'
      },
      {
        x: '17:39',
        y: '56%'
      },
      {
        x: '17:40',
        y: '55%'
      },
      {
        x: '17:41',
        y: '55%'
      },
      {
        x: '17:42',
        y: '55%'
      },
      {
        x: '17:43',
        y: '55%'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-03',
    color: 'hsl(40, 71%, 49%)',
    data: [
      {
        x: '17:37',
        y: '49%'
      },
      {
        x: '17:38',
        y: '50%'
      },
      {
        x: '17:39',
        y: '52%'
      },
      {
        x: '17:40',
        y: '50%'
      },
      {
        x: '17:41',
        y: '50%'
      },
      {
        x: '17:42',
        y: '50%'
      },
      {
        x: '17:43',
        y: '50%'
      }
    ]
  }
  /*
   * {
   *   id: 'nxplatform-cloud-04',
   *   color: 'hsl(356, 100%, 85%)',
   *   data: [
   *     {
   *       x: '17:37',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:38',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:39',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:40',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:41',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:42',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:43',
   *       y: '450%'
   *     }
   *   ]
   * }
   */
];

const DATA_NODE_ALLOCATABLE_MEMORY = [
  {
    id: 'nxplatform-cloud-01',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:37',
        y: '15 GiB'
      },
      {
        x: '17:38',
        y: '15 GiB'
      },
      {
        x: '17:39',
        y: '15 GiB'
      },
      {
        x: '17:40',
        y: '15 GiB'
      },
      {
        x: '17:41',
        y: '15 GiB'
      },
      {
        x: '17:42',
        y: '15 GiB'
      },
      {
        x: '17:43',
        y: '15 GiB'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-02',
    color: 'hsl(284, 59%, 64%)',
    data: [
      {
        x: '17:37',
        y: '13.5 GiB'
      },
      {
        x: '17:38',
        y: '13.5 GiB'
      },
      {
        x: '17:39',
        y: '13.5 GiB'
      },
      {
        x: '17:40',
        y: '13.5 GiB'
      },
      {
        x: '17:41',
        y: '13.5 GiB'
      },
      {
        x: '17:42',
        y: '13.5 GiB'
      },
      {
        x: '17:43',
        y: '13.5 GiB'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-03',
    color: 'hsl(40, 71%, 49%)',
    data: [
      {
        x: '17:37',
        y: '8 GiB'
      },
      {
        x: '17:38',
        y: '8 GiB'
      },
      {
        x: '17:39',
        y: '8 GiB'
      },
      {
        x: '17:40',
        y: '8 GiB'
      },
      {
        x: '17:41',
        y: '8 GiB'
      },
      {
        x: '17:42',
        y: '8 GiB'
      },
      {
        x: '17:43',
        y: '8 GiB'
      }
    ]
  }
  /*
   * {
   *   id: 'nxplatform-cloud-04',
   *   color: 'hsl(356, 100%, 85%)',
   *   data: [
   *     {
   *       x: '17:37',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:38',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:39',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:40',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:41',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:42',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:43',
   *       y: '450%'
   *     }
   *   ]
   * }
   */
];

const DATA_NODE_ALLOCATABLE_CPIJ = [
  {
    id: 'nxplatform-cloud-01',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:37',
        y: '8'
      },
      {
        x: '17:38',
        y: '8'
      },
      {
        x: '17:39',
        y: '8'
      },
      {
        x: '17:40',
        y: '8'
      },
      {
        x: '17:41',
        y: '8'
      },
      {
        x: '17:42',
        y: '8'
      },
      {
        x: '17:43',
        y: '8'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-02',
    color: 'hsl(284, 59%, 64%)',
    data: [
      {
        x: '17:37',
        y: '6'
      },
      {
        x: '17:38',
        y: '6'
      },
      {
        x: '17:39',
        y: '6'
      },
      {
        x: '17:40',
        y: '6'
      },
      {
        x: '17:41',
        y: '6'
      },
      {
        x: '17:42',
        y: '6'
      },
      {
        x: '17:43',
        y: '6'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-03',
    color: 'hsl(40, 71%, 49%)',
    data: [
      {
        x: '17:37',
        y: '4'
      },
      {
        x: '17:38',
        y: '4'
      },
      {
        x: '17:39',
        y: '4'
      },
      {
        x: '17:40',
        y: '4'
      },
      {
        x: '17:41',
        y: '4'
      },
      {
        x: '17:42',
        y: '4'
      },
      {
        x: '17:43',
        y: '4'
      }
    ]
  }
  /*
   * {
   *   id: 'nxplatform-cloud-04',
   *   color: 'hsl(356, 100%, 85%)',
   *   data: [
   *     {
   *       x: '17:37',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:38',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:39',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:40',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:41',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:42',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:43',
   *       y: '450%'
   *     }
   *   ]
   * }
   */
];

const DATA_POD_IO_NETWORK_RECEIVE = [
  {
    id: 'nxplatform-cloud-01',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:37',
        y: '1820 TiB/s'
      },
      {
        x: '17:38',
        y: '1820 TiB/s'
      },
      {
        x: '17:39',
        y: '1820 TiB/s'
      },
      {
        x: '17:40',
        y: '1820 TiB/s'
      },
      {
        x: '17:41',
        y: '1820 TiB/s'
      },
      {
        x: '17:42',
        y: '1820 TiB/s'
      },
      {
        x: '17:43',
        y: '1820 TiB/s'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-02',
    color: 'hsl(284, 59%, 64%)',
    data: [
      {
        x: '17:37',
        y: '400 TiB/s'
      },
      {
        x: '17:38',
        y: '400 TiB/s'
      },
      {
        x: '17:39',
        y: '400 TiB/s'
      },
      {
        x: '17:40',
        y: '400 TiB/s'
      },
      {
        x: '17:41',
        y: '400 TiB/s'
      },
      {
        x: '17:42',
        y: '400 TiB/s'
      },
      {
        x: '17:43',
        y: '400 TiB/s'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-03',
    color: 'hsl(40, 71%, 49%)',
    data: [
      {
        x: '17:37',
        y: '300 TiB/s'
      },
      {
        x: '17:38',
        y: '300 TiB/s'
      },
      {
        x: '17:39',
        y: '300 TiB/s'
      },
      {
        x: '17:40',
        y: '300 TiB/s'
      },
      {
        x: '17:41',
        y: '300 TiB/s'
      },
      {
        x: '17:42',
        y: '300 TiB/s'
      },
      {
        x: '17:43',
        y: '300 TiB/s'
      }
    ]
  }
  /*
   * {
   *   id: 'nxplatform-cloud-04',
   *   color: 'hsl(356, 100%, 85%)',
   *   data: [
   *     {
   *       x: '17:37',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:38',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:39',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:40',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:41',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:42',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:43',
   *       y: '450%'
   *     }
   *   ]
   * }
   */
];
const DATA_POD_IO_NETWORK_TRANSMIT = [
  {
    id: 'nxplatform-cloud-01',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:37',
        y: '186 GiB/s'
      },
      {
        x: '17:38',
        y: '186 GiB/s'
      },
      {
        x: '17:39',
        y: '186 GiB/s'
      },
      {
        x: '17:40',
        y: '186 GiB/s'
      },
      {
        x: '17:41',
        y: '186 GiB/s'
      },
      {
        x: '17:42',
        y: '186 GiB/s'
      },
      {
        x: '17:43',
        y: '186 GiB/s'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-02',
    color: 'hsl(284, 59%, 64%)',
    data: [
      {
        x: '17:37',
        y: '100 GiB/s'
      },
      {
        x: '17:38',
        y: '100 GiB/s'
      },
      {
        x: '17:39',
        y: '100 GiB/s'
      },
      {
        x: '17:40',
        y: '100 GiB/s'
      },
      {
        x: '17:41',
        y: '100 GiB/s'
      },
      {
        x: '17:42',
        y: '100 GiB/s'
      },
      {
        x: '17:43',
        y: '100 GiB/s'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-03',
    color: 'hsl(40, 71%, 49%)',
    data: [
      {
        x: '17:37',
        y: '30 GiB/s'
      },
      {
        x: '17:38',
        y: '30 GiB/s'
      },
      {
        x: '17:39',
        y: '30 GiB/s'
      },
      {
        x: '17:40',
        y: '30 GiB/s'
      },
      {
        x: '17:41',
        y: '30 GiB/s'
      },
      {
        x: '17:42',
        y: '30 GiB/s'
      },
      {
        x: '17:43',
        y: '30 GiB/s'
      }
    ]
  }
  /*
   * {
   *   id: 'nxplatform-cloud-04',
   *   color: 'hsl(356, 100%, 85%)',
   *   data: [
   *     {
   *       x: '17:37',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:38',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:39',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:40',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:41',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:42',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:43',
   *       y: '450%'
   *     }
   *   ]
   * }
   */
];

const DATA_POD_CPU_UTILIZATION = [
  {
    id: 'nxplatform-cloud-01',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:37',
        y: '3 %'
      },
      {
        x: '17:38',
        y: '3 %'
      },
      {
        x: '17:39',
        y: '3 %'
      },
      {
        x: '17:40',
        y: '3 %'
      },
      {
        x: '17:41',
        y: '3 %'
      },
      {
        x: '17:42',
        y: '3 %'
      },
      {
        x: '17:43',
        y: '3 %'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-02',
    color: 'hsl(284, 59%, 64%)',
    data: [
      {
        x: '17:37',
        y: '7.5 %'
      },
      {
        x: '17:38',
        y: '3 %'
      },
      {
        x: '17:39',
        y: '7.5 %'
      },
      {
        x: '17:40',
        y: '3 %'
      },
      {
        x: '17:41',
        y: '7.5 %'
      },
      {
        x: '17:42',
        y: '3 %'
      },
      {
        x: '17:43',
        y: '7.5 %'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-03',
    color: 'hsl(40, 71%, 49%)',
    data: [
      {
        x: '17:37',
        y: '5 %'
      },
      {
        x: '17:38',
        y: '20 %'
      },
      {
        x: '17:39',
        y: '15 %'
      },
      {
        x: '17:40',
        y: '10 %'
      },
      {
        x: '17:41',
        y: '5 %'
      },
      {
        x: '17:42',
        y: '15 %'
      },
      {
        x: '17:43',
        y: '10 %'
      }
    ]
  }
  /*
   * {
   *   id: 'nxplatform-cloud-04',
   *   color: 'hsl(356, 100%, 85%)',
   *   data: [
   *     {
   *       x: '17:37',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:38',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:39',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:40',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:41',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:42',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:43',
   *       y: '450%'
   *     }
   *   ]
   * }
   */
];
const DATA_POD_MEMORY_USAGE = [
  {
    id: 'nxplatform-cloud-01',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:37',
        y: '200 MiB'
      },
      {
        x: '17:38',
        y: '200 MiB'
      },
      {
        x: '17:39',
        y: '200 MiB'
      },
      {
        x: '17:40',
        y: '200 MiB'
      },
      {
        x: '17:41',
        y: '200 MiB'
      },
      {
        x: '17:42',
        y: '200 MiB'
      },
      {
        x: '17:43',
        y: '200 MiB'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-02',
    color: 'hsl(284, 59%, 64%)',
    data: [
      {
        x: '17:37',
        y: '957 MiB'
      },
      {
        x: '17:38',
        y: '857 MiB'
      },
      {
        x: '17:39',
        y: '957 MiB'
      },
      {
        x: '17:40',
        y: '857 MiB'
      },
      {
        x: '17:41',
        y: '957 MiB'
      },
      {
        x: '17:42',
        y: '857 MiB'
      },
      {
        x: '17:43',
        y: '957 MiB'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-03',
    color: 'hsl(40, 71%, 49%)',
    data: [
      {
        x: '17:37',
        y: '300 MiB'
      },
      {
        x: '17:38',
        y: '300 MiB'
      },
      {
        x: '17:39',
        y: '300 MiB'
      },
      {
        x: '17:40',
        y: '300 MiB'
      },
      {
        x: '17:41',
        y: '300 MiB'
      },
      {
        x: '17:42',
        y: '300 MiB'
      },
      {
        x: '17:43',
        y: '300 MiB'
      }
    ]
  }
  /*
   * {
   *   id: 'nxplatform-cloud-04',
   *   color: 'hsl(356, 100%, 85%)',
   *   data: [
   *     {
   *       x: '17:37',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:38',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:39',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:40',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:41',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:42',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:43',
   *       y: '450%'
   *     }
   *   ]
   * }
   */
];
const DATA_CONTAINER_RESTART = [
  {
    id: 'nxplatform-cloud-01',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:37',
        y: '0'
      },
      {
        x: '17:38',
        y: '0'
      },
      {
        x: '17:39',
        y: '0'
      },
      {
        x: '17:40',
        y: '0'
      },
      {
        x: '17:41',
        y: '0'
      },
      {
        x: '17:42',
        y: '0'
      },
      {
        x: '17:43',
        y: '0'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-02',
    color: 'hsl(284, 59%, 64%)',
    data: [
      {
        x: '17:37',
        y: ''
      },
      {
        x: '17:38',
        y: ''
      },
      {
        x: '17:39',
        y: ''
      },
      {
        x: '17:40',
        y: ''
      },
      {
        x: '17:41',
        y: ''
      },
      {
        x: '17:42',
        y: ''
      },
      {
        x: '17:43',
        y: ''
      }
    ]
  },
  {
    id: 'nxplatform-cloud-03',
    color: 'hsl(40, 71%, 49%)',
    data: [
      {
        x: '17:37',
        y: ''
      },
      {
        x: '17:38',
        y: ''
      },
      {
        x: '17:39',
        y: ''
      },
      {
        x: '17:40',
        y: ''
      },
      {
        x: '17:41',
        y: ''
      },
      {
        x: '17:42',
        y: ''
      },
      {
        x: '17:43',
        y: ''
      }
    ]
  }
  /*
   * {
   *   id: 'nxplatform-cloud-04',
   *   color: 'hsl(356, 100%, 85%)',
   *   data: [
   *     {
   *       x: '17:37',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:38',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:39',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:40',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:41',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:42',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:43',
   *       y: '450%'
   *     }
   *   ]
   * }
   */
];
const DATA_CONTAINER_READY = [
  {
    id: 'nxplatform-cloud-01',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:37',
        y: '50'
      },
      {
        x: '17:38',
        y: '50'
      },
      {
        x: '17:39',
        y: '50'
      },
      {
        x: '17:40',
        y: '50'
      },
      {
        x: '17:41',
        y: '50'
      },
      {
        x: '17:42',
        y: '50'
      },
      {
        x: '17:43',
        y: '50'
      }
    ]
  },
  {
    id: 'nxplatform-cloud-02',
    color: 'hsl(284, 59%, 64%)',
    data: [
      {
        x: '17:37',
        y: ''
      },
      {
        x: '17:38',
        y: ''
      },
      {
        x: '17:39',
        y: ''
      },
      {
        x: '17:40',
        y: ''
      },
      {
        x: '17:41',
        y: ''
      },
      {
        x: '17:42',
        y: ''
      },
      {
        x: '17:43',
        y: ''
      }
    ]
  },
  {
    id: 'nxplatform-cloud-03',
    color: 'hsl(40, 71%, 49%)',
    data: [
      {
        x: '17:37',
        y: ''
      },
      {
        x: '17:38',
        y: ''
      },
      {
        x: '17:39',
        y: ''
      },
      {
        x: '17:40',
        y: ''
      },
      {
        x: '17:41',
        y: ''
      },
      {
        x: '17:42',
        y: ''
      },
      {
        x: '17:43',
        y: ''
      }
    ]
  }
  /*
   * {
   *   id: 'nxplatform-cloud-04',
   *   color: 'hsl(356, 100%, 85%)',
   *   data: [
   *     {
   *       x: '17:37',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:38',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:39',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:40',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:41',
   *       y: '450%'
   *     },
   *     {
   *       x: '17:42',
   *       y: '425%'
   *     },
   *     {
   *       x: '17:43',
   *       y: '450%'
   *     }
   *   ]
   * }
   */
];

const CLUSTER_OPTION = [{ label: '$cluster' }];

const NAMESPACE_OPTION = [
  { label: '$namespace' },
  { label: 'appbuilder-dev' },
  { label: 'bapenda' },
  { label: 'cattle-fleet-system' },
  { label: 'cattle-monitoring-system' },
  { label: 'cattle-system' },
  { label: 'dapr-system' },
  { label: 'default' },
  { label: 'demo' },
  { label: 'fssion' },
  { label: 'ingress-nginx' },
  { label: 'kube-system' },
  { label: 'kubernetes-dashboard' },
  { label: 'makers' },
  { label: 'navcore' },
  { label: 'nextapi' },
  { label: 'nextcluster' }
];

export {
  DATA_CONTAINER_READY,
  DATA_CONTAINER_RESTART,
  DATA_POD_MEMORY_USAGE,
  DATA_POD_CPU_UTILIZATION,
  DATA_POD_IO_NETWORK_TRANSMIT,
  DATA_POD_IO_NETWORK_RECEIVE,
  DATA_NODE_ALLOCATABLE_MEMORY,
  DATA_NODE_CONDITION_PRESSURE,
  DATA_NODE_CONDITION_READY,
  DATA_NODE_CPU_USAGE,
  DATA_NODE_MEMORY_USAGE,
  DATA_RATE,
  DUMMY_DATA_BARCHART,
  FORM_CHECK_LABEL,
  INTERESTING_FIELDS,
  TIME_FILTER_DROPDOWN,
  CLUSTER_OPTION,
  NAMESPACE_OPTION,
  DATA_NODE_ALLOCATABLE_CPIJ
};
