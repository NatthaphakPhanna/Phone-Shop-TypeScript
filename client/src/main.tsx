import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './Index.tsx'
import Phone from './pages/PhonePage.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />
  }, 
  {
    path: "/Phone",
    element: <Phone />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
) 
