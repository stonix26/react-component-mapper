import Button from './components/Button'
import Input from './components/Input'
import { config } from './configs/login'
import Login from './containers/Login'

function App() {
  return (
    <div className=''>
      <Button>Test</Button>
      <Input />

      <Login {...config} />
    </div>
  )
}

export default App
