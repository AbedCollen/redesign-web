interface SearchingDataModel {
  index: number
  timestamp: string
  tenant: string
  body: SearchingBodyModel
  id: string
  trace_id: string
  span_id: string
  trace_flags: number
  severity_text: string
  severity_number: number
  k8s_cluster_name: string
  k8s_container_name: string
  k8s_container_restart_count: number
  k8s_deployment_name: string
  k8s_namespace_name: string
  k8s_node_name: string
  k8s_pod_name: string
  k8s_pod_start_time: string
  k8s_pod_uid: string
  log_file_path: string
  log_iostream: string
  logtag: string
  time: string
  detail: SearchingDetailModel[]
}

interface SearchingBodyModel {
  level: string
  time: string
  tenant: string
  service: string
  req_id: string
  method: string
  type: string
}

interface SearchingDetailModel {
  action: string
  field: string
  value: string
}

interface SearchingModel {
  detail: SearchingDataModel
  main: {
    data: SearchingDataModel[]
    total: number
  }
}

enum SearchingActionType {
  GetMainData = '⌘➝Searching➝Main➝GetMainData',
  GetDetailData = '⌘➝Searching➝Detail➝GetDetailData'
}

type SearchingAction = {
  data: {
    data: SearchingDataModel[]
    total: number
  }
  type: SearchingActionType.GetMainData
} | {
  data: SearchingDataModel
  type: SearchingActionType.GetDetailData
};

export { SearchingActionType };
export type { SearchingDataModel, SearchingModel, SearchingAction, SearchingBodyModel, SearchingDetailModel };
