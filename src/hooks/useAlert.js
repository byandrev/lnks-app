import { useContext } from 'react'
import { AlertContext } from '../context/alertContext'

function useAlert() {
  const { setActive, setContent, setStatus } = useContext(AlertContext)

  const show = (content, status = 'success') => {
    setActive(true)
    setContent(content)
    setStatus(status)
  }

  const hide = () => {
    setActive(false)
  }

  return {
    show,
    hide
  }
}

export default useAlert
