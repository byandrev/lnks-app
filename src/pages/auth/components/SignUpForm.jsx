import { Box, Button, Spacer, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Link as LinkRouter } from 'wouter'

import InputForm from './InputForm'
import useSignUp from '../hooks/useSignUp'

function SignUpForm() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { handleSubmit } = useSignUp({ email, username, password })

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value)
  }

  const handleChangeUsername = (evt) => {
    setUsername(evt.target.value)
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
        />

        <Spacer my={4} />

        <InputForm
          label="Username"
          type="text"
          value={username}
          setValue={handleChangeUsername}
        />

        <Spacer my={4} />

        <InputForm
          label="Password"
          type="password"
          value={password}
          setValue={handleChangePassword}
        />

        <Spacer my={4} />

        <Button w="100%" type="submit" colorScheme="purple">
          Submit
        </Button>

        <Text mt={4} fontSize="xs" color="gray.500">
          Have a account?
          <LinkRouter
            to="/login"
            style={{ paddingLeft: '4px', color: '#6B46C1' }}
          >
            Login
          </LinkRouter>
        </Text>
      </form>
    </Box>
  )
}

export default SignUpForm
