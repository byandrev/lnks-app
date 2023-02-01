import { Button, ButtonGroup, Flex } from '@chakra-ui/react'
import { Link } from 'wouter'
import useUser from '../hooks/useUser'
import useAlert from '../hooks/useAlert'

function MenuAuth() {
  const { user, logout } = useUser()
  const alert = useAlert()

  const handleLogout = () => {
    logout()
    alert.show('Logout success!', 'info')
  }

  return (
    <Flex>
      {!user ? (
        <ButtonGroup gap={2}>
          <Button colorScheme="purple">
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button colorScheme="purple">
            <Link to="/login">Login</Link>
          </Button>
        </ButtonGroup>
      ) : (
        <>
          <p>Hello {user.username}</p>
          <Button colorScheme="red" onClick={handleLogout}>
            Logout
          </Button>
        </>
      )}
    </Flex>
  )
}

export default MenuAuth
