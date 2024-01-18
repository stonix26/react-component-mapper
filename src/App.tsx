import { config } from './configs/login'
import Login from './containers/Login'

function App() {
  return (
    <div className=''>
      <Login {...config} />
    </div>
  )
}

export default App
