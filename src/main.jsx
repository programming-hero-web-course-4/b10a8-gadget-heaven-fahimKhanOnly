import * as React from "react";
import { createRoot } from 'react-dom/client'
import ErrorPage from './errorPage';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("products.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/products/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("products.json"),
      }
    ],
  }
])
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
