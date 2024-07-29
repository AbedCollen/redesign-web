const TIME_FILTER_DROPDOWN = [
  { eventKey: 'Last 5 min' },
  { eventKey: 'Last 15 min' },
  { eventKey: 'Last 30 min' },
  { eventKey: 'Last 1 hour' },
  { eventKey: 'Custom' }
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

export {
  TIME_FILTER_DROPDOWN,
  FORM_CHECK_LABEL,
  DUMMY_DATA_BARCHART,
  INTERESTING_FIELDS
};
