import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404.jsx'
import ProductPage from './pages/products.jsx'

const router = createBrowserRouter([  
  {
    path: '/',
    element: <h1>Home Page</h1>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: '/login',
    element:<LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage></RegisterPage>
  },
  {
    path: '/product',
    element: <ProductPage></ProductPage>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
