import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import {store} from './redux/store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    {/* this is step 2 bcz we want to have maintain a state throughout the project so wrap this by provider */}
    </Provider>
  </StrictMode>,
)
