import { ReactNode, createContext, useState } from 'react'
import { ILoginActions, ILoginContext } from './types'

const initial_state: ILoginContext = {
  state: {
    email: '',
    password: ''
  }
}

export const LoginContext = createContext<ILoginContext>(initial_state)

export const LoginProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [loginState, setLoginState] = useState(initial_state.state)

  const state = {
    ...loginState
  }

  const onHandleChange: ILoginActions['onHandleChange'] = (key, value) =>
    setLoginState(prev => ({ ...prev, [key]: value }))

  const onHandleLogin: ILoginActions['onHandleLogin'] = () =>
    alert(JSON.stringify(loginState, null, 2))

  const onHandleRegister: ILoginActions['onHandleRegister'] = () =>
    alert('Register button clicked!')

  const actions = {
    onHandleChange,
    onHandleLogin,
    onHandleRegister
  }

  return (
    <LoginContext.Provider value={{ state, actions }}>
      {children}
    </LoginContext.Provider>
  )
}
