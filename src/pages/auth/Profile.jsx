import { Heading, Spinner, Text } from '@chakra-ui/react'
import Header from '../../components/Header'
import Wrapper from '../../components/Wrapper'
import useUser from '../../hooks/useUser'

function Profile() {
  const { user } = useUser()

  if (!user) return <Spinner />

  return (
    <Wrapper>
      <Header />
      <Heading as="h2" size="md" mb={2}>
        @{user.username}
      </Heading>
      <Text>Email: {user.email}</Text>
    </Wrapper>
  )
}

export default Profile
