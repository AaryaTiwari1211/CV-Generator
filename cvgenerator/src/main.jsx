import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppProvider from './components/context/AppProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider> {/* Wrap your App component with AppProvider */}
      <App />
    </AppProvider>
  </React.StrictMode>,
)
