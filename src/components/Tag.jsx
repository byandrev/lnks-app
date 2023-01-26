import { Badge } from '@chakra-ui/react'

function Tag({ name }) {
  return (
    <Badge px={2} py={1} borderRadius={6}>
      {name}
    </Badge>
  )
}

export default Tag
