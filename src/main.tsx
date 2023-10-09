import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import AppWithRouter from './AppWithRouter'
import './index.css'
import ThemeProvider from './theme/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AppWithRouter />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
