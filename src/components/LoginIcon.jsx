import { Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'wouter'

function LoginIcon({ username, avatar = null, handleLogout }) {
  return (
    <Menu>
      <MenuButton>
        <Avatar
          size="sm"
          bg="gray.400"
          src={avatar}
          icon={<AiOutlineUser fontSize="1.5rem" />}
        />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link to="/profile">My profile</Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default LoginIcon
