import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './Index'
import Phone from './pages/PhonePage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />
  }, 
  {
    path: "/Phone",
    element: <Phone />
  },
  {
    path: "/SignUp",
    element: <SignUpPage />
  },
  {
    path: "/SignIn",
    element: <SignInPage />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
) 
