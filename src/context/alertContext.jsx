import { createContext, useState, useMemo, useEffect } from 'react'
import Alert from '../components/Alert'

const AlertContext = createContext()

function AlertProvider({ children }) {
  const [content, setContent] = useState('No content')
  const [active, setActive] = useState(false)
  const [status, setStatus] = useState('success')

  const value = useMemo(() => {
    return {
      content,
      setActive,
      setContent,
      setStatus,
    }
  }, [content, active])

  return (
    <AlertContext.Provider value={value}>
      {active && <Alert status={status} content={content} />}
      {children}
    </AlertContext.Provider>
  )
}

export { AlertContext, AlertProvider }
