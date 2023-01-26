import { Box, Flex, Image, Link, Spacer } from '@chakra-ui/react'
import { useScrapper, ReactTinyLink } from 'react-tiny-link'
import Tag from './Tag'

function LinkElement({ url, tags }) {
  const [result, loading, error] = useScrapper({
    url,
  })

  return (
    <Box border="1px" borderColor="gray.200" borderRadius={6}>
      <Flex alignItems="center" gap={2}>
        <Box pt={4} pr={2} pb={4} pl={4}>
          {loading ? (
            <span>Loading...</span>
          ) : (
            <Image src={result.image[1]} maxW="80px" />
          )}
        </Box>
        <Box p={4}>
          <Link color="telegram.500">{url}</Link>
          <Spacer m={2} />
          <Flex gap={2}>
            {tags.map((el) => (
              <Tag key={el} name={el} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default LinkElement
