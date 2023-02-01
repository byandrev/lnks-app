import TextReact from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from './context/userContext'
import { AlertProvider } from './context/alertContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TextReact.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </UserProvider>
    </ChakraProvider>
  </TextReact.StrictMode>
)
