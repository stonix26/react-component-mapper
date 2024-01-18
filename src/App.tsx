import { config as comment_box_config } from './configs/comment-box'
import { config as login_config } from './configs/login'
import CommentBox from './containers/CommentBox'
import Login from './containers/Login'

function App() {
  return (
    <div className=''>
      <Login {...login_config} />
      <CommentBox {...comment_box_config} />
    </div>
  )
}

export default App
