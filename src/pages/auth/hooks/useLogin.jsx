import { useState } from 'react'
import { useLocation } from 'wouter'
import useUser from '../../../hooks/useUser'
import useAlert from '../../../hooks/useAlert'
import { login as loginFetch } from '../../../services/auth'

function useLogin({ email, password }) {
  const [location, setLocation] = useLocation()
  const [isDataValid, setIsDataValid] = useState(true)
  const alert = useAlert()

  const { login } = useUser()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (!email || !password) {
      setIsDataValid(false)
      alert.show('Invalid data', 'error')
      return
    }

    loginFetch(email, password).then((data) => {
      if (data.code === 401) {
        setIsDataValid(false)
        alert.show('Invalid data', 'error')
        return
      }

      setIsDataValid(true)
      login(data.access_token)
      setLocation('/')
      alert.show('Login success!')
    })
  }

  return {
    isDataValid,
    handleSubmit,
  }
}

export default useLogin
