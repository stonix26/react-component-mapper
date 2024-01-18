import React from 'react'
import * as COMPONENTS from '../components'
import ComponentMapper from '../ComponentMapper'
import { config as comment_box_config } from '../configs/comment-box'

const CommentBox: React.FC<typeof comment_box_config> = props => {
  const config_components = props.components
  return (
    <div>
      <h2>CommentBox</h2>
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

export default CommentBox
