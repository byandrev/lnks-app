import { useLocation } from 'wouter'
import useAlert from '../../../hooks/useAlert'
import { signup as signupFetch } from '../../../services/auth'

function useSignUp({ email, username, password }) {
  const [location, setLocation] = useLocation()
  const alert = useAlert()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (!email || !password || !username) {
      alert.show('Invalid data', 'error')
      return
    }

    signupFetch(email, username, password).then((data) => {
      if (data.code === 401) {
        alert.show('Invalid data', 'error')
        return
      }

      setLocation('/login')
      alert.show('User created')
    })
  }

  return {
    handleSubmit,
  }
}

export default useSignUp
