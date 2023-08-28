import React from 'react'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from '../page/Home'
import Login from '../page/Login'
import Signup from '../page/Signup';
import Cart from '../features/carts/Cart';
import Error from '../page/Error';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
    
export default function Routes() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

