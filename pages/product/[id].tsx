import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    id &&
      window
        .fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data)
          console.log('data', data)
        })
  }, [id])

  return (
    <section className="my-4">
      <div className="w-5/6 md:w-3/6 mx-auto">
        <div className="flex flex-col md:flex-row items-center p-0 mb-4 md:mb-0 md:p-5">
          <img src={product?.image} alt={product?.name} />
          <div className="m-0 md:mx-5">
            <div className="flex flex-col space-y-1 justify-start">
              <h3 className="text-2xl font-semibold">{product?.name}</h3>
              <p>{product?.price}</p>
              <span className="py-1 w-28 text-center text-xs bg-gray-200 rounded-md text-gray-700">{`SKU ${product?.sku}`}</span>
            </div>
            <div className="flex my-4">
              <input
                type="number"
                placeholder="Cantidad"
                min="1"
                className="border-gray-400 w-full"
              />
              <button className="bg-green-500 text-white font-bold px-3 flex-none">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold leading-8 mb-2">
            About this avocado
          </h1>
          <p className="text-lg">{product?.attributes?.description}</p>
          <div className="border-t py-6 mt-3">
            <table className="min-w-full divide-y divide-gray-200 border">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    colSpan={2}
                    className="px-6 py-3 text-left tracking-wider font-medium "
                  >
                    Attributes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border">Shape</td>
                  <td className="px-6 py-4 whitespace-nowrap border">
                    {product?.attributes?.shape}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border">
                    Hardiness
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border">
                    {product?.attributes?.hardiness}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border">Taste</td>
                  <td className="px-6 py-4 whitespace-nowrap border">
                    {product?.attributes?.taste}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
