import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PropertyFormContextProvider } from './context/PropertyFormContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PropertyFormContextProvider>
      <App />
    </PropertyFormContextProvider>
  </React.StrictMode>,
)
