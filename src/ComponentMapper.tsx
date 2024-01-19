import { FC, RefAttributes } from 'react'

interface ComponentMapperProps<T extends object> {
  components: {
    [key: string]: FC<T & RefAttributes<HTMLElement>>
  }
  componentName: string
  componentProps: T
}

const ComponentMapper = <T extends object>({
  components,
  componentName,
  componentProps
}: ComponentMapperProps<T>) => {
  const ComponentToRender = components[componentName]

  if (ComponentToRender) {
    return <ComponentToRender {...componentProps} />
  } else {
    console.error(`Component '${componentName}' not found.`)
    return null
  }
}

export default ComponentMapper
