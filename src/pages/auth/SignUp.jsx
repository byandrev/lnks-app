import { Flex } from '@chakra-ui/react'

import Header from '../../components/Header'
import SignUpForm from './components/SignUpForm'

function SignUp() {
  return (
    <>
      <Flex
        w="100%"
        minH="100vh"
        bgColor="gray.100"
        justifyContent="center"
        alignItems="center"
      >
        <Header />
        <SignUpForm />
      </Flex>
    </>
  )
}

export default SignUp
