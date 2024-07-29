const FUNCTION_FILTER_DROPDOWN = [
  { eventKey: 'Count' },
  { eventKey: 'Rate per sec' },
  { eventKey: 'Sum (duration)' },
  { eventKey: 'Avg (duration)' },
  { eventKey: 'Max (duration)' },
  { eventKey: 'Min (duration)' },
  { eventKey: '50th percentile (duration)' },
  { eventKey: '90th percentile (duration)' },
  { eventKey: '95th percentile (duration)' },
  { eventKey: '99th percentile (duration)' }
];

const GROUPBY_FILTER_DROPDOWN = [
  { eventKey: 'None' },
  { eventKey: 'Service Name' },
  { eventKey: 'Operation' },
  { eventKey: 'HTTP URL' },
  { eventKey: 'HTTP Method' },
  { eventKey: 'HTTP Host' },
  { eventKey: 'HTTP Route' },
  { eventKey: 'RPC Method' },
  { eventKey: 'Status Code' },
  { eventKey: 'Database Name' },
  { eventKey: 'Database System' },
  { eventKey: 'Database Operation' },
  { eventKey: 'Messaging System' },
  { eventKey: 'Messaging Operation' },
  { eventKey: 'Component' }
];

const INTERESTING_FIELDS = [
  { key: 'tenant', label: 'tenant' },
  { key: 'method', label: 'method' },
  { key: 'log_file_path', label: 'log_file_path' }
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

export {
  FUNCTION_FILTER_DROPDOWN,
  GROUPBY_FILTER_DROPDOWN,
  DUMMY_DATA_BARCHART,
  INTERESTING_FIELDS
};
