import { Box, Container, Spacer } from '@chakra-ui/react'
import Header from './Header'
import LinkElement from './LinkElement'
import Search from './Search'

function App() {
  return (
    <div>
      <Header />
      <Spacer m={4} />
      <Container maxW="6xl">
        <Search />
        <Spacer m={6} />
        <Box>
          <LinkElement url="https://www.google.com" tags={['internet', 'google']} />
        </Box>
      </Container>
    </div>
  )
}

export default App
