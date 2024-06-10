import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='440401881821-ebfkaaab1c7i0iv21tu5s16ebhi1pg4u.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>
)
