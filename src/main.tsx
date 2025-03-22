import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NeonDrawingEffect from './animations/bgSetup'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NeonDrawingEffect />
  </StrictMode>,
)
