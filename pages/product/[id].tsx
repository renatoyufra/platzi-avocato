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
    <section>
      <h1>Página producto: {id}</h1>
      <h3>{product?.sku}</h3>
      <p>{product?.name}</p>
    </section>
  )
}

export default ProductPage
