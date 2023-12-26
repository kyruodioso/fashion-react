import React from 'react'
import ReactDOM from 'react-dom/client'
import Route from './routes'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>,
)
