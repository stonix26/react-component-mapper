import React from 'react'
import * as COMPONENTS from '../components'
import ComponentMapper from '../ComponentMapper'
import { config as login_config } from '../configs/login'

const Login: React.FC<typeof login_config> = props => {
  const config_components = props.components
  return (
    <div>
      <h2>Login</h2>
      {config_components.map((c, i) => (
        <ComponentMapper
          key={i}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          components={COMPONENTS as Record<string, React.FC<any>>}
          componentName={c.name}
          componentProps={c.props}
        />
      ))}
    </div>
  )
}

export default Login
