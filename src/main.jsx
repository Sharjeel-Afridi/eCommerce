import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx';
import ProductPage from '../pages/ProductPage.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.css'


function AppLayout() {
  return(
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/product",
        element: <ProductPage />
      }
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
