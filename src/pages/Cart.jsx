import React from 'react'
import Cart from '../features/cart/Cart'

export default function Carts() {
  return (
    <>
      <Cart link={'/checkout'} buttonValue={'Checkout'}/>
    </>
  )
}
