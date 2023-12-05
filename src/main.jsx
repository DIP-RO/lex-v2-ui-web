import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import   './i18n'
import Loading from './Component/Loading/Loading'
import UserContext from './Context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContext>
    <Suspense fallback={Loading}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
  </UserContext>
)
