import { TButtonProps } from '../components/Button'
import { TInputProps } from '../components/Input'
import { TTextAreaProps } from '../components/TextArea'
import { IContainerConfig } from './container_types'

export const config: IContainerConfig<
  TInputProps | TTextAreaProps | TButtonProps
> = {
  container_name: 'CommentBox Container',
  components: [
    {
      name: 'Input',
      props: {
        placeholder: 'Name',
        type: 'text',
        onChange: e => console.log('Input username event', e)
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
