interface AlertEventDataModel {
    title:string,
    date:string,
    time:string,
    status:string,
    namespace:string,
    description:string,
    condition:string
  }
  
  interface AlertEventModel {
    main: {
      data: AlertEventDataModel[]
      total: number
    }
  }
  
  enum AlertEventActionType {
    GetMainData = '⌘➝AlertEvent➝Main➝GetMainData'
  }
  
  interface AlertEventAction {
    data: {
      data: AlertEventDataModel[]
      total: number
    }
    type: AlertEventActionType.GetMainData
  }
  
  export { AlertEventActionType };
  export type { AlertEventDataModel, AlertEventModel, AlertEventAction };
  
