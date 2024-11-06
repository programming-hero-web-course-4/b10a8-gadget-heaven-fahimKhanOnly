import * as React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CategoryProduct from "./components/CategoryProduct/CategoryProduct";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from "./error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("products.json"),
      },
      {
        path: "/dashboard/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/product/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("products.json"),
      },
      {
        path: "/:category",
        element: <CategoryProduct></CategoryProduct>,
        loader: () => fetch("products.json"),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
        loader: () => fetch("products.json"),
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
        loader: () => fetch("products.json"),
      }
    ],
  }
])
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer/>
  </React.StrictMode>
)
