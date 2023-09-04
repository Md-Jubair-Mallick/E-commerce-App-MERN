import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsAsync } from '../productSlice';
import { Link } from 'react-router-dom'
export default function ProductsList() {
  const { products , isLoading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsAsync())
  }, [dispatch])

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            { isLoading && <h1>Loading....</h1> }
            { error && <h1>{error}</h1> }
            { products && products.map((product) => (
              <Link to={`/product-details/${product.id}`} key={product.id}>
              <div  className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
