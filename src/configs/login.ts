import { TButtonProps } from '../components/Button'
import { TInputProps } from '../components/Input'
import { IContainerConfig } from './container_types'

export const config: IContainerConfig<TInputProps | TButtonProps> = {
  container_name: 'Login Container',
  components: [
    {
      name: 'Input',
      props: {
        name: 'email',
        placeholder: 'Email',
        type: 'email'
      }
    },
    {
      name: 'Input',
      props: {
        name: 'password',
        placeholder: 'Password',
        type: 'password'
      }
    },
    {
      name: 'Button',
      props: {
        name: 'login',
        children: 'Login'
      }
    },
    {
      name: 'Button',
      props: {
        name: 'register',
        children: 'Register'
      }
    }
  ]
}
