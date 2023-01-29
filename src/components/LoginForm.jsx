import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Text,
  Input,
  Spacer,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link as LinkRouter, useLocation } from 'wouter'

import { login as loginFetch } from '../services/auth'
import useUser from '../hooks/useUser'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isDataValid, setIsDataValid] = useState(false)
  const { login } = useUser()
  const [location, setLocation] = useLocation()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (!email || !password) {
      setIsDataValid(true)
      return
    }

    loginFetch(email, password).then((data) => {
      if (data.code === 401) {
        setIsDataValid(true)
        return
      }

      setIsDataValid(false)
      login(data.access_token)
      setLocation('/')
    })
  }

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value)
  }

  const handleChangePassword = (evt) => {
    setPassword(evt.target.value)
  }

  return (
    <Box p={4} w="md" shadow="md" bg="white" borderRadius={6}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            isInvalid={isDataValid}
            onChange={handleChangeEmail}
          />
        </FormControl>

        <Spacer my={4} />

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            isInvalid={isDataValid}
            onChange={handleChangePassword}
          />
        </FormControl>

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
