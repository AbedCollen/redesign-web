interface UserManagementDataModel {
  id: number
  name: string
  enabled: string
  capabilities: string
  detail: UserManagementDetailModel[]
}

interface UserManagementDetailModel {
  id: string
  issuedAt: string
  expiresAt: string
}

interface UserManagementModel {
  detail: UserManagementDataModel
  main: {
    data: UserManagementDataModel[]
    total: number
  }
}

enum UserManagementActionType {
  GetMainData = '⌘➝UserManagement➝Main➝GetMainData',
  GetDetailData = '⌘➝UserManagement➝Main➝GetDetailData'
}

type UserManagementAction = {
  data: {
    data: UserManagementDataModel[]
    total: number
  }
  type: UserManagementActionType.GetMainData
} | {
  data: UserManagementDataModel
  type: UserManagementActionType.GetDetailData
};

export { UserManagementActionType };
export type { UserManagementAction, UserManagementDataModel, UserManagementModel, UserManagementDetailModel };
