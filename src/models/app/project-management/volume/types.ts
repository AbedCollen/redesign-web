interface VolumeDataModel {
  status: boolean
  claimName: string
  namespace: string
  size: string
  persistentVolume: string
  type: string
  reason: string
  message: string
  lastSeen: string
}

interface VolumeModel {
  main: {
    data: VolumeDataModel[]
    total: number
  }
}

enum VolumeActionType {
  GetMainData = '⌘➝Volume➝Main➝GetMainData'
}

interface VolumeAction {
  data: {
    data: VolumeDataModel[]
    total: number
  }
  type: VolumeActionType.GetMainData
}

export { VolumeActionType };
export type { VolumeDataModel, VolumeModel, VolumeAction };
