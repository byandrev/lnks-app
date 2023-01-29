import { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { getUser } from '../services/auth'

function useUser() {
  const { user, setUser, token, setToken } = useContext(UserContext)

  useEffect(() => {
    const tokenInLs = localStorage.getItem('token')
    if (tokenInLs !== null) {
      setToken(tokenInLs)
    }
  }, [])

  useEffect(() => {
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

    fetchUser()
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
    token,
    login,
    logout,
  }
}

export default useUser
