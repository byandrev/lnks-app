import { Stack, Spinner } from '@chakra-ui/react'

import LinkElement from './LinkElement'

function ListOfLinks({ links }) {
  return (
    <Stack gap={2}>
      {links ? (
        links.map((link) => (
          <LinkElement key={link.id} url={link.url} tags={link.tags} />
        ))
      ) : (
        <Spinner />
      )}
    </Stack>
  )
}

export default ListOfLinks
