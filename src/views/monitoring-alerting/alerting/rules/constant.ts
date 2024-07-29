const FORM_NOOP_LABEL = [
  { label: 'NOOP' },
  { label: 'Count' },
  { label: 'Count District' },
  { label: 'Sum' },
  { label: 'Avg' },
  { label: 'Max' },
  { label: 'Min' },
  { label: 'PO5' }
];

const FORM_METRIC_NAME = [
  { label: 'container_cpu_time' },
  { label: 'container_cpu_utilization' },
  { label: 'container_filesystem_available' },
  { label: 'container_filesystem_capacity' },
  { label: 'container_filesystem_usage' },
  { label: 'container_memory_available' },
  { label: 'container_memory_major' },
  { label: 'container_memory_page' }
];

const FORM_METRICS_TEXT = [
  { label: 'above' },
  { label: 'below' },
  { label: 'is equal to' },
  { label: 'not equal to' }
];

const FORM_THRESHOLD = [
  { label: 'at least once' },
  { label: 'all the times' },
  { label: 'on average' },
  { label: 'in total' }
];

const FORM_DURING_LAST = [
  { label: '5 mins' },
  { label: '10 mins' },
  { label: '15 mins' },
  { label: '60 mins' },
  { label: '4 hours' },
  { label: '24 hours' }
];

const FORM_SEVERITY = [
  { label: 'Critical' },
  { label: 'Error' },
  { label: 'Warning' },
  { label: 'Info' }
];

const RULES_CHART_DATA = [
  {
    color: 'hsla(207, 32%, 45%, 1)',
    data: [
      {
        x: '10:56:00',
        y: 80
      },
      {
        x: '10:56:40',
        y: 70
      },
      {
        x: '10:57:20',
        y: 60
      },
      {
        x: '10:58:00',
        y: 50
      },
      {
        x: '10:58:40',
        y: 50
      },
      {
        x: '10:59:20',
        y: 150
      },
      {
        x: '11:00:00',
        y: 600
      }
    ],
    id: 'A'
  }
];

export {
  FORM_NOOP_LABEL,
  FORM_METRIC_NAME,
  FORM_METRICS_TEXT,
  FORM_THRESHOLD,
  FORM_DURING_LAST,
  FORM_SEVERITY,
  RULES_CHART_DATA
};
