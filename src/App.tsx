import { useMemo, useState } from 'react'
import { Select } from './components'
import { config as comment_box_config } from './configs/comment-box'
import { config as login_config } from './configs/login'
import CommentBox from './containers/CommentBox'
import Login from './containers/Login'

const template_list = [
  {
    id: '1',
    label: 'Login Template',
    value: 'login',
    template_component: <Login {...login_config} />
  },
  {
    id: '2',
    label: 'Comment Box Template',
    value: 'comment-box',
    template_component: <CommentBox {...comment_box_config} />
  }
]

function App() {
  const memoized_template_list = useMemo(() => template_list, [])
  const filtered_options = memoized_template_list.map(
    ({ id, label, value }) => ({
      id,
      label,
      value
    })
  )
  const [template, setTemplate] = useState(filtered_options[0].value)
  const template_title = filtered_options.find(
    value => value.value === template
  )

  const render_this_template = memoized_template_list.find(
    v => v.value === template
  )

  return (
    <div className='divide-x flex w-full h-screen bg-slate-100'>
      <div className='w-96'>
        <Select
          label='Select a template'
          value={template}
          onChange={e => setTemplate(e.target.value)}
          options={filtered_options}
        />
      </div>
      <div>
        <h2>{template_title?.label}</h2>
        {render_this_template?.template_component}
      </div>
    </div>
  )
}

export default App
