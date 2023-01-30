import { Box, Button, Spacer, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Link as LinkRouter } from 'wouter'

import InputForm from './InputForm'
import useLogin from '../hooks/useLogin'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { handleSubmit, isDataValid } = useLogin({ email, password })

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value)
  }

  const handleChangePassword = (evt) => {
    setPassword(evt.target.value)
  }

  return (
    <Box p={4} w="md" shadow="md" bg="white" borderRadius={6}>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Email"
          type="email"
          value={email}
          setValue={handleChangeEmail}
          isDataValid={isDataValid}
        />

        <Spacer my={4} />

        <InputForm
          label="Password"
          type="password"
          value={password}
          setValue={handleChangePassword}
          isDataValid={isDataValid}
        />

        <Spacer my={4} />

        <Button w="100%" type="submit" colorScheme="purple">
          Submit
        </Button>

        <Text mt={4} fontSize="xs" color="gray.500">
          No have acccount?
          <LinkRouter
            to="/signup"
            style={{ paddingLeft: '4px', color: '#6B46C1' }}
          >
            Sign Up
          </LinkRouter>
        </Text>
      </form>
    </Box>
  )
}

export default LoginForm
