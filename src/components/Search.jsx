import { Box, Button, Flex, Input } from '@chakra-ui/react'

function Search() {
  return (
    <Box>
      <Flex gap={2}>
        <Input
          color="gray"
          placeholder="Link name ..."
          _placeholder={{ color: 'inherit' }}
        />
        <Button>Search</Button>
      </Flex>
    </Box>
  )
}

export default Search
