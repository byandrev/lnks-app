import React from 'react'
import { Flex } from '@chakra-ui/react'

import LoginForm from './components/LoginForm'
import Header from '../../components/Header'

function Login() {
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
        <LoginForm />
      </Flex>
    </>
  )
}

export default Login
