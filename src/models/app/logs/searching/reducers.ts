import type { TAction, TDispatch } from '@models/types';

import { SearchingActionType } from './types';

import type {
  SearchingAction,
  SearchingDataModel,
  SearchingModel
} from './types';

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- BEGIN

const bodyTemp = {
  level: 'DEBUG',
  method: 'Health/Check',
  req_id: 'qvqzat#00132846',
  service: 'grpc',
  tenant: 'tokrum',
  time: '2023-06-08T18:03:27.127209',
  type: 'testing2 request accepted'
};

const DUMMY_SEARCHING_DATA: SearchingDataModel[] = [
  {
    index: 1,
    timestamp: '1688836407137966000',
    tenant: '',
    body: {
      level: 'DEBUG',
      method: 'Health/Check',
      req_id: 'qvqzat#00132846',
      service: 'grpc',
      tenant: 'tokrum',
      time: '2023-06-08T18:03:27.127209',
      type: 'testing2 request accepted'
    },
    id: '2Qxi5oeHovTLYT5xFYtKBmMtu0a',
    trace_id: '-',
    span_id: '-',
    trace_flags: 0,
    severity_text: '-',
    severity_number: 0,
    k8s_cluster_name: '-',
    k8s_container_name: 'idp-api-test',
    k8s_container_restart_count: 0,
    k8s_deployment_name: 'deploy-nextid-makers-idpapi',
    k8s_namespace_name: 'nextid',
    k8s_node_name: 'nxplatform-cloud-01',
    k8s_pod_name: 'deploy-nextid-makers-idpapi-755c47bff8-7l6sg',
    k8s_pod_start_time: '2023-05-22 02:06:42 +0000 UTC',
    k8s_pod_uid: '49879dd7-0f66-4f10-96b2-c4e52abe698c',
    log_file_path:
      '/var/log/pods/nextid_deploy-nextid-makers-idpapi-755c47bff8-7l6sg_49879dd7-0f66-4f10-96b2-c4e52abe698c/idp-api-test/0.log',
    log_iostream: 'stdout',
    logtag: 'F',
    time: '2023-07-09T00:13:27.137965999+07:00',
    detail: [{
      action: '',
      field: 'timestamp',
      value: '1688836407137966000'
    },
    {
      action: '-',
      field: 'id',
      value: '2Qxi5oeHovTLYT5xFYtKBmMtu0a'
    },
    {
      action: '-',
      field: 'trace_id',
      value: '-'
    },
    {
      action: '-',
      field: 'span_id',
      value: '-'
    },
    {
      action: '-',
      field: 'trace_flags',
      value: '0'
    },
    {
      action: '-',
      field: 'severity_text',
      value: '-'
    },
    {
      action: '-',
      field: 'severity_number',
      value: '0'
    },
    {
      action: '-',
      field: 'body',
      value: JSON.stringify(bodyTemp)
    },
    {
      action: '-',
      field: 'k8s_cluster_name',
      value: '-'
    },
    {
      action: '-',
      field: 'k8s_container_name',
      value: 'idp-api-test'
    },
    {
      action: '-',
      field: 'k8s_container_restart_count',
      value: '0'
    },
    {
      action: '-',
      field: 'k8s_deployment_name',
      value: 'deploy-nextid-makers-idpapi'
    },
    {
      action: '-',
      field: 'k8s_namespace_name',
      value: 'nextid'
    },
    {
      action: '-',
      field: 'k8s_node_name',
      value: 'nxplatform-cloud-01'
    },
    {
      action: '-',
      field: 'k8s_pod_name',
      value: 'deploy-nextid-makers-idpapi-755c47bff8-7l6sg'
    },
    {
      action: '-',
      field: 'k8s_pod_start_time',
      value: '2023-05-22 02:06:42 +0000 UTC'
    },
    {
      action: '-',
      field: 'k8s_pod_uid',
      value: '49879dd7-0f66-4f10-96b2-c4e52abe698c'
    },
    {
      action: '-',
      field: 'log_file_path',
      value: '/var/log/pods/nextid_deploy-nextid-makers-idpapi-755c47bff8-7l6sg_49879dd7-0f66-4f10-96b2-c4e52abe698c/idp-api-test/0.log'
    },
    {
      action: '-',
      field: 'log_iostream',
      value: 'stdout'
    },
    {
      action: '-',
      field: 'logtag',
      value: 'F'
    },
    {
      action: '-',
      field: 'time',
      value: '2023-07-09T00:13:27.137965999+07:00'
    }]
  },
  {
    index: 2,
    timestamp: '1688836407137966000',
    tenant: '',
    body: {
      level: 'DEBUG',
      method: 'Health/Check',
      req_id: 'qvqzat#00132846',
      service: 'grpc',
      tenant: 'tokrum',
      time: '2023-06-08T18:03:27.127209',
      type: 'testing2 request accepted'
    },
    id: '2Qxi5oeHovTLYT5xFYtKBmMtu0a',
    trace_id: '-',
    span_id: '-',
    trace_flags: 0,
    severity_text: '-',
    severity_number: 0,
    k8s_cluster_name: '-',
    k8s_container_name: 'idp-api-test',
    k8s_container_restart_count: 0,
    k8s_deployment_name: 'deploy-nextid-makers-idpapi',
    k8s_namespace_name: 'nextid',
    k8s_node_name: 'nxplatform-cloud-01',
    k8s_pod_name: 'deploy-nextid-makers-idpapi-755c47bff8-7l6sg',
    k8s_pod_start_time: '2023-05-22 02:06:42 +0000 UTC',
    k8s_pod_uid: '49879dd7-0f66-4f10-96b2-c4e52abe698c',
    log_file_path:
      '/var/log/pods/nextid_deploy-nextid-makers-idpapi-755c47bff8-7l6sg_49879dd7-0f66-4f10-96b2-c4e52abe698c/idp-api-test/0.log',
    log_iostream: 'stdout',
    logtag: 'F',
    time: '2023-07-09T00:13:27.137965999+07:00',
    detail: [{
      action: '',
      field: 'timestamp',
      value: '1688836407137966000'
    }]
  },
  {
    index: 3,
    timestamp: '1688836407137966000',
    tenant: '',
    body: {
      level: 'DEBUG',
      method: 'Health/Check',
      req_id: 'qvqzat#00132846',
      service: 'grpc',
      tenant: 'tokrum',
      time: '2023-06-08T18:03:27.127209',
      type: 'testing2 request accepted'
    },
    id: '2Qxi5oeHovTLYT5xFYtKBmMtu0a',
    trace_id: '-',
    span_id: '-',
    trace_flags: 0,
    severity_text: '-',
    severity_number: 0,
    k8s_cluster_name: '-',
    k8s_container_name: 'idp-api-test',
    k8s_container_restart_count: 0,
    k8s_deployment_name: 'deploy-nextid-makers-idpapi',
    k8s_namespace_name: 'nextid',
    k8s_node_name: 'nxplatform-cloud-01',
    k8s_pod_name: 'deploy-nextid-makers-idpapi-755c47bff8-7l6sg',
    k8s_pod_start_time: '2023-05-22 02:06:42 +0000 UTC',
    k8s_pod_uid: '49879dd7-0f66-4f10-96b2-c4e52abe698c',
    log_file_path:
      '/var/log/pods/nextid_deploy-nextid-makers-idpapi-755c47bff8-7l6sg_49879dd7-0f66-4f10-96b2-c4e52abe698c/idp-api-test/0.log',
    log_iostream: 'stdout',
    logtag: 'F',
    time: '2023-07-09T00:13:27.137965999+07:00',
    detail: [{
      action: '',
      field: 'timestamp',
      value: '1688836407137966000'
    }]
  }
];

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- END
const DefaultDetailData = {
  index: 0,
  timestamp: '',
  tenant: '',
  body: {
    level: '',
    time: '',
    tenant: '',
    service: '',
    req_id: '',
    method: '',
    type: ''
  },
  id: '',
  trace_id: '-',
  span_id: '-',
  trace_flags: 0,
  severity_text: '-',
  severity_number: 0,
  k8s_cluster_name: '-',
  k8s_container_name: '',
  k8s_container_restart_count: 0,
  k8s_deployment_name: '',
  k8s_namespace_name: '',
  k8s_node_name: '',
  k8s_pod_name: '',
  k8s_pod_start_time: '',
  k8s_pod_uid: '',
  log_file_path:
    '',
  log_iostream: '',
  logtag: '',
  time: '',
  detail: [{
    action: '',
    field: '',
    value: ''
  }]
};

