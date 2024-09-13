import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import NotFoundPage from './pages/404.jsx'
import DashboardPage from './pages/dashboard.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Product App</div>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/login',
    element: <LoginPage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/register',
    element: <RegisterPage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/dashboard',
    element: <DashboardPage/>,
    errorElement: <NotFoundPage/>
  },
])  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
