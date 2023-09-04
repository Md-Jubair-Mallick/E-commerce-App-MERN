import React from 'react'
import Navbar from '../features/layout/Navbar'
import Pagination from '../features/layout/Pagination'
import ProductsList from '../features/product/components/ProductsList'
import Layout from '../features/layout/Layout'
export default function Home() {
  return (
    <div>
      <Navbar>
        <Layout >
          <Pagination />
          <p>json-server --watch data.json --port 8080</p>
        </Layout>
      </Navbar>
    </div>
  )
}
