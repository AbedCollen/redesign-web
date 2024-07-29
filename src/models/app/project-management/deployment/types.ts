interface DeploymentDataModel {
  id: number
  containers: string
  createdDate: string
  isActive: boolean
  name: string
  namespace: string
  podsCreated: number
  restarts: number
  detail: DeploymentDetailDataModel
}

interface DeploymentDetailDataModel {
  namespace: string
  image: string
  workloadType: string
  created: string
  restart: string
  requireAll: string
  requireAny: string
  preferAny: string
  scheduler: string
  priority: string
  portName: string
  publish: string
  protocol: string
  asA: string
  onListening: string
  maxSurge: string
  maxUnavailable: string
  minimumReady: string
  progressDeadline: string
  podsTable: PodsTable[]
  autoRestart: string
  dnsPolicy: string
  useHost: string
  pullImage: string
}

interface PodsTable {
  id: number
  state: string
  name: string
  image: string
  nodes: string
  detail: PodsDetailDataModel
}

interface PodsDetailDataModel {
  namespace: string
  requireAll: string
  workload: string
  requireAny: string
  podIp: string
  preferAny: string
  node: string
  scheduler: string
  created: string
  priority: string
  dnsPolicy: string
  useHost: string
  containersTable: ContainersTable[]
  eventsTable: EventsTable[]
  statusTable: StatusTable[]
  labelsTable: LabelsTable[]
  annotationsTable: AnnotationsTable[]
}

interface ContainersTable {
  id: number
  state: string
  name: string
  image: string
  restart: string
  detail: ContainerDetailDataModel
}

interface ContainerDetailDataModel {
  namespace: string
  requireAll: string
  image: string
  requireAny: string
  workloadType: string
  preferAny: string
  created: string
  scheduler: string
  restarts: string
  priority: string
  portName: string
  maxSurge: string
  publishContainer: string
  maxUnavailable: string
  protocol: string
  minimumReady: string
  asA: string
  progressDeadline: string
  onListening: string
  autoRestart: string
  dnsPolicy: string
  useHost: string
  pullImage: string
  scaleTable: ScaleTable[]
  podsTable: PodsContainerTable[]
  labelsTable: LabelsTable[]
  annotationsTable: AnnotationsTable[]
  environmentTable: EnvironmentVariablesTable[]
  volumesTable: VolumesTable[]
}

interface EventsTable {
  id: number
  type: string
  reason: string
  message: string
  lastSeen: string
}

interface StatusTable {
  id: number
  type: string
  status: string
  lastUpdate: string
}

interface LabelsTable {
  id: number
  key: string
  value: string
}

interface AnnotationsTable {
  id: number
  key: string
  value: string
}

interface ScaleTable {
  id: number
  scale: number
  name: string
}

interface EnvironmentVariablesTable {
  id: number
  key: string
  value: string
}

interface VolumesTable {
  id: number
  name: string
  type: string
  mountPoint: string
  readonly: string
}

interface PodsContainerTable {
  id: number
  state: string
  name: string
  image: string
  nodes: string
}

interface DeploymentModel {
  detail: DeploymentDataModel

  main: {
    data: DeploymentDataModel[]
    total: number
  }
}

enum DeploymentActionType {
  GetMainData = '⌘➝Deployment➝Main➝GetMainData',
  GetDetailData = '⌘➝Deployment➝Main➝GetDetailData'
}

type DeploymentAction = {
  data: {
    data: DeploymentDataModel[]
    total: number
  }
  type: DeploymentActionType.GetMainData
} | {
  data: DeploymentDataModel
  type: DeploymentActionType.GetDetailData
};

export { DeploymentActionType };
export type { DeploymentDataModel, DeploymentModel, DeploymentDetailDataModel, DeploymentAction, PodsTable, PodsDetailDataModel, ContainersTable, ContainerDetailDataModel, EventsTable, StatusTable, LabelsTable, AnnotationsTable, ScaleTable, EnvironmentVariablesTable, VolumesTable, PodsContainerTable };
