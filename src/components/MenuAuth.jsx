import { Button, ButtonGroup, Flex } from '@chakra-ui/react'

function MenuAuth() {
  return (
    <Flex>
      <ButtonGroup gap={2}>
        <Button colorScheme="telegram">Sign Up</Button>
        <Button colorScheme="telegram">Login</Button>
      </ButtonGroup>
    </Flex>
  )
}

export default MenuAuth
