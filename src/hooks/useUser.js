import { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { getUser } from '../services/auth'

function useUser() {
  const { user, setUser, token, setToken } = useContext(UserContext)

  useEffect(() => {
    let isActive = true

    const tokenInLs = localStorage.getItem('token')
    if (tokenInLs !== null) {
      if (isActive) setToken(tokenInLs)
    }

    return () => {
      isActive = false
    }
  }, [])

  useEffect(() => {
    let isActive = true

    async function fetchUser() {
      const userResponse = await getUser(token)

      if (
        userResponse !== null &&
        userResponse.detail !== 'Could not validate credentials'
      ) {
        setUser(userResponse)
      } else {
        setUser(null)
      }
    }

    if (isActive && token !== null && token !== 'null') fetchUser()
    else setUser(null)

    return () => {
      isActive = false
    }
  }, [token])

  const login = (tokenParam) => {
    setToken(tokenParam)
    localStorage.setItem('token', tokenParam)
  }

  const logout = () => {
    setToken(null)
    localStorage.setItem('token', null)
  }

  return {
    user,
    isLogged: token !== null && token !== 'null',
    login,
    logout,
  }
}

export default useUser
