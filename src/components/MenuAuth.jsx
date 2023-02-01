import { Button, ButtonGroup, Flex } from '@chakra-ui/react'
import { Link } from 'wouter'
import useUser from '../hooks/useUser'
import useAlert from '../hooks/useAlert'
import LoginIcon from './LoginIcon'

function MenuAuth() {
  const { user, isLogged, logout } = useUser()
  const alert = useAlert()

  const handleLogout = () => {
    logout()
    alert.show('Logout success!', 'info')
  }

  return (
    <Flex>
      {!isLogged ? (
        <ButtonGroup gap={2}>
          <Button colorScheme="purple">
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button colorScheme="purple">
            <Link to="/login">Login</Link>
          </Button>
        </ButtonGroup>
      ) : (
        <LoginIcon handleLogout={handleLogout} />
      )}
    </Flex>
  )
}

export default MenuAuth
