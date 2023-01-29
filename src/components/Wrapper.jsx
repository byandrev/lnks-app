import { Container } from '@chakra-ui/react'

function Wrapper({ children }) {
  return <Container maxW="6xl">{children}</Container>
}

export default Wrapper
