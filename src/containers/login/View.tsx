import React, { useContext } from 'react'
import * as COMPONENTS from '../../components'
import ComponentMapper from '../../ComponentMapper'
import type { config as login_config } from '../../configs/login'
import { LoginContext } from './Provider'

const LoginView: React.FC<typeof login_config> = props => {
  const config_components = props.components
  const { state, actions } = useContext(LoginContext)

  return (
    <div>
      <h2>Login</h2>
      {config_components.map((c, i) => (
        <ComponentMapper
          key={i}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          components={COMPONENTS as Record<string, React.FC<any>>}
          componentName={c.name}
          componentProps={{
            ...c.props,
            value: state[c.props.name as 'email' | 'password'],
            onClick: () => {
              switch (c.props.name) {
                case 'login':
                  actions?.onHandleLogin()
                  break
                case 'register':
                  actions?.onHandleRegister()
                  break
                default:
                  break
              }
            },
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              actions?.onHandleChange(
                c.props.name as 'email' | 'password',
                e.target.value
              )
          }}
        />
      ))}
      <pre>
        <code lang='javascript'>{JSON.stringify(state, null, 2)}</code>
      </pre>
    </div>
  )
}

export default LoginView
