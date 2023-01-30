import { Route } from 'wouter'

import Home from '../pages/Home'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'

function App() {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </div>
  )
}

export default App
