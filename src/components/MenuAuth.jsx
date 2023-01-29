import { Button, ButtonGroup, Flex } from '@chakra-ui/react'
import useUser from '../hooks/useUser'
import { login as loginService } from '../services/auth'
import { Link } from 'wouter'

function MenuAuth() {
  const { user, logout } = useUser()

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
          <Button colorScheme="red" onClick={logout}>
            Logout
          </Button>
        </>
      )}
    </Flex>
  )
}

export default MenuAuth
