interface StorageClassesDataModel {
    num: string 
    name: string
    provisioner: string
    reclaimPolicy: string
    volumeBindingMode: string
    created: string
    default: string
  }
  
  interface StorageClassesModel {
    main: {
      data: StorageClassesDataModel[]
      total: number
    }
  }
  
  enum StorageClassesActionType {
    GetMainData = '⌘➝StorageClasses➝Main➝GetMainData'
  }
  
  interface StorageClassesAction {
    data: {
      data: StorageClassesDataModel[]
      total: number
    }
    type: StorageClassesActionType.GetMainData
  }
  
  export { StorageClassesActionType };
  export type { StorageClassesDataModel, StorageClassesModel, StorageClassesAction };
  