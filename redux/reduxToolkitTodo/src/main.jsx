import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // inside {}, we need to write the name of our store
  <Provider store={store}>
    <App />
  </Provider>,
)
