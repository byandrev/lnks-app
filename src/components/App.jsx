import { Route } from 'wouter'

import Home from '../pages/Home'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import NotAuth from '../pages/auth/NotAuth'
import useUser from '../hooks/useUser'
import Profile from '../pages/auth/Profile'

function App() {
  const { isLogged } = useUser()
  console.log(isLogged)

  const auth = (view) => {
    if (!isLogged) return NotAuth
    return view
  }

  return (
    <div>
      <Route path="/" component={auth(Home)} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/profile" component={auth(Profile)} />
    </div>
  )
}

export default App
