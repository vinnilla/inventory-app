import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InventoryApp from './app/InventoryApp.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InventoryApp />
  </StrictMode>,
)
