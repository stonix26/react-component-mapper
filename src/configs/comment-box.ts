import { TButton } from '../components/Button'
import { TInput } from '../components/Input'
import { TTextArea } from '../components/TextArea'
import { IContainerConfig, IContainerComponent } from './container_types'

export const config: IContainerConfig<
  IContainerComponent<TInput | TTextArea | TButton>
> = {
  container_name: 'CommentBox Container',
  components: [
    {
      name: 'Input',
      props: {
        placeholder: 'Name',
        type: 'text',
        onChange: e => console.log('Input email event', e)
      }
    },
    {
      name: 'TextArea',
      props: {
        placeholder: 'Leave a comment here...',
        onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
          console.log('Change event for textbox', e)
      }
    },
    {
      name: 'Button',
      props: {
        onClick: () => alert('Submit Clicked'),
        children: 'Submit'
      }
    }
  ]
}
