import { Container } from '@chakra-ui/react'

function Wrapper({ children, ...args }) {
  return (
    <Container pt={20} maxW="6xl" {...args}>
      {children}
    </Container>
  )
}

export default Wrapper
