import React from "react";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ProductProvider } from "./contexts/ProductContext";

export default function App() {
  const Layout = () => {
    return (
      <ProductProvider>
        <Navbar />
        <Outlet />
      </ProductProvider>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
