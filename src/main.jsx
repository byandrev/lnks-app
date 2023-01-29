import TextReact from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from './context/userContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TextReact.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ChakraProvider>
  </TextReact.StrictMode>
)
