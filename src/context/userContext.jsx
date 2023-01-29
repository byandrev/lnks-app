import { createContext, useState, useMemo } from 'react'

const UserContext = createContext()

function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const value = useMemo(() => {
    return {
      user,
      setUser,
      token,
      setToken,
    }
  }, [user, token])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider }
