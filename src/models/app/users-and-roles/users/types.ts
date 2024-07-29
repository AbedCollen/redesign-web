interface UsersDataModel {
  userName: string
  fullName: string
  loginSince: string
}

interface UsersModel {
  main: {
    data: UsersDataModel[]
    total: number
  }
}

enum UsersActionType {
  GetMainData = '⌘➝Users➝Main➝GetMainData'
}

interface UsersAction {
  data: {
    data: UsersDataModel[]
    total: number
  }
  type: UsersActionType.GetMainData
}

export { UsersActionType };
export type { UsersAction, UsersDataModel, UsersModel };
