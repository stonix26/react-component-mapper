import { LoginProvider } from './Provider'
import LoginView from './View'
import type { config } from '../../configs/login'

const Login: React.FC<typeof config> = props => {
  return (
    <LoginProvider>
      <LoginView {...props} />
    </LoginProvider>
  )
}

export default Login
