
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ChatProvider from './context/chatProvide.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChatProvider>
    <App />
  </ChatProvider>,
)
