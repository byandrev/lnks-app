import { Box, Container, Flex, Heading, Spacer } from '@chakra-ui/react'

import MenuAuth from './MenuAuth'
import { Link } from 'wouter'

function Header() {
  return (
    <Box
      position="fixed"
      w="100%"
      top="0"
      left="0"
      py={2}
      borderBottom="1px"
      borderColor="gray.300"
      bgColor="#fff"
      shadow="xs"
    >
      <Container maxW="6xl">
        <Flex alignItems="center">
          <Heading size="md">
            <Link to="/">Lnks</Link>
          </Heading>
          <Spacer />
          <MenuAuth />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
