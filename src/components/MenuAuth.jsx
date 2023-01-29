import { Button, ButtonGroup, Flex } from '@chakra-ui/react'
import useUser from '../hooks/useUser'
import { login as loginService } from '../services/auth'

function MenuAuth() {
  const { user, login, logout } = useUser()

  const handleLogin = async () => {
    const token = await loginService('byandrev@gmail.com', '123')
    login(token.access_token)
  }

  return (
    <Flex>
      {!user ? (
        <ButtonGroup gap={2}>
          <Button colorScheme="telegram">Sign Up</Button>
          <Button colorScheme="telegram" onClick={handleLogin}>
            Login
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
