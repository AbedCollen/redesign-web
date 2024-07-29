const SELECT_OPTIONS = [
  { label: 'One', value: 'One' },
  { label: 'Two', value: 'Two' },
  { label: 'Three', value: 'Three' }
];

const SYNC_OPTIONS = [
  { label: 'SKIP SCHEMA VALIDATION', value: 'SKIP SCHEMA VALIDATION' },
  { label: 'AUTO CREATE NAMESPACE', value: 'AUTO CREATE NAMESPACE' },
  { label: 'PRUNE LAST', value: 'PRUNE LAST' },
  { label: 'APPLY OUT OF SYNC ONLY', value: 'APPLY OUT OF SYNC ONLY' },
  { label: 'REPLACE', value: 'REPLACE' }
];

const SYNC_APP_OPTIONS = [
  { label: 'Skip Schema Validation', value: 'Skip Schema Validation' },
  { label: 'Prune Last', value: 'Prune Last' },
  { label: 'Respect Ignore Difference', value: 'Respect Ignore Difference' },
  { label: 'Auto-create Namespace', value: 'Auto-create Namespace' },
  { label: 'Apply Out of Sync Only', value: 'Apply Out of Sync Only' },
  { label: 'Server Side Apply', value: 'Server Side Apply' }
];

const SYNC_ALL_PLACEHOLDER_OPTIONS = [
  { label: 'Prune', value: 'Prune' },
  { label: 'Dry Run', value: 'Dry Run' },
  { label: 'Apply Only', value: 'Apply Only' },
  { label: 'Force', value: 'Force' }
];

const SYNC_ALL_PRUNE_PROPAGATION_POLICY_OPTIONS = [
  { label: 'Replace', value: 'Replace' },
  { label: 'Retey', value: 'Retey' }
];

const SYNC_ALL_APPLICATIONS_OPTIONS = [
  { label: 'BAPENDA-ESAMSATADMIN', value: 'BAPENDA-ESAMSATADMIN' },
  { label: 'WEB-DASHBOARD-TOKRUM-DEV', value: 'WEB-DASHBOARD-TOKRUM-DEV' },
  { label: 'WEB-DASHBOARD-TOKRUM', value: 'WEB-DASHBOARD-TOKRUM' },
  { label: 'TIMESHEET-NAVCORE-DEV', value: 'TIMESHEET-NAVCORE-DEV' },
  { label: 'APPBUILDER-DOCS', value: 'APPBUILDER-DOCS' },
  { label: 'NEXTBYTES-DOCS', value: 'NEXTBYTES-DOCS' },
  { label: 'NEXTCLUSTER-DOCS', value: 'NEXTCLUSTER-DOCS' },
  { label: 'WEB-DASHBOARD-TOKRUM-DEV', value: 'WEB-DASHBOARD-TOKRUM-DEV2' },
  { label: 'BAPENDA-ESAMSATADMIN', value: 'BAPENDA-ESAMSATADMIN2' },
  { label: 'WEB-DASHBOARD-TOKRUM', value: 'WEB-DASHBOARD-TOKRUM2' }
];

export {
  SELECT_OPTIONS,
  SYNC_OPTIONS,
  SYNC_ALL_APPLICATIONS_OPTIONS,
  SYNC_ALL_PLACEHOLDER_OPTIONS,
  SYNC_ALL_PRUNE_PROPAGATION_POLICY_OPTIONS,
  SYNC_APP_OPTIONS
};
