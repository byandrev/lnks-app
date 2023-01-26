import { Box, Container, Flex, Heading, Spacer } from '@chakra-ui/react'

import MenuAuth from './MenuAuth'

function Header() {
  return (
    <Box py={2} borderBottom="1px" borderColor="gray.300">
      <Container maxW="6xl">
        <Flex alignItems="center">
          <Heading size="md">Lnks</Heading>
          <Spacer />
          <MenuAuth />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
