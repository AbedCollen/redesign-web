interface PersistentVolumeDataModel {
  isState: boolean
  name: string
  persistentClaim: string
  source: string
}

interface PersistentVolumeModel {
  main: {
    data: PersistentVolumeDataModel[]
    total: number
  }
}

enum PersistentVolumeActionType {
  GetMainData = '⌘➝PersistentVolume➝Main➝GetMainData'
}

interface PersistentVolumeAction {
  data: {
    data: PersistentVolumeDataModel[]
    total: number
  }
  type: PersistentVolumeActionType.GetMainData
}

export { PersistentVolumeActionType };
export type { PersistentVolumeDataModel, PersistentVolumeModel, PersistentVolumeAction };
