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
          components={COMPONENTS}
          componentName={c.name}
          componentProps={c.props}
        />
      ))}
    </div>
  )
}

export default Login
