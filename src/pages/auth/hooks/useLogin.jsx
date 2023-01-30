import { useState } from 'react'
import { useLocation } from 'wouter'
import useUser from '../../../hooks/useUser'
import { login as loginFetch } from '../../../services/auth'

function useLogin({ email, password }) {
  const [location, setLocation] = useLocation()
  const [isDataValid, setIsDataValid] = useState(true)

  const { login } = useUser()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (!email || !password) {
      setIsDataValid(false)
      return
    }

    loginFetch(email, password).then((data) => {
      if (data.code === 401) {
        setIsDataValid(false)
        return
      }

      setIsDataValid(true)
      login(data.access_token)
      setLocation('/')
    })
  }

  return {
    isDataValid,
    handleSubmit,
  }
}

export default useLogin