const DUMMY_DETAIL_DATA = {
  index: 1,
  timestamp: '1688836407137966000',
  tenant: '',
  body: {
    level: 'DEBUG',
    time: '2023-06-08T18:03:27.127209',
    tenant: 'tokrum',
    service: 'grpc',
    req_id: 'qvqzat#00132846',
    method: 'Health/Check',
    type: 'testing2 request accepted'
  },
  id: '2Qxi5oeHovTLYT5xFYtKBmMtu0a',
  trace_id: '-',
  span_id: '-',
  trace_flags: 0,
  severity_text: '-',
  severity_number: 0,
  k8s_cluster_name: '-',
  k8s_container_name: 'idp-api-test',
  k8s_container_restart_count: 0,
  k8s_deployment_name: 'deploy-nextid-makers-idpapi',
  k8s_namespace_name: 'nextid',
  k8s_node_name: 'nxplatform-cloud-01',
  k8s_pod_name: 'deploy-nextid-makers-idpapi-755c47bff8-7l6sg',
  k8s_pod_start_time: '2023-05-22 02:06:42 +0000 UTC',
  k8s_pod_uid: '49879dd7-0f66-4f10-96b2-c4e52abe698c',
  log_file_path:
      '/var/log/pods/nextid_deploy-nextid-makers-idpapi-755c47bff8-7l6sg_49879dd7-0f66-4f10-96b2-c4e52abe698c/idp-api-test/0.log',
  log_iostream: 'stdout',
  logtag: 'F',
  time: '2023-07-09T00:13:27.137965999+07:00',
  detail: [{
    action: '',
    field: 'timestamp',
    value: '1688836407137966000'
  },
  {
    action: '-',
    field: 'id',
    value: '2Qxi5oeHovTLYT5xFYtKBmMtu0a'
  },
  {
    action: '-',
    field: 'trace_id',
    value: '-'
  },
  {
    action: '-',
    field: 'span_id',
    value: '-'
  },
  {
    action: '-',
    field: 'trace_flags',
    value: '0'
  },
  {
    action: '-',
    field: 'severity_text',
    value: '-'
  },
  {
    action: '-',
    field: 'severity_number',
    value: '0'
  },
  {
    action: '-',
    field: 'body',
    value: JSON.stringify(bodyTemp)
  },
  {
    action: '-',
    field: 'k8s_cluster_name',
    value: '-'
  },
  {
    action: '-',
    field: 'k8s_container_name',
    value: 'idp-api-test'
  },
  {
    action: '-',
    field: 'k8s_container_restart_count',
    value: '0'
  },
  {
    action: '-',
    field: 'k8s_deployment_name',
    value: 'deploy-nextid-makers-idpapi'
  },
  {
    action: '-',
    field: 'k8s_namespace_name',
    value: 'nextid'
  },
  {
    action: '-',
    field: 'k8s_node_name',
    value: 'nxplatform-cloud-01'
  },
  {
    action: '-',
    field: 'k8s_pod_name',
    value: 'deploy-nextid-makers-idpapi-755c47bff8-7l6sg'
  },
  {
    action: '-',
    field: 'k8s_pod_start_time',
    value: '2023-05-22 02:06:42 +0000 UTC'
  },
  {
    action: '-',
    field: 'k8s_pod_uid',
    value: '49879dd7-0f66-4f10-96b2-c4e52abe698c'
  },
  {
    action: '-',
    field: 'log_file_path',
    value: '/var/log/pods/nextid_deploy-nextid-makers-idpapi-755c47bff8-7l6sg_49879dd7-0f66-4f10-96b2-c4e52abe698c/idp-api-test/0.log'
  },
  {
    action: '-',
    field: 'log_iostream',
    value: 'stdout'
  },
  {
    action: '-',
    field: 'logtag',
    value: 'F'
  },
  {
    action: '-',
    field: 'time',
    value: '2023-07-09T00:13:27.137965999+07:00'
  }]
};

const SearchingDefault: SearchingModel = {
  detail: DefaultDetailData,
  main: {
    data: [],
    total: 0
  }
};

const SearchingReducer = (
  state: SearchingModel = SearchingDefault,
  action: SearchingAction
): SearchingModel => {
  switch (action.type) {
    case SearchingActionType.GetMainData:
      return { ...state, main: action.data };
    case SearchingActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const SearchingCommand = {
  GetMainData: (): TAction<SearchingAction, void> => {
    return (dispatch: TDispatch<SearchingAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_SEARCHING_DATA,
            total: DUMMY_SEARCHING_DATA.length
          },
          type: SearchingActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<SearchingAction, void> => {
    return (dispatch: TDispatch<SearchingAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_DATA,
          type: SearchingActionType.GetDetailData
        });
      });
    };
  }
};

export { SearchingCommand, SearchingDefault, SearchingReducer };
