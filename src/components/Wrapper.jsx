import { Container } from '@chakra-ui/react'

function Wrapper({ children }) {
  return (
    <Container pt={16} maxW="6xl">
      {children}
    </Container>
  )
}

export default Wrapper
