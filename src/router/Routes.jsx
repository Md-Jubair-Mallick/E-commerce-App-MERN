import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProductDetails from '../pages/ProductDetails'
import Protected from '../features/auth/components/Protected'

const router = createBrowserRouter([
    { path : '/', element : <Home />  },
    { path : '/cart', element : <Protected><Cart /></Protected> },
    { path : '/checkout', element : <Protected><Checkout /></Protected> },
    { path : '/login', element : <Login /> },
    { path : '/signup', element : <Signup /> },
    { path : '/product-details', element : <Protected><ProductDetails /></Protected> },
    { path : '*', element : <Error /> },
    // { path : '*', element : <Error /> },
    // { path : '*', element : <Error /> },
    // { path : '*', element : <Error /> },
])

export default function Routes() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
