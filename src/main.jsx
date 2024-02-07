import ReactDOM from 'react-dom'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx';
import ProductPage from '../pages/ProductPage.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.css'
import ProductSection from './components/ProductSection.jsx';
import Featured from './components/Featured.jsx';
import Cart from '../pages/Cart.jsx';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Navbar />
      <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <>
          <ProductSection />
          <Featured />
          </>
        )
      },
      {
        path: "/product",
        element: <ProductPage />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
