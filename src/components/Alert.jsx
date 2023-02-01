import { Alert as AlertUI } from '@chakra-ui/react'
import useAlert from '../hooks/useAlert'

function Alert({ content = 'No content', status = 'success' }) {
  const alert = useAlert()

  const handleClose = () => {
    alert.hide()
  }

  return (
    <AlertUI
      position="fixed"
      boxShadow="md"
      w="sm"
      right={4}
      bottom={4}
      status={status}
      variant="solid"
      borderRadius={4}
      display="flex"
      justifyContent="space-between"
    >
      {content}
      <span onClick={handleClose}>X</span>
    </AlertUI>
  )
}

export default Alert
