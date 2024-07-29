const DATA_RATE = [
  {
    id: 'Operations',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:37',
        y: '3.4 ops/s'
      },
      {
        x: '17:38',
        y: '3.4 ops/s'
      },
      {
        x: '17:39',
        y: '2.5 ops/s'
      },
      {
        x: '17:40',
        y: '1 ops/s'
      },
      {
        x: '17:41',
        y: '0 ops/s'
      },
      {
        x: '17:42',
        y: '0 ops/s'
      },
      {
        x: '17:43',
        y: '0 ops/s'
      }
    ]
  }
];

const DATA_LATENCY = [
  {
    id: 'p99 Latency',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:00:00',
        y: '1000 ms'
      }
    ]
  },
  {
    id: 'p95 Latency',
    color: 'hsl(284, 59%, 64%)',
    data: [
      {
        x: '17:00:00',
        y: '940 ms'
      }
    ]
  },
  {
    id: 'p50 Latency',
    color: 'hsl(40, 71%, 49%)',
    data: [
      {
        x: '17:00:00',
        y: '800 ms'
      }
    ]
  }
];

const DATA_ERROR_PERCENTAGE = [
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

const DATA_EXTERNAL_CALL_DURATION = [
  {
    id: 'Average Duration',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:36',
        y: '84.9 ms'
      },
      {
        x: '17:37',
        y: '84.2 ms'
      },
      {
        x: '17:38',
        y: '85.0 ms'
      },
      {
        x: '17:39',
        y: '84.4 ms'
      },
      {
        x: '17:40',
        y: '83.4 ms'
      },
      {
        x: '17:41',
        y: null
      },
      {
        x: '17:42',
        y: null
      },
      {
        x: '17:43',
        y: null
      }
    ]
  }
];

const DATA_EXTERNAL_CALL_RPS = [
  {
    id: '0.0.0.0:8081',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:37',
        y: '4 req/s'
      },
      {
        x: '17:38',
        y: '3 req/s'
      },
      {
        x: '17:39',
        y: '2 req/s'
      },
      {
        x: '17:40',
        y: '0 req/s'
      },
      {
        x: '17:41',
        y: '0 req/s'
      },
      {
        x: '17:42',
        y: '0 req/s'
      },
      {
        x: '17:43',
        y: '0 req/s'
      }
    ]
  },
  {
    id: '0.0.0.0:8083',
    color: 'hsl(284, 59%, 64%)',
    data: [
      {
        x: '17:36',
        y: '33 req/s'
      },
      {
        x: '17:37',
        y: '33 req/s'
      },
      {
        x: '17:38',
        y: '33 req/s'
      },
      {
        x: '17:39',
        y: '25 req/s'
      },
      {
        x: '17:40',
        y: '9 req/s'
      },
      {
        x: '17:41',
        y: '0 req/s'
      },
      {
        x: '17:42',
        y: '0 req/s'
      },
      {
        x: '17:43',
        y: '0 req/s'
      }
    ]
  }
];
const DATA_EXTERNAL_CALL_DURATION_BY_ADDRESS = [
  {
    id: '0.0.0.0:8081',
    color: 'hsl(207, 32%, 45%)',
    data: [
      {
        x: '17:36',
        y: '375 ms'
      },
      {
        x: '17:37',
        y: '365 ms'
      },
      {
        x: '17:38',
        y: '375 ms'
      },
      {
        x: '17:39',
        y: '365 ms'
      },
      {
        x: '17:40',
        y: '350 ms'
      },
      {
        x: '17:41',
        y: null
      },
      {
        x: '17:42',
        y: null
      },
      {
        x: '17:43',
        y: null
      }
    ]
  },
  {
    id: '0.0.0.0:8083',
    color: 'hsl(284, 59%, 64%)',
    data: [
      {
        x: '17:36',
        y: '50 ms'
      },
      {
        x: '17:37',
        y: '50 ms'
      },
      {
        x: '17:38',
        y: '40 ms'
      },
      {
        x: '17:39',
        y: '25 ms'
      },
      {
        x: '17:40',
        y: null
      },
      {
        x: '17:41',
        y: null
      },
      {
        x: '17:42',
        y: null
      },
      {
        x: '17:43',
        y: null
      }
    ]
  }
];

export {
  DATA_ERROR_PERCENTAGE,
  DATA_EXTERNAL_CALL_DURATION,
  DATA_EXTERNAL_CALL_DURATION_BY_ADDRESS,
  DATA_EXTERNAL_CALL_RPS,
  DATA_LATENCY,
  DATA_RATE
};
