import { TButton } from '../components/Button'
import { TInput } from '../components/Input'

export interface IComponent {
  name: string
  props: TInput | TButton
}

export interface ILoginContainer {
  container_name: string
  components: IComponent[]
}

export const config: ILoginContainer = {
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
        onClick: () => alert('Button Clicked'),
        children: 'Login'
      }
    }
  ]
}
