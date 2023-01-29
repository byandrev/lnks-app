import { Box, Container, Spacer, Spinner, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import { getLinks } from '../services/links'
import Header from './Header'
import LinkElement from './LinkElement'
import Search from './Search'

function App() {
  const { user, token } = useUser()
  const [links, setLinks] = useState(null)

  useEffect(() => {
    if (user) {
      fetchLinks()
    }

    async function fetchLinks() {
      const res = await getLinks(token)
      setLinks(res)
      console.log(res)
    }
  }, [user])

  return (
    <div>
      <Header />
      <Spacer m={4} />
      <Container maxW="6xl">
        <Search />
        <Spacer m={6} />
        <Stack gap={2}>
          {user ? (
            <>
              {links ? (
                links.map((link) => (
                  <LinkElement key={link.id} url={link.url} tags={link.tags} />
                ))
              ) : (
                <Spinner />
              )}
            </>
          ) : (
            <p>Not auth</p>
          )}
        </Stack>
      </Container>
    </div>
  )
}

export default App
