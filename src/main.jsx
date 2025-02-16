import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import MainRoute from './MainRoute.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoute />
  </BrowserRouter>,
)
