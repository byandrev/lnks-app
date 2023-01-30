import { useLocation } from 'wouter'
import { signup as signupFetch } from '../../../services/auth'

function useSignUp({ email, username, password }) {
  const [location, setLocation] = useLocation()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (!email || !password || !username) {
      return
    }

    signupFetch(email, username, password).then((data) => {
      if (data.code === 401) {
        return
      }
      console.log(data)
      setLocation('/login')
    })
  }

  return {
    handleSubmit,
  }
}

export default useSignUp
