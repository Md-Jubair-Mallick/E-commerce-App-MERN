import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProductDetails from '../pages/ProductDetails'
import UserProfile from '../features/user/components/UserProfile'

const router = createBrowserRouter([
    { path : '/', element : <Home />  },
    { path : '/cart', element :<><Cart /></> },
    { path : '/checkout', element : <><Checkout /></> },
    { path : '/login', element : <Login /> },
    { path : '/signup', element : <Signup /> },
    { path : '/product-details/:id', element : <><ProductDetails /></> },
    { path : '*', element : <Error /> },
    { path : '/profile', element : <UserProfile /> },
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
