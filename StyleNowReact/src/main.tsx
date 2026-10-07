import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/base.css'
import { App } from './App.tsx'
import { BrowserRouter, HashRouter, MemoryRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
