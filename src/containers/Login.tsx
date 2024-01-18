import React from 'react'
// import * as COMPONENTS from '../components'
import Button from '../components/Button'
import Input from '../components/Input'
import { config } from '../configs/login'

interface ComponentMapperProps<T> {
  componentName: string
  componentProps: T
}

const componentMapper: { [key: string]: React.FC } = {
  Button,
  Input
}

const DynamicComponent = <T extends object>({
  componentName,
  componentProps
}: ComponentMapperProps<T>) => {
  const ComponentToRender = componentMapper[componentName]

  if (ComponentToRender) {
    return <ComponentToRender {...componentProps} />
  } else {
    console.error(`Component '${componentName}' not found.`)
    return null
  }
}

const Login: React.FC<typeof config> = props => {
  const config_components = props.components
  return (
    <div>
      <h2>Login</h2>
      {config_components.map((component, index) => (
        <DynamicComponent
          key={index}
          componentName={component.name}
          componentProps={component.props}
        />
      ))}
    </div>
  )
}

export default Login
