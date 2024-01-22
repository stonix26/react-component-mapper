export interface ILoginActions {
  onHandleChange: (key: string, value: string) => void
  onHandleLogin: () => void
  onHandleRegister: () => void
}

export interface ILoginState {
  email: string
  password: string
}

export interface ILoginContext {
  state: ILoginState
  actions?: ILoginActions
}
