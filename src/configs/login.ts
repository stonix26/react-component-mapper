import { TButtonProps } from '../components/Button'
import { TInputProps } from '../components/Input'
import { IContainerConfig } from './container_types'

export const config: IContainerConfig<TInputProps | TButtonProps> = {
  container_name: 'Login Container',
  components: [
    {
      name: 'Input',
      props: {
        placeholder: 'Email',
        type: 'email',
        onChange: e => console.log('Input email event', e)
      }
    },
    {
      name: 'Input',
      props: {
        placeholder: 'Password',
        type: 'password',
        onChange: e => console.log('Input password event', e)
      }
    },
    {
      name: 'Button',
      props: {
        onClick: () => alert('Login Clicked'),
        children: 'Login'
      }
    },
    {
      name: 'Button',
      props: {
        onClick: () => alert('Register Clicked'),
        children: 'Register'
      }
    }
  ]
}
