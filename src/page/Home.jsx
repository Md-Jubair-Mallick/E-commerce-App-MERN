import React from 'react'
import ProductList from '../features/products/ProductList'
import Navbar from '../features/components/Navbar/Navbar'
import Pagination from '../features/components/Pagination'

export default function Home() {
  return (
    <div>
      <Navbar>
        <ProductList>
          <Pagination />
        </ProductList>
      </Navbar>
    </div>
  )
}
