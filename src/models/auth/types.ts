export enum AuthActionType {
  UserLogin = '⌘➝Auth➝UserLogin',
  UserLogout = '⌘➝Auth➝UserLogout',
  UserToken = '⌘➝Auth➝UserToken'
}

export interface AuthModel {
  userData: unknown
  userToken: string
}

export type AuthAction = {
  data: Record<string, never>
  type: AuthActionType.UserLogout
} | {
  data: string
  type: AuthActionType.UserToken
} | {
  data: unknown
  type: AuthActionType.UserLogin
};
