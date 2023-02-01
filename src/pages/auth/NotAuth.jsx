import { Heading, Flex, Image } from '@chakra-ui/react'
import Wrapper from '../../components/Wrapper'
import MenuAuth from '../../components/MenuAuth'

const GIF_URL =
  'https://media1.giphy.com/media/nR4L10XlJcSeQ/giphy.gif?cid=ecf05e47t2j6mbd7pf8i35140fxpx054d1xeoyrkkwuqulxa&rid=giphy.gif&ct=g'

function NotAuth() {
  return (
    <Wrapper p={0}>
      <Flex minH="100vh" direction="column" justify="center" align="center">
        <Heading mb={6}>No auth</Heading>
        <Image mb={6} src={GIF_URL} alt="gif cat" />
        <MenuAuth />
      </Flex>
    </Wrapper>
  )
}

export default NotAuth
