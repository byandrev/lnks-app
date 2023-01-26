import TextReact from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TextReact.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </TextReact.StrictMode>
)
