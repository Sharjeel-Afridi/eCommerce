import ReactDOM from 'react-dom'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx';
import ProductPage from '../pages/ProductPage.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.css';
import Cart from '../pages/Cart.jsx';
import {Provider} from "react-redux";
import appStore from "../utility/appStore.js"



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={appStore}>
      <Navbar />
      <Outlet />
      </Provider>
    ),
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "/product/:id",
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
